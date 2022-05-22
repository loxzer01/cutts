import Ads3 from "../components/Ads3";
import Header from "../components/Header"
const Error = ()=>{
    return (
        <>
        <Header title="Cutts - 404"/>
        <main className="main">
            <h1>Error: 404</h1>
            <p>En esta direccion no se encuentra ninguna informacion</p>
            <Ads3/>
        </main>
        <style jsx>
            {`
                .main{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 600px;
                    gap: 25px;
                }
            `}
        </style>
        </>
    )    
}
export default Error;