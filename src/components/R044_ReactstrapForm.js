import React from "react";
import { Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

const R044_ReactstrapForm = (props) => {
  return (
    <Form>
      <Label for={'exampleGender'}>Gender</Label>
      <Input type={"select"} bsSize={'sm'}>
        <option>no Select</option>
        <option>woman</option>
        <option>man</option>
      </Input>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleGender'>address</Label>
            <Input type='text' name='address' id='address' />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleMobile'>Mobile</Label>
            <Input type='text' name='mobile' id='mobile'/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <Label for='exampleAge'>age</Label>
          <Input type='text' name='age' id='age'/>
        </Col>
      </Row>
    </Form>
  )
}

export default R044_ReactstrapForm
