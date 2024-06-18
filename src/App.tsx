import './App.css'
import Home from './pages/Home'
import { Route, BrowserRouter as Router
  , Routes
 } from 'react-router-dom'


const App = () => {

  return (
    <Router>
<Routes>
<Route Componetn={<Layout/>}>
<Route index component={<Home/>}/>
</ROute>
</Routes>
</Router>
  )
}

export default App
