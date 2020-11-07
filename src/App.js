import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import Products from './components/Products';
import NotFound from './components/NotFound';
import HomeButton from './components/HomeButton';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;

function App() {
	return (
		<Router>
			<HomeButton />
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/shop' exact component={Shop} />
				<Route path='/shop/:id' component={ItemDetails} />
				<Route path='/products' component={Products} />

				<Route path='/not-found' component={NotFound} />
				<Redirect to='/not-found' />
			</Switch>
		</Router>
	);
}

export default App;
