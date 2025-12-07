#!/bin/bash

# Load Test Script for Biraul Academy
# Usage: ./load_test.sh
# Requires: Node.js (npx)

TARGET_URL="https://biraulacademy.onrender.com/"
CONNECTIONS=5000
DURATION=10

echo "🚀 Starting Load Test against $TARGET_URL"
echo "   - Concurrent Connections: $CONNECTIONS"
echo "   - Duration: $DURATION seconds"
echo "---------------------------------------------------"

# Run autocannon using npx (no global install needed)
npx autocannon -c $CONNECTIONS -d $DURATION $TARGET_URL

echo "---------------------------------------------------"
echo "✅ Load Test Complete."
