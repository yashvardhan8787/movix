import React from 'react'
import "./style.scss";
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideoSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/recommendation';
const Details = () => {

const {mediaType , id}  = useParams();
const {data, loading}=useFetch(`/${mediaType}/${id}/videos`);
const {data: credits, loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`);

  return (
   
      <>
      <DetailsBanner 
       videos={data?.results?.[0]}
         crew={credits?.crew}>

      </DetailsBanner>
      <Cast  data={credits?.cast} loading={creditsLoading}>
         </Cast>
         <VideoSection data={data}  loading={loading}></VideoSection>
         <Similar mediaType={mediaType} id={id}></Similar>
         <Recommendation mediaType={mediaType} id={id} ></Recommendation>
      </>
   
   
   
    

  )
}

export default Details
