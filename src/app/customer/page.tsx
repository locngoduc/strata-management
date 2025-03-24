"use client";
import React, { useState } from "react";

export default function Customer() {
 const [countCustomer, setCountCustomer] = useState(0);

 return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   <h1 className="text-4xl text-black font-bold mb-4">Customer</h1>
   <p className="text-2xl text-black mb-4">Count: {countCustomer}</p>
   <div className="space-x-4">
    <button
     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
     onClick={() => setCountCustomer(countCustomer + 1)}
    >
     Increment
    </button>
    <button
     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
     onClick={() => setCountCustomer(countCustomer - 1)}
    >
     Decrement
    </button>
   </div>
  </div>
 );
}

// xu ly du lieu ben server, nhu dang nhap, dang ky, lay du lieu tu database -> use server
// xu ly du lieu ben client, nhu hien thi, an hien, thay doi giao dien -> use client
