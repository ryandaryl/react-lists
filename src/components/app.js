import React from 'react'
import Header from '/src/header'
import Main from '/src/main'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}