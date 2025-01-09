import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
    const {id} = useParams();
    const allPastes = useSelector((state) => state.pastes.pastes);

    const paste = allPastes.filter((p)=>p._id === id)[0];

  return (
    <div className='bg-slate-100 p-5'>
    <div>
        <input
            className='p-2 rounded w-2/4 bg-white'
            type="text"
            placeholder="Title"
            disabled    
            value={paste.title}
        />
       
    </div>
    <div>
        <textarea className='mt-4 rounded w-2/4 p-5 bg-white'
            type="text"
            value={paste.value}
            placeholder='Notes here'
            disabled
            rows={12}
        />
    </div>
</div>
  )
}

export default ViewPaste
