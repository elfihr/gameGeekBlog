import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageIcon from '@mui/icons-material/Image';
import SaveIcon from '@mui/icons-material/Save';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const state = useLocation().state//state for edit
  
  const navigate = useNavigate()
  //desc
  const [value, setValue] = useState(state?.desc || "");//conditions or use same description for edit
  //title
  const [title, setTitle] = useState(state?.title || "");
  //image
  const [file, setFile] = useState(null);
  //image
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)//same name from server/api
      const res = await axios.post("/api/upload", formData)
      return res.data
    } catch (err) {
      console.log(err)

    }
  }


  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = await upload()

    try {
      state ? await axios.put(`/api/posts/${state.id}`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl  : ""
      }) : await axios.post(`/api/posts/`, {
        title,
        desc: value,//quill value to desc to db
        cat,
        img: file ? imgUrl  : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  

      })
      navigate("/")
    }catch (err) {
        console.log(err)
      }
    }

  return (
      <section className='min-h-[80vh] flex px-12 py-12 gap-4'>

        <div className='flex-5 flex flex-col gap-2'>
          <input className='border-2 border-slate-200 fildW' placeholder='Título*' value={title} type='text' name='title' onChange={e => setTitle(e.target.value)} />
          <ReactQuill className='h-80 fildW' theme="snow" value={value} onChange={setValue} />;
        </div>

        <div className='flex-2 flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-h4 font-semibold'>Publicações</h1>
            <span>
              <b>Status:</b> Rascunho</span>
            <span>
              <b>Visibilidade:</b>  Público</span>

            <div className='flex gap-2 flex-wrap'>
              <input style={{ display: 'none' }} type='file' id='file' onChange={e => setFile(e.target.files[0])} />{/* apenas o primeiro arquivo */}
              <label className='btn gap-2 sizebtn' htmlFor='file'><ImageIcon />Upload Imagem</label>
              <button className='btn gap-2 sizebtn'><SaveIcon />Salvar Rascunho</button>
              <button className='btn gap-2 sizebtn' onClick={handleClick}><AutorenewIcon />Publicar</button>
            </div>

          </div>
          <div className='flex flex-col'>
            <h1 className='text-p font-semibold'>Categoria</h1>
            <div>
              <input type='Radio' name='cat' checked={cat === "nintendo"} value='nintendo' id='nintendo' onChange={e => setCat(e.target.value)} />
              <label htmlFor='nintendo'>Nintendo</label>
            </div>
            <div>
              <input type='Radio' name='cat' checked={cat === "sony"} value='sony' id='sony' onChange={e => setCat(e.target.value)} />
              <label htmlFor='Sony'>Sony</label>
            </div>
            <div>
              <input type='Radio' name='cat' checked={cat === "microsoft"} value='microsoft' id='microsoft' onChange={e => setCat(e.target.value)} />
              <label htmlFor='Microsoft'>Microsoft</label>
            </div>
          </div>
        </div>

      </section>
    )
  }

  export default Write