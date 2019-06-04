import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    console.log('FETCHING YOUR DATA INSIDE GETINITIALPROPS')
  }

  render() {
    return (
      <div>
        <h1>our Index page!!!!!!</h1>
      </div>
    )
  }
}

export default Index
