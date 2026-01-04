/**
 * Next.js Edge API Routes
 *
 * {@link https://nextjs.org/docs/pages/building-your-application/routing/api-routes}
 */
export default function handler(request: Request) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
