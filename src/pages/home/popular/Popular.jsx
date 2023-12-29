import React, { useState } from 'react'
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwithTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const Popular = () => {
     const [endpoint , setEndpoint]= useState("movie");

    const onTabChange=(tab)=>{
        setEndpoint(tab === "movie" ? "movie" : "tv");
    };
    const {data, loading} = useFetch(`/${endpoint}/popular`);

  return (
   
   <div className="carouselSection">
     <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTab  data={["movie","tv"]} onTabChange={onTabChange}>
        </SwitchTab>
        
   </ContentWrapper>
      <Carousel  data={data?.results}  loading={loading} />
   </div>
  
  )
}

export default Popular;
