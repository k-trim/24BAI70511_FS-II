import { useState } from "react";
import Navbar from "../components/Navbar";
import ResourceList from "../components/ResourceList";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import API from "../services/api";

function Resources() {

  const [resources, saveResources] = useLocalStorage("resources", []);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const posts = useFetch(API);

  function addResource() {
    if (title === "") 
    {
      alert("Enter Resource Title");
      return;
    }

    const resource = {
      id: Date.now(),
      title: title,
      category: category,
      url: url
    };
    saveResources([...resources, resource]);
    setTitle("");
    setCategory("");
    setUrl("");
  }

  function deleteResource(id) {


    const newResources = resources.filter(
      (resource) => resource.id !== id
    );
    saveResources(newResources);
  }

  let displayResources = resources;
  if (search !== "") {
    displayResources = displayResources.filter((resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filter !== "All") {
    displayResources = displayResources.filter(
      (resource) => resource.category === filter
    );
  }

  return (
    <div>
      <Navbar />
      <h2>Resource Library</h2>
      <input
        type="text"
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <br/><br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br/> <br />

      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br/><br/>

      <button onClick={addResource}>Add Resource</button>
      <hr />
      <input
        type="text"
        placeholder="Search Resource"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br/><br />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>React</option>
        <option>Java</option>
        <option>Python</option>
        <option>DBMS</option>
      </select>

      <hr />
      <ResourceList
        resources={displayResources}
        deleteResource={deleteResource}
      />

      <hr />

      <h2>First 10 Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Resources;