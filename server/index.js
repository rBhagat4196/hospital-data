import express from 'express';
import cors from 'cors';
import connectDb from './config/connectDb.js';
import Patent from './models/patentsModel.js';


// initializers
const app = express();
// middlewares
app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:5173',
    })
);

const MONGO_URl = "mongodb://127.0.0.1:27017/hospital"
// Database connection
connectDb(MONGO_URl);

app.post("/patent-details",async(req,res)=>{
  const { name,gender,age,appointmentPreference,diseaseType,disease,diseasePhase} = req.body;
  console.log(name,gender,age,appointmentPreference,diseaseType,disease,diseasePhase)
  const newPatent = new Patent({
    name,
    gender,
    age,
    appointmentPreference,
    diseaseType,
    disease,
    diseasePhase
  });

  await newPatent.save();
  res.json(newPatent)
 
});

app.get("/details/:id",async(req,res)=>{
  const {id} = req.params;
  res.json(await Patent.findById(id));
})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });