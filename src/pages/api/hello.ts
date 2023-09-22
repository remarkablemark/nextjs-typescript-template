/**
 * Next.js Edge API Routes
 *
 * @see https://nextjs.org/docs/pages/building-your-application/routing/api-routes
 * @see https://blog.cloudflare.com/next-on-pages/
 */
import type { NextRequest } from 'next/server';

interface Data {
  name: string;
}

export default function handler(request: NextRequest) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const config = { runtime: 'edge' };
