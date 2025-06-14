"use client";
import { service } from "@/server";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    service
      .getPosts()
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, []);
  return <div>
   <h1 className="text-4xl font-mono py-6">Client Component</h1>
   {isLoading && "Loading..."}
   {data && data.map((item,i) => (
      <p key={i}>{item.title}</p>
   ))}
  </div>;
};

export default page;
