import React from "react";
import HomeView from "@/views/HomeView";
import Slidebar from "@/components/sliderbar/slidebar";
import ProfileView from "@/views/ProfileView";


export const Home: React.FC = ()=>{


return(
  <div>
  <div className="mt-4 mb-8"> 
    <Slidebar />
  </div>
  <div>
    <HomeView />
    <ProfileView/>
  </div>
</div>
)



}


export default Home ;