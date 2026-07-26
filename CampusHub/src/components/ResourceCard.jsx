function ResourceCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{props.resource.title}</h3>
      <p>Category : {props.resource.category}</p>
      <a
        href={props.resource.url}
        target="_blank"
        rel="noreferrer"
      >
        Open Resource
      </a>
      <br />  <br />
      <button onClick={() => props.deleteResource(props.resource.id)}>Delete</button>
    </div>
  );
}

export default ResourceCard;