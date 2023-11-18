const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const OpenAI = require("openai");

const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
    generatedId: String,
    message: String,
    bg: String
})

const promptSchema = new mongoose.Schema({
    prompt: String
})

const subscriberSchema = new mongoose.Schema({
    subscriber: String
})

dotenv.config();

const SharedGift = mongoose.model('SharedGift' , giftSchema);
const Prompts = mongoose.model('Prompts', promptSchema );
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI);



const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
})

app.get("/",(req,res)=>{
    res.send("Welcome to Difty");
})

app.post("/message",async (req, res)=>{
    try {
        const from = req.body.from;
        const to = req.body.to;
        const info = req.body.info;
        const content = req.body.content;

        const prompt = "Write a " + content + " on behalf of " + from + " to " + to + " based on following information in exactly 8 lines " + info; 
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": prompt}]
        })

        const usedPrompt = new Prompts({prompt:info});
        usedPrompt.save();
        res.json({
            generated_gift : aiResponse.choices[0].message.content,
        })
    }
    catch ( error ){
        res.send(error)
    }
})


app.post("/generateLink",async (req,res)=>{
    try{
        const generatedId = req.body.generatedId;
        const message = req.body.message;
        const bg = req.body.bg;

        const newGift = new SharedGift({generatedId , message , bg});
        await newGift.save();
        res.sendStatus(200);
    }
    catch(error){
        res.send(error);
    }
})

app.get("/generateLink", async (req,res)=>{
    try{
        const inputId = req.query.generatedId;
        const gift = await SharedGift.find({generatedId:inputId})
        if ( gift ){
            res.json(gift[0]);
        }
    }
    catch(error){
        res.send(error);
    }
})

app.post("/subscribe", async(req,res)=>{
    try{
        const subscriber = req.body.subscriber;
        const newsubscriber = new Subscriber({subscriber});
        await newsubscriber.save();
    }
    catch(error){
        res.send(error);
    }
})

mongoose.connect(dbURI).then(() => {
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



