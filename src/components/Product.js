import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded shadow-sm">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          variant="top"
          src={
            product.image && product.image.startsWith('http')
              ? product.image
              : '/images/sample.jpg' // fallback image
          }
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="fw-bold" style={{ color: '#1d4ed8' }}>
            {product.name}
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
