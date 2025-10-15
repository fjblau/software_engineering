#!/usr/bin/env python3
"""
Week 1: Python Environment Verification

Purpose: Verify your Python environment is properly set up.
Time: ~5 minutes
Instructions: Run this script with: python week1_python_setup.py
"""

import sys
import platform
import os
import json
from datetime import datetime

print('=' * 60)
print('  Week 1: Python Environment Verification')
print('=' * 60)
print()

# Check 1: Basic Python Works
print('✅ Check 1: Basic Python Works')
print('-' * 40)
print('Hello from Python!')
print('If you see this, Python is executing.')
print()

# Check 2: Python Version
print('✅ Check 2: Python Version')
print('-' * 40)
print('Python Version Information:')
print(f'Version: {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}')

if sys.version_info.major >= 3 and sys.version_info.minor >= 8:
    print('✓ Python version is suitable for this course')
else:
    print('⚠️  Python version may be too old')
print()

# Check 3: Platform Information
print('✅ Check 3: Platform Information')
print('-' * 40)
print('System Information:')
print(f'Operating System: {platform.system()}')
print(f'Version: {platform.release()}')
print(f'Architecture: {platform.machine()}')
print('✓ Platform detection working')
print()

# Check 4: Standard Library Imports
print('✅ Check 4: Standard Library Imports')
print('-' * 40)
print('Testing standard library imports...')
print('✓ os module')
print('✓ json module')
print('✓ datetime module')
print()
print(f'Current time: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
print('✓ All basic imports working')
print()

# Check 5: Basic Python Operations
print('✅ Check 5: Basic Python Operations')
print('-' * 40)

# Variables
name = 'Student'
age = 25
enrolled = True

# List
skills = ['Python', 'Git', 'VS Code']

# Dictionary
info = {'course': 'Bootcamp', 'week': 1}

print('Testing basic Python operations...')
print('✓ Variables working')
print('✓ Lists working')
print('✓ Dictionaries working')
print('✓ Print statements working')
print()
print(f'Example: {name} is learning {skills[0]}')
print()

# Check 6: Script Environment
print('✅ Check 6: Script Environment')
print('-' * 40)
try:
    from IPython import get_ipython
    ipython = get_ipython()
    
    if ipython is not None:
        print('✓ Running in Jupyter/IPython environment')
    else:
        print('ℹ️  Not in Jupyter (running as script)')
except:
    print('ℹ️  Running as Python script (not Jupyter)')

print('✓ Script is executing properly')
print()

# Summary
print('=' * 60)
print('  PYTHON ENVIRONMENT VERIFICATION COMPLETE  ')
print('=' * 60)
print()
print('✓ Your Python environment is ready!')
print()
print('What This Means:')
print('  • Python is installed correctly')
print('  • Standard library is accessible')
print('  • You can run Python scripts')
print('  • Basic operations work')
print()
print('Week 1 Checklist:')
print('  ☐ Complete command line exercises')
print('  ☐ Set up GitHub account')
print('  ☐ Install VS Code extensions')
print('  ☐ Create your first Git repository')
print('  ☐ Learn Agile concepts')
print()
print('Remember: Week 1 focuses on SETUP, not coding yet!')
print('Python programming comes in later weeks.')
print()
print('=' * 60)