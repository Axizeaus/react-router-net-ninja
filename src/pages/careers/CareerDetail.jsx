import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetail() {
  const { id } = useParams();
  const details = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career details for {details.title}</h2>
      <p>starting salary : {details.salary}</p>
      <p>location : {details.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        impedit, nesciunt perferendis ut inventore nisi rem molestiae quae illum
        pariatur molestias est iste ipsam. Cupiditate magnam ipsa quaerat atque
        numquam?
      </div>
    </div>
  );
}

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not fetch this career detail.");
  }
  return res.json();
};
