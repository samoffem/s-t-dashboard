import {useState} from 'react'
import './App.css';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [showSchedule, setShow] = useState(false)
  return (
    <div className="App">
      <Container className="container">
        <Sidebar />

        <div className="main-content">
          <Topbar setShow={setShow} />
          <Dashboard showSchedule={showSchedule} />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`

  .main-content{
    padding-right: 40px;
    padding-top: 40px;
    width: calc(100% - 159px);
    margin-left: 159px;
  }

  @media screen and (max-width: 1200px){
    .main-content{
      width: calc(100% - 100px);
      margin-left: 100px;
    }
  }

  @media screen and (max-width: 767px){
       .main-content{
        width: calc(100% - 50px);
        margin-left: 50px;
        padding-right: 10px;
       } 
  }

`

export default App;
