import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom'

function App() {
  return (
<div style={{height: '100vh', position: 'relative'}}>
    <Layout  fixedHeader>
  <Header transparent className="header-color"title={<Link style={{textDecoration: 'none', color: 'white' }}to='/'>BW</Link>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About me</Link>
                <a style={{color: 'white'}} href={'/Bill_Weisberger_Resume.pdf'}>Resume</a>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{background: 'rgb(92, 106, 114)', color: 'white', borderColor: 'rgb(92, 106, 114)'}}title="Menu">
            <Navigation>
                <Link style={{color: 'white'}} to="/">Home</Link>
                <Link style={{color: 'white'}} to="/projects">Projects</Link>
                <Link style={{color: 'white'}} to="/aboutme">About me</Link>
                <a style={{color: 'white'}} href={'/Bill_Weisberger_Resume.pdf'}>Resume</a>
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
