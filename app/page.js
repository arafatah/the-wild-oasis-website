import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />

      <h1>The Blue Ridge. Welcome to your home.</h1>

      <Link href="/cabins">Explore the cabins</Link>
    </div>
  );
}
