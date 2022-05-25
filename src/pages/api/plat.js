// api/users.js
import Plat from '../../../model/plat'
import Pay from '../../../model/pay'
import Ip24 from '../../../model/ip24'
import {dbConnect} from '../../../lib/dbConnect';
dbConnect();
export default async function handler (req, res) {
    const hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0); 
    }
    const { method, query, body } = req
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
            let copy;
            if(typeof body === 'string') {
                copy = {...JSON.parse(body), views:0, withdraw:0}
            }else{
                copy = {...body, views:0, withdraw:0}
            }
            copy.amount = Number(copy.amount)
            const plat = await Plat.create(copy)

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
            const {data, cutts, token} = query
            let ip = atob(data)
            let tokenGenerate = hashCode((String(parseInt(Date.now() / 5000))+cutts)).toString(36)
            const ip24Array = await Ip24.find({ip});
            if( ip24Array===undefined || ip24Array=== NaN||ip24Array?.length === 0 || ip24Array[0]?.time <= parseInt(Date.now() / 1000)){
                if(ip24Array[0]?.time <= parseInt(Date.now() / 1000)){
                    await Ip24.updateOne({ip}, {$set: {time: parseInt(Date.now() / 1000 + 21600)}})
                }else{
                    await Ip24.create({ip, time: parseInt(Date.now() / 1000 + 21600)})
                }
                if(token === tokenGenerate){
                    const plats = await Plat.findOneAndUpdate({cutts: cutts}, {$inc: {views: 1}})
                    if(plats.views*0.003 >= plats.amount){
                        let paySave = new Pay({id:plats.id, paypal:plats.paypal, amount:plats.amount})
                        await paySave.save();
                        await Plat.findOneAndUpdate({cutts: cutts}, {$set:{views: 0, withdraw: 1}})
                    }
                    res.status(200).json({ success: true, data: plats.url })
                }else{
                    const plats = await Plat.findOne({cutts: cutts})
                    res.status(201).json({ success: true, data: plats.url })
                }
            }else{
                const plats = await Plat.findOne({cutts: cutts})
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