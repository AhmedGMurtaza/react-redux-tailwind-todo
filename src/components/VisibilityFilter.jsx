import React from "react";
import { COMPLETED, PENDING, ALL } from "../constants";

function VisibilityFilter({ handleVisibility, visibility }) {
  return (
    <div className="rounded-md border-2 border-gray-300 p-4 flex flex-col text-center">
      <h3 className="text-md uppercase ">Visibility filters</h3>
      <div className="text-md text-indigo-600 w-full flex justify-center space-around mt-2">
        <span
          className={`${
            visibility === ALL ? "" : "line-through"
          } mr-3 cursor-pointer`}
          onClick={() => handleVisibility(ALL)}
        >
          All
        </span>
        <span
          className={`${
            visibility === PENDING ? "" : "line-through"
          } text-orange-500 mr-3 cursor-pointer`}
          onClick={() => handleVisibility(PENDING)}
        >
          Pending
        </span>
        <span
          className={`${
            visibility === COMPLETED ? "" : "line-through"
          } text-green-700 mr-3 cursor-pointer  flex items-center `}
          onClick={() => handleVisibility(COMPLETED)}
        >
          Completed
        </span>
      </div>
    </div>
  );
}

export default VisibilityFilter;
