import Providers from "@/libs/queryClient";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&family=Oswald:wght@300;500;700&family=Passion+One:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <title>Schedule</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
