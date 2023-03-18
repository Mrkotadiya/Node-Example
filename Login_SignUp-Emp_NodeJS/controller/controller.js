const user=require("../Model/model");

exports.signUp=((req,res)=>user.create(req.body).then("insert Sucessfully").catch(err=>{res.send(err)}));

exports.Alldatafind = (async(req, res)=>{
    try {
        const db = await user.find()
        res.send(db);
    } catch (error) {
        res.status(404).send(error)
    }
})

exports.login=((req,res)=>{
    const login_email=req.body.email;
    user.find({email:login_email}).then(data=>{
        // res.send(data);
    //    const signUp_email=data[0].email;
        // if(signUp_email!=login_email){
            if(data=="")
            {
                res.send("pls SignUp First")
            }
            else
            {
                if(req.body.pwd==data[0].pwd)
                {
                    res.send("login Succesfully")
                }
                else
                {
                    res.send("login Fail");
                }
            }
    
    });
})