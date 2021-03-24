export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const {message} = await res.json();
  return {
    props: { message }
  };
}

export default function Home(props) {
  
  return (
    <h1>{props.message}</h1>
  )
}
