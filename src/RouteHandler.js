import React from 'react'
import { Switch, Route } from 'react-router-dom'



export default class RouteHandler extends React.Component {
  constructor(props) {
    super()
  }

  componentDidUpdate() {
    this.pages = []
    Array.from(this.props.routes).map((path, i) => {
      var myimport = import(`${path[1]}`)
      var myObj = React.createElement(require(path[1]).default, this.props)
      this.pages[i] = [path[0], myObj]
    }
    )
  }

  render() {
    return (
      <Switch>
        {this.pages && this.pages.map(page => {
          return (
            <Route exact path={page[0]} render={routeProps => page[1]} />
          )
        })}
      </Switch>
    )
  }
}