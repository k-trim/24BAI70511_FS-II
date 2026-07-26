import { useState, useEffect } from "react";
function useFetch(url) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      });
  }, [url]);
  return posts;
}

export default useFetch;