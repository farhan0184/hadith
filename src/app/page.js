
import RightSide from "@/components/home/RightSide";
import TabSection from "@/components/home/TabSection";


export default function Home() {
  return (
    <div className="flex gap-5 p-5 h-full">
      <TabSection/>
      <RightSide/>
    </div>
  );
}
