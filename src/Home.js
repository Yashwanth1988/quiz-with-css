import React from 'react';
import { redirectTo } from './helpers';

export class Home extends React.Component {

    constructor(props){
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.message = "";
        this.label = "Next";
    }

    pageNotFound() {
        this.message = "Page Not Found";
        return <div>
                 <h1> {this.message} </h1> 
               </div>;
    }

    handleChange(e){
        this.setState({
            selectedOption : e.target.value
        }, () => {
            let param = parseInt(this.props.match.params.id);
            this.props.SelectedQuestion(this.props.questions.questions[param].id, this.state.selectedOption);
        })
     
    }

    checkResults(selectedQuestions){
        let correct = 0;
        let keys = ['none','a','b','c','d','e'];

        if(keys.indexOf())

        for(let key in selectedQuestions){
             let keyIndex = selectedQuestions[key].id.substr(-1);
             if(keyIndex == keys.indexOf(selectedQuestions[key].option)){
                 correct++;
            }
        }
        this.props.SetScore((correct/this.props.questions.questions.length)*100);
        this.message = `Quiz Completed. You have scored ${correct} out of ${this.props.questions.questions.length}`;
      
    }

    handleSubmit(e) {
        e.preventDefault();

        if(document.querySelector("input[name=option]:checked")){
            let param = parseInt(this.props.match.params.id);
            let selectedOption = document.querySelector("input[name=option]:checked").value;
            this.props.SelectedQuestion(this.props.questions.questions[param].id, selectedOption);

            let { questions } = this.props.questions;
            if((questions.length - 1 ) == this.props.match.params.id){
                
                this.checkResults(this.props.selectedQuestions.selectedQuestions);
                redirectTo('/complete');
            } else {
                redirectTo('/home/'+ (param + 1));
            }

        }

        
    }


    
    render(){
       let questionID = this.props.match.params.id;
       let { questions } = this.props.questions;

        if(!questions[questionID]){
             return this.pageNotFound();
        }
        if((questions.length - 1 ) == this.props.match.params.id){
            this.label = "Submit";
        }
        
        let { question, options } = questions[questionID];
      

        let index = this.props.match.params.id, selectedOption = null;

        if(this.props.selectedQuestions && this.props.selectedQuestions.selectedQuestions[index]){
            selectedOption = this.props.selectedQuestions.selectedQuestions[index].option;
        }
        
        return (
            <div>
                <h1>Question {parseInt(this.props.match.params.id) + 1}</h1>

                <form id="question_form">
                    <p>{question} {selectedOption}</p>

                    <input type="radio" checked={selectedOption === 'a'} value='a' onChange={this.handleChange} name="option" id="option1" />
                    <label htmlFor="option1">{options.a}</label> <br/>

                    <input type="radio" checked={selectedOption === 'b'} name="option" onChange={this.handleChange} id="option2"  value='b' />
                    <label htmlFor="option2"  >{options.b}</label>  <br/>

                    <input type="radio" checked={selectedOption === 'c'} name="option" onChange={this.handleChange} value='c' id="option3" />
                    <label htmlFor="option3">{options.c}</label>  <br/>

                    <input type="radio" checked={selectedOption === 'd'} name="option" onChange={this.handleChange} value='d' id="option4" />
                    <label htmlFor="option4">{options.d}</label> <br /><br />

                    <button onClick={this.handleSubmit}>{this.label}</button>
                </form>

            </div>
        )
    }

}



export default Home;
