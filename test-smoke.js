#!/usr/bin/env node

/**
 * Smoke Test Script
 * Verifies that all pages load successfully and have no critical errors
 */

const http = require('http');
const https = require('https');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const ROUTES = ['/', '/about', '/projects'];

const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // Check for React/Next.js errors in HTML
          if (data.includes('error') || data.includes('Error')) {
            // Be lenient about error text in content, focus on actual page load
            if (!data.includes('<main') && !data.includes('<div id="__next"')) {
              reject(new Error(`Page loaded but missing main content (status ${res.statusCode})`));
            }
          }
          resolve({ status: res.statusCode, headers: res.headers });
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
};

const runTests = async () => {
  console.log(`🧪 Starting smoke tests against: ${BASE_URL}\n`);
  
  let passCount = 0;
  let failCount = 0;

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route}`;
    try {
      const result = await makeRequest(url);
      console.log(`✅ ${route} (${result.status} OK)`);
      passCount++;
    } catch (err) {
      console.log(`❌ ${route} - ${err.message}`);
      failCount++;
    }
  }

  console.log(`\n📊 Results: ${passCount} passed, ${failCount} failed\n`);
  process.exit(failCount > 0 ? 1 : 0);
};

// Give server time to start if needed
setTimeout(runTests, 1000);
