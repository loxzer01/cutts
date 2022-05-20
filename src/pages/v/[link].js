import { useEffect, useRef, useState } from "react"
import Header from "../../components/Header";
import InfoAds from "../../components/InfoAds";

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
            <Header title={"Cutts.ga - "+ db}/>
            <InfoAds db={db} isAds={isAds}/>
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