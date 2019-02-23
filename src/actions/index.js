export function SelectedQuestion(id, option){
    return {
        type: 'SELECTED_OPTION',
        id,
        option 
    }
}

export function SetScore(score){
    return {
        type: 'SET_SCORE',
        score
    }
}