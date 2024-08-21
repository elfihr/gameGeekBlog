import React, { useContext, useRef, useState } from 'react'
import loginImg from '../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const inputRef = useRef(null);
  const [err, setErr] = useState(null)

  const [input, setInput] = useState({
    user: "",
    password: ""
  })


  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  //userLogged
  const { login } = useContext(AuthContext);


  const navigate = useNavigate()
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (inputRef.current.value.trim() === "") {
        setErr("Campos não podem Ficar em Branco");
      } else {
        await login(input)
        const res = await axios.post("/api/auth/login", input)
        navigate("/")
      }

    } catch (err) {
      setErr(err.response.data);
    }

  }

  return (
    <section style={{ backgroundImage: `url(${loginImg})` }}
      className='min-h-[80vh] flex justify-center items-center bg-cover bg-center' >
      <form method='POST' className='flex flex-col items-center justify-center gap-4 bg-white h-96 w-80 rounded-md'>
        <h2 className='text-h1 font-semibold'>Login</h2>
        <input className='bord' placeholder='username*' type='text' name='user' required onChange={handleChange} ref={inputRef} />
        <input className='bord' placeholder='password*' type='password' name='password' onChange={handleChange} ref={inputRef} />
        <button className='btn ' onClick={handleSubmit}>Login</button>
        <p>Não tem uma conta?<span className='underline cursor-pointer'><Link to='/register'>Registrar</Link></span></p>
        {err && <p className='text-red-500'>{err}</p>}
      </form>

    </section>
  )
}

export default Login