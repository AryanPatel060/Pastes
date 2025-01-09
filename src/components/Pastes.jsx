import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/pastes/PastesSlice';
import toast from 'react-hot-toast';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';


const Pastes = () => {
    const pastes = useSelector((state) => state.pastes.pastes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const filterData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchQuery.toLowerCase())
    )


    function handelDelete(pasteId) {
        dispatch(remove(pasteId));
    }
    function handelCopy(pasteValue) {
        navigator.clipboard.writeText(pasteValue)
        toast.success("Copied!")
    }
    function handleEdit(paste)
    {
         
        navigate(`/?pasteId=${paste?._id}`);
    }
    function handleView(paste)
    {
         
        navigate(`/pastes/${paste?._id}`);
    }
    console.log(pastes)
    return (
        <div className='p-5'>
            <div>
                <input className='p-2 pl-5 w-2/4'
                    type="search"
                    placeholder='search title here'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className='flex gap-5 mt-5 align-middle justify-center flex-wrap'>
                {   
                    filterData.length > 0 && filterData.map((paste) => {
                        return (
                            <div className=' border p-4 border-black rounded max-w-fit min-w-[400px] ' key={paste?._id}>
                                <div className='pt-4'>
                                    <h1>
                                        {paste.title}
                                    </h1>
                                </div>
                                <div className='pt-4'>
                                    {paste.value}
                                </div>
                                <div className='btns'>
                                    <button onClick={()=>handleEdit(paste)}>
                                            Edit
                                    </button>
                                    <button onClick={()=>handleView(paste)}>
                                            View
                                    </button>

                                    <button onClick={() => handelDelete(paste?._id)}>
                                        Delete
                                    </button>

                                    <button onClick={
                                        () => { handelCopy(paste?.value) }}>
                                        Copy
                                    </button>

                                </div>
                                {/* <div>
                                    {
                                        paste.createdAt
                                    }
                                </div> */}
                            </div>
                        )
                    })
                }
                <h1 className='text-2xl'>
                {
                    filterData.length<=0 ? "No Pastes To Show":""
                }
                </h1>
            </div>
        </div>
    )
}

export default Pastes
