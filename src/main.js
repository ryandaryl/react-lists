import React from 'react'
import { withRouter } from 'react-router-dom'
import Routes from '/src/data/routes'
import RouteHandler from '/src/RouteHandler'
import Controller from '/src/Controller'



class Main extends Controller {

  constructor(props) {
    super()
    this.state = { 
      'selected': 0,
      i: 2,
      userId: -1,
      task: [],
      message: 'Begin',
      isLastStep: false
    }
  }

  render() {
    return (
      <RouteHandler
        routes={Routes}
        pathname={this.props.location.pathname}
        nextLabel={this.nextLabel.bind(this)}
        generateTask={this.generateTask.bind(this)}
        chooseUser={this.chooseUser.bind(this)}
        selected={this.state.selected}
        userId={this.state.userId}
        message={this.state.message}
        isLastStep={this.state.isLastStep}
      />
    )
  }
}

export default withRouter(Main)