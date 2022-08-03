import React, { useState } from 'react';
import './App.css';

import deepai from 'deepai';
// 5f795ad6-5a7b-4a0f-899f-4e44626645ad
deepai.setApiKey('5f795ad6-5a7b-4a0f-899f-4e44626645ad');

const DIR_URL = "http://localhost:3000"; // Need to change this url path.
// also you need to change ele1~ele7.jpgs in public/assets folder.

const images = [
  { "Name": "Abstractish", "URL": window.location.href + "/assets/abstractish.jpg" },
  { "Name": "Starry Night", "URL": window.location.href + "/assets/starrynight.jpg" },
  { "Name": "Matisselike", "URL": window.location.href + "/assets/matisselike.jpg" },
  { "Name": "Misty Moods", "URL": window.location.href + "/assets/mistymoods.jpg" },
  { "Name": "Popart", "URL": window.location.href + "/assets/popart.jpg" },
  { "Name": "Canal du Midi", "URL": window.location.href + "/assets/canaldumidi.jpg" },
  { "Name": "Sunny vacation", "URL": window.location.href + "/assets/sunnyvacation.jpg" },
  { "Name": "Selfportrait", "URL": window.location.href + "/assets/selfportrait.jpg" },
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
    console.log(ele.target.value);
    setStyleImg(ele.target.value);
  }
  const onSubmit = async () => {
    // alert(`style_image: ${styleImg} \n content_image: ${contnetImg}`);
    alert("Submit Success!")
    // onReset();
    let resp = await deepai.callStandardApi("neural-style", {
      style: styleImg,
      content: contnetImg
      // style: "https://media.istockphoto.com/photos/orange-picture-id185284489",
      // content: "https://media.istockphoto.com/photos/assortment-of-colorful-ripe-tropical-fruits-top-view-picture-id995518546"
    });
    setFile(resp.output_url);
  }
  const onReset = () => {
    setFile('');
  }

  return (
    <div className="flex justify-center mt-8 mx-12">
      <div className="rounded-lg  lg:w-1/2">
        <div className="m-4">
          <p className="text-center p-2 text-2xl md:text-4xl uppercase">Erstelle deine Vorschau</p>
          <p>Wir erstellen unsere Kunstwerke aus deinen Bildern mit einer Mischung aus digitalen Tools und menschlicher Kreativität. Dadurch schaffen wir schnelle, aber einzigartige Ergebnisse, da wir teilautomasiert arbeiten können, aber jedes Bild immer auch manuell anpassen und überarbeiten. <br></br> <strong>Wichtig!!! Die hier erstellte Vorschau soll nur einen ersten Eindruck vermitteln. Das reale Ergebnis wird anders aussehen und an deine Wünsche angepasst.</strong></p>
          <div className='my-4 flex-col items-center justify-center	'>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Wähle dein Foto</label>
            <input type="file" id="myfile" name="myfile" onChange={handleChange} className="mb-2" />
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Wähle deinen Style</label>
            <select onChange={styleImageChange} id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value='' disabled selected>Wähle deinen Style...</option>
              {images.map((ele, ind) => (<option key={ind} value={ele.URL}>{ele.Name}</option>))}
            </select>
          </div>
          <div className="flex p-2 my-3 space-x-4">
            <button id="submit" className="px-4 py-2 text-white bg-green-500 rounded shadow-xl" onClick={onSubmit}>Zeige Vorschau!</button>
            <button id="reset" className="px-4 py-2 text-white bg-red-500 rounded shadow-xl" onClick={onReset}>Reset</button>
          </div>
          <div className="flex-col items-center justify-center h-48 lg:h-96 ">
            {/* <input type="file" className="opacity-0" id="myfile" onChange={handleChange} /> */}
            
            {/* <label className="flex flex-col w-auto p-3 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"> */}
            {/* <span className='uppercase text-lg text-center text-10xl'>Content Type</span> */}
            <div className='flex justify-center border-grey border-4 p-10 mb-16'>
              {file ? <img src={file} className="h-48 lg:h-96" id="contentImg" alt="" /> : <svg xmlns="http://www.w3.org/2000/svg"
                className="h-48 lg:h-96 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd" />
              </svg>}
            </div>
            <div className='mb-16 h-4'></div>
            {/* </label> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

