import React, { lazy } from "react";
import Spinner from "./Spinner";

function Random({ Image, loading }) {
  return (
    <div className=" border-4 rounded-xl border-black w-1/2 flex flex-col items-center justify-center">
       
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img loading={lazy} className="m-2" src={Image} alt="img" width={400} height={200} />
      )}
    </div>
  );
}

export default Random;
