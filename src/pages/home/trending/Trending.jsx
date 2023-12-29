import React, { useState } from 'react'
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwithTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const Trending = () => {
     const [endpoint , setEndpoint]= useState("day");

    const onTabChange=(tab)=>{
        setEndpoint(tab === "Day" ? "day" : "week");
    };
    const {data, loading} = useFetch(`/trending/all/${endpoint}`);

  return (
   
   <div className="carouselSection">
     <ContentWrapper>
        <span className="carouselTitle">trending</span>
        <SwitchTab  data={["Day","Week"]} onTabChange={onTabChange}>
        </SwitchTab>
        
   </ContentWrapper>
      <Carousel  data={data?.results} loading={loading}/>
   </div>
  
  )
}

export default Trending;
