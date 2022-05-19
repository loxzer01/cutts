import main from "../styles/Main.module.css"

export default () =>{
    const acotar = ()   =>{
    }
    return (
        <>
            <main className={main.main}>
                <h1>Acorta tu Link con Cutts.ga</h1>
                <p>Acorta tus link y genera ingresos por visitas en ellos</p>
                <button onClick={acotar}>Acortar link</button>
            </main>
            
        </>
    )
}