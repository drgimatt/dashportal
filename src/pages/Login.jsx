import './Landing.css';
import React, { useEffect, useState } from "react";
import myImage from '../assets/landing-logo.png';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';

export const Login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password){
            setError("Please enter the password");
            return;
        }

        setError("")

        //LoginAPI Call
     };


    return (
        <>
        <div className="flex items-center justify center blue-background">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handleLogin}>
                    <h4 className="text-4xl mb-7" style={{color: "black", fontFamily:"LeagueSpartan-Bold"}}>Login</h4>

                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="input-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <PasswordInput 
                        value={password}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                    <button type="submit" className="btn-primary">
                        Login
                    </button>

                    
                </form>
            </div>
        </div>
    </>
    );    

}