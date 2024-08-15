import About from "@/sections/About";
import Herobox from "@/sections/Herobox";
import Products from "@/sections/Products";
import Research from "@/sections/Research";
import Service from "@/sections/Service";

export default function Home() {
  return (
    <main>
      <Herobox />
      <About />
      <Service />
      <Products />
      <Research />
    </main>
  );
}
