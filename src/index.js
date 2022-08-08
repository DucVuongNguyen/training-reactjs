import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./Page/Contact/Contact";
//Cấu hình react-router-dom
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import ReactForm from "./ReactForm/ReactForm"; 
import Page404 from "./Page/Page404/Page404";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App></App>}>
        <Route path="" element={<Home></Home>} />
        <Route path="Contact" element={<Contact></Contact>} />
        <Route path="About" element={<About></About>} />
        <Route path="reactform" element={<ReactForm></ReactForm>} />
        {/* <Route path="*" element={<Page404></Page404>} /> */}
        <Route path="*" element={<Navigate to=""></Navigate>} />
      </Route>
      {/* <Route path="/contact" element={<Contact></Contact>}>

            </Route> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
