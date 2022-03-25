import mongoose from 'mongoose';

const wordsSchema = mongoose.Schema({
    word: {type:String,required:true}
},
{timestamps:true}
)

export default mongoose.model('Words',wordsSchema)