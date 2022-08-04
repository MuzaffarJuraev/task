import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { helper } from "../Cards/helper";

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState("");

  useEffect(() => {
    let tempItem = helper.filter((item) => item.id == id);
    setItem(tempItem[0]);
  }, []);
  return (
    <Container>
      <Card style={{ maxWidth: 800, margin: "0 auto" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.prag}</Card.Text>
          <Button onClick={() => navigate("/")}>Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
