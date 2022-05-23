import adsJson from '../../public/ads.json';
import { useEffect, useState } from 'react';
export default function Ads4(){
    const [active, setActive] = useState(false);
    const [active2,setActive2] = useState(false);
    const [adsIframe, setAdsIframe] = useState(adsJson[0]);
    const generateRandom = () => {
        const random = Math.floor(Math.random() * adsJson.length);
        setAdsIframe(adsJson[random]);
    }
    useEffect(()=>{
        generateRandom();
    },[])
    return(
        <>
            {
                active?active2?<></> :<iframe src={adsIframe} sandbox="allow-scripts allow-same-origin allow-forms" onLoad={()=>{
                    setTimeout(()=>setActive2(true),500);
                }}/>:<iframe src={adsIframe} sandbox="allow-scripts allow-same-origin allow-forms" onLoad={()=>{
                    generateRandom();
                    setTimeout(()=>setActive(true),500);
                }}/>
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
