import ResourceCard from "./ResourceCard";
function ResourceList(props) {
  return (
    <div>
      {props.resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          deleteResource={props.deleteResource}
        />
      ))}
    </div>
  );
}
export default ResourceList;