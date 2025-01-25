

import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import CrudCard from "../components/crudCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [cruds, setCruds] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  const handleDelete = async (id) => {
    setCruds((prevCruds) => {
      return prevCruds.filter((crud) => crud.id !== id);
    });
  };

  useEffect(() => {
    const fetchCruds = async () => {
      const { data, error } = await supabase
        .from("cruds")
        .select()
        .order(orderBy, { ascending: false });

      if (error) {
        setFetchError("Could not fetch the data");
        setCruds(null);
        console.log(error);
      }
      if (data) {
        setCruds(data);
        setFetchError(null);
      }
    };
    fetchCruds();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {fetchError && (
        <p className="text-center text-red-600 text-lg font-semibold">
          {fetchError}
        </p>
      )}
      {cruds && (
        <div className="flex flex-col items-center gap-8">
          {/* Order By Section */}
          <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700 font-medium">Order by:</p>
            <button
              onClick={() => setOrderBy("created_at")}
              className={`px-4 py-2 rounded-lg font-medium ${
                orderBy === "created_at"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white transition`}
            >
              Time Created
            </button>
            <button
              onClick={() => setOrderBy("title")}
              className={`px-4 py-2 rounded-lg font-medium ${
                orderBy === "title"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white transition`}
            >
              Title
            </button>
            <button
              onClick={() => setOrderBy("rating")}
              className={`px-4 py-2 rounded-lg font-medium ${
                orderBy === "rating"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white transition`}
            >
              Rating
            </button>
            {orderBy}
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {cruds.map((crud) => (
              <CrudCard key={crud.id} crud={crud} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
