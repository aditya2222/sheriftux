import React, {Component} from 'react';
import DatatablePage from "./Components/data-table/data-table";
import NavbarPage from "./Components/Navbar/Navbar";
import FooterPage from "./Components/Footer/Footer";
import ChartGraphs from './Components/ChartGraphs/ChartGraphs'
import BottomContent from './Components/BottomContent/BottomContent'

class App extends Component {
    render() {
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

        );
    }
}

export default App;
