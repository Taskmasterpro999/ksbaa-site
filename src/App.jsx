import React from "react";
import MainSite from "./components/MainSite.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import "./App.css";

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return <MainSite />;
}
