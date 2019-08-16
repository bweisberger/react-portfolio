import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom'

function App() {
  return (
<div style={{height: '100vh', position: 'relative'}}>
    <Layout  fixedHeader>
        <Header style={{background: 'rgb(92, 106, 114)'}} className="header-color" title={<span><span style={{ color: '#ddd' }}>Web Developer / </span><strong>Portfolio</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{background: 'rgb(92, 106, 114)', color: 'white'}}title="Title">
            <Navigation>
                <Link style={{color: 'white'}} to="/">Home</Link>
                <Link style={{color: 'white'}} to="/projects">Projects</Link>
                <Link style={{color: 'white'}} to="/aboutme">About me</Link>
                <Link style={{color: 'white'}} to="/resume">Resume</Link>
                <Link style={{color: 'white'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content className="content-body">
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
