"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


let page = () => {

    const router = useRouter();
    function goToHomePage(){
        router.push('/');
        console.log("Ok");
    }
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [position, setPosition] = useState('');
    const [gender, setGender] = useState('');

    useEffect(()=>{
        if(typeof window !=undefined){
            console.log("Running useEffect");
            setFirstName(window.localStorage.getItem('first-name'));
            setLastName(window.localStorage.getItem('last-name'));
            setDob(window.localStorage.getItem('dob'));
            setEmail(window.localStorage.getItem('email'));
            setPhoneNumber(window.localStorage.getItem('phone-number'));
            setAddress(window.localStorage.getItem('address'));
            setAddress2(window.localStorage.getItem('address2'));
            setCity(window.localStorage.getItem('city'));
            setState(window.localStorage.getItem('state'));
            setZipcode(window.localStorage.getItem('zipcode'));
            setPosition(window.localStorage.getItem('position'));
            setGender(window.localStorage.getItem('gender'));

        }
    }, []);


  return (
    <div className='h-screen w-screen bg-blue-400 p-4 overflow-auto'>
        <h1 className='text-4xl text-center mb-4 underline decoration-wavy decoration-white underline-offset-8'>Form Submission Details:</h1>
            <main className='main-box w-1/3 mx-auto my-auto bg-red-400 p-4 rounded-lg border-black border-4 border-double'>
                <div className='first-name w-full flex'>
                    <p className='text-xl font-bold w-1/2'>First Name:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{firstName}</p>
                </div>

                <div className='last-name w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Last Name:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{lastName}</p>
                </div>

                <div className='dob w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Date of Birth:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{dob}</p>
                </div>

                <div className='email w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Email:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{email}</p>
                </div>

                <div className='phone-number w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Phone Number:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{phoneNumber}</p>
                </div>

                <div className='address w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Address:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{address}</p>
                </div>

                <div className='address2 w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Address:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{address2}</p>
                </div>

                <div className='city w-full flex'>
                    <p className='text-xl font-bold w-1/2'>City:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{city}</p>
                </div>

                <div className='state w-full flex'>
                    <p className='text-xl font-bold w-1/2'>State:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{state}</p>
                </div>

                <div className='zipcode w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Zip code:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{zipcode}</p>
                </div>

                <div className='applying position w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Applying Position:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{position}</p>
                </div>

                <div className='gender w-full flex'>
                    <p className='text-xl font-bold w-1/2'>Gender:</p>
                    <p className='text-lg w-1/2 overflow-scroll'>{gender}</p>
                </div>
                <br/>
                <button type='button' value="homepage" className=' w-60 h-16 text-m bg-black  text-white p-4 rounded-lg block mx-auto' onClick={goToHomePage}>Go to Homepage</button>
            </main>
    </div>
  )
}

export default page
