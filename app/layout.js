import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | The Blue Ridge",
    default: "Welcome | The Blue Ridge",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountain and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by The Blue Ridge</footer>
      </body>
    </html>
  );
}
