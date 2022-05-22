import main from "../styles/Main.module.css"
import Acortador from "./Acortador"
import { useState } from "react";
const Main = () =>{
    const [isAcotar, setIsAcotar] = useState(false);
    const acotar = ()   =>{
        setIsAcotar(true);
    }
    function exit(){
        setIsAcotar(false);
    }
    return (
        <>
            <main className={main.main}>
                <h1>Acorta tu Link con Cutts.ga</h1>
                <p>Acorta tus link y genera ingresos por visitas en ellos</p>
                <button onClick={acotar}>Acortar link</button>
            </main>
            <section className={main.section}>
                <h2>Como ganar con Cutts.ga</h2>
                <p>
                    Simplemente acorta tu link y gana dinero por las visitas que recibas.
                </p>
                <a href="/analitys">analiza tu url</a>
            </section>
            {
                isAcotar?<Acortador exit={exit}/>:null
            }
        </>
    )
}
export default Main