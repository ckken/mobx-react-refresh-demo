import React from "react";
import "./styles.css";
import { useStores } from "./stores";
import { useObserver } from "mobx-react-lite";
export default function App() {
  const store = useStores();
  store.getLang();
  return useObserver(() => (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  ));
}
