import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { TbSocial } from "react-icons/tb"
import { CustomButton, Loading, TextInput } from '../components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BgImage } from '../assets';
import { BsChatDotsFill } from 'react-icons/bs';


const Login = () => {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async(data) => {};

    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
            <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 
        flex bg-primary rpunded-xl overflow-hidden shadow-xl">

                <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
                    <div className="w-full flex gap-2 items-center mb-6">
                        <div className="p-2 bg-[#f97316] rounded text-white">
                            <BsChatDotsFill />
                        </div>
                        <span className='text-2xl text-[#f97316] ' font-semibold>Networkgram</span>
                    </div>
                    <p className='text-ascent-1 text-base font-semibold'>Log in to your accoount</p>
                    <span className='text-sm mt-2 text-ascent-2'>Welcome back</span>
                    <form className='py-8 flex flex-col gap-5'
                    onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            name="email"
                            placeholder="email@example.com"
                            label="Email Address"
                            type="email"
                            register={
                                register("email", {
                                    required: "Email address is required"
                                })}
                            styles='w-full rounded-full'
                            labelStyle='m1-2'
                            error={errors.email ? errors.email.message : ""}
                        />

                        <TextInput
                            name="password"
                            placeholder="password"
                            label="password"
                            type="password"
                            register={
                                register("password", {
                                    required: "password is required"
                                })}
                            styles='w-full rounded-full'
                            labelStyle='m1-2'
                            error={errors.password ? errors.password.message : ""}
                        />

                        <Link to="/reset-password"
                            className='text-sm text-right text-[#f97316] font-semibold'>Forget Password?
                        </Link>

                        {
                            errMsg?.message && (
                                <span className={`text-sm ${errMsg?.status == "failed"
                                    ? "text-[#f64949fe]"
                                    : "text-[#2ba150fe]"
                                    } mt-0.5`}
                                >
                                    {errMsg?.message}
                                </span>
                            )
                        }
                        {
                            isSubmitting ? (
                                <Loading />
                            ) : (<CustomButton
                                type="submit"
                                containerStyles={`inline-flex justify-center rounded-md bg-[#f97316] px-8 py-3 text-sm font-medium text-white outline-none`}
                                title="Login"
                            />
                            )}
                    </form>
                    <p className='text-ascent-2 text-sm text-center'>
                        Don't have an account?
                        <Link
                            to='/register'
                            className='text-[#f97316] font-semibold ml-2 cursor-pointer'
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
                <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-[#f97316]'>
                    <div className='relative w-full flex items-center justify-center'>
                        <img src={BgImage}
                            alt="Bg Image"
                            className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' />
                    </div>

                    <div className='mt-16 text-center'>
                        <p className='text-white text-base'>
                            Connect with friends & have share for fun
                        </p>
                        <span className='text-sm text-white/80'>
                        Share memories with friends and the world.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
