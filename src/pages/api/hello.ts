/**
 * Next.js Edge API Routes
 *
 * @see https://nextjs.org/docs/pages/building-your-application/routing/api-routes#edge-api-routes
 */
export default function handler(request: Request) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * @see https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#configure-the-application-to-use-the-edge-runtime
 */
export const runtime = 'edge';
