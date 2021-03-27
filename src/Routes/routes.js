import {Switch,Route} from 'react-router-dom';
import PrivateRoute from './privateRoute'
import Registration from '../components/Registration'
import Dashboard from '../components/DashBoard';
import Login from '../components/Login';

const Routing = ()=>{
    return(
        <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component = {Registration}/>
            <Route path='/login' component = {Login}/>

        </Switch>
    )
}
export default Routing