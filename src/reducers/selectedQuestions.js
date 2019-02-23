import Questions from '../../server/questions.json';

const initalState = {
    selectedQuestions : []
};


export function selectedQuestions(state = initalState, action){

    switch(action.type){
        case 'SELECTED_OPTION': {
            let newArray = state.selectedQuestions.slice();
            let index  = action.id.substr(0, 4) - 1000;
            newArray.splice(index, 1, {
                id : action.id,
                option : action.option
            });
            return { ...state , selectedQuestions : newArray };
        }
        default : 
            return state;
    }

}

const initalQuestions = {
    questions : Questions.questions
};


export function questionsReducer(state = initalQuestions){
    return state;
}


export function scoreReducer(state = { score : 0 }, action){
    switch(action.type){
        case 'SET_SCORE': {
            return {...state, score : action.score}
        }

    }
    return state;
}


export default selectedQuestions;