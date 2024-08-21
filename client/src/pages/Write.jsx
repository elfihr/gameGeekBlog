import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageIcon from '@mui/icons-material/Image';
import SaveIcon from '@mui/icons-material/Save';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <section className='min-h-[80vh] flex px-12 py-12 gap-4'>

      <div className='flex-5 flex flex-col gap-2'>
        <input className='border-2 border-slate-200' placeholder='Título*' type='text' name='title' />
        <ReactQuill className='h-80 ' theme="snow" value={value} onChange={setValue} />;
      </div>
      
      <div className='flex-2 flex-col gap-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-h4 font-semibold'>Publicações</h1>
          <span>
            <b>Status:</b> Rascunho</span>
          <span>
            <b>Visibilidade:</b>  Público</span>
          <input style={{ display: 'none' }} type='file' id='file' />
          <label className='btn w-52 gap-2' htmlFor='file'><ImageIcon />Upload Imagem</label>
          <div className='flex gap-4'>
            <button className='btn gap-2'><SaveIcon />Salvar Rascunho</button>
            <button className='btn gap-2'><AutorenewIcon />Atualizar</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-p font-semibold'>Categoria</h1>
          <div>
          <input type='Radio' name='cat' value='nintendo' id='nintendo'/>
          <label htmlFor='nintendo'>Nintendo</label>
          </div>
          <div>
          <input type='Radio' name='cat' value='Sony' id='Sony'/>
          <label htmlFor='Sony'>Sony</label>
          </div>
          <div>
          <input type='Radio' name='cat' value='Microsoft' id='Microsoft'/>
          <label htmlFor='Microsoft'>Microsoft</label>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Write