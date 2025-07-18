import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid"
import { FaCodeBranch } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Work",
              link: "#work",
              icon: <FaCodeBranch />,
            },
            {
              name: "Work",
              link: "#work",
              icon: <FaCodeBranch />,
            },
          ]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
