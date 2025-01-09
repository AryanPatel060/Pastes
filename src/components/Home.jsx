import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { create, edit } from '../features/pastes/PastesSlice';
import toast from 'react-hot-toast/headless';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch()

   const allPastes = useSelector((state) => state.pastes.pastes);

    function createOrEditPaste(){
     

            const paste={
                title : title,
                value : value,
                _id : pasteId||Date.now().toString(36),
                createdAt : new Date().toISOString(),
            }
            console.log(paste)
            if(pasteId)
            {
                dispatch(edit(paste))
            }
            else{
                dispatch(create(paste))
            }
            setTitle("");
            setValue("");
            setSearchParams({});
       
    }

    useEffect(() => {
        if(pasteId)
        {
            const paste = allPastes.find((p)=>p._id=== pasteId);
            setTitle(paste.title)
            setValue(paste.value)
        }
       
    }, [pasteId])
    

    return (
        <div className='p-5'>
            <div>
                <input
                    className='p-2 rounded w-2/4'
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={createOrEditPaste} className='p-2 bg-black text-white rounded ml-5 pl-4 pr-4'>
                    {pasteId ? "Update" : "Create"}
                </button>
            </div>
            <div>
                <textarea className='mt-4 rounded w-2/4 p-5'
                    type="text"
                    value={value}
                    placeholder='Notes here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={12}
                />
            </div>
        </div>
    )
}

export default Home
