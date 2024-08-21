import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Single = () => {
    return (
        <section className='flex gap-12 px-12 py-12 bg-red'>
            <div className='flex-5 flex-col  gap-4'>
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

            </div>



            <div className='flex-2'>M</div>
        </section>
    )
}

export default Single