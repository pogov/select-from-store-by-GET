import React, { useContext } from "react";
import Context from "../store/store";
import { useParams, Link, Redirect } from "react-router-dom";
import "../App.css";

const ItemDetailView = () => {
  const { id } = useParams();
  const store = useContext(Context);
  if (!store) return null;
  if (id < 1 || id > store.length) return <Redirect to="/items" />;
  const itemsId = id - 1;
  return (
    <>
      <div style={{ margin: "5px" }}>Item nr: {id}</div>
      <div className="item">
        <p>Name: {store[itemsId].name}</p>
        <p>Email: {store[itemsId].email}</p>
      </div>
      <div className="button">
        <Link to="/items">Back</Link>
      </div>
    </>
  );
};

export default ItemDetailView;
