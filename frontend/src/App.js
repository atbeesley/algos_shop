import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import BasketScreen from './screens/BasketScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/basket/:id?' component={BasketScreen} />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;