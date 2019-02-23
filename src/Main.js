import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectedQuestion, SetScore } from './actions';
import Home from './Home';



 const mapStateToProps = (state) => {
    return {
        selectedQuestions : state.selectedQuestions,
        questions : state.questions
    }
}
 

 const mapDispatchToProps = dispatch => {
    return bindActionCreators({ SelectedQuestion, SetScore }, dispatch)
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Home);

