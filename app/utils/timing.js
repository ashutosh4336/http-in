import os from 'os';

export function getTimingInfo(includeUptime = false) {
  // Get start time of request
  const startTime = process.hrtime();

  // Get current timestamp
  const timestamp = new Date().toISOString();

  // Get system uptime in seconds
  const uptime = os.uptime();

  return {
    getMetrics: () => {
      // Calculate time taken in milliseconds
      const hrtime = process.hrtime(startTime);
      const timeTaken = (hrtime[0] * 1000 + hrtime[1] / 1000000).toFixed(2);

      return {
        timestamp,
        timeTaken: `${timeTaken}ms`,
        ...(includeUptime && { uptime: `${uptime}s` }),
      };
    },
  };
}
