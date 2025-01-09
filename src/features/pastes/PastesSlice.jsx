import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")?JSON.parse(localStorage.getItem("pastes")):[]
}

export const pastesSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    create: (state,action) => {
     const paste = action.payload;
     if (!paste.title) {
         toast("Title needed")
        }
        else if(!paste.value)
        {
            toast("Value needed")
        }
        else{
            state.pastes.push(paste);
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
            toast.success("Paste Created Successfully")
        }
        
    },
    edit: (state,action) => {
        const paste = action.payload;
        const index = state.pastes.findIndex((item)=>item._id === paste._id)

        if(index >= 0)
        {
            state.pastes[index]=paste;
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
        }
        toast.success("Paste Updated Successfully!")
    },
    remove: (state, action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item)=>item._id === pasteId)

        if(index >= 0)
        {
            state.pastes.splice(index,1);
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
            toast.success("Paste Removed! ")
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { create, edit,remove } = pastesSlice.actions

export default pastesSlice.reducer