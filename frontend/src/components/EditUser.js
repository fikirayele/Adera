import React, { Fragment, useState } from "react";

function openModal() {
    document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}
const EditUser = () =>{  
    return (
        <Fragment> 
        
        <button 
            type="button" 
            class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none" 
            onclick="openModal()">
           Edit
        </button>
        
        
        <div id="myModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden">
            <div class="bg-white rounded-lg shadow-lg max-w-lg w-full">
                
                <div class="flex justify-between items-center p-4 border-b">
                    <h4 class="text-lg font-semibold">Modal Heading</h4>
                    <button type="button" class="text-gray-600 hover:text-gray-800" onclick="closeModal()">&times;</button>
                </div>
        
                
                <div class="p-4">
                    <p>Modal body content goes here...</p>
                </div>
        
               
                <div class="flex justify-end p-4 border-t">
                    <button type="button" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
        
           
    </Fragment>

    );
};
export default EditUser;