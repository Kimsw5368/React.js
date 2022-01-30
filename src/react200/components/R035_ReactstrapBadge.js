import React from 'react'
import { Badge, Button } from 'reactstrap'

function R035_ReactstrapBadge(props) {
  return (
    <div>
      <h1>PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
      <Button color='light' outline >
        Accessor <Badge color='dark'>4</Badge>
      </Button>
      <Badge color='danger' pill>pill</Badge>
      <Badge href='https://naver.com' color='light'>GoLink</Badge>
    </div>
  )
}

export default R035_ReactstrapBadge
