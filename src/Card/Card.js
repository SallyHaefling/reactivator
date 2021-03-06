import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      message: ''
    }
  }

  checkAnswer = (e) => {
    if(this.state.input.toLowerCase() === this.props.answer.toLowerCase()) {
      localStorage.removeItem('incorrectAnswers');
      this.setState({
        message: 'Correct - nice work!'
      }, () => {
        setTimeout( () => {
          this.props.getCards(this.props.id)
        }, 900
        )
        } 
      )
    } else {
      this.setState({
        message: 'Not quite!'
      },
       () => {
        setTimeout( () => {
          this.props.getCards(this.props.id)
          this.props.setStorage(this.props.id);
        }, 900
        )
      }
      ) 
    }
  }
  
  handleReturn = () => {
    this.setState({input: ''})
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleInputChange = (e) => {
    e.preventDefault()
    let result = this.checkAnswer(e);
    this.handleReturn(result)
  }

  render() {
    return (
      <main className='card-container'>
        <section className='cards'>
          <h3 className='subject'>
            Subject: {this.props.subject}
          </h3>
          <h4 className='question'>
            Question: {this.props.question}
          </h4>
          <form 
            className='form'
            onSubmit=
            {this.handleInputChange}
          >
          <input 
            type='text'
            value={this.state.input}
            onChange={this.handleInput}
            placeholder="Enter answer and press return"
            className='user-answer'>
          </input>
          <p className = 'message'>{this.state.message}</p>
          </form>
        </section>
      </main>
    )
  }
}

export default Card;