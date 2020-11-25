import React, { useContext } from "react";
import Context from "../store/store";
import { useParams, Link, Redirect } from "react-router-dom";

const ItemDetailView = () => {
  const { id } = useParams();
  const store = useContext(Context);
  if (!store) return null;
  if (id < 1 || id > store.length) return <Redirect to="/items" />;
  const itemsId = id - 1;
  return (
    <>
      <div style={{ margin: "5px" }}>Item nr: {id}</div>
      <div
        style={{
          width: "50vw",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          margin: "5px auto",
        }}>
        <p>Name: {store[itemsId].name}</p>
        <p>Email: {store[itemsId].email}</p>
      </div>
      <div
        style={{
          width: "25vw",
          textDecoration: "none",
          color: "black",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          margin: "5px auto",
        }}>
        <Link to="/items">Back</Link>
      </div>
    </>
  );
};

export default ItemDetailView;
