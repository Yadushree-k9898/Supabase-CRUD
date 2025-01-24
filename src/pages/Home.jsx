import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import CrudCard from "../components/crudCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [cruds, setCruds] = useState(null);

  useEffect(() => {
    const fetchCruds = async () => {
      const { data, error } = await supabase.from("cruds").select();

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
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {cruds.map((crud) => (
              <CrudCard key={crud.id} crud={crud} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
