import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import CustomInput from "../../utils/input";

function EditInformation(props) {
  const { name, phone, email, location } = props.detailInformation;
  const [form, setForm] = useState({
    firstName: name.first,
    lastName: name.last,
    phone,
    email,
    city: location.city,
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ویرایش اطلاعات
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <CustomInput
            label="نام"
            placeholder="نام خود را وارد کنید"
            initialValue={form.firstName}
            name="firstName"
            handleChangeInput={handleChange}
          />
          <CustomInput
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد کنید"
            initialValue={form.lastName}
            name="lastName"
            handleChangeInput={handleChange}
          />
          <CustomInput
            label="پست الکترونیکی"
            placeholder="پست الکترونیکی خود را وارد کنید"
            initialValue={form.email}
            name="email"
            handleChangeInput={handleChange}
          />
          <CustomInput
            label="شماره تماس "
            placeholder=" شماره تماس خود را وارد کنید"
            initialValue={form.phone}
            name="phone"
            handleChangeInput={handleChange}
          />
          <CustomInput
            label="محل سکونت "
            placeholder="محل سکونت خود را وارد کنید"
            initialValue={form.city}
            name="city"
            handleChangeInput={handleChange}
          />
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              ارسال
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditInformation;
