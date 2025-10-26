# Workflow Documentation

This document describes the workflow of the shell script provided in this project.

## Overview
# Git Workflow Documentation

## 1. Branching Strategy
- **main** → production-ready code
- **dev** → development & testing
- **feature/** → for individual new features

## 2. Workflow Steps
1. Clone the repository
2. Create a new feature branch from `dev`
3. Commit changes with meaningful messages
4. Push feature branch to remote
5. Open a Pull Request (PR)
6. Merge into `dev`, test, then merge `dev` → `main`
7. Create version tag after stable release

## 3. Commands Used
- `git checkout -b branch_name`
- `git add . && git commit -m "message"`
- `git push origin branch_name`
- `git tag -a v1.0 -m "message"`

The script demonstrates basic shell operations including:
- Timestamp generation
- Directory creation
- File operations
- System information gathering
- Cleanup procedures

## Workflow Steps

1. **Initialization**
   - Script begins execution
   - Displays welcome message

2. **Timestamp Creation**
   - Creates a timestamp in format: YYYY-MM-DD_HH-MM-SS
   - Used for unique backup directory naming

3. **Backup Operations**
   - Creates a backup directory with timestamp
   - Lists current directory contents
   - Saves listing to a file

4. **System Information**
   - Retrieves and displays:
     - Hostname
     - Current user
     - Current working directory

5. **Cleanup**
   - Removes temporary backup directory
   - Displays completion message

## Error Handling

The script includes basic error handling:
- Directory creation uses `-p` flag to prevent errors if directory exists
- Commands are sequentially executed with proper error checking

## Usage Examples

```bash
# Make script executable
chmod +x script.sh

# Run script
./script.sh

# Expected output
Welcome to the example script!
Current timestamp: 2025-10-27_10-30-00
Listing current directory contents...

System Information:
-------------------
Hostname: your-hostname
Current user: your-username
Current directory: /path/to/current/directory

Cleaning up...
Script completed successfully!
```