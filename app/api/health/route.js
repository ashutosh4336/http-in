import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/app/utils/timing';

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health check
 *     description: Check if the server is running
 *     responses:
 *       200:
 *         description: Health check response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: pong
 *                 timestamp:
 *                   type: string
 *                   example: 2024-03-14T12:34:56.789Z
 *                 timeTaken:
 *                   type: string
 *                   example: 1.23ms
 *                 uptime:
 *                   type: string
 *                   example: 3600s
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 *                 environment:
 *                   type: string
 *                   example: development
 */
export async function GET(request) {
  const timing = getTimingInfo(true);

  return NextResponse.json({
    success: true,
    message: 'Health check',
    ...timing.getMetrics(),
  });
}
