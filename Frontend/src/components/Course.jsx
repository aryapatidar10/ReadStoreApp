import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get("http://localhost:5002/book");
=======
        const res = await axios.get("http://localhost:5001/book");
>>>>>>> 460338ae74743b282e0e61e603ea6a5d528fc3b2
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setBook(res.data);
        } else {
          throw new Error("API response is not an array");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi
            expedita quas quidem nesciunt debitis dolore non aspernatur
            praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi
            fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed
            magnam consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Course;