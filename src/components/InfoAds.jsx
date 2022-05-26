
import Acortador from "./Acortador";
import Ads2 from "./Ads2";
import Ads3 from "./Ads3";
export default function InfoAds({isAds,acotar,exit}) {

    return(
        <>
            {
                isAds?<Acortador exit={exit}/>:null
            }
            <div className="infoAds">
                <div className="acuerdo2">
                    <Ads2/>
                </div>
                <div className="text">
                    <h2>¿Qué es Cutts?</h2>
                    <p>Cutts es una herramienta completamente gratuita donde puedes crear enlaces cortos, que además de ser gratis, ¡te pagan! Entonces, ahora puedes ganar dinero desde casa, . ¡Create uno!</p>
                    <h2>¿Por qué estoy en esta página?</h2>
                    <p>Es porque un usuario de Cutts está utilizando nuestro sitio web para acortar el enlace de su destino.</p>
                    <h2>¿Cómo puedo omitir esta página e ir al enlace de destino?</h2>
                    <p>Verifique el reCaptcha a continuación y haga clic en Continuar, luego espere 10 segundos en la segunda página y la página se refrecara con el link destino</p>
                    <h2>¿Por qué no te creas un link acotado y empiezas a ganar dinero?</h2>
                    <p onClick={acotar} className='span'>¡Haz clic aquí y crea tu link gratis!</p>
                </div>
                <div className="acuerdo2">
                    <Ads2/>
                </div>
                <Ads3/>
            </div>
        <style jsx>{`
            .infoAds{
                max-width: 800px;
                display: grid;
                place-content: center;
                padding: 3rem 1rem;
                margin: 0 auto;
                gap: 5px;
                background-color: var(--white);
            }
            .text{
                max-width: 600px;
                padding: 3rem 0;
            }
            h2{
                font-size: 24px;
                font-weight: bold;
                margin: 1rem 0;
            }
            p{
              font-size: 16px;
              font-weight: 400;  
            }
            p.span {
                font-weight: 700;
                color: var(--color-2);
                cursor: pointer;
            }
            .acuerdo2{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
            }
            `}</style>
        </>
    )
}