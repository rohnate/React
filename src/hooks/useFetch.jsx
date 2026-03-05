import { useEffect, useState } from "react";

export function useFetch() {
  const [post, setPost] = useState({});

  async function getpost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3",
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getpost();
  }, []);   // this will insure that the getpost function runs only once, because of empty dependancies.

  return post.title;
}
