import Head from "next/head"
import Image from "next/image"
import header from "../styles/Header.module.css"
import Acortador from "./Acortador"
import Ads1 from "./Ads1"
import { useState } from "react";
import Ads4 from "./Ads4"
const Header = ({title})=>{
    const [isAcotar, setIsAcotar] = useState(false);
    const acotar = ()   =>{
        setIsAcotar(true);
    }
    function exit(){
        setIsAcotar(false);
    }
    return (
        <>
            <Ads4/>
            <Head>
                <meta name="propeller" content="a1d93045563729a7427e25e03b2ba12e"/>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className={header.header}>
                <a href="/"><Image src="/logo.svg" alt="logo" className={header.logo} width={180} height={100}/></a>
                <button className={header.button} onClick={acotar}>Acorta tu link</button>
            </header>
            <Ads1/>
            <script src="/ads_notificacion.js"></script>
            <script src="//stootsou.net/ntfc.php?p=5102344"></script>

            {
                isAcotar?<Acortador exit={exit}/>:null
            }
        </>
    )
}
export default Header