'use client'
import RightSide from "@/components/home/RightSide";
import TabSection from "@/components/home/TabSection";
import { getApiAction } from "@/redux/action/apiAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getApiAction())
  }, [dispatch])
  return (
    <div className="flex gap-5 p-5 h-full">
      <TabSection />
      <RightSide />
    </div>
  );
}
