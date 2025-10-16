"""
Week 14: InfluxDB Time-Series Database & Polyglot Persistence Examples
=======================================================================

InfluxDB:
- Time-series database for metrics and monitoring
- Optimized for write-heavy, time-stamped data
- Aggregation and downsampling
- Real-time alerting

Polyglot Persistence:
- Using multiple database types in single application
- Data synchronization strategies
- When to use each database type

Prerequisites: InfluxDB running
Install: pip install influxdb-client pymongo redis neo4j
"""

from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS, ASYNCHRONOUS
from datetime import datetime, timedelta
import json
import time
from typing import List, Dict, Any, Optional
from dataclasses import dataclass
from enum import Enum


# ============================================================================
# INFLUXDB - TIME-SERIES DATABASE
# ============================================================================

class InfluxDBConnector:
    """Connect to InfluxDB and manage time-series data"""

    def __init__(self, url: str = "http://localhost:8086", 
                 token: str = "my-token",
                 org: str = "my-org",
                 bucket: str = "my-bucket"):
        self.client = InfluxDBClient(
            url=url,
            token=token,
            org=org,
            debug=False
        )
        self.org = org
        self.bucket = bucket
        self.write_api = self.client.write_api(write_precision=WritePrecision.S)
        self.query_api = self.client.query_api()

    async def close(self):
        """Close connection"""
        await self.client.close()


# ============================================================================
# INFLUXDB: WRITING TIME-SERIES DATA
# ============================================================================

class SensorDataCollector:
    """Collect and write IoT sensor data"""

    def __init__(self, influx: InfluxDBConnector):
        self.influx = influx

    def write_sensor_reading(self, sensor_id: str, temperature: float, 
                            humidity: float, pressure: float):
        """Write a single sensor reading"""
        point = Point("environment_metrics") \
            .tag("sensor_id", sensor_id) \
            .tag("location", "warehouse_a") \
            .field("temperature", temperature) \
            .field("humidity", humidity) \
            .field("pressure", pressure) \
            .time(datetime.utcnow(), WritePrecision.S)

        self.influx.write_api.write(
            bucket=self.influx.bucket,
            record=point
        )

    def write_batch_readings(self, readings: List[Dict[str, Any]]):
        """Write multiple sensor readings efficiently"""
        points = []
        for reading in readings:
            point = Point("environment_metrics") \
                .tag("sensor_id", reading['sensor_id']) \
                .tag("location", reading.get('location', 'unknown')) \
                .field("temperature", reading['temperature']) \
                .field("humidity", reading['humidity']) \
                .field("pressure", reading['pressure']) \
                .time(reading.get('timestamp', datetime.utcnow()), WritePrecision.S)
            points.append(point)

        self.influx.write_api.write(
            bucket=self.influx.bucket,
            records=points
        )

    def write_application_metrics(self, app_name: str, metrics: Dict[str, float]):
        """Write application performance metrics"""
        points = []
        for metric_name, value in metrics.items():
            point = Point("app_metrics") \
                .tag("app", app_name) \
                .tag("environment", "production") \
                .field(metric_name, value) \
                .time(datetime.utcnow(), WritePrecision.S)
            points.append(point)

        self.influx.write_api.write(
            bucket=self.influx.bucket,
            records=points
        )

    def write_event(self, event_type: str, source: str, details: Dict[str, Any]):
        """Write discrete events"""
        point = Point("events") \
            .tag("type", event_type) \
            .tag("source", source) \
            .field("value", 1)  # Use numeric value for counting

        # Add dynamic fields
        for key, value in details.items():
            if isinstance(value, (int, float)):
                point.field(f"detail_{key}", value)

        self.influx.write_api.write(
            bucket=self.influx.bucket,
            record=point
        )


# ============================================================================
# INFLUXDB: QUERYING WITH FLUX
# ============================================================================

