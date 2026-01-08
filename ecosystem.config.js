module.exports = {
  apps: [
    {
      name: 'client8002',
      // Use node directly instead of npm to avoid wrapper script issues
      script: 'node_modules/.bin/nuxt',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '500M',
      // Explicit Node.js 20 path - IMPORTANT!
      interpreter: '/home/nikkisu1/nodevenv/nikkisuper.co.id/nikkiClient/20/bin/node',
      env: {
        NODE_ENV: 'production',
        PORT: 8002
      },
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};

