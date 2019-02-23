import React from 'react';

import { Link } from 'react-router-dom';

export class App extends React.Component {

    
    render(){
       
        return (
            <div>
                <h1>React Quiz.</h1>
                <Link to="/home/0">Start</Link>
            </div>
        )
    }

}

export default App;
