#!/usr/bin/env node

const spawn = require('child_process').spawn;
const url = require('url');

let args = process.argv.slice(2);

// convert any url looking args to hosts

args = args.map(arg => {
  let parsed = url.parse(arg);
  return parsed.host === null ? arg : parsed.host;
});

// run ping

const ping = spawn('ping', args, {
  stdio: 'inherit'
});

ping.on('close', code => {
  process.exit(code);
});
