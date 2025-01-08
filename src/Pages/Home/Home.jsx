import { useEffect,  useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { useSetModal } from "../../Context/ModalContext";
import { subHours,differenceInHours ,differenceInMilliseconds} from "date-fns";
import { useFile,useSetFile } from "../../Context/StoryContext";

import './Home.css';




export default function Home () {
    // const [file, setFile] = useState([]);
    const file=useFile()
    const setFile=useSetFile()
    const setModal=useSetModal();

    //  const i = file? differenceInMilliseconds(new Date(), file[0].date)/1000:0
    //  console.log(i);

    const handleFileChange = (e) => {
        const validateFile = ["image/jpeg","image/png","image/jpg"];
        if(validateFile.includes(e.target.files[0].type)&&e.target.files[0].type){
            setFile([...file,{story:URL.createObjectURL(e.target.files[0]),date:new Date()}]  );
        }
        else{
            alert("Please select image file only");
        }
           
    }


    useEffect(()=>{
       const storyUpdate =  file.filter((item,index)=>{
        return (differenceInMilliseconds(new Date(), item.date)/1000)<20
    })
    if (JSON.stringify(storyUpdate) !== JSON.stringify(file)) {
        setFile(storyUpdate);
    }
   
     
    },[file]) 
 


   

    

  return (
    
     
    <div className="flex flex-col sm:px-10 pt-2 gap-5">
        <div>
            <ul className="flex gap-2 overflow-x-auto scrollbar whitespace-nowrap">
                <li className="sm:w-16  sm:h-16 w-14 h-14 cursor-pointer flex-shrink-0 rounded-full border-2 border-gray-400 flex justify-center items-center">

                <input onChange={handleFileChange} type="file" id="file-input" className="hidden" />

                    <label htmlFor="file-input" className="w-full h-full flex justify-center items-center cursor-pointer" >
                    <PiPlusBold />
                     </label>
                  </li>
                  {file && file.map((item,index)=>{
                    return (
                    <li onClick={()=>{setModal(true)}} key={index} className="sm:w-16  sm:h-16 w-14 h-14 cursor-pointer  flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5  overflow-hidden flex justify-center items-center">
                        <img className="w-full h-full border-2 border-white  rounded-full object-cover" src={item.story} alt="img" />
                    </li>
    
                    )
                  })  }

                
            </ul>
        </div>
        <div className="">
              post
        </div>
    </div>
  )
}
