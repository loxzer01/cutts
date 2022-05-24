import main from "../styles/Main.module.css"
import Acortador from "./Acortador"
import { useState } from "react";
import Image from "next/image";
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
                <div>
                    <h1>Cutts<span>.ga</span></h1>
                    <p>Un sistema de acortador de link con capacidades de generar 50USD con tan solo 10K visitas</p>
                    <button onClick={acotar}>acortar</button>
                </div>
                <Image src="/coins.png" alt="analitys" width={445} height={473} className="img"/>
            </main>
            <section className={main.section}>
                <div>
                    <h2>Analizar</h2>
                    <p>
                        Puedes analizar tu link y ver el estado de tu acortador.
                    </p>
                    <button className={main.href} onClick={()=>window.location.href="/analitys"}>analizar</button>
                </div>
                <Image src="/search.png" alt="analitys" width={445} height={445} className="img"/>
            </section>
            <section className={main.howWorks}>
                <h2>¿Como funciona?</h2>
                <ul>
                    <li>Cutts.ga Tiene como objetivo ser muy simple: <span>¡crear y ganar sin registrarse!</span></li>
                    <li>Tu puedes crear un acotador para tus links y generar ingresos activos</li>
                    <li>Tienes solo un panel de registro; <span>1-) La url:</span> esta url es la que pretende acortar. 
                        <span> 2-) La cantidad:</span> alli debe aplicar la cantidad a retirar, al llegar la cantidad se
                        reinicia el contador y se envia los datos al servidor para hacer el pago. <span>3-) Paypal:</span>
                        este es el actual medio donde se podra retirar pero habra muchos mas a futuro</li>
                    <li>Nuestro sistema tiene como fecha de retiro los dias del 15 al 17 de cada mes</li>
                    <li>Todos los pagos se realizan por medio de paypal</li>
                </ul>
            </section>
            {
                isAcotar?<Acortador exit={exit}/>:null
            }
        </>
    )
}
export default Main