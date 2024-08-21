import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '../components/Menu';

const Single = () => {
    return (
        <section className='flex gap-12 px-12 py-12 '>
            <div className='flex-5 flex flex-col  gap-4'>
                <img className='w-full h-80' src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full border-4 border-orange-500' src='https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    <div>
                        <span className='font-semibold'>Fihr</span>
                        <p>Postado 2 dias Atras</p>
                    </div>
                    <div className='flex gap-2'>
                        <button className='btn p-1'>
                            <EditIcon fontSize='small' />
                        </button>
                        <button className='btn p-1'>
                            <DeleteIcon fontSize='small' />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className='text-h4 font-semibold'>Titulo</h1>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis</p>
                </div>
            </div>

            <div className='flex-2'>
                <Menu/>
            </div>
        </section>
    )
}

export default Single