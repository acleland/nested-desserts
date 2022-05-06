import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/desserts`}>Desserts</Link>
              </li>
            </ul>
            <Route path="/desserts">
              <Desserts />
            </Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function Desserts() {
  const { url, path } = useRouteMatch();
  return (
    <>
      <h2>Desserts</h2>
      <ul>
        <li>
          <Link to={`${url}/icecream`}> Ice Cream</Link>{' '}
        </li>
        <li>
          <Link to={`${url}/cakes`}>Cakes</Link>
        </li>
        <li>
          <Link to={`${url}/cookies`}>Cookies</Link>
        </li>
        <Route path={`${path}/icecream`}>
          <h2>Ice Cream</h2>
        </Route>
        <Route path={`${path}/cakes`}>
          <h2>Cakes</h2>
        </Route>
        <Route path={`${path}/cookies`}>
          <h2>Cookies</h2>
        </Route>
      </ul>
    </>
  );
}
