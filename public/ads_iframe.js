// "<iframe src={adsIframe} sandbox='allow-scripts allow-same-origin allow-forms'></iframe>"
import adsJson from './ads.json';

const generateRandom = () => {
    const random = Math.floor(Math.random() * adsJson.length);
    setAdsIframe(adsJson[random]);
}
console.log(generateRandom)
console.log("Hola mundo")