//how many pages needs to be made according fetching data
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((oxido) => {
    return {
      params: { id: oxido.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { oxido: data },
  };
};

export default function Details({ oxido }) {
  return (
    <div>
      <div>Details Users</div>
      <h3>{oxido.name}</h3>
      <p>{oxido.email}</p>
      <p>{oxido.website}</p>
      <p>{oxido.address.city}</p>
    </div>
  );
}
