import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <p className="text-center p-2 text-4xl uppercase">Image Upload</p>
          <div className='my-4 flex-col items-center justify-center	'>
            <label for="countries" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">File Path</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>File Path Dropdown</option>
              <option value="US">File Path1</option>
              <option value="CA">File Path2</option>
              <option value="FR">File Path3</option>
              <option value="DE">File Path4</option>
            </select>
          </div>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-3/5 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
              </div>
              <img src={file} width="100%" height="100%" />
              <input type="file" className="opacity-0" onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="flex p-2 space-x-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Submit</button>
          <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
