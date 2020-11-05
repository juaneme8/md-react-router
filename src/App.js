import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/shop' component={Shop} />
			</Switch>
		</Router>
	);
}

export default App;
