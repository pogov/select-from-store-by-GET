import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemsListView from "./components/ItemsListView";
import ItemDetailView from "./components/ItemDetailView";
import Context from "./store/store";
import "./App.css";

export default function App() {
  const [store, setStore] = React.useState();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider value={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={ItemsListView} />
          <Route exact path="/items/:id" component={ItemDetailView} />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}
