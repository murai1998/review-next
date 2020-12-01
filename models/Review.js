const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
firstname: {
    type: String,
    required: [true, 'Please, enter your first name'],
    unique: true,
    trim: true,
    maxLength: [25, 'Name cannot be longer than 25 characters']
},
lastname: {
    type: String,
    required: [true, 'Please, enter your last name'],
    unique: true,
    trim: true,
    maxLength: [25, 'Last name cannot be longer than 40 characters']
},
date: {
    type: Date
},
review: {
    type: String,
    required: [true, 'Please, leave your review '],
    unique: true,
    trim: true,
    maxLength: [10000, 'Review cannot be longer than 10000 characters']
},
mark: {
    type: Number,
    required: true
}
})
module.exports = mongoose.models.Review || mongoose.model('Review', ReviewSchema)

