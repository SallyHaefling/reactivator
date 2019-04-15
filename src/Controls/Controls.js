import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return  (
      <section className='button-container'>
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          onClick={this.props.getIncorrectCards}
          />
          <input 
          value='Show all'
          type='submit'
          className='show-all-button'
          onClick={this.props.getAllCards}
          />
      </section>
    )
  }
}