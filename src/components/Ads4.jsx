import adsJson from '../../public/ads.json';
import { useState } from 'react';
export default function Ads4(){
    const [timer, setTimer] = useState(10);
    const [adsIframe, setAdsIframe] = useState(adsJson[0]);
    const generateRandom = () => {
        const random = Math.floor(Math.random() * adsJson.length);
        setAdsIframe(adsJson[random]);
    }
    return(
        <>
            {
                timer>0?<iframe src={adsIframe} sandbox="allow-scripts allow-same-origin allow-forms" onLoad={
                    ()=>{
                        generateRandom();
                        setTimer(timer-1);
                    }
                } onAbort={
                    ()=>{
                        generateRandom();
                        setTimer(timer-1);
                    }
                }/>:<></>
            }
            <style jsx>{`
                iframe{
                    width: 100%;
                    height: 100%;
                    border: none;
                    position: fixed;
                    top: 0;
                    left: -110%;
                    z-index:9;
                }

            `}</style>

        </>
    )
}
