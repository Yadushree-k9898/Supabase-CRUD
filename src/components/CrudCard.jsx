import React from "react";
import { Link } from "react-router-dom";


const CrudCard = ({ crud }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-gray-800">{crud.title}</h3>
      <p className="text-gray-600 mt-2">{crud.method}</p>
      <div className="mt-4">
        <span className="text-sm font-medium text-gray-700">Rating:</span>
        <span className="text-blue-600 font-bold ml-1">{crud.rating}</span>
        <div>
          <Link to={"/" + crud.id}>
            <i className="material-icons">edit</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CrudCard;
