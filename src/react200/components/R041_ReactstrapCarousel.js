import React from 'react'
import { UncontrolledCarousel } from "reactstrap";

function R041_ReactstrapCarousel(props) {
  const items = [
    {
      src: 'http://img.danawa.com/prod_img/500000/126/615/img/14615126_1.jpg?shrink=330:330&_v=20210629160554',
      altText: '슬라이드 1',
      caption: 'caption',
      header: 'header'
    },
    {
      src: 'https://w.namu.la/s/6d37d2792f61b69511edc288e16598d0722ff0407af67089c0004ddeda7ad7b9bdc0b2e4880db9548efe21f2082a4c34545902a67aaa00eafce75c7f89fcdcb81cbca1649556026b3c72a3ee9382429b',
      altText: '슬라이드 1',
      caption: 'caption',
      header: 'header'
    },
    {
      src: 'https://imgc.1300k.com/aaaaaib/goods/215026/35/215026352527.jpg?3',
      altText: '슬라이드 1',
      caption: 'caption',
      header: 'header'
    },
  ]
  return (
    <UncontrolledCarousel items={items}/>
  )
}

export default R041_ReactstrapCarousel
