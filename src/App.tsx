import React, { useEffect, useState } from 'react';
import { getAllProducts } from './client/GetAllProducts';
import { Product } from './client/types';
import { ProductList } from './ProductList';
import { Title } from './Title';
import { ListSelect } from './ListSelect';

const App = () => {

  // const [ products, setProducts ] = useState<Product[]>([]);
  // const [ isLoading, setIsLoading ] = useState(false);

  // useEffect(() => {
    
  //   const loadProducts = async () => {
  //     setIsLoading(true);
  //     const data = await getAllProducts();
  //     setIsLoading(false);
  //     setProducts(data);
  //   }
  //   loadProducts();
  
  // }, [])

  // const onButtonClick = (event: any) => {
    
  //   console.log('Duklickade på knappen!');
  // }

  type Customer = {
    id: number,
    name: string
  }

  const customers: Customer[] = [
    {
      id: 1,
      name: "Kalle"
    },
    {
      id: 2,
      name: "Eva"
    },
    {
      id: 3,
      name: "Nisse"
    }
  ]

  const items: Product[] = [
    {
      id: 2,
      title: "Hårtork",
      price: 500
    },
    {
      id: 3,
      title: "Jacka",
      price: 700
    },
    {
      id: 4,
      title: "Lampa",
      price: 30
    }
  ]

  return (
    <>
      <p>Välj produkt:</p>
      <ListSelect
        items={items}
        onClickItem={(item) => console.log('Du klickade på', item)} 
        displayAttribute={'price' as keyof Product}
        />
      <p>Välj kund:</p>
      <ListSelect
        items={customers}
        onClickItem={(item) => console.log('Du valde en kund:', item)}
        displayAttribute={'name' as keyof Customer}
        />
    </>
  )
}

export default App;
