import 'src/styles/globals.css';

interface Props {
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