class SensorDataAnalysis:
    """Query and analyze time-series data"""

    def __init__(self, influx: InfluxDBConnector):
        self.influx = influx

    def get_recent_readings(self, sensor_id: str, hours: int = 1) -> List[Dict]:
        """Get recent sensor readings"""
        query = f'''
        from(bucket: "{self.influx.bucket}")
        |> range(start: -{hours}h)
        |> filter(fn: (r) => r["sensor_id"] == "{sensor_id}")
        |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
        '''

        result = self.influx.query_api.query(org=self.influx.org, query=query)

        readings = []
        for table in result:
            for record in table.records:
                readings.append({
                    'timestamp': record.get_time(),
                    'field': record.get_field(),
                    'value': record.get_value(),
                    'tags': record.values.get('tags', {})
                })

        return readings

    def get_statistics(self, hours: int = 24) -> Dict[str, Any]:
        """Calculate statistics over time period"""
        query = f'''
        from(bucket: "{self.influx.bucket}")
        |> range(start: -{hours}h)
        |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
        |> group(columns: ["sensor_id"])
        |> reduce(
            identity: {{
                mean: 0.0,
                max: -999.0,
                min: 999.0,
                count: 0
            }},
            fn: (r, accumulator) => ({{
                mean: (accumulator.mean * accumulator.count + float(v: r["_value"])) / (accumulator.count + 1),
                max: if r["_value"] > accumulator.max then r["_value"] else accumulator.max,
                min: if r["_value"] < accumulator.min then r["_value"] else accumulator.min,
                count: accumulator.count + 1
            }})
        )
        '''

        result = self.influx.query_api.query(org=self.influx.org, query=query)

        stats = {}
        for table in result:
            for record in table.records:
                sensor_id = record.values.get('sensor_id')
                stats[sensor_id] = record.get_value()

        return stats

    def get_aggregated_data(self, aggregation: str = "30m") -> List[Dict]:
        """Get aggregated data at specified intervals"""
        query = f'''
        from(bucket: "{self.influx.bucket}")
        |> range(start: -24h)
        |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
        |> aggregateWindow(every: {aggregation}, fn: mean)
        |> sort(columns: ["_time"])
        '''

        result = self.influx.query_api.query(org=self.influx.org, query=query)

        data = []
        for table in result:
            for record in table.records:
                data.append({
                    'timestamp': record.get_time(),
                    'value': record.get_value(),
                    'field': record.get_field()
                })

        return data

    def detect_anomalies(self, threshold_std: float = 2.0) -> List[Dict]:
        """Detect anomalies using statistical methods"""
        query = f'''
        from(bucket: "{self.influx.bucket}")
        |> range(start: -24h)
        |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
        |> group(columns: ["_field", "sensor_id"])
        |> map(fn: (r) => ({{
            r with
            mean: mean(r._value),
            stdDev: stdDev(r._value)
        }}))
        |> map(fn: (r) => ({{
            r with
            deviation: abs(r._value - r.mean) / r.stdDev
        }}))
        |> filter(fn: (r) => r.deviation > {threshold_std})
        '''

        result = self.influx.query_api.query(org=self.influx.org, query=query)

        anomalies = []
        for table in result:
            for record in table.records:
                anomalies.append({
                    'timestamp': record.get_time(),
                    'value': record.get_value(),
                    'deviation': record.values.get('deviation')
                })

        return anomalies


# ============================================================================
# INFLUXDB: DOWNSAMPLING AND RETENTION
# ============================================================================

class DataRetentionManager:
    """Manage data retention and downsampling"""

    def __init__(self, influx: InfluxDBConnector):
        self.influx = influx

    def create_retention_policy(self, duration: str = "30d"):
        """Create retention policy to automatically delete old data"""
        # Note: Retention is configured at bucket level in InfluxDB 2.0+
        # This is a conceptual example
        pass

    def create_downsampled_bucket(self, source_bucket: str, 
                                  target_bucket: str,
                                  interval: str = "1h"):
        """Create downsampled data for long-term storage"""
        query = f'''
        from(bucket: "{source_bucket}")
        |> range(start: -7d)
        |> aggregateWindow(every: {interval}, fn: mean)
        '''

        result = self.influx.query_api.query(org=self.influx.org, query=query)

        # Write aggregated data to target bucket
        write_api = self.influx.client.write_api(write_precision=WritePrecision.S)
        for table in result:
            for record in table.records:
                point = Point(record.get_measurement()) \
                    .field(record.get_field(), record.get_value()) \
                    .time(record.get_time())

                write_api.write(bucket=target_bucket, record=point)

    def setup_continuous_downsampling(self):
        """Setup continuous downsampling task"""
        # This would typically be set up in InfluxDB UI or via tasks API
        pass


# ============================================================================
# POLYGLOT PERSISTENCE - MULTI-DATABASE ARCHITECTURE
# ============================================================================

@dataclass
class DatabaseConfig:
    """Configuration for different databases"""
    postgresql_url: str
    mongodb_uri: str
    redis_url: str
    neo4j_uri: str
    influxdb_url: str
    influxdb_token: str


