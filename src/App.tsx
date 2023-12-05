import React, { useEffect, useState } from 'react';
import { fetchData } from './client/fetchData';
import { Product, User } from './client/types';
// import { ProductList } from './ProductList';
// import { Title } from './Title';
// import { ListSelect } from './ListSelect';
import Card from './Card';

const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const users = await fetchData<User[]>('https://randomuser.me/api/?results=10');
      const productDetails = await fetchData<Product[]>('https://fakestoreapi.com/products');

      console.log("Users:", users?.results.map(user => user.name.first))
      console.log("Products:", productDetails)

      setProductsList(productDetails);
      setUsersList(users?.results);
    }
    
    fetchAndSetData();
  }, [])
  

  return <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
    <Card>
      <Card.Header>Kontaktinformation</Card.Header>
      <Card.Body>
        <ul>
          <li>Jonatan</li>
          <li>070-123 123 12</li>
          {usersList.map(user => 
            (
              <li key={user.name.last}>{user.name.first} {user.name.last}</li>
            )
          )}
        </ul>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Kontaktinformation</Card.Header>
      <Card.Body>
        <ul>
          <li>Jonatan</li>
          <li>070-123 123 12</li>
          {productsList.map(product => 
            (
              <li key={product.id}>{product.title} {product.price}</li>
            )
          )}
        </ul>
      </Card.Body>
    </Card>
  </div>
}

export default App;
