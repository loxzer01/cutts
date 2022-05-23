import Ads2 from "../components/Ads2"
import Header from "../components/Header"
import { useState, useRef } from "react"
export default function Analytics(){
    const inputRef = useRef()
    const [views, setViews] = useState(0);
    const [ganancia, setGanancia] = useState(0);
    const buscar = (id) =>{
        fetch("/api/analitys?"+"cutts="+id,{
            method:"GET"}).then(res=>res.json()).then(res=>{
                if(res.success){
                    setViews(res.data.views)
                    setGanancia(res.data.ganancia)
                }else{
                    setViews(0)
                    setGanancia(0)
                }
        })
    }
    return(
        <>
            <Header title="Cutts - Analitys" url="//ad.a-ads.com/2014093?size=728x90" />
            <div className="container">
                <main>
                    <h2>Busque y vea el progeso de su sitio</h2>
                    <div className="as">
                        <div>
                            <h4>solo agrege el id en la siguiente entrada</h4>
                            <p>link: https://cutts.ga/abcdex</p>
                            <p>id: abcdex</p>
                        </div>
                        <input type="text" placeholder="Ingrese la id de su link" ref={inputRef}/>
                        <button onClick={()=>buscar(inputRef.current.value)}>Buscar</button>
                    </div>
                    <div>
                        <p>Visitas: {views}</p>
                        <p>ganancia: {ganancia} USD</p>
                    </div>
                </main>
                <Ads2/>
            </div>
            <script src="/ads_center.js"></script>
            <script src="//upgulpinon.com/1?z=5100672"></script>
            <style jsx>{`
                h2{
                    font-size: 32px;
                    color:var(--color-2);
                }
                h4{
                    font-size: 22px;
                    color:var(--color-2-1);
                }
                p{
                    font-size: 18px;
                }
                .container{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    padding:2rem 0;
                    text-align:center;
                    gap:1rem;
                    background-color: var(--black);
                    color: var(--white);    
                }
                .container > div{
                    display:flex;
                    flex-direction:column;
                    gap:12px;
                }
                h2, h4, p{
                    max-width:420px;
                }
                .as div {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    gap:8px;
                    padding:1rem 0;

                }
                .as input{
                    width:300px;
                    height:40px;
                    border-radius:5px;
                    border:1px solid #ccc;
                    padding:0 10px;
                    margin:8px;
                }
                .as button{
                    width:100px;
                    height:40px;
                    border-radius:5px;
                    border:1px solid #ccc;
                    background-color:#ccc;
                    color:#fff;
                    font-size:16px;
                    cursor:pointer;
                }
                .as button:hover{
                    background-color:#fff;
                    color:#000;
                }

                `}</style>

        </>

    )
}