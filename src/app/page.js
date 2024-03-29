import TasksSection from "@/components/OurComps/TasksSection";
import Sidebar from "@/components/OurComps/Sidebar";
import Topbar from "@/components/OurComps/Topbar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import ProjectSection from "@/components/OurComps/ProjectSection";
import DashboardLayout from "@/components/OurComps/DashboardLayout";
import NavMenuDemo from "@/components/OurComps/NavMenuDemo";






export default function Home() {
  return (
    // <main className="flex bg-muted overflow-scroll ">
    //   <Sidebar />
    //   <div className="flex flex-col flex-grow gap-2">
    //     <Topbar />
    //     <TasksSection/>
    //     <ProjectSection/>
    //     {/* Your content here */}
    //   </div>
    // </main>
    <main>
    {/* <DashboardLayout/> */}
    <NavMenuDemo/>
    </main>
  );
}
