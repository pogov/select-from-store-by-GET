import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/store";
import "../App.css";

const ItemComponent = ({ item, i }) => (
  <Link to={`/items/${i + 1}`} className="link" key={item.name}>
    <p>Name: {item.name}</p>
    <p>Email: {item.email}</p>
  </Link>
);

const ItemsListView = () => {
  const store = useContext(Context);
  if (!store) return null;
  return (
    <>
      <div style={{ margin: "15px" }}>
        <Link to="/" className="button">
          Home
        </Link>
      </div>
      <div>Items list</div>
      {store.map((item, i) => (
        <ItemComponent item={item} i={i} key={item.name} />
      ))}
    </>
  );
};

export default ItemsListView;
