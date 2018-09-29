import { Route, Switch } from 'react-router-dom'
// import Whoops404 from './ui/Whoops404'
import { NewColor, Menu, Colors, Color } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/"
            component={() => (
                <div className="app">
                    <Menu />
                    <NewColor />
                    <Colors />
                </div>
            )} />
    </Switch>

export default App
