import React, { Component, useState } from "react";
import '../styles/style.css';
 
const GeneralInformation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                setName(e.target.value);
            break;
            case 'email':
                setEmail(e.target.value);
             break;
            case 'phone-number':
                setPhoneNumber(e.target.value);
                break;
            default:
                break;
        }
        
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }


    const onEdit = (e) => {
        e.preventDefault();
        setIsSubmitted(false);
    }

    
        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name:
                            <input onChange={handleChange} value={name} type="text" id="name" />
                        </label>
                        <label htmlFor="email">Email:
                        <input onChange={handleChange} value={email} type="text" id="email"/>
                        </label>
                        <label htmlFor="phone-number">Phone Number:
                        <input onChange={handleChange} value={phoneNumber} type="text" id="phone-number"/>
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                    
                </div>
            )
        }
        else if (isSubmitted === true) {

                
            return (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                    
                    <button onClick={onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }


export default GeneralInformation;