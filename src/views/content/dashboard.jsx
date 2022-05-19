import { Route, Routes } from "react-router-dom";

import Nav from "../../components/nav";
import React from "react";
import Sidebar from "../../components/sidebar";
import Users from "./user/users";

function Dashboard() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default Dashboard;
