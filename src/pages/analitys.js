import Ads2 from "../components/Ads2"
import Header from "../components/Header"
import { useState, useRef } from "react"
export default function Analytics(){
    const inputRef = useRef()
    const [views, setViews] = useState(0);
    const [retiradas, setRetiradas] = useState(0);
    const [ganancia, setGanancia] = useState(0);
    const [Response, setResponse] = useState(false);
    const buscar = (id) =>{
        setResponse(true);
        fetch("/api/analitys?"+"cutts="+id,{
            method:"GET"}).then(res=>res.json()).then(res=>{
                if(res.success){
                    setViews(res.data.views)
                    setGanancia(res.data.ganancia)
                    setRetiradas(res.data.retiradas)
                }else{
                    setViews(0)
                    setGanancia(0)
                    
                }
                setResponse(false)
        }).catch(err=>{
            setResponse(false)
        })
    }
    return(
        <>
            <Header title="Cutts - Analitys" url="//ad.a-ads.com/2014093?size=728x90" />
            <main>
                <h2>Ver el progreso de su link acortado</h2>
                <div className="content">
                    <div className="ejemplo">
                        <p>link: https://cutts.ga/estaEsLaId</p>
                        <p>Id: estaEsLaId</p>
                        <label htmlFor="idLink">Ingrese el id del link</label>
                    </div>
                    <div>
                        {Response?<span id="response"></span>:""}
                        <input id="idLink"type="text" placeholder="Ingrese la id de su link" ref={inputRef}/>
                        <button onClick={()=>buscar(inputRef.current.value)}>Buscar</button>
                    </div>
                    <div className="res">
                        <p>Visitas: {views}</p>
                        <p>Ganancia: {ganancia} USD</p>
                        <p>Retiradas: {retiradas} </p>
                    </div>
                </div>
                <Ads2/>
            </main>
            <script src="/ads_center.js"></script>
            <script src="//upgulpinon.com/1?z=5100672"></script>
            <style jsx>{`
                main{
                    width:100%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    padding: 5rem 1rem;
                    background-color:var(--black);
                    color:var(--white);
                    gap:25px;
                }
                main .content{
                    display:flex;
                    flex-direction:column;
                    max-width:500px;
                    width:100%;
                    background-color:var(--white);
                    color:var(--black);
                    border-radius:20px;
                    padding:1rem;
                    font-size:18px;
                    font-weight:500;
                    border:3px solid var(--color-2);
                    gap:10px;
                }
                main h2{
                    text-align:center;
                    font-size:32px;
                }
                main .content div{
                    display:flex;
                    flex-direction:column;
                    gap:5px;
                }
                main .content div input,main .content div button  {
                    outline:none;
                    padding:10px;
                    border:2px solid var(--color-2);
                    border-radius:8px;
                    transition:all .3s;
                }
                .content div button{
                    cursor:pointer;
                }
                .content div button:hover{
                    background-color:var(--color-2);
                    color:var(--white);
                }
                #response{
                    width:30px;
                    height:30px;
                    border-radius:50%;
                    background-color:transparent;
                    border:3px solid #121212;
                    border-left-color:#22a2a2;
                    animation:response 1s ease-out infinite;
                }
                @keyframes response{
                    0%{
                        transform:rotate(0deg);
                    }
                    100%{
                        transform:rotate(360deg);
                    }
                }
                `}</style>

        </>

    )
}