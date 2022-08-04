import Item from "./Item";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { helper } from "./helper";

export default () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {helper.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </Row>
    </Container>
  );
};
