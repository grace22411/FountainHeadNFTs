import React from 'react'
import Marquee from "react-fast-marquee";
import {Images} from "./Data"

const MarqueeNft = () => {
    return (
        <>
            <Marquee gradientWidth='0' speed='50'>
           {Images.map((item) => {
             return(
               <>
                  <div style={{backgroundImage:`url(${item.pic})`}} className="images"></div>
               </>
             )
           })

           }
        </Marquee>
        </>
    )
}

export default MarqueeNft
