import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
export default function Captcha({db,isAds}){
    const [verify , setVerify] = useState(false);
    const captchaBtn = useRef()
    const continuar = () =>{
        if(verify){
            window.location.href = "/v/"+btoa(db);
        }else{
            window.location.reload();
        }
    }
    const changeCaptcha = ()=>{
        captchaBtn.current.disabled = false;
        localStorage.setItem(db, "true");
        setVerify(true);
    }
    return(
        <>
            {
                isAds?<div className="captcha isAds">
                <p>Desactive el BlockAds para que funcione correctamente</p>
            </div>:<div className="captcha">
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
            }
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
                .isAds{
                    background-color: var(--color-1);
                }
                .isAds p{
                    font-weight: 700;
                    font-size: 20px;
                    color: var(--black);
                }
                .btn{
                    background-color: var(--color-2);
                    color: var(--black);
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 12px;
                    cursor: pointer;
                    border: 2px solid var(--white);
                }
                .btn:disabled{
                    cursor: not-allowed;
                    filter: grayscale(60%);
                }
            `}</style>
        </>
    )
}
