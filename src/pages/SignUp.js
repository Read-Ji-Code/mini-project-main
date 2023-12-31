import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setformData] = useState({
        nickname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        telephone: ''
      });
      
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;  
  };

  const isTelephoneValid = (telephone) => {
    const telephoneRegex = /^\d{3}-\d{4}-\d{4}$/; 
    return telephoneRegex.test(telephone);
  };


      const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === 'email' && !isEmailValid(value)) {
            setEmailError('Please enter a valid email address');
          } else if (id === 'password' && !isPasswordValid(value)) {
            setPasswordError('Password must be at least 8 characters long');
          } else if (id === 'telephone' && !isTelephoneValid(value)) {
            setTelephoneError('Please enter a valid telephone number (XXX-XXXX-XXXX)');
          } else if  (id === 'confirmPassword') {
            if (value !== formData.password) {
              setConfirmPasswordError('Passwords do not match');
            } else {
              setConfirmPasswordError('');
            }
          } else {
              setformData({
              ...formData,
              [id]: value
              });  
              if (id === 'email') setEmailError('');
              if (id === 'password') setPasswordError('');
              if (id === 'telephone') setTelephoneError('');  
          };
      }


      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isEmailValid(formData.email)) {
            setEmailError('Please enter a valid email address');
            alert('Please enter a valid email address');
            return;
          }
      
          if (!isPasswordValid(formData.password)) {
            setPasswordError('Password must be at least 8 characters long');
            alert('Password must be at least 8 characters long');
            return;
          }
      
          if (!isTelephoneValid(formData.telephone)) {
            setTelephoneError('Please enter a valid telephone number (XXX-XXXX-XXXX)');
            alert('Please enter a valid telephone number (e.g., XXX-XXXX-XXXX)');
            return;
          }


        try {
          const response = await fetch('http://10.125.121.222:8080/signUp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          // console.log(formData)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log('회원가입 성공:', data);
        } catch (error) {
          console.error('회원가입 실패:', error.message);
        }
      };
    


    return (
        <main>
        <div style={{backgroundSize:"cover", backgroundImage: "url(https://img.freepik.com/free-photo/gwangan-bridge-and-haeundae-in-busan-korea_335224-401.jpg?w=1380&t=st=1702279502~exp=1702280102~hmac=b31c805508275bdbb3180411f381767bc59f9e98fb5094ade6374927a13cabde)"}} className="bg-no-repeat min-w-screen min-h-screen flex items-center justify-center px-5 py-5 ">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex">
                    
                    <div className="py-5 px-5 md:px-5">
                        <div className="text-center mb-10">
                            <h1 className="font-semibold text-3xl text-gray-900">SignUp</h1>
                        
                        </div>
                        <form onSubmit={handleSubmit}>
                        
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">NICKNAME</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" id="nickname" onChange={handleInputChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="HANDSOME" />
                                    </div>
                                </div>

                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">USERNAME</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" id="username" onChange={handleInputChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="FUN TRIP" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">EMAIL</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" id="email" onChange={handleInputChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="jbk@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">PASSWORD</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" id="password" onChange={handleInputChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="********" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">PASSWORD CHECK</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="********" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">TELEPHONE</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" id="telephone" onChange={handleInputChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="010-0000-0000" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-blue-200 text-gray-500 rounded-lg px-3 py-3 font-semibold">GO!</button>
                                </div>
                                <Link to="/">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-blue-200  text-gray-500 rounded-lg px-3 py-3 font-semibold">BACK!</button>
                                </div>
                                </Link>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                
            </div>
        </div>
        </main>
    )
}


export default SignUp;