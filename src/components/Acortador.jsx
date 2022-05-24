import acortador from "../styles/Acortador.module.css";
import { useRef, useState } from "react";
const Acortador = ({ exit }) => {
    const [isSend, setIsSend] = useState(false);
    const [Url, setUrl] = useState("");
    const [peticion, setPeticion] = useState(false);
    const [Response, setResponse] = useState(false);
    const form = useRef();
    const input = useRef();
    function submit(e) {
        let obj = data();
        e.preventDefault();
        if (isUrl(obj.url) && isEmail(obj.paypal)) {
            setResponse(true);
            let objSend = {
                ...obj,
                cutts: Math.random().toString(36).substr(2, 10),
            }
            objSend.amount = objSend.amount<15?15:objSend.amount;
            fetch("/api/plat", {method: "POST", body: JSON.stringify(objSend)}).then(res => res = res.json()).then(res => {
                setIsSend(res.success);
                setUrl(res.data);
                setPeticion(!res.success);
                setResponse(false);
            });
        }
    }
    function otra (){
        setIsSend(false);
        setUrl("");
        setPeticion(false);
        setResponse(false);
    }
    function data(){
        return Object.fromEntries(new FormData(form.current))
    }
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function isUrl(str) {
        // str is the url
        let pattern = new RegExp(
            "^(https?:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,8}(:[0-9]{1,8})?(\\/.*)?",
        ); // fragment locator
        return pattern.test(str);
    }
    function isEmail(str) {
        let pattern=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        return (pattern.test(str));
    }
    function isValid(obj) {
        let $ = (name)=>document.getElementsByName(name)[0];
        if (!isUrl(obj.url)) {
            $("url").style=`
                border: 2px solid #f00;
            `;
        }else{
            $("url").style=`
                border: 2px solid #141414;
            `;
        }

        if (!isEmail(obj.paypal)) {
            $("paypal").style=`
                border: 2px solid #f00;
            `;
        }else{
            $("paypal").style=`
                border: 2px solid #141414;
            `;
        }
    }
    function copy() {
        input.current.value = document.querySelector("#linkUrl").innerHTML;
        input.current.select();
        document.execCommand("copy");
        input.current.value = "";
    }
    return (
        <div className={acortador.acotar}>
            {
                peticion?<div className={acortador.peticion} onClick={()=>setPeticion(false)}><p>Intente nuevamente</p></div>:""
            }
        <div className={acortador.acotar_contenedor}>
            <span onClick={exit}>exit</span>
            {isSend ? (
            <div className={acortador.ready}>
                <h2>Tu nuevo link: </h2>
                <input type="text" ref={input} />
                <a href={ window.location.origin +"/"+ Url} id="linkUrl" onClick={copy}>
                { window.location.origin +"/"+ Url}
                </a>
                <span className={acortador.span} onClick={copy}>Copiar</span>
                <span className={acortador.span} onClick={otra}>Otra</span>
            </div>
            ) : (
            <>
                <h2>Crear tu Link</h2>
                <form ref={form} onSubmit={submit}>
                <label htmlFor="url">La Url</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    placeholder="http://ejemplo.com"
                    required
                />
                <label htmlFor="amount">La Cantidad ( min: 10 )</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Ingresa la cantidad a retirar en USD"
                    min="10"
                    onChange={(e) => {
                        if (!isNumber(e.target.value)) {
                            e.target.value = e.target.value.slice(0, -1);
                        }
                    }}
                    required
                />
                <label htmlFor="paypal">Paypal</label>
                <input
                    type="text"
                    id="paypal"
                    name="paypal"
                    placeholder="Ingresa tu cuenta de paypal"
                    required
                />
                {
                    Response?<span className={acortador.response}></span>:""
                }
                <button onClick={()=>isValid(data())}>Crear</button>
                </form>
            </>
            )}
        </div>
        </div>
    );
};

export default Acortador;
