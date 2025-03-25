import React from "react";
import HomeView from "@/views/HomeView";
import Slidebar from "@/components/sliderbar/slidebar";


export const Page: React.FC = () => {
  return (
    <div>
      <div className="mt-4 mb-8"> 
        <Slidebar />
      </div>
      <div>
        <HomeView />
      </div>
    </div>
  );
};