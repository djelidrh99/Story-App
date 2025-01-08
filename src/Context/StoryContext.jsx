import { createContext, useContext, useState } from "react";

const FileContext=createContext([])
const setFileContext =createContext(null)



export default function StoryProvider({children}){
    const [file,setFile]=useState([])

    return(
        <FileContext.Provider value={file}>
            <setFileContext.Provider value={setFile}>
{children}
            </setFileContext.Provider>
        </FileContext.Provider>
    )
}


export const useFile= ()=>useContext(FileContext)
export const useSetFile=()=>useContext(setFileContext)