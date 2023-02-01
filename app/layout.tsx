export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <h1>Gitcodehub Todo App</h1>
        {children}
      </body>
    </html>
  );
}
