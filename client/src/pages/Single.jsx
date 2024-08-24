import React, { useContext, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '../components/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'
import { AuthContext } from '../context/authContext';


const Single = () => {
    //currentUser


    //posts
    const [post, setPost] = useState({});

    const location = useLocation()
    const navigate = useNavigate()
    const postId = location.pathname.split("/")[2]
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [postId]);


    //handleDelete
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/posts/${postId}`)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className='flex gap-12 px-12 py-12 '>
            <div className='flex-5 flex flex-col  gap-4'>
                <img className='w-full h-80' src={post?.img} alt='postimage' />
                <div className='flex items-center gap-4'>
                    {post.userImg && <img className='w-16 h-16 rounded-full border-4 border-orange-500' src={post.userImg} />}
                    <div>
                        <span className='font-semibold'>{post.user}</span>
                        <p>Postado {moment(post.date).fromNow()}</p>
                    </div>

                    {currentUser ? <div className="flex gap-2">
                        <button className='btn p-1'>
                            <EditIcon fontSize='small' />
                        </button>
                        <button className='btn p-1' onClick={handleDelete}>
                            <DeleteIcon fontSize='small' />
                        </button>
                    </div> : <></>}
                </div>

                <div>
                    <h1 className='text-h4 font-semibold'>{post.title}</h1>
                    <p className='text-justify'>{post.desc}</p>
                </div>
            </div>

            <div className='flex-2'>
                <Menu cat={post.cat} />
            </div>
        </section>
    )
}

export default Single