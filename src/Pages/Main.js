import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Index from './index'
import Products from './Products'
import Cases from './case'
import Successcase from './successcase'
import Aboutus from './aboutus'
function Main(){
    return(
        <Router>
            <Route path='/' exact component={Index}></Route>
            <Route path='/Products' exact component={Products}></Route>
            <Route path='/cases' exact component={Cases}></Route>
            <Route path='/successcase' exact component={Successcase}></Route>
            <Route path='/aboutus' exact component={Aboutus}></Route>
        </Router>
    )
}
export default Main