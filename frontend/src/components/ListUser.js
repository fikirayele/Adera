import React, { Fragment, useEffect,useState } from "react";


import EditUser from "./EditUser";

const ListUser = () =>{
const [users,setUsers]=useState([]);
    const getUsers=async()=>{
        try {
            
            const response= await fetch("http://localhost:5000/users");
            const jsonData = await response.json();
            setUsers(jsonData);

        } catch (err) {
            console.error(err.message);
        }

    };

    useEffect(()=>{
        getUsers();

    }, []);

    console.log(users);
    const handleEdit = (userId) => {
        // Implement edit functionality here, e.g., navigate to an edit form
        console.log("Edit user with ID:", userId);
    };

    const handleDelete = async (userId) => {
        try {
            await fetch(`http://localhost:5000/users/${userId}`, {
                method: "DELETE",
            });
            setUsers(users.filter(user => user.users_id !== userId)); // Update the state to remove deleted user
        } catch (err) {
            console.error(err.message);
        }
    };
    return(
        <Fragment>
            <div>
            <h1 className="text-center mt-5 text-2xl font-bold">List of User</h1>
            <table id="customers" className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">Id</th>
      <th className="border border-gray-300 px-4 py-2">Full Name</th>
      <th className="border border-gray-300 px-4 py-2">Email</th>
      <th className="border border-gray-300 px-4 py-2">Role</th>
      <th className="border border-gray-300 px-4 py-2">Password</th>
      <th className="border border-gray-300 px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user=>(
        <tr key={user.users_id} className="hover:bg-gray-100" >
        <td className="border border-gray-300 px-4 py-2">{user.users_id}</td>
        <td className="border border-gray-300 px-4 py-2">{user.full_name}</td>
        <td className="border border-gray-300 px-4 py-2">{user.email}</td>
        <td className="border border-gray-300 px-4 py-2">{user.role}</td>
        <td className="border border-gray-300 px-4 py-2">{user.password}</td>
        <td className="border border-gray-300 px-4 py-2">
                                    <EditUser/>
                                    <button 
                                        onClick={() => handleDelete(user.users_id)} 
                                        className="px-4 py-2 mx-3 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </td>
      </tr>
    ))}
    
  </tbody>
</table>
            </div>
        </Fragment>
    );
};

export default ListUser;