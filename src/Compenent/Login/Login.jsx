import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate=useNavigate()

  const  handleLogin = async (e) => {
        e.preventDefault()

        try {

            const data = await axios.post("https://reqres.in/api/login",{
                "email": email,
                "password": password
            })
            localStorage.setItem("token",data.data.token)
            navigate("/Dashboard")}
        
        catch (error) {
            console.log("error")
        }
      

        
       
    }
  return (
    <div className= "bg-gray-800 w-full h-screen flex justify-center flex-col items-center">
        <form onSubmit={handleLogin} className="bg-gray-100 p-10 rounded-md w-80 shadow-sm shadow-white">
            <h1 className="font-bold text-3xl text-center mb-10 text-gray-600">Login</h1>
            <div className="mb-5" >
                <label className="text-gray-600 mb-1 block font-bold">Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className="w-full outline-none border border-gray-400 transition-all focus:border-gray-600 shadow-md p-2 rounded-md" />
            </div >
            <div className="mb-5" >
                <label className="text-gray-600 mb-1 block font-bold">Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" className="w-full outline-none border border-gray-400 transition-all focus:border-gray-600 shadow-md p-2 rounded-md" />
            </div>
            <div className="flex justify-center items-center"> 
                <button disabled={email && password ? false:true } className="bg-gray-600 hover:bg-gray-800 transition-all disabled:cursor-not-allowed text-center py-2 rounded-md font-bold disabled:bg-gray-500 text-white block w-3/4">Login</button>
            </div>

        </form>
        <div className="bg-gray-100 w-80 p-10 rounded-md shadow-sm text-gray-600 shadow-white mt-5">
        Don't have an account? <span onClick={()=>{navigate("/register")}} className="font-semibold text-gray-800 hover:text-gray-900 transition-all cursor-pointer">Sign up</span>
        </div>

    </div>
  )
}
