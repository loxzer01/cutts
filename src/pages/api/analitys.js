import Plat from '../../../model/plat'
import {dbConnect} from '../../../lib/dbConnect';
dbConnect();
export default async function handler (req, res) {
    const { query,method } = req
    switch (method) {
        case 'GET':
        try {
            const plats = await Plat.findOne({cutts: query.cutts})
            res.status(200).json({ success: true, data: {views:plats.views,ganancia:plats.views*0.002} })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
    }
}