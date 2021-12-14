
import './App.css';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Sidebar />

        <div className="main-content">
          <Topbar />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`

  .main-content{
    width: calc(100% - 159px);
    margin-left: 159px;
  }

`

export default App;
