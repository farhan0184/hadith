'use client'
// import RightSide from "@/components/home/RightSide";
// import TabSection from "@/components/home/TabSection";
// import { getApiAction } from "@/redux/action/apiAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const router = useRouter()
  // const dispatch = useDispatch()
  // const { data } = useSelector((state) => state.api)
  
  // useEffect(() => {
  //   dispatch(getApiAction())
  // }, [dispatch])

  useEffect(() => {
     router.push('/bukhara/1')
  }, [])
  
  return (
    <div className="flex gap-5 p-5 h-full">
      {/* <TabSection />
      <RightSide /> */}
      {/* <p>Home</p> */}
    </div>
  );
}
