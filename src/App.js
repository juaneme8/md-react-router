import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/shop' exact component={Shop} />
				<Route path='/shop/:id' component={ItemDetails} />
			</Switch>
		</Router>
	);
}

export default App;
