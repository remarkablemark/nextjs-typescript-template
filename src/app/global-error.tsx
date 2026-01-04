'use client';

/**
 * {@link https://nextjs.org/docs/app/getting-started/error-handling#global-errors}
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

export const runtime = 'edge';
