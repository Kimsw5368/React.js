import React, {useState} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import {logDOM} from "@testing-library/react";

function R037_ReactstrapDropdown(props) {
  const [dropDown, setDropDown] = useState(false)

  let toggle = (e) => {
    setDropDown(!dropDown)
  }

  return(
    <ButtonDropdown isOpen={dropDown} toggle={toggle}>
      <DropdownToggle caret> 버튼 DropDown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>헤더</DropdownItem>
        <DropdownItem disabled>비활성화 버튼</DropdownItem>
        <a href="https://naver.com">
          <DropdownItem>example 웹 사이트로 이동</DropdownItem>
        </a>
        <DropdownItem onClick={e => alert("Alert 버튼")}>
          Alert 버튼
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}

export default R037_ReactstrapDropdown
