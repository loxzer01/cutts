import Head from "next/head"
import Image from "next/image"
import header from "../styles/Header.module.css"
import Acortador from "./Acortador"
const Header = ({title})=>{
    const acotar = ()   =>{
    }
    return (
        <>
            <Head>
                <meta name="propeller" content="a1d93045563729a7427e25e03b2ba12e"/>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className={header.header}>
                <Image src="/logo.svg" alt="logo" className={header.logo} width={180} height={100}/>
                <button className={header.button} onClick={acotar}>Acorta tu link</button>
            </header>
            <Acortador />
            
        </>
    )
}
export default Header