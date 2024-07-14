import Header from "@/components/custom-components/header";
import MainPanel from "@/components/custom-components/panel";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={cn("flex flex-col min-h-screen bg-[#1c1c21]", space_grotesk.className)}>
      <Header />
      <MainPanel/>
    </main>
  );
}
