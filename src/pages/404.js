import Header from "../components/Header"
const Error = ()=>{
    return (
        <>
        <Header title="Cutts - 404"/>
        <main className="main">
            <h1>Error: 404</h1>
            <p>En esta direccion no se encuentra ninguna informacion</p>
            <script src="/ads_onclick.js"></script>
            <script data-cfasync="false" src="//upgulpinon.com/1?z=5100672"></script>
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