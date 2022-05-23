import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
export default function Captcha({db}){
    const [verify , setVerify] = useState(false);
    const captchaBtn = useRef()
    const continuar = () =>{
        if(verify){
            localStorage.setItem(db, true);
            window.location.href = "/v/"+btoa(db);
        }else{
            window.location.reload();
        }
    }
    const changeCaptcha = ()=>{
        captchaBtn.current.disabled = false;
        setVerify(true);
    }
    return(
        <>
            <div className="captcha">
                <div className="captcha_resolve">
                    <ReCAPTCHA 
                    sitekey="6LfmAAQgAAAAAN24JM82-OuVcaobSrdj7hONyQ7H"
                        onChange={changeCaptcha}
                    />
                </div>
                {
                    verify?<button className="btn" onClick={continuar} ref={captchaBtn}>Continuar</button>:<button className="btn" onClick={continuar} disabled ref={captchaBtn}>Continuar</button>
                }
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
                .btn{
                    background-color: #777777;
                    color: var(--white);
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 14px;
                    font-weight: 700;
                    border-radius: 12px;
                    cursor: pointer;
                    border: 2px solid var(--white);
                }
                .btn:disabled{
                    cursor: not-allowed;
                    filter: brightness(0.6);
                }
            `}</style>
        </>
    )
}
