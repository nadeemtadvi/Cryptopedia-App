import React, {  useState } from "react";
import toast from "react-hot-toast";
import { post } from "../../services/Endpoint";

const Addpost = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (image) {
        formData.append("postimage", image);
      }
      formData.append("title", title);
      formData.append("desc", description);

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const res = await post("/blog/create", formData);
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setImage(null);
        setDescription("");
        document.getElementById("image").value = "";
      }else {
        toast.error("Failed to create post. Try again.");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!")
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Add New Post
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-3 py-2 border rounded-lg border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your post description here"
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpost;
