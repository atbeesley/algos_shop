import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
      <h1>Hi from Algos</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
