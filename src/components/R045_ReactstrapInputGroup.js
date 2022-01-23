import React from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";

const R045_ReactstrapInputGroup = (props) => {
  return (
    <>
    <InputGroup>
      <Input placeholder={'userId'} />
      <InputGroupText>@reactmail.com</InputGroupText>
    </InputGroup>
    <InputGroup>
      <Button>
        버튼
      </Button>
      <Input />
    </InputGroup>
    </>
  )
}

export default R045_ReactstrapInputGroup
