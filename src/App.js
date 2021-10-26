import './App.css';
import { useState } from 'react';
import { Row, Col, Slider, Typography } from 'antd';
import  Header from './components/Header';
import Table from './components/Table';



function App() {
  const [rows, setRows] = useState(10);
  
  return (
    <>
      <Header/>
      <Row>
        <Col xs={24} md={{span: 12, offset: 6}}>
          <Typography.Title level={4}>The Amount of Pokemons</Typography.Title>
          <Slider min={1} max={20} defaultValue={rows} onChange={setRows}/>
          <Table rows={rows}/>
        </Col>
      </Row>
      
    </>
  );
}

export default App;
