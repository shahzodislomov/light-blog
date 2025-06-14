import { service } from "@/server";
import React from "react";

async function page() {
  const data = await service.getPosts();
  return (
    <div>
      <h1 className="text-4xl font-mono py-6">Server Component</h1>
      {data && data.map((item, i) => <p key={i}>{item.title}</p>)}
      </div>
  );
}

export default page;
