import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
import { useAuth } from '../context/Auth'




function Signup() {
    const {authuser,setAuthuser}=useAuth();
    const navigate=useNavigate()
    console.log(authuser)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()



    const onSubmit = async (data) => {
        const userinfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userinfo

        );
            if (res.data) {
                toast.success('Signup Successfully!');
                setTimeout(()=>{
                    navigate("/")
                    setAuthuser(true)
                },1500)

                

            }
            localStorage.setItem("Users", JSON.stringify(res.data));
        } catch (err) {
            console.error("Error: ", err);
            toast.error('User already exists.');
        }
    }



    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                         
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                           
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your fullname '
                                    className='w-80 px-3 py-1 border rounded:md outline-none'
                                    {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email </span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email '
                                    className='w-80 px-3 py-1 border rounded:md outline-none'
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password </span>
                                <br />
                                <input type="password"
                                    placeholder='Enter your password '
                                    className='w-80 px-3 py-1 border rounded:md outline-none'
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button section */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                                <p className='text-xl'>Have an account?{""} <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
