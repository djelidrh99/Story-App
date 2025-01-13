import { createSlice } from '@reduxjs/toolkit'
import { differenceInMilliseconds} from "date-fns";

const initialState = []

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addNewStory: (state,action) => {
        state.push({story:action.payload.story,date:new Date().toISOString()})          
        localStorage.setItem("story",JSON.stringify(state))
           
    },
    removeStoryAfter24Hours :(state)=>{
        const  storyUpdate =  state.filter((item,index)=>{
            return (differenceInMilliseconds(new Date(), item.date)/1000)<86400
        })
        if(JSON.stringify(state)!== JSON.stringify(storyUpdate)) {
        
            localStorage.setItem("story",JSON.stringify(storyUpdate))
            return storyUpdate
        }
        

    },
    chargedStoryFromLocalStorage:(state) =>{
        return  JSON.parse(localStorage.getItem("story"))

    }
   
  },
})

// Action creators are generated for each case reducer function
export const { addNewStory,removeStoryAfter24Hours,chargedStoryFromLocalStorage} = storySlice.actions

export default storySlice.reducer