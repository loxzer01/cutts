// api/users.js
import Plat from '../../../model/plat'
import Ip24 from '../../../model/ip24'
import Pay from '../../../model/pay'
import {dbConnect} from '../../../lib/dbConnect';
dbConnect();
export default async function handler (req, res) {
    const hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0); 
    }
    const { method, query, body } = req
    const {data} = query
    const viewsIps = data? await Ip24.findOne({ip:atob(data)}):"";
    switch (method) {
        case 'GET':
        try {
            const plats = await Plat.find({cutts: query.cutts})
            res.status(200).json({ success: true, data: plats.url })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
        case 'POST':
        try {
            console.log(typeof body)
            let copy;
            if(typeof body === 'string') {
                copy = {...JSON.parse(body), views:0}
            }else{
                copy = {...body, views:0}
            }
            copy.amount = Number(copy.amount)
            console.log(copy)
            const plat = await Plat.create(copy)
            console.log(plat)
            res.status(201).json({ success: true, data: plat.cutts })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
        default:
        res.status(400).json({ success: false })
        break
        case 'PUT':
        try {
            let token = hashCode((String(parseInt(Date.now()/10000))+query.cutts)).toString(36)
            if(viewsIps?.time === undefined || viewsIps === null||viewsIps?.time <= parseInt(Date.now()/1000) || viewsIps?.ip ==="190.75.205.152"){
                let time = parseInt((Date.now()/1000)+86400)
                if(viewsIps?.time <= parseInt(Date.now()/1000 || viewsIps?.ip === "190.75.205.152")){
                    await Ip24.updateOne({ip:atob(query.data)},{$set:{time}})
                }else{
                    let ipDato = new Ip24({ip:atob(query.data), time})
                    await ipDato.save();
                }
                
                if(query.token === token){
                    const plats = await Plat.findOneAndUpdate({cutts: query.cutts}, {$inc: {views: 1}})
                    if(plats.views*0.002 >= plats.amount){
                        let paySave = new Pay({id:plats.id, paypal:plats.paypal, amount:plats.amount})
                        await paySave.save();
                        await Plat.findOneAndUpdate({cutts: query.cutts}, {$set:{views: 1}})
                    }
                    res.status(200).json({ success: true, data: plats.url })
                }else{
                    res.status(400).json({ success: false, error: 'token is not valid'})
                }
                
            }else{
                const plats = await Plat.findOne({cutts: query.cutts})
                res.status(201).json({ success: true, data: plats.url })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({ success: false })
        }
        break
    }
}