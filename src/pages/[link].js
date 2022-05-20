import { useEffect, useRef, useState } from "react"
import Captcha from "../components/Captcha";
import Header from "../components/Header";
import InfoAds from "../components/InfoAds";

export default function LinkAds({db}){
    const [isAds, setIsAds] = useState(false)
    const adsRef = useRef() 
    useEffect(()=>{
        setIsAds(adsRef.current.offsetHeight === 0)
    },[])
    return (
        <>
            <div className="adsbox" style={{position:"fixed"}} ref={adsRef}>
                &nbsp;
            </div>
            <Header/>
            <InfoAds isAds={isAds}/>
            <Captcha db={db} isAds={isAds}/>
        </>
    )
}
export function getServerSideProps(url){
    const db = url.query.link;
    return{
        props:{
            db
        }
    }
}