import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import authService from '../appwrite/auth'
import { login } from '../appwrite/store/authSlice'
import Input from '../components/Input'
import Button from '../components/Button'
import Container from '../components/Container'

function Signup() {
    const naviagte =  useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const[newUser,setNewUser] = useState([])

    const create = async(data)=> {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if (userData){
                    dispatch(login({userData:userData}))
                    naviagte("/")
                }
            }
            
        } catch (error) {
            setError(error)

        }
    }

   
  return (
     <Container className="flex items-center justify-center">
            <div className={`  w-full max-w-lg h-full bg-gray-200 rounded-xl p-10 border border-black/10`}>
                <h1 className="text-center text-bold text-2xl leading-tight m-4"> Create your account</h1>
                
                <p className='text-center mb-3.5'>or sign in with 
                    <span className='p-4'>
                        <Link className='pr-2.5 text-green-900' to='#'>Email</Link>
                    <Link  className='pr-2.5 text-green-900' to='#'>Gmail</Link>
                    <Link  className='pr-2.5 text-green-900' to='#'>Facebook</Link>
                    </span>
                </p>

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5 '>
                        <Input
                        className='bg-white rounded-md h-10 w-110'
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        className='bg-white rounded-md h-10 w-110'
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        type="password"
                        className='bg-white rounded-md h-10 w-110'
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        
                        {/* 
                        <Input type="tel"
                        palceholder = "Enter phone number"
                        {...register("phone",{
                        required:true
                        })}
                        */}
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>

                        <p className="mt-2 mb-4 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    </div>
                </form>
            </div>

    </Container>
  )
}

export default Signup