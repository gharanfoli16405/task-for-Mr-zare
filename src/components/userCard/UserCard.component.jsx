import React from "react";
import { Card, Button } from "react-bootstrap";
import ModalEditInformation from "../../components/editInformation";

function UserCard({ userInformation }) {
  const { picture, name, email } = userInformation;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Card className="text-center">
        <Card.Img variant="top" src={picture.large} roundedCircle />
        <Card.Body>
          <Card.Title>{name.first}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              ویرایش اطلاعات
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ModalEditInformation
        detailInformation={userInformation}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default UserCard;
