import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { data } from 'react-router-dom';
import TextInput from './TextInput';
import Loading from './Loading';
import CustomButton from './CustomButton';
import { UpdateProfile } from '../redux/userSlice';

const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [picture, setPicture] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm ({
        mode: "onChange",
        defaultValues: { ...user },
    });

    const onSubmit = async(data) => {};
    const handleClose = () => {
        dispatch(UpdateProfile(false));
    };
    const handleSelect = (e) => {
        setPicture(e.target.files[0]);
    };

  return (
    <>
    <div className='fixed z-50 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity '>
                <div className='absolute inset-0 bg-[#000] opacity-70'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
            &#8203;

                <div className='inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden
                 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
                 role='dialog'
                 aria-modal='true'
                 aria-labelledby='modal-headline'>
                    <div className='flex justify-between px-6 pt-5 pb-2'>
                        <label htmlFor="name"
                        className='block font-medium text-xl text-ascent-1 text-left'> Edit Profile</label>
                        <button className='text-ascent-1'
                        onClick={handleClose}>
                            <MdClose size={20} />
                        </button>
                    </div>
                    <form 
                    className='px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6'
                    onSubmit={handleSubmit(onSubmit)}>

                        <TextInput
                            name="firstname"
                            placeholder="First Name"
                            label="First Name"
                            type="text"
                            register={
                                register("firstname", {
                                    required: "First name is required"
                                })}
                            error={errors.firstname ? errors.firstname?.message : ""}
                        />
                         <TextInput
                            name="lastname"
                            placeholder="Last Name"
                            label="Last Name"
                            type="text"
                            register={
                                register("lastname", {
                                    required: "Last name is required"
                                })}
                            error={errors.lastname ? errors.lastname?.message : ""}
                        />
                         
                        <TextInput
                            name='profession'
                            placeholder="Profession"
                            label="profession"
                            type="text"
                            register={
                                register("profession", {
                                    required: "Profession is required"
                                })}
                            styles='w-full'
                            error={errors.profession ? errors.profession.message : ""}
                        />

                        <TextInput
                            name="Location"
                            placeholder="Location"
                            label="Location"
                            type="text"
                            register={
                                register("location", {
                                    required: "Location do not match"
                                })}
                            styles='w-full'
                            error={errors.location ? errors.location.message : ""}
                        />

                        <label 
                        className='flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4'
                        htmlFor="imgUpload">
                            <input type="file"
                            className=''
                            id='imgUpload'
                            onChange={(e) => handleSelect(e)}
                            accept='.jpg, .png, .jpeg' />
                        </label>

                        {
                            isSubmitting ? (
                                <Loading />
                            ) : (<CustomButton
                                type="submit"
                                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                                title="Submit"
                            />
                            )}
                    </form>
                 </div>
        </div>
      
    </div>
    </>
  )
}

export default EditProfile;
