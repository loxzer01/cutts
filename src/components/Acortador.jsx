import acortador from "../styles/Acortador.module.css"
const Acortador = () => {
    <div className={acortador.acotar}>
        <div className={acortador.acotar_contenedor}>
            <h2>Acorta tu Link</h2>
            <form>
                <input type="text" name="url" placeholder="Ingresa tu link" />
                <input type="text" name="Amount" placeholder="Ingresa la cantidad a retirar" />
                <input type="text" name="url" placeholder="Ingresa tu link" />
                <input type="text" name="url" placeholder="Ingresa tu link" />
            </form>
        </div>
    </div>
}

export default Acortador