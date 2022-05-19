import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import header from "../styles/Header.module.css"
import Acortador from "./Acortador"
export default ({title})=>{
    return (
        <>
            <Head>
                <meta name="propeller" content="a1d93045563729a7427e25e03b2ba12e"/>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className={header.header}>
                <Image src="/logo.svg" alt="logo" className={header.logo} width={200} height={100}/>
                <Link href="/"><a className={header.button}>Acorta tu link</a></Link>
            </header>
            <Acortador />
        </>
    )
}