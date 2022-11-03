import { Poppins } from "@next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <title>ipko.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="h-screen transition-colors ease-in-out duration-300">
        <div className="flex flex-col h-full bg-slate-100 text-slate-900 dark:bg-stone-900 dark:text-slate-100">
          <div className="flex-initial">
            <NavBar />
          </div>
          <main className="px-16 flex-auto">{children}</main>
          <footer className="flex-initial">Footer</footer>
        </div>
      </body>
    </html>
  );
}
