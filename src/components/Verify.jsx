import { useEffect, useState } from "react";

export default function Verify({url}){
    const [timer, setTimer] = useState(10);
    const [isDb, setisDb] = useState(false);
    const hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0); 
    }
    useEffect(()=>{
        let contar;
        setisDb(localStorage.getItem(url));
        if(timer>0){
            contar = setTimeout(()=>{
                setTimer(timer-1);
            },1000)
        }else{
            if(isDb){
                let token = hashCode((String(parseInt(Date.now()/5000))+url)).toString(36);
                fetch(`/api/plat?cutts=${url}&token=${token}`,{method:"PUT"}).then(res=>res.json()).then(res=>{
                    if(res.success){
                        window.location.href = res.data
                    }
                    else{
                        window.location.reload();
                    }
                })
                localStorage.removeItem(url);
            }else{
                window.location.href = "/"+url;
            }
        }
        return ()=>clearTimeout(contar);
    },[timer])
    return(
        <>

        <div className="captcha">
            <p>¡Espere! esta cargando... <span>{timer}</span></p>
        </div>

            <style jsx>{`
                .captcha{ 
                    padding: 3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    background-color:var(--color-2);
                    flex-wrap: wrap;
                }
                .captcha p {
                    font-size: 20px;
                    font-weight: bold;
                }
                .captcha span{
                    font-size: 42px;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}