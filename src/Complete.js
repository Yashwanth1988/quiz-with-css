import React from 'react';
import { connect } from 'react-redux';

export class Complete extends React.Component {

    
    render(){
       
        
        return (
            <div>
                <h1>Quiz Completed.!</h1>
                <h2>Congratulations. You have scored {this.props.score}% </h2>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        score : state.score.score
    }
}

export default connect(mapStateToProps, null)(Complete);