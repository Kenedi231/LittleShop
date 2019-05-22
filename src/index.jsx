import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import style from './styles/main.less';
import Main from './routes/main';

const root = document.getElementById("root");

class App extends Component {
    render() {
        return (
            <div className={style.page}>
                <Main />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root
);