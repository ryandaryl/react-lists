import React from 'react'
import { Link } from 'react-router-dom'
import DataAPI from '/src/data/api'
import Routes from '/src/data/routes'
import Task from '/src/data/task'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.generateTask(0)
  }

  render() {
    return (
      <div>
        <Link to={Routes[Task[0]['type']][0]}>Start</Link>
      </div>
    )
  }
}

export default Home