import {  useState } from "react"
import Captcha from "../components/Captcha";
import Header from "../components/Header";
import InfoAds from "../components/InfoAds";

export default function LinkAds({db}){
    const [isAds, setIsAds] = useState(false)
    const acotar = ()   =>{
        setIsAds(true);
    }
    function exit(){
        setIsAds(false);
    }

    return (
        <>
            <Header title={"Cutts.ga - "+ db} url="//ad.a-ads.com/2014498?size=728x90"/>
            <InfoAds isAds={isAds} acotar={acotar} exit={exit}/>
            <Captcha db={db}/>
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