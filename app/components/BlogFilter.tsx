"use client";

import { useState } from "react";
import { Post } from "./Post";

type BlogFilterProps = {
  blogsAll: any[];
  blogsJavascript: any[];
  blogsReact: any[];
};

export function BlogFilter({ blogsAll, blogsJavascript, blogsReact }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  let filteredBlogs;
  switch (selectedCategory) {
    case "javascript":
      filteredBlogs = blogsJavascript;
      break;
    case "react":
      filteredBlogs = blogsReact;
      break;
    default:
      filteredBlogs = blogsAll;
  }

  return (
    <div>
      
      <div className="flex space-x-4 my-6 mx-6">
        <button
          className={`py-2 px-4 rounded-xl ${selectedCategory === "all" ? " bg-gradient-to-br from-orange-400 to-pink-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`py-2 px-4 rounded-xl ${selectedCategory === "javascript" ? " bg-gradient-to-br from-orange-400 to-pink-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory("javascript")}
        >
          JavaScript
        </button>
        <button
          className={`py-2 px-4 rounded-xl ${selectedCategory === "react" ? " bg-gradient-to-br from-orange-400 to-pink-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory("react")}
        >
          React
        </button>
      </div>

     
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {filteredBlogs.map((blog) => (
          <Post key={blog._id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
