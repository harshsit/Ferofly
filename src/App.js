import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import Navbar from './components/Navbar';

import { DatePicker, Space, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Divider } from 'antd';
import { InputNumber } from 'antd';

function onChanges(value) {
  console.log('changed', value);
}
function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="layout">
    <Header style={{paddingLeft:500}}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">HOME</Menu.Item>
        <Menu.Item key="2">ABOUT</Menu.Item>
        <Menu.Item key="3">ROOMS</Menu.Item>
        <Menu.Item key="4">SERVICES</Menu.Item>
        <Menu.Item key="5">GALLERY</Menu.Item>
        <Menu.Item key="6">SEE AND DO</Menu.Item>
        <Menu.Item key="7">CONTACT</Menu.Item>
        <Menu.Item key="8">
        <Button>Book A Room</Button>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 0px' }}>
      
      <div className="site-layout-content">
<h2 style={{fontFamily: "Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif", fontStyle:'italic', fontSize:40, fontWeight:'100%'}}>Ferofly</h2>
<Col style={{marginLeft:690}} span={6}>
<Divider style={{fontWeight:30, fontStyle:'italic'}}>Magnify Your Journey</Divider>
</Col>
<img src='/Screenshot from 2021-01-06 01-38-59.png'/>
<br>
</br>
<br></br>
<br></br>
<br></br>
<br></br>

<Space>
<DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="week" />
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChanges} />
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChanges} />
      <Button style={{width:210, backgroundColor:'black', color:'white'}}>Search</Button>
      </Space>
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{fontWeight:30, fontSize:25}}>ABOUT</h2>

      

      <p span={6} style={{fontStyle:'italic', fontWeight:30, textAlign:'center'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
      <br></br> “Edit Text” or double click me to add your own content and make changes to the <br></br> font. Feel free to drag and drop me anywhere you like on your page. I’m a great <br></br> place for you to tell a story and let your users know a little more about you.</p>
      <br></br>

      <br></br>

      <br></br>
      <img style={{height:630, width:900}} src='/download.jpeg'/>
      
      </div>

      


    </Content>
    
  </Layout>
    </div>
  );
}

export default App;
