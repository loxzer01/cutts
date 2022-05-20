export default function Ads() {
    
    return(
    <>
        <script async="async" data-cfasync="false" src="//tumultmarten.com/5a5d1f135b1d71419718151983a4f6ce/invoke.js"></script>
        <script src="/ads_banner.js"></script>
    </>
 )
}

// // creamos un flag para saber si tenemos adblocker
// let isAdBlockEnabled = false

// // creamos un elemento div y lo iniciamos con una clase
// // que sabemos que el adblocker eliminaría
// const ad = document.createElement('div')
// ad.innerHTML = '&nbsp;'
// ad.className = 'adsbox'
// // añadimos nuestra simulación de anuncio en el body
// document.body.appendChild(ad)

// // ahora dejamos 100ms para que el adblocker haga su trabajo
// // y entonces veremos si el elemento sigue visible
// window.setTimeout(() => {
//   // si el elemento no tiene altura, es que
//   // el AdBlocker se lo ha cargado
//   isAdBlockEnabled = ad.offsetHeight === 0
//   // eliminamos el "falso" anuncio
//   ad.remove()

//   if (isAdBlockEnabled) {
//     // codigo a ejecutar si el adblocker está activado
//   }
// }, 100)