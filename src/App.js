import React from 'react'
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ProductsTreeSelect from './components/tree/Products'

function App() {
  return (
    <Container>
      <ProductsTreeSelect />
    </Container>
  );
}

export default App;