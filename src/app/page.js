import TopNavbar from "@/components/TopNavbar";
import Header from "@/components/Header";
import Activity from "@/components/Activity";
import News from "@/components/News";
import Online from "@/components/Online";
import BottomNavbar from "@/components/BottomNavbar";

export default function Home() {
  return (
    <>
        <TopNavbar />
        <Header />
        <Activity />
        <News />
        <Online />
        
        <BottomNavbar />
    </>
  );
}
