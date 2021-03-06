import { Route, Switch } from 'react-router';
import { Home } from './pages/Home';
import { Footer } from './layout/Footer';
import {Header} from './layout/Header'
import { WorkerInfo } from './pages/WorkerInfo';
import { history } from '.';
import {ConnectedRouter} from 'connected-react-router'
import { About } from './pages/About';

function App() {
  return (
    <ConnectedRouter history={history}>
    <div className="App">
      <Header />
      <main >
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/workerinfo/:index" render={() => <WorkerInfo />}/>
          <Route path="/about" render={() => <About />}/>
          <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)}/>
        </Switch>
      </main>
      <Footer />
    </div>
    </ConnectedRouter>
  );
}

export default App;
