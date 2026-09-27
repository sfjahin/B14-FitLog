import Image from "next/image";
import Nav from "../../Nav";
import Banner from "./components/Banner";
import LibraryCards from "./components/LibraryCards";

export default function Home() {
  return (
    <div>
      <Banner />
      <LibraryCards/>
    </div>
  );
}
