import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header.component";
import UserCard from "../../components/userCard";
import Pagination from "../../components/pagination";
import { useGlobalState } from "../../Context/Provider";

function Home() {
  const { userState } = useGlobalState();
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const { users } = userState;
    setUsers(users.slice(currentPage * 20, currentPage * 20 + 20));
    setTotalPages(Math.ceil(users.length / 20));
    setCount(users.length);
  }, [userState, currentPage]);
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <main>
        <Container>
          {count !== 0 && (
            <Row>
              <Col sm={12}>
                <div className="h2 mb-4">
                  <span className="text-primary" style={{ margin: "0 7px" }}>
                    {count}
                  </span>
                  مورد یافت شد
                </div>
              </Col>
            </Row>
          )}
          <Row>
            {users.map((user, index) => (
              <Col sm={12} md={4} lg={3} key={index} className="mb-3">
                <UserCard userInformation={user} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12}>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Home;
