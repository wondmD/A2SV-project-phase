import type { Metadata } from "next";
import "./globals.css";
import Nav from './components/Nav'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication Tutoral",
  description: "this app is a test for next js tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >
      
      <div >
        {children}
      </div>

       </body>

    </html>
  );
}
