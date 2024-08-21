import { db } from "../db.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


export const register = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR user = ?";
  
    db.query(q, [req.body.email, req.body.user], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("Usuario e/ou email já cadastrado");
  
      //Hash the password and create a user

      const hash = bcrypt.hashSync(req.body.password, 10);
  
      const q = "INSERT INTO users(`user`,`email`,`password`) VALUES (?)";
      const values = [req.body.user, req.body.email, hash];
      

      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    });
  };

export const login = (req, res) => {
  
  //check user exist

  const q =  "SELECT * FROM users WHERE user = ?"

  db.query(q,[req.body.user],(err,data)=> {
    if(err) return res.json(err)
    if(data.length === 0) return res.status(404).json("Usuario não encontrado")

    //check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if(!isPasswordCorrect) return res.status(400).json("Usuario ou senha incorreta!")

    const token = jwt.sign({id: data[0].id}, "jwtkey")
    const {password,...other} = data[0] 

    res.cookie("access_token", token,{
      httpOnly:true
    }).status(200).json(data[other])//separa senha de outra info
  })
}

export const logout = (req, res) => {

}