import { useEffect, useState } from "react";

//* custom hook for fetching the post title which whill work only for specific url.
export function usePostTitle() {
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
  }, []); // this will insure that the getpost function runs only once, because of empty dependancies.

  return post.title;
}

//* more generic useFetch hook which will work for every url which returns any data.
export function useFetch(url) {
  const [data, setData] = useState({});

  async function getData() {
    const responseData = await fetch(url);
    const jsonData = await responseData.json();
    setData(jsonData);
  }

  useEffect(() => {
    getData();
  }, []);

  return data; // this data will be in the form of object if the url return it in object form
}
