"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const page = () => {

const router = useRouter();
const [firstName, setFirstName] = useState('First Name');
const [lastName, setlastName] = useState('Last Name');
const [dob, setDob] = useState('Date')
const [gender, setGender] = useState("Select your gender");
const [email, setEmail] = useState("Ex: rahul@gmail.com");
const [phoneNumber, setPhoneNumber] = useState("Please enter a valid phone number");
const [city, setCity] = useState('Select your city');
const [state, setState] = useState('Select your state');
const [zipcode, setZipcode] = useState('Postal / Zip code');

//Wrapping all the state variables in a single object. 
const [status, setStatus] = useState({
  statusFirstName:'',
  statusLastName:'',
  statusEmail:'',
  statusPhoneNumber:'',
  statusCity:'',
  statusState:'',
  statusZipcode:'',
  statusGender:''
})


  function checkFirstName(e){
    let firstName = e.target.value;
    let statusFirstName;
    //Use RegEx to know if the first name has only characters from a-z or A-Z
    /^[A-Za-z]*$/.test(firstName) ? statusFirstName=true : statusFirstName=false;
    if(statusFirstName && firstName.length>0){
        setFirstName('✅First name');
        setStatus({...status, statusFirstName:true});
    }
    else{
      setFirstName('❎Only alphabets');
      setStatus({...status, statusFirstName:false});
    } 
  }

  function checkLastName(e){
    let lastName = e.target.value;
    //Primarily set Last name status to true
    let statusLastName = true;
    for(let i=0;i<lastName.length; i++){
      //Check if any of it is a special character. If it is, then change status and apply break 
      if(lastName[i].toLowerCase() === lastName[i].toUpperCase()){
        statusLastName=false;
          break;
      }
    }
    //console.log(statusLastName);
      if(statusLastName && lastName.length>0){
        setlastName('✅Last name');
        setStatus({...status, statusLastName:true});
      }
      else{
        setlastName('❎Only alphabets');
        setStatus({...status, statusLastName:false});
      } 
  }

  function checkDOB(e){
    const dob = e.target.value;
    //console.log(dob);
    if(dob != ''){
        setDob('✅ DOB selected');
    }
    else{
      setDob('❎Select your DOB');
    }
  }

  function checkEmail(e){
    let email = e.target.value;
    let statusEmail;
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? statusEmail=true : statusEmail=false;
    if(statusEmail){
      setEmail('✅Email validated');
      setStatus({...status, statusEmail:true});
    }
    else{
      setEmail('❎Enter valid email');
      setStatus({...status, statusEmail:false});
    }
  }

  function checkPhoneNumber(e){
    let phoneNumber = e.target.value;
    let statusPhoneNumber;
    //Check if the phoneNumber has only digits using RegEx
    /^\d+$/.test(phoneNumber) ? statusPhoneNumber=true : statusPhoneNumber=false;
    
    //console.log(statusPhoneNumber);
    if(statusPhoneNumber===true && phoneNumber.length===10){
      setPhoneNumber('✅Phone Number');
      setStatus({...status, statusPhoneNumber:true});
    }
    else{
      setPhoneNumber('❎Only 10 numbers');
      setStatus({...status, statusPhoneNumber:false});
    }
  }

  function checkCity(e){
    let city = e.target.value;
    let statusCity;
    if(city != 'Select City'){
      statusCity=true;
    }
    else{
      statusCity = false;
    }
    if(statusCity){
      setCity('✅City selected');
      setStatus({...status, statusCity:true});
    }
    else{
      setCity('❎Select your city');
      setStatus({...status, statusCity:true});
    }
  }

  function checkState(e){
    let state = e.target.value;
    let statusState;
    if(state != 'Select State'){
      statusState = true;
    }
    else{
      statusState = false;
    }
    if(statusState){
      setState('✅State selected');
      setStatus({...status, statusState:true});
    }
    else{
      setState('❎Select your state');
      setStatus({...status, statusState:false});
    }
  }

  function checkZipcode(e){
    let zipcode = e.target.value;
    let statusZipcode;
    /^\d+$/.test(zipcode) ? statusZipcode=true : statusZipcode=false;
    if(statusZipcode== true && zipcode.length>=6){
      setZipcode('✅Zipcode');
      setStatus({...status, statusZipcode:true});
    }
    else{
      setZipcode('❎Enter correct zipcode');
      setStatus({...status, statusZipcode:false});
    }
  }

  function getGender(){
    let genders = document.getElementsByName('gender');
    let selectedGender;
    for(let i=0; i<genders.length; i++){
      if(genders[i].checked){
        selectedGender = genders[i].value;
      }
    }
    //console.log('selectedGender='+selectedGender);
    if(selectedGender !== undefined){
      setGender('✅'+selectedGender);
      setStatus({...status,statusGender:true });

    }
    else{
      setGender('❎Select any gender');
      setStatus({...status,statusGender:false });
    }
  }

  function saveDetails(e){
    e.preventDefault();

    let checkAllElements = [];
    checkAllElements.push(status.statusFirstName);
    checkAllElements.push(status.statusLastName);
    checkAllElements.push(status.statusEmail);
    checkAllElements.push(status.statusPhoneNumber);
    checkAllElements.push(status.statusCity);
    checkAllElements.push(status.statusState);
    checkAllElements.push(status.statusZipcode);
    checkAllElements.push(status.statusGender);
    console.log(checkAllElements);

    let statusOfAll;
    //console.log("--------------");
    //Print all elements just for easy debugging
    checkAllElements.forEach(function(ele){
      console.log(ele);
    })
    //console.log("---------------");
    
    //Check if all elements are validated
    statusOfAll = checkAllElements.every((element)=>element===true);
    console.log("statsofALl ="+ statusOfAll);

    if(statusOfAll === true){
      //If all elements are validated, store the data in local Storage
      if(typeof window != undefined){
        window.localStorage.setItem("first-name", document.getElementById('first-name').value);
        window.localStorage.setItem("last-name", document.getElementById('last-name').value);
        window.localStorage.setItem("dob", document.getElementById('dob').value);
        window.localStorage.setItem("email", document.getElementById('email').value);
        window.localStorage.setItem("phone-number", document.getElementById('phone-number').value);
        window.localStorage.setItem("address", document.getElementById('address').value);
        window.localStorage.setItem("address2", document.getElementById('address2').value);
        window.localStorage.setItem("city", document.getElementById('city').value);
        window.localStorage.setItem("state", document.getElementById('state').value);
        window.localStorage.setItem("zipcode", document.getElementById('zipcode').value);
        window.localStorage.setItem("position", document.getElementById('position').value);
        window.localStorage.setItem("gender", gender.slice(1)); 
  
      }
      //Redirect to results page after storing form details in localStorage
      try {
        router.push('/results');
      } catch (error) {
        console.error('Error while redirecting:', error);
      }
    }
    //Show alert if any details are missing
    else{
      window.alert("Some details are incorrect. Please fill the form correctly.")
    }

  }

  return (
    <div className='h-screen w-screen bg-blue-400 p-4 overflow-auto'>
      <h1 className='text-4xl text-center mb-4 underline decoration-wavy decoration-white underline-offset-8'>Candidate Application Form</h1>
      <main className='main-box w-1/3 mx-auto my-auto bg-red-400 p-4 rounded-lg border-black border-4 border-double'>
          <form onSubmit={saveDetails}> 
            <div className='flex'>
              <div className='name w-1/2 m-1'>
                <label htmlFor="Full Name">Full Name</label>
                <br/>
                <div className='flex'>
                  <div className='first-name-box mr-1'>
                    <input type='text' id='first-name' name='first-name' onChange={checkFirstName} className=' w-full' required/>
                    <br/>
                    <label htmlFor="first-name">{firstName}</label>

                  </div>
                  <div className='last-name-box'>
                    <input type='text' id='last-name' name='last-name' onChange={checkLastName} className='w-full' required/>
                    <br/>
                    <label htmlFor="last-name">{lastName}</label>
                  </div>
                </div>
              </div>

              <div className='DOB w-1/2 m-1'>
                <h4>Date of Birth</h4>
                <input type='date' name='dob' id='dob'  onChange={checkDOB} className='w-full' placeholder='DD-MM-YY' required/>
                <label htmlFor="dob">{dob}</label>
              </div>
            </div>
            <br/>

            <div className='flex'>
              <div className='email w-1/2 m-1'>
                <label htmlFor="email">Email</label><br/>
                <input type='email' name='email' id='email' className='w-full' onChange={checkEmail} required/><br/>
                <label htmlFor="email" className=' overflow-scroll'>{email}</label>
              </div>

              <div className='phone-number w-1/2 m-1'>
                <label htmlFor="phone">Phone Number</label><br/>
                <input type='phone' name='phone-number' id='phone-number' className='w-full' onChange={checkPhoneNumber} required/><br/>
                <label htmlFor="phone-number">{phoneNumber}</label>
              </div>
            </div>
            <br/>

            <div className='address'>
              <label htmlFor="address">Address</label><br/>
              <input type='text' name='address' id='address' className='w-full' required/><br/>
              <label htmlFor="address">Street Address</label>
              <br/>
              <br/>
              <input type='text' name='address2' id='address2' className='w-full' required/><br/>
              <label htmlFor="address2">Street Address Line 2</label>
            </div>
            <br/>

            <div className='flex'>
              <div className='city w-1/2 m-1'>
                <select name='city' id='city' className='w-full' onChange={checkCity} required> 
                  <option>Select City</option>
                  <option>Kurnool</option>
                  <option>Vijayawada</option>
                  <option>Vizag</option>
                </select><br/>
                <label htmlFor="city">{city}</label>
              </div>

              <div className='state w-1/2 m-1'>
                <select name='state' id='state' className='w-full' onChange={checkState} required>
                  <option>Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Telangana</option>
                  <option>Karnataka</option>
                </select><br/>
                <label htmlFor="city">{state}</label>
              </div>
            </div>
            <br/>

            <div className='zip-code'>
              <input type='number' name='zipcode' id='zipcode' className='w-full' onChange={checkZipcode} required/><br/>
              <label htmlFor="zipcode">{zipcode}</label>
            </div>
            <br/>


            <div className='applying-position'>
              <label htmlFor="position">Applying Position</label><br/>
            <input type='text' name='position' id='position' className='w-full' required/>
            </div>
            <br/>

            <div className='gender'>
              <input type='radio' name='gender' value="Female" id='female' onChange={getGender} required/>
              <label htmlFor="female" className='ml-1 mr-8'>Female</label>
              <input type='radio' name='gender' value="Male" id='male' onChange={getGender} required/>
              <label htmlFor="male" className='ml-1 mr-8'>Male</label>
              <br/>
              <label>{gender}</label>
            </div>
            <br/>

            <div className='resume w-full'>
              <label htmlFor='resume'>Upload your Resume</label>
              <br/>
              <div className='w-full'>
                  <input type='file' id='resume' required/><br/>
              </div>
            </div>
            <br/>

              <div className='buttons flex justify-between'>
                <button type='reset' value="reset" className='w-28 h-16 text-m bg-black  text-white p-4 mx-4 rounded-lg'>Reset</button>
                <button type='submit' value="submit" className='w-28 h-16 text-m bg-white  text-black p-4 mx-4 rounded-lg'>Submit</button>
              </div>
            
          </form>
      </main>
    </div>
  )
}

export default page