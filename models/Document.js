import mongoose, { model } from 'mongoose';

const documentSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    content:String,
    created:{type:Date, default:Date.now},
    updated:{type:Date},
});

const model = mongoose.model('document', documentSchema);

export default model;