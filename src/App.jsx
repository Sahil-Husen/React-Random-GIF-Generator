import React, { useEffect, useState } from "react";
import bgimg from "./assets/background-image.png";
import Random from "./components/Random";
import axios from "axios";
const apiKey = import.meta.env.VITE_APP_GIPHY_API_KEY;

function App() {
  const [Image, setImage] = useState("");
  const [loading,setLoading] = useState(false)

  
 

  async function handleClick  () {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    setLoading(true)
    const data = await axios.get(url);
    // console.log(data.data?.data?.images.downsized);
    const fetchedImage = data?.data?.data?.images?.downsized?.url;
    setImage(fetchedImage);
    setLoading(false)
    
  };

  useEffect(() => {
    // random();
    handleClick()
     
  }, []);
  return (
    <div
      className="overflow-scroll h-screen w-screen  absolute bg-center bg-no-repeat bg-cover  bg-white "
     style={{ backgroundImage: `url(${bgimg})` }} 
    >
      <h1 className=" relative  text-blue-800 underline font-bold text-4xl  text-center pt-10 hover:text-blue-900 hover:transition-all ">
        GIF Generator
      </h1>
      <div className="mt-10  flex flex-col items-center w-11/12  p-10 ml-10 mr-10 overflow-hidden ">
        
        <Random image={Image} loading={loading} setLoadin={setLoading}  Image={Image} ></Random>
        <button
          onClick={() => handleClick()}
          className=" cursor-pointer m-5 bg-blue-600 p-2 rounded hover:bg-blue-500 transition-all hover:text-black hover:transition-all "
        >
          Generate{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
