import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, get } from "../services/Endpoint";

const RecentPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  const handleNavigate = (id) => {
    navigate(`/post/${id}`);
  };

  const getpost = async () => {
    try {
      const res = await get("/blog/getpost");
      const data = res.data;
      setPost(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div>
      <h3 className="text-center text-[2rem] py-3 font-medium">Recent Post</h3>

      <div className="grid grid-cols-3 gap-8">
        {post && post.map((post, index) => {
          return(
            <div key={index} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`${BaseUrl}/images/${post.image}`}
                  // src="https://img.freepik.com/free-photo/monstera-plant-green-pot_53876-145188.jpg?t=st=1729632583~exp=1729636183~hmac=8c19e3b3dd239db1617b974e750a5530dcfa025592b4f55971a62b54ca1ca5fc&w=740"
                  alt=""
                />
              </a>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.desc}
              </p>
              <button
                onClick={() => handleNavigate(post._id)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          )
        })}
     
      </div>
    </div>
  );
};

export default RecentPost;
