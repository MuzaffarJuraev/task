import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default ({ item }) => {
  const navigate = useNavigate();
  return (
    <Col
      onClick={() => navigate(`/card/${item.id}`)}
      style={{ cursor: "pointer" }}
    >
      <Card>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.prag}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
