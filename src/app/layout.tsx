// additional import
import { Providers } from "@/provider";

// other code in the file ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <Providers>{children}</Providers>
        </body>
    </html>
  );
}