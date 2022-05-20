
import Ads1 from "./Ads1";
import Ads2 from "./Ads2";
export default function InfoAds({isAds}) {
    const acotar = () =>{

    }
    return(
        <>
            <Ads1/>
            <div className="infoAds">
                <div className="acuerdo2">
                    {
                        isAds ? <p>AdBlocker activado desactivelo</p> : <>
                            <Ads2/>
                            <Ads2/>
                        </>
                    }
                </div>
                <div className="text">
                    <h2>¿Qué es Cutts?</h2>
                    <p>Cutts es una herramienta completamente gratuita donde puedes crear enlaces cortos, que además de ser gratis, ¡te pagan! Entonces, ahora puedes ganar dinero desde casa, . ¡Create uno!</p>
                    <h2>¿Por qué estoy en esta página?</h2>
                    <p>Es porque un usuario de Cutts está utilizando nuestro sitio web para acortar el enlace de su destino.</p>
                    <h2>¿Cómo puedo omitir esta página e ir al enlace de destino?</h2>
                    <p>Verifique el reCaptcha a continuación y haga clic en Continuar, luego espere 10 segundos en la segunda página y haga clic en "Obtener enlace"</p>
                    <h2>¿Por qué no te creas un link acotado y empiezas a ganar dinero?</h2>
                    <p onClick={acotar}>¡Haz clic aquí y crea tu link gratis!</p>
                </div>
                <div className="acuerdo2">
                    <Ads2/>
                    <Ads2/>
                </div>
                
            </div>
            <script src="/ads_onclick.js"></script>
            <script src="/ads_center.js"></script>
            <script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=5100672"></script>
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