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
                <h1>Acorta Tu Link Con Cutts<span>.ga</span></h1>
                <p>crea un link a partir de uno y genera ingresos por visitas en ellos</p>
                <button onClick={acotar}>Acortar link</button>
            </main>
            <section className={main.section}>
                <h2>Analiza Tu Link</h2>
                <p>
                    entra al siguiente boton para ver como va tu link acortado
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