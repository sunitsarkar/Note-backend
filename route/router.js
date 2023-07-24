const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Note =require('../model/note')

/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/

router.post('/signup', async (req,res) => {
    const user=new User({
        email: req.body.email,
        password: req.body.password
    });
        
   await user.save();
   res.send(user)
});

router.post('/', async (req,res)=> {
    try {
        const { email , password } = req.body;
        if(!email || !password){
            return res.status(404).json({error : "plz Filled the data "})
        }

        const userlogin = await User.findOne({ email: email });

        if(userlogin){
            if(!(password==userlogin.password)){
                res.status(400)
                .json({error : "Invalid Credientials"})
            }else{
                res.json({message : "Sign up Success"})
            }
        }
       res.status(400)
        res.json({error : "Invalid Credientials"})
       

    } catch (error) {
        console.log(error)
    }
})

router.post('/note', async (req,res) => {
    const note=new Note({
        title: req.body.title,
        description: req.body.description
    });
        
   await note.save();
   res.send(note)
});

router.get('/notes',async(req,res)=>{
    Note.find().sort("-createdAt").exec((err,notes)=>{
        console.log(notes)
    })
    
});


module.exports=router;
