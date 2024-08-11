import React, { useState } from 'react'
import Item from '../components/products/item'

function Products() {
  const [products, setProducts ] = useState([
    {id: 1, name: 'Mango', description: 'This new item', quality: 'India Quality', price: 122, date: new Date()},
    {id: 2, name: 'Orange', description: 'This new orange', quality: 'France Quality', price: 122, date: new Date()},
    {id: 3, name: 'Apple', description: 'This new apple item', quality: 'UK Quality', price: 122, date: new Date()},
    {id: 4, name: 'Guava', description: 'This one fantastic item', quality: 'Gujarat India', price: 122, date: new Date()},
    {id: 5, name: 'Graps', description: 'This one indian Kashmiri item', quality: 'Kashmiri India', price: 122, date: new Date()}
  ]);

  const deleteItemData = (prodId)=> {
    setProducts( products.filter((product) => product.id != prodId))
  }
  return (
    <div className='container'>
      <h1>My Products</h1>
      {
        products.length ? products.map((product) => <Item key={product.id} product={ product } checkAction={ deleteItemData } />) : "There is no products available"
      }
    </div>
  )
}

export default Products
