import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Auth from '../components/Auth';
import NotFound from '../components/NotFound';
import ItemAdd from '../components/ItemAdd';
import ItemPage from '../components/ItemPage';
import AuthRoute from './authRoute';
import ItemAddRoute from './itemAddRoute';
import me from '../services/auth/request/me';
import CartRoute from "./cartRoute";
// import cookieParser from '../services/cookieParser';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            loading: true,
        }
    }

    componentDidMount() {
        me()
            .then(res => {
                this.setState({user: res});
            })
            .then(this.hideLoader)
            .catch(err => {
                alert(err)
            })
    }

    hideLoader = () => {
        this.setState({loading: false});
    };

    render() {
        const {loading, user} = this.state;
        if (loading) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <main>
                <Switch>
                    <Route
                        exact path='/'
                        render={() => <Home user={user} />}
                    />
                    <CartRoute path='/cart' user={user} component={Cart} />
                    <AuthRoute path='/auth' user={user} component={Auth} />
                    <ItemAddRoute exact path='/item/add' user={user} component={ItemAdd} />
                    <Route
                        path='/item/:number'
                        render={(props) => <ItemPage {...props} user={user} />}
                    />
                    <Route path='*' component={NotFound} />
                </Switch>
            </main>
        )
    }
}

export default Main;