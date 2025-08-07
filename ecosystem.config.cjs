module.exports = {
  apps: [
    {
      name: 'crce-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster', // Runs on multiple CPU cores
      instances: '4', // Uses all available CPU cores
      env_file: '.env.production', // Use this .env file
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
