    import React from 'react'
import { useAuth } from '../context/Auth'
import toast from 'react-hot-toast';
    
    function Logout() {
        const {authUser,setAuthuser}=useAuth();
        const handelogout=()=>{
            try {
                setAuthuser({
                    ...authUser,
                    user:null
                })
                setTimeout(()=>{
                    localStorage.removeItem("Users")
                    window.location.reload();
                    toast.success("Logout Successfully!!")
                },500)
            } catch (error) {
                toast.error("Error " + error.massage    )
            }
        }
      return (
        <div>
          <button className='px-3 py-2 bg-red-500 text-white rounded-md curser-pointer' onClick={handelogout}>Logout</button>
        </div>
      )
    }
    
    export default Logout
    