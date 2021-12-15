
import './App.css';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dasboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Sidebar />

        <div className="main-content">
          <Topbar />
          <Dasboard />
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

`

export default App;
