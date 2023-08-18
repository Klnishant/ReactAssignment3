import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ImageDetails.css'
import Gallery from "../Gallery/Gallery";

function ImageDetails(){
    const {id}= useParams();
    const [details,setdetails]=useState({});

    async function downloadDetail(){
        const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response.data);
        setdetails(
            {
                description:response.data.photo.description,
                title:response.data.photo.title,
                image:response.data.photo.url,
            }
        )
       
    }

    useEffect(()=>{
        downloadDetail();
    },[]);

    return(
        <>
            <Gallery />
            <div id="mainBody">
                <div id="container">
                    
                    <div id="SingleImage"><img src={details.image} alt="" id="largeImage"/></div>
                    <div id="description">
                        <div id="title">{details.title}</div>
                        <div id="des">{details.description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDetails;