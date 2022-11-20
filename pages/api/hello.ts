// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes
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
