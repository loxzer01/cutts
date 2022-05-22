import { useEffect, useState } from "react"
import Header from "../../components/Header";
import InfoAds from "../../components/InfoAds";
import Verify from "../../components/Verify";

export default function LinkAds({db}){
    const [url,setUrl] = useState('');
    const [isAds, setIsAds] = useState(false)
    const acotar = ()   =>{
        setIsAds(true);
    }
    function exit(){
        setIsAds(false);
    }
    useEffect(()=>{
        setUrl(window.atob(db));
    },[])
    return (
        <>
            <Header title={"Cutts.ga - "+ url}/>
            <InfoAds isAds={isAds} acotar={acotar} exit={exit}/>
            <Verify url={url}/>
        </>
    )
}
export function getServerSideProps(context){
    const db = context.query.link;
    return{
        props:{
            db
        }
    }
}