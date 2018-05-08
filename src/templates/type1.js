import React from 'react'
import ItemListMotion from '/src/components/ItemListMotion'
import DataAPI from "/src/data/api"

class Type1 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    console.log('user', this.props.userId)
    if (this.props.pathname.lastIndexOf('/user/') > 0) {
      var userId = this.props.pathname.substring(this.props.pathname.lastIndexOf('/user/') + 6)
      userId = parseInt(userId)
      if (userId != this.props.userId) {
        this.props.chooseUser(userId)
      }
    }
  return (
  <div>
    This is Type 1 content.
    <ItemListMotion selected={this.props.selected} data={DataAPI.types[1].items}>
      <div>0</div>
      <div onClick={this.props.nextLabel}>{this.props.message + this.props.isLastStep}</div>
    </ItemListMotion>
  </div>
  )}
}

export default Type1