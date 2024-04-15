import {Route, Switch} from 'react-router-dom'

import GetLoginForm from './components/LoginForm'
import GetHome from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={GetLoginForm} />
      <Route exact path="/" component={GetHome} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
