import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/store";

const ItemComponent = ({ item, i }) => (
  <Link
    to={`/items/${i + 1}`}
    style={{
      display: "block",
      textDecoration: "none",
      color: "black",
      width: "50vw",
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px",
      margin: "5px auto",
    }}
    key={item.name}>
    <p>Name: {item.name}</p>
    <p>Email: {item.email}</p>
  </Link>
);

const ItemsListView = () => {
  const store = useContext(Context);
  if (!store) return null;
  return (
    <>
      <div>Items list</div>
      {store.map((item, i) => (
        <ItemComponent item={item} i={i} key={item.name} />
      ))}
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          Home
        </Link>
      </div>
    </>
  );
};

export default ItemsListView;
