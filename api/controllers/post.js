import { db } from "../db.js"
import jwt from 'jsonwebtoken'


//=====Get all Post
export const getPosts = (req,res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts"

    db.query(q,[req.query.cat], (err,data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
}

//=====Get single post
export const getPost = (req,res) => {
    const q = "SELECT p.id, `user` , `title` , `desc` , p.img , u.img AS userImg ,`cat` , `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q,[req.params.id],(err,data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data[0]);
    })
}

//=====AddPost
export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";
  
      const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        userInfo.id,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
    });
  };

//=====DELETE
export const deletePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json ("Usuario não autenticado");

    jwt.verify(token,"jwtkey",(err,userInfo) => {
        if(err) return res.status(403).json("Token não valido!");

        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(q,[postId,userInfo.id],(err,data) => {
            if(err) return res.status(403).json("Você pode apenas deletar sua própria postagem")
            return res.json("Post deletado com sucesso!")
        })
    })
}

//=====Update
export const updatePost = ( req,res) => {
    const token = req.cookies.acess.token;
    if(!token) return res.status(401).son("Usuario não autenticado")

    jwt.verify(token,"jwtkey",(err,userInfo) => {
        if (err) return res.status(403).json("Token nao validdo")
        
        const postId = req.params.id
        const q = "UPDATE post SET `title`=?, `desc`=? , `img`=? ,`cat`=? WHERE `id`=? AND `uid` =?"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
          ];

          db.query(q,[...values,postId,userInfo.id],(err,date) => {
            if(err) return res.status(500).json(err)
            return res.json("Postagem atualizada com sucesso")
          })
     })
}
