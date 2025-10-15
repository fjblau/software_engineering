#!/usr/bin/env python3
"""
Week 1: Python Interactive Practice & Environment Verification
Run this file to verify your environment and complete interactive exercises
"""

import sys
import platform
import json
import os
from datetime import datetime

def pause():
    """Wait for user to press Enter"""
    input('\nPress Enter to continue...')

def main():
    print('=== Python Environment Verification & Practice ===\n')

    # Check 1: Python Installation
    print('Check 1: Python Installation')
    print('----------------------------')
    print(f'Python version: {sys.version}')
    print(f'Python version info: {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}')
    print(f'Platform: {platform.system()}')

    if sys.version_info.major >= 3 and sys.version_info.minor >= 10:
        print('✓ Python version is sufficient (3.10+)')
    else:
        print('⚠️  Python version may be outdated. Recommended: 3.10+')
    
    print()
    pause()
    print()

    # Get student information
    print('Student Information')
    print('-------------------')
    student_name = input('Enter your name: ')
    age = input('Enter your age: ')

    print(f'\n✓ Welcome, {student_name}!')
    print(f'  Age: {age}')
    print(f'  Ready to learn Python: True')
    
    print()
    pause()
    print()

    # Check 2: Basic Python Features
    print('Check 2: Python Features')
    print('------------------------')

    # Variables
    is_bootcamp_student = True
    print('✓ Variables working (assignment)')
    print(f'  Student: {student_name}, Age: {age}, Enrolled: {is_bootcamp_student}')

    # Lists
    skills = ['HTML', 'CSS', 'JavaScript', 'Python']
    print(f'✓ Lists working: {skills}')

    # Dictionaries
    developer = {
        'name': student_name,
        'cohort': 'Feb 2025',
        'languages': ['JavaScript', 'Python'],
        'ready': True
    }
    print(f'✓ Dictionaries working: {developer}')

    # Functions
    def greet(name):
        return f'Hello, {name}! Welcome to the bootcamp!'
    
    print(f'✓ Functions working: {greet(student_name)}')

    # Lambda
    add = lambda a, b: a + b
    print(f'✓ Lambda functions working: {add(5, 3)} = 8')

    # F-strings
    message = f'You are learning {", ".join(skills)}'
    print(f'✓ F-strings working: {message}')

    print()
    pause()
    print()

    # Exercise 1: List Practice
    print('=== Exercise 1: List Methods Practice ===')
    print('We have this list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]')
    print()

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    # Even numbers
    even_numbers = [n for n in numbers if n % 2 == 0]
    print('Using list comprehension to get even numbers:', even_numbers)

    # Doubled
    doubled = [n * 2 for n in numbers]
    print('Doubling all numbers:', doubled)

    # Challenge
    print('\n🏋️ Challenge: Create a list of squares of odd numbers')
    print('Expected: [1, 9, 25, 49, 81]')
    print('Try it in your head or on paper first!')
    pause()

    odd_squares = [n**2 for n in numbers if n % 2 != 0]
    print(f'Solution: {odd_squares}')

    print()
    pause()
    print()

    # Check 3: Built-in Functions
    print('Check 3: Built-in Functions')
    print('---------------------------')

    # Map
    doubled_map = list(map(lambda x: x * 2, numbers))
    print(f'✓ map() working: {doubled_map[:5]}...')

    # Filter
    evens_filter = list(filter(lambda x: x % 2 == 0, numbers))
    print(f'✓ filter() working: {evens_filter}')

    # Reduce
    from functools import reduce
    sum_reduce = reduce(lambda acc, curr: acc + curr, numbers, 0)
    print(f'✓ reduce() working: {sum_reduce}')

    # Python shortcuts
    print(f'✓ sum() working: {sum(numbers)}')
    print(f'✓ min() working: {min(numbers)}')
    print(f'✓ max() working: {max(numbers)}')
    print(f'✓ len() working: {len(numbers)}')

    print()
    pause()
    print()

    # Exercise 2: Write a Function
    print('=== Exercise 2: Write a Function ===')
    print('Task: Write a function to calculate average of a list')
    print('Test array: [10, 20, 30, 40, 50]')
    print('Expected result: 30')
    print()

    show_hint = input('Need a hint? (y/n): ')
    if show_hint.lower() == 'y':
        print('\nHint: sum(numbers) / len(numbers)')
    
    print('\nHere\'s the solution:\n')
    
    def calculate_average(numbers):
        return sum(numbers) / len(numbers)

    print('def calculate_average(numbers):')
    print('    return sum(numbers) / len(numbers)')
    print()

    test_numbers = [10, 20, 30, 40, 50]
    result = calculate_average(test_numbers)
    print(f'Testing with: {test_numbers}')
    print(f'Result: {result}')
    print(f'Expected: 30')
    
    if result == 30:
        print('✓ Function works correctly!')
    else:
        print('✗ Something went wrong')

    print()
    pause()
    print()

    # Check 4: File I/O
    print('Check 4: File Operations')
    print('------------------------')

    content = f'''Python Practice File
Created by: {student_name}
Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Skills learned:
'''
    
    for i, skill in enumerate(skills, 1):
        content += f'{i}. {skill}\n'

    # Write file
    with open('python_practice.txt', 'w') as f:
        f.write(content)
    print('✓ File write successful')

    # Read file
    with open('python_practice.txt', 'r') as f:
        file_content = f.read()
    print('✓ File read successful')
    print('\nFile contents:')
    print(file_content)

    # Keep or delete
    keep = input('\nKeep this file? (y/n): ')
    if keep.lower() != 'y':
        os.remove('python_practice.txt')
        print('✓ File deleted')
    else:
        print('✓ File kept: python_practice.txt')

    print()
    pause()
    print()

    # Check 5: JSON Handling
    print('Check 5: JSON Handling')
    print('----------------------')

    profile = {
        'name': student_name,
        'age': int(age) if age.isdigit() else age,
        'skills': skills,
        'enrolledDate': datetime.now().isoformat(),
        'completed': ['Environment Setup', 'Git Basics']
    }

    json_string = json.dumps(profile, indent=2)
    print('✓ json.dumps() working')
    print('\nYour profile as JSON:')
    print(json_string)

    parsed = json.loads(json_string)
    print('\n✓ json.loads() working')
    print(f'Parsed name: {parsed["name"]}')

    print()
    pause()
    print()

    # Exercise 3: Dictionaries
    print('=== Exercise 3: Dictionary Practice ===')
    print('Create a dictionary representing a book')
    print()

    title = input('Book title: ')
    author = input('Author: ')
    year = input('Year: ')
    pages = input('Number of pages: ')

    book = {
        'title': title,
        'author': author,
        'year': int(year) if year.isdigit() else year,
        'pages': int(pages) if pages.isdigit() else pages
    }

    print('\n✓ Created book dictionary:')
    for key, value in book.items():
        print(f'  {key}: {value}')

    def get_book_info(book):
        return f"{book['title']} by {book['author']} ({book['year']}) - {book['pages']} pages"

    print('\n✓ Book info:', get_book_info(book))

    print()
    pause()
    print()

    # Check 6: Error Handling
    print('Check 6: Error Handling')
    print('-----------------------')

    try:
        print('Attempting to divide by zero...')
        result = 10 / 0
    except ZeroDivisionError as e:
        print(f'✓ Caught ZeroDivisionError: {e}')
    except Exception as e:
        print(f'✓ Caught general exception: {e}')
    finally:
        print('✓ Finally block executed')

    print('\nProgram continues after error!')

    print()
    pause()
    print()

    # Check 7: Classes
    print('Check 7: Classes (OOP)')
    print('----------------------')

    class Developer:
        def __init__(self, name, language):
            self.name = name
            self.language = language
            self.projects = []
        
        def introduce(self):
            return f"Hi, I'm {self.name} and I code in {self.language}"
        
        def add_project(self, project):
            self.projects.append(project)
            return f"Added project: {project}"

    dev = Developer(student_name, 'Python')
    print('✓ Class instance created')
    print(f'  {dev.introduce()}')
    print(f'  {dev.add_project("Week 1 Portfolio")}')
    print(f'  Projects: {dev.projects}')

    print()
    pause()
    print()

    # Exercise 4: List Comprehensions Challenge
    print('=== Exercise 4: List Comprehensions Challenge ===')
    print('Given: numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]')
    print()

    # Challenge 1
    print('Challenge 1: Get squares of all numbers')
    squares = [n**2 for n in numbers]
    print(f'Solution: {squares}')

    # Challenge 2
    print('\nChallenge 2: Get numbers divisible by 3')
    div_by_3 = [n for n in numbers if n % 3 == 0]
    print(f'Solution: {div_by_3}')

    # Challenge 3
    print('\nChallenge 3: Get even numbers, double them, convert to strings')
    print('Expected: ["4", "8", "12", "16", "20"]')
    complex_result = [str(n * 2) for n in numbers if n % 2 == 0]
    print(f'Solution: {complex_result}')

    expected = ["4", "8", "12", "16", "20"]
    if complex_result == expected:
        print('✓ Perfect! You understand list comprehensions!')
    else:
        print('Keep practicing!')

    print()
    pause()
    print()

    # Check 8: Essential Packages
    print('Check 8: Essential Packages')
    print('----------------------------')

    packages_to_check = [
        'os', 'sys', 'json', 'datetime', 
        'random', 'math', 'collections'
    ]

    for package in packages_to_check:
        try:
            __import__(package)
            print(f'✓ {package} available')
        except ImportError:
            print(f'✗ {package} not available')

    print()
    pause()
    print()

    # Final Summary
    print()
    print('=== Practice Complete! ===')
    print()
    print('📊 What you practiced:')
    print('  ✓ Variables and data types')
    print('  ✓ Lists and list comprehensions')
    print('  ✓ Dictionaries')
    print('  ✓ Functions and lambdas')
    print('  ✓ File operations')
    print('  ✓ JSON handling')
    print('  ✓ Error handling')
    print('  ✓ Classes (OOP)')
    print('  ✓ Built-in functions')
    print()

    # Save results
    save = input('Save your practice results to JSON? (y/n): ')
    if save.lower() == 'y':
        results = {
            'student': student_name,
            'date': datetime.now().isoformat(),
            'completed_exercises': [
                'List Methods',
                'Functions',
                'Dictionaries',
                'List Comprehensions'
            ],
            'profile': profile,
            'book': book
        }
        
        with open('practice_results.json', 'w') as f:
            json.dump(results, f, indent=2)
        print('✓ Saved to practice_results.json')

    print('\n🎉 Your Python environment is ready!')
    print('\n📝 Next Steps:')
    print('  1. Create a virtual environment: python -m venv venv')
    print('  2. Activate it: source venv/bin/activate (Mac/Linux)')
    print('  3. Install a package: pip install requests')
    print('  4. Create your first real project!')
    print('  5. Add to Git and commit')
    print('\n💡 Keep practicing - you\'re doing great!')
    print()
    print('Python vs JavaScript Quick Reference:')
    print('  Arrays → Lists: skills.append() vs skills.push()')
    print('  Objects → Dicts: person["name"] vs person.name')
    print('  .map() → [n*2 for n in numbers]')
    print('  Template literals → f-strings')

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('\n\nExiting... Goodbye!')
    except Exception as e:
        print(f'\nError: {e}')
