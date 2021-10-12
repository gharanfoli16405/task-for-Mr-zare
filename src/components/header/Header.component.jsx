import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./header.style.scss";
import { useGlobalState } from "../../Context/Provider";
import SvgUser from "../../iconComponent/User.tsx";
import Search from "../searchTimeout/SearchTimeOut.component";

const Header = ({ setCurrentPage }) => {
  const { authState } = useGlobalState();
  const { username } = authState.user;
  return (
    <>
      <header className="header">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col sm={10} md>
              <div className="d-flex ml-4">
                <Button
                  variant="outline-primary"
                  className="d-flex align-items-center"
                  disabled
                >
                  <SvgUser />
                  <div className="me-2"> {username}</div>
                </Button>
              </div>
            </Col>
            <Col sm={2} md="auto">
              <Search setCurrentPage={setCurrentPage} />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="fake"></div>
    </>
  );
};
export default Header;
