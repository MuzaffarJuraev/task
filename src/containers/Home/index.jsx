import Navbar from "../../components/Navbar";

import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";

export default () => {
  return (
    <Container fluid>
      <Navbar />
      <Outlet />
    </Container>
  );
};
