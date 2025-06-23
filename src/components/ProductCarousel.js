import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const ProductCarousel = () => {
  return (
    <Carousel pause='hover' fade className='product-carousel'>
      <Carousel.Item>
        <Image
          src='/images/banner1.jpg'
          alt='Banner 1'
          className='carousel-image'
          fluid
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src='/images/banner2.jpg'
          alt='Banner 2'
          className='carousel-image'
          fluid
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src='/images/banner3.jpg'
          alt='Banner 3'
          className='carousel-image'
          fluid
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
