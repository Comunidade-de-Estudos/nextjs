import { FC } from "react";

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/teste/${context.query.id ?? 0}`);
    const {id} = await res.json();
    return {
        props: {id}
    }
}

const TesteId: FC = (props) => {
    return (<h1>{props.id}</h1>);
}

export default TesteId;