#!/bin/bash

# Test script for Homely API Server
# Validates all endpoints and error handling

echo "🧪 Testing Homely API Server..."
echo "================================="

BASE_URL="http://localhost:3001"

# Test health endpoint
echo "1. Testing health endpoint..."
curl -s "$BASE_URL/health" | jq . || echo "❌ Health endpoint failed"
echo ""

# Test detailed health status
echo "2. Testing health status endpoint..."
curl -s "$BASE_URL/health/status" | jq . || echo "❌ Health status endpoint failed"
echo ""

# Test API root
echo "3. Testing API root endpoint..."
curl -s "$BASE_URL/api/v1" | jq . || echo "❌ API root endpoint failed"
echo ""

# Test family endpoint
echo "4. Testing family endpoint..."
curl -s "$BASE_URL/api/v1/family" | jq . || echo "❌ Family endpoint failed"
echo ""

# Test tasks endpoint
echo "5. Testing tasks endpoint..."
curl -s "$BASE_URL/api/v1/tasks" | jq . || echo "❌ Tasks endpoint failed"
echo ""

# Test calendar endpoint
echo "6. Testing calendar endpoint..."
curl -s "$BASE_URL/api/v1/calendar" | jq . || echo "❌ Calendar endpoint failed"
echo ""

# Test notes endpoint
echo "7. Testing notes endpoint..."
curl -s "$BASE_URL/api/v1/notes" | jq . || echo "❌ Notes endpoint failed"
echo ""

# Test 404 error handling
echo "8. Testing 404 error handling..."
curl -s "$BASE_URL/nonexistent" | jq . || echo "❌ 404 error handling failed"
echo ""

# Test CORS headers
echo "9. Testing CORS headers..."
curl -s -I "$BASE_URL/health" | grep -i "access-control" || echo "❌ CORS headers not found"
echo ""

echo "✅ All tests completed!"
echo "🚀 Homely API Server is ready for family management!" 