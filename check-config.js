#!/usr/bin/env node

/**
 * Configuration Checker
 * 
 * This script checks if your .env.local file is properly configured
 * Run with: node check-config.js
 */

const fs = require('fs');
const path = require('path');

const ENV_FILE = path.join(__dirname, '.env.local');
const ENV_EXAMPLE = path.join(__dirname, '.env.example');

console.log('🔍 Checking environment configuration...\n');

// Check if .env.local exists
if (!fs.existsSync(ENV_FILE)) {
  console.log('❌ .env.local file not found!');
  console.log('📝 Please create it by copying .env.example:');
  console.log('   cp .env.example .env.local\n');
  process.exit(1);
}

console.log('✅ .env.local file exists\n');

// Read and parse .env.local
const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#][^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim();
    envVars[key] = value;
  }
});

// Required variables
const requiredVars = [
  'NEXT_PUBLIC_PHONE_NUMBER',
  'NEXT_PUBLIC_PHONE_DISPLAY',
  'NEXT_PUBLIC_EMAIL',
  'NEXT_PUBLIC_ADDRESS_LINE1',
  'NEXT_PUBLIC_ADDRESS_LINE2',
  'NEXT_PUBLIC_ADDRESS_FULL',
  'NEXT_PUBLIC_BUSINESS_NAME',
  'NEXT_PUBLIC_BUSINESS_TAGLINE',
];

// Optional variables
const optionalVars = [
  'NEXT_PUBLIC_HOURS_WEEKDAY',
  'NEXT_PUBLIC_HOURS_WEEKEND',
  'NEXT_PUBLIC_HOURS_EMERGENCY',
  'NEXT_PUBLIC_FACEBOOK_URL',
  'NEXT_PUBLIC_INSTAGRAM_URL',
  'NEXT_PUBLIC_MAP_EMBED_URL',
];

console.log('📋 Required Variables:\n');
let missingRequired = [];

requiredVars.forEach(varName => {
  const value = envVars[varName];
  if (!value || value === '') {
    console.log(`❌ ${varName}: NOT SET`);
    missingRequired.push(varName);
  } else {
    console.log(`✅ ${varName}: ${value.length > 50 ? value.substring(0, 47) + '...' : value}`);
  }
});

console.log('\n📋 Optional Variables:\n');

optionalVars.forEach(varName => {
  const value = envVars[varName];
  if (!value || value === '') {
    console.log(`⚪ ${varName}: Not set (using default)`);
  } else {
    console.log(`✅ ${varName}: ${value.length > 50 ? value.substring(0, 47) + '...' : value}`);
  }
});

console.log('\n' + '='.repeat(60) + '\n');

if (missingRequired.length > 0) {
  console.log('⚠️  WARNING: Some required variables are not set!');
  console.log('   The application will use default values for these.\n');
  console.log('   Missing variables:');
  missingRequired.forEach(v => console.log(`   - ${v}`));
  console.log('\n   Please update .env.local with your values.\n');
} else {
  console.log('🎉 All required variables are configured!\n');
  console.log('✨ Your contact information is ready to use.\n');
  console.log('💡 Remember to restart the dev server if it\'s running:\n');
  console.log('   npm run dev\n');
}

console.log('📚 For more help, check:');
console.log('   - QUICK_REFERENCE.md (Quick guide)');
console.log('   - ENV_SETUP.md (Detailed setup)');
console.log('   - IMPLEMENTATION_SUMMARY.md (Technical details)\n');
