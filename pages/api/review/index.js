import connect from '../../../utils/connect'
import Review from '../../../models/Review'

connect()

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const reviews = await Review.find({});

                res.status(200).json({ success: true, data: reviews })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const review = await Review.create(req.body);
console.log('post data', review)
                res.status(201).json({ success: true, data: review })
            } catch (error) {
                res.status(400).json({ success: false, error: error });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}