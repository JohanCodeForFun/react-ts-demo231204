import React, { useEffect, useState } from 'react';
import { fetchData } from './client/fetchData';
import { Product, User } from './client/types';
import { selectUsers } from './client/selectUsers';
import { ListSelect } from './ListSelect';
import { Select } from './Select';
import Card from './Card';
// import { ProductList } from './ProductList';
// import { Title } from './Title';

const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const users = await fetchData<User[]>('https://randomuser.me/api/?results=10');
      const productDetails = await fetchData<Product[]>('https://fakestoreapi.com/products');

      console.log("Users:", users?.results.map(user => user.name.first))
      console.log("users response:", "TO DO!")
      console.log("Products:", productDetails)

      // setProductsList(productDetails);
      setUsersList(users?.results);
    }
    
    fetchAndSetData();
  }, [])
  

  return <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
    <Card>
      <Card.Header>Användare</Card.Header>
      <Card.Body>
        <ul>
          {usersList.map(user => 
            (
              <li key={user.name.last}>{user.name.first} {user.name.last}</li>
            )
          )}
        </ul>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Kontakta oss</Card.Header>
      <Card.Body>
        <ul>
          <ListSelect 
            items={usersList}
            onClickItem={(item) => {alert(`Numret ${item.name.first} till är, 070-123 45 67`)}}
            renderButtonText={(item) => `Kontakta: ${item.name.first}`}
          />
          {/* {productsList.map(product => 
            (
              <li key={product.id}>{product.title} {product.price}</li>
            )
          )} */}
        </ul>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Select Component</Card.Header>
      <Card.Body>
          <Select
            options={selectUsers}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => console.log(event.target.value)}
          />
      </Card.Body>
    </Card>
  </div>
}

export default App;
