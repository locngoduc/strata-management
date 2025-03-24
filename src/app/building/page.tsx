"use client";
import React from "react";

export default function Building() {
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
   buildingName: formData.get("buildingName"),
   address: formData.get("address"),
   floors: formData.get("floors"),
   yearBuilt: formData.get("yearBuilt"),
  };
  alert(JSON.stringify(data, null, 2));
 };

 return (
  <>
   <h1 className="text-2xl font-bold mb-4">Building</h1>
   <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
     <label htmlFor="buildingName" className="block text-sm font-medium text-white">
      Building Name:
     </label>
     <input
      type="text"
      id="buildingName"
      defaultValue={"Building ABC"}
      name="buildingName"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
     />
    </div>
    <div>
     <label htmlFor="address" className="block text-sm font-medium text-white">
      Address:
     </label>
     <input
      type="text"
      defaultValue={"Somewhere ABC"}
      id="address"
      name="address"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
     />
    </div>
    <div>
     <label htmlFor="floors" className="block text-sm font-medium text-white">
      Number of Floors:
     </label>
     <input
      type="number"
      min={1}
      defaultValue={1}
      id="floors"
      name="floors"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
     />
    </div>
    <div>
     <label htmlFor="yearBuilt" className="block text-sm font-medium text-white">
      Year Built:
     </label>
     <input
      type="number"
      defaultValue={1900}
      min={1900}
      id="yearBuilt"
      name="yearBuilt"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
     />
    </div>
    <button
     type="submit"
     className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
     Submit
    </button>
   </form>
  </>
 );
}
