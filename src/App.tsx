import React, { useEffect, useState } from 'react';
import { getAllProducts } from './client/GetAllProducts';
import { Product } from './client/types';
import { ProductList } from './ProductList';
import { Title } from './Title';
import { ListSelect } from './ListSelect';
import Card from './Card';

const App = () => {
  return <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
    <Card>
      <Card.Header>Kontaktinformation</Card.Header>
      <Card.Body>
        <ul>
          <li>Jonatan</li>
          <li>070-123 123 12</li>
        </ul>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Kontaktinformation</Card.Header>
      <Card.Body>
        <ul>
          <li>Jonatan</li>
          <li>070-123 123 12</li>
        </ul>
      </Card.Body>
    </Card>
  </div>
}

export default App;
