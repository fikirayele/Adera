import React, { Fragment, useState } from "react";

const InputUser = () =>{

    const [full_name,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("");
    const [password,setPassword]=useState("");
    
    const onSubmitForm=async e=>{
        e.preventDefault();
       try {
         const body = {full_name,email,role,password};
         const response = await fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
         });
         window.location="/";
         console.log(response);
       } catch (err) {
        console.error(err.message);
       }
    }
    return (
    <Fragment>
        <h1 className="text-center mt-5 text-2xl font-bold">Input User</h1>
        <form className="max-w-md mx-auto mt-4" onSubmit={onSubmitForm}>
            <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-4" value={full_name} onChange={e=> setFullName(e.target.value)} placeholder="Full Name"/>
            <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-4" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email"/>
            <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-4" value={role} onChange={e=> setRole(e.target.value)} placeholder="Role"/>
            <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-4" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Password"/>

            <button className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200">Submit</button>
        </form>
        </Fragment>

    );
};
export default InputUser;