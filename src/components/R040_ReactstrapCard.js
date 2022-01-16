import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

function R040_ReactstrapCard(props) {
  return (
    <div>
      <Card>
        <CardImg top height='200px' src='http://bitly.kr/4KkfRxZfR' alt='Card Img' />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card sub Title</CardSubtitle>
          <CardText>Lorem Ipsum is simply dummy text.</CardText>
          <Button> button </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default R040_ReactstrapCard
