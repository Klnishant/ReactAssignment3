//impoet necessary library
import { useEffect, useState } from "react";
import axios from 'axios';
import ViewImage from "../ImageComponent/image";
import './ImageList.css'

function ImageList() {
    let [offset,setoffset]=useState(0);// define use state for changing offset
    const [isLoading,setisLoading]=useState(true);
    const [url,seturl]=useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
    const [image,setimage]=useState({});// for store image data

    //define function for set url for next 20 images
    let nextUrl= ()=>{
        setoffset(offset+20);

        seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
    }

    // define function for set url for previous 20 images
    let prevUrl= ()=>{
        setoffset(offset-20);

        seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
    }

    async function downloadImage(){
        let result;
        // fetch data from api
        try {
            result= await axios.get(url)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        // extract image url from fetched data
        const Image=result.data.photos;
        console.log(Image);
        setimage(Image);
        setisLoading(false)
    }


    useEffect(()=>{
        downloadImage();
    },[url]);
    

    return(
        <>
            <div id="imageWrapper">
                <div id="mainImage">
                    {
                        (isLoading) ? 'loading.......' :
                        image.map((p)=><ViewImage image={p.url} title={p.title} id={p.id} key={p.id} />)
                    }
                </div>
                <div id="buttons">
                    <button disabled={offset<20} onClick={prevUrl}>prev</button>
                    <button disabled={offset>120} onClick={nextUrl}>next</button>
                </div>
            </div>
        </>
    )
}

export default ImageList;