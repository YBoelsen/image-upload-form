import React, { useState } from 'react';
import './App.css';

import deepai from 'deepai';
// 5f795ad6-5a7b-4a0f-899f-4e44626645ad
deepai.setApiKey('5f795ad6-5a7b-4a0f-899f-4e44626645ad');

const DIR_URL = "http://localhost:3000"; // Need to change this url path.
// also you need to change ele1~ele7.jpgs in public/assets folder.

const images = [
  { "Name": "Element1", "URL": DIR_URL + "/assets/ele1.jpg" },
  { "Name": "Element2", "URL": DIR_URL + "/assets/ele2.jpg" },
  { "Name": "Element3", "URL": DIR_URL + "/assets/ele3.jpg" },
  { "Name": "Element4", "URL": DIR_URL + "/assets/ele4.jpg" },
  { "Name": "Element5", "URL": DIR_URL + "/assets/ele5.jpg" },
  { "Name": "Element6", "URL": DIR_URL + "/assets/ele6.jpg" },
  { "Name": "Element7", "URL": DIR_URL + "/assets/ele7.jpg" },
];

function App() {
  const [file, setFile] = useState();
  const [styleImg, setStyleImg] = useState('');
  const [contnetImg, setContentImg] = useState();
  const handleChange = (e) => {
    //   console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setContentImg(URL.createObjectURL(e.target.files[0]));
  }
  const styleImageChange = (ele) => {
    setStyleImg(ele.target.value);
  }
  const onSubmit = async () => {
    // alert(`style_image: ${styleImg} \n content_image: ${contnetImg}`);
    alert("Submit Success!")
    onReset();
    let resp = await deepai.callStandardApi("neural-style", {
      // style: styleImg,
      // content: contnetImg
      style: "https://media.istockphoto.com/photos/orange-picture-id185284489",
      content: "https://media.istockphoto.com/photos/assortment-of-colorful-ripe-tropical-fruits-top-view-picture-id995518546"
    });
    console.log(resp);
  }
  const onReset = () => {
    setFile('');
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-lg  lg:w-1/2">
        <div className="m-4">
          <p className="text-center p-2 text-4xl uppercase">Generate Magic Image</p>
          <div className='my-4 flex-col items-center justify-center	'>
            <label for="countries" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Style Image Types</label>
            <select onChange={styleImageChange} id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Style</option>
              {images.map((ele, ind) => (<option key={ind} value={ele.URL}>{ele.Name}</option>))}
            </select>
          </div>
          <div className="flex p-2 my-3 space-x-4">
            <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl" onClick={onSubmit}>Submit</button>
            <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl" onClick={onReset}>Reset</button>
          </div>
          <div className="flex-col items-center justify-center w-auto h-96">
            {/* <input type="file" className="opacity-0" id="myfile" onChange={handleChange} /> */}
            <input type="file" id="myfile" name="myfile" onChange={handleChange} className="mb-2" />
            <label className="flex flex-col w-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <span className='uppercase text-lg text-center'>Content Type</span>
              <img src={file} className = "" width="100%" id="contentImg" alt = ""/>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
