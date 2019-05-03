import React, {Component} from 'react';
import DatatablePage from "./Components/data-table/data-table";
import NavbarPage from "./Components/Navbar/Navbar";
import FooterPage from "./Components/Footer/Footer";
import ChartGraphs from './Components/ChartGraphs/ChartGraphs'
import BottomContent from './Components/BottomContent/BottomContent'
import Details from './Components/Details/Details'
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>

                <Switch>


                    <Route exact path="/" render={() => {
                        return (
                            <div>

                                <NavbarPage/>
                                <div className='container'>
                                    <ChartGraphs/>
                                </div>
                                <DatatablePage/>
                                <div className={'container'}>
                                    <BottomContent/>
                                </div>
                                <FooterPage/>
                            </div>
                        )
                    }}/>

                    <Route path="/details/" component={Details}/>

                    <Route render={() => {
                        return (
                            <div className='container jumbotron'>
                                <h1 style={{textAlign: 'center'}}>Sorry, this route does not exist</h1>
                            </div>
                        )
                    }}/>

                </Switch>


            </Router>
        );
    }
}


export default App;