class PolyglotPersistenceManager:
    """
    Manage data across multiple database types:
    - PostgreSQL: User accounts, orders (ACID transactions)
    - MongoDB: Product catalog, flexible schemas
    - Redis: Cache, sessions, real-time data
    - Neo4j: Product recommendations, relationships
    - InfluxDB: User activity metrics, product views
    """

    def __init__(self, config: DatabaseConfig):
        self.config = config
        # Initialize all database connections
        # (Implementation depends on specific drivers)
        pass

    def user_login(self, user_id: str, email: str):
        """
        Handle user login across databases:
        1. Verify credentials in PostgreSQL
        2. Create session in Redis
        3. Log activity in InfluxDB
        4. Update Neo4j activity graph
        """
        # 1. Verify in PostgreSQL (ACID transaction)
        # user = postgres.query("SELECT * FROM users WHERE id = ?", user_id)

        # 2. Create Redis session (fast, expiring)
        # session_id = redis.create_session(user_id)

        # 3. Record metric in InfluxDB (time-series)
        # influxdb.write_event("user_login", user_id, {"success": True})

        # 4. Update Neo4j graph (relationships)
        # neo4j.execute("MATCH (u:User {id: ?}) SET u.lastLogin = timestamp()")

        pass

    def product_search(self, query: str):
        """
        Product search across databases:
        1. Check Redis cache first
        2. Query MongoDB for catalog
        3. Use Neo4j for recommendations
        4. Record search in InfluxDB
        """
        # 1. Try cache
        # cached = redis.get(f"search:{query}")
        # if cached: return cached

        # 2. Query MongoDB
        # products = mongodb.find("products", {"$text": {"$search": query}})

        # 3. Add Neo4j recommendations
        # recommendations = neo4j.get_recommendations(products)

        # 4. Record metric
        # influxdb.write_event("search", "product_search", {"query": query})

        pass

    def place_order(self, user_id: str, items: List[Dict[str, Any]]):
        """
        Place order with multi-database consistency:
        1. PostgreSQL transaction for order
        2. MongoDB update inventory
        3. Redis cache invalidation
        4. Neo4j update purchase graph
        5. InfluxDB record purchase metric
        """
        pass

    def sync_databases(self):
        """
        Synchronize data between databases
        Handle eventual consistency issues
        """
        pass


# ============================================================================
# REAL-WORLD EXAMPLE: IoT SENSOR NETWORK
# ============================================================================

class IoTSensorNetwork:
    """
    Complete IoT monitoring system using polyglot persistence:
    - PostgreSQL: Device registry, user accounts
    - MongoDB: Device configurations, flexible metadata
    - Redis: Real-time sensor cache, alerts
    - InfluxDB: Sensor readings (billions of data points)
    - Neo4j: Device relationships, network topology
    """

    def __init__(self, influx: InfluxDBConnector):
        self.influx = influx
        self.collector = SensorDataCollector(influx)
        self.analyzer = SensorDataAnalysis(influx)

    def ingest_sensor_data(self, device_id: str, readings: Dict[str, float]):
        """Ingest sensor data from IoT devices"""
        self.collector.write_sensor_reading(
            sensor_id=device_id,
            temperature=readings['temperature'],
            humidity=readings['humidity'],
            pressure=readings['pressure']
        )

    def get_device_statistics(self, device_id: str, hours: int = 24) -> Dict:
        """Get device statistics"""
        recent = self.analyzer.get_recent_readings(device_id, hours)
        stats = self.analyzer.get_statistics(hours)
        anomalies = self.analyzer.detect_anomalies()

        return {
            'recent_readings': recent,
            'statistics': stats,
            'anomalies': anomalies
        }

    def alert_on_anomaly(self, device_id: str, threshold_std: float = 2.0):
        """Alert when anomalies detected"""
        anomalies = self.analyzer.detect_anomalies(threshold_std)
        
        for anomaly in anomalies:
            if anomaly.get('sensor_id') == device_id:
                # Trigger alert
                print(f"ALERT: Anomaly detected on device {device_id}")
                self.collector.write_event(
                    "alert",
                    device_id,
                    {"type": "anomaly", "deviation": anomaly['deviation']}
                )


# ============================================================================
# REAL-WORLD EXAMPLE: E-COMMERCE RECOMMENDATION ENGINE
# ============================================================================

