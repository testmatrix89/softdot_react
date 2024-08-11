import React, {useState} from "react";
import {Card, Button} from "react-bootstrap"

const Item = ( { product, checkAction } ) => {
  return (
    <div>
      <h1>Items are here...</h1>
      <Card key={product.id} className="mb-4">
        <Card.Header>{product.id}</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Description: {product.description}</Card.Text>
          <Card.Text>Quality: ${product.quality}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={ () => checkAction(product.id) }>Delete Item</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Item;