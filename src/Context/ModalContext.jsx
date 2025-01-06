import { createContext, useState } from "react";
import { useContext } from "react";

const ModalContext = createContext(null);
const useModalContext = createContext(null);

 const ModalProvider=({children})=>{
    const [modal,setModal]=useState(false);

  

    return (
        <useModalContext.Provider value={setModal} >
        <ModalContext.Provider value={modal} >
            {children}
        </ModalContext.Provider>
        </useModalContext.Provider>
    )
}

export default ModalProvider

export const useModal =()=>{
    return useContext(ModalContext);
}

export const useSetModal =()=>{
    return useContext(useModalContext);
}


