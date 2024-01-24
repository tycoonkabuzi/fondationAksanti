import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Outfit', sans-serif;
    margin: 0;
    padding: 0;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
