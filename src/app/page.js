import TasksSection from "@/components/OurComps/TasksSection";
import Topbar from "@/components/OurComps/Topbar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import ProjectSection from "@/components/OurComps/ProjectSection";
import DashboardLayout from "@/components/OurComps/DashboardLayout";
import Sidebar from "@/components/OurComps/Sidebar";
import ScheduleCard from "@/components/OurComps/ScheduleCard";

export default function Home() {
  return (
    // <main className="flex bg-muted overflow-y-scroll overflow-x-hidden h-screen">
    //   <Sidebar />
    //   <div className="flex flex-col flex-grow gap-2 ml-16">
    //     <Topbar />
    //     <div className="flex gap-2">
    //       <TasksSection />
    //       <ScheduleCard />
    //     </div>
    //     <ProjectSection />
    //     {/* Your content here */}
    //   </div>
    // </main>
    <main>
      <DashboardLayout />
    </main>
  );
}