class ECommerceRecommendationEngine:
    """
    E-commerce system with polyglot persistence:
    
    Database Selection Rationale:
    - PostgreSQL: Orders, inventory (strong consistency needed)
    - MongoDB: Product catalog (flexible, frequently updated)
    - Redis: Shopping carts, recommendations cache
    - Neo4j: Product relationships, "customers who viewed X also viewed Y"
    - InfluxDB: Product views, sales metrics (time-series)
    """

    def __init__(self, config: DatabaseConfig):
        self.config = config

    def get_recommendations_for_user(self, user_id: str) -> List[Dict]:
        """
        Get personalized recommendations:
        
        Algorithm:
        1. Query Redis cache (fast)
        2. If miss, query Neo4j for collaborative filtering
        3. Get product details from MongoDB
        4. Store back in Redis
        5. Log view metrics in InfluxDB
        """
        cache_key = f"recommendations:{user_id}"

        # 1. Check Redis cache
        # cached = redis.get(cache_key)
        # if cached: return json.loads(cached)

        # 2. Query Neo4j for similar users' purchases
        # similar_users = neo4j.query("""
        #   MATCH (you:User {id: $user_id})-[:VIEWED]->(p:Product)
        #   <-[:VIEWED]-(other:User)
        #   WHERE you <> other
        #   WITH other, count(p) as similarity
        #   MATCH (other)-[:BOUGHT]->(recommended:Product)
        #   WHERE NOT (you)-[:BOUGHT]->(recommended)
        #   RETURN recommended
        #   ORDER BY similarity DESC
        #   LIMIT 10
        # """, user_id=user_id)

        # 3. Get product details from MongoDB
        # product_ids = [p['id'] for p in similar_users]
        # products = mongodb.find("products", {"_id": {"$in": product_ids}})

        # 4. Cache results
        # redis.setex(cache_key, 3600, json.dumps(products))

        # 5. Log metric
        # influxdb.write_event("recommendation_generated", "engine", 
        #                      {"user_id": user_id, "count": len(products)})

        return []


# ============================================================================
# CONSISTENCY PATTERNS
# ============================================================================

class ConsistencyManager:
    """Manage consistency across multiple databases"""

    @staticmethod
    def strong_consistency():
        """
        Strong Consistency Pattern:
        - Use transactions where possible
        - PostgreSQL for critical data
        - Synchronous writes
        - Penalty: Lower performance
        """
        pass

    @staticmethod
    def eventual_consistency():
        """
        Eventual Consistency Pattern:
        - Redis cache writes first (fast)
        - PostgreSQL updates asynchronously
        - Event queue for async writes
        - Benefit: High performance
        - Risk: Temporary inconsistency
        """
        pass

    @staticmethod
    def saga_pattern():
        """
        Saga Pattern for distributed transactions:
        - Order: PostgreSQL write
        - If successful: Redis cache update
        - If successful: MongoDB inventory update
        - If successful: InfluxDB metric
        - If any fail: Rollback previous steps
        """
        pass


# ============================================================================
# BEST PRACTICES
# ============================================================================

"""
INFLUXDB BEST PRACTICES:

1. Data Modeling:
   - Use tags for indexed attributes (sensor_id, location)
   - Use fields for numeric measurements
   - Keep tag cardinality reasonable (< 10M combinations)
   
2. Write Optimization:
   - Batch writes for better performance
   - Use async writes for high-volume data
   - Consider downsampling for long-term storage
   
3. Query Optimization:
   - Always use time range predicates
   - Filter by tags (indexed) early
   - Use appropriate aggregation windows
   
4. Retention:
   - Set retention policies to manage storage
   - Use downsampling for historical data
   - Archive old data if needed

POLYGLOT PERSISTENCE BEST PRACTICES:

1. Database Selection:
   - Choose based on access patterns
   - Consider consistency vs performance tradeoffs
   - Document decisions in ADRs (Architecture Decision Records)
   
2. Data Synchronization:
   - Use event-driven architecture
   - Implement eventual consistency where possible
   - Use distributed transactions carefully
   
3. Backup Strategy:
   - Each database has different backup needs
   - Test recovery procedures
   - Consider cross-database consistency in backups
   
4. Monitoring:
   - Monitor each database separately
   - Alert on consistency issues
   - Track performance across databases
   
5. Testing:
   - Test failure scenarios
   - Verify consistency guarantees
   - Load test each database type
"""

if __name__ == "__main__":
    # Example usage
    config = DatabaseConfig(
        postgresql_url="postgresql://localhost/myapp",
        mongodb_uri="mongodb://localhost:27017",
        redis_url="redis://localhost:6379",
        neo4j_uri="bolt://localhost:7687",
        influxdb_url="http://localhost:8086",
        influxdb_token="my-token"
    )

    # Initialize IoT system
    influx = InfluxDBConnector()
    iot = IoTSensorNetwork(influx)

    # Simulate sensor readings
    readings = {
        'temperature': 22.5,
        'humidity': 65.0,
        'pressure': 1013.25
    }
    iot.ingest_sensor_data("sensor_001", readings)
    print("Sensor data ingested")