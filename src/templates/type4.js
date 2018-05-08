import React from 'react'
import ItemListMotion from '/src/components/ItemListMotion'
import DataAPI from "/src/data/api"

class Type4 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        This is Type 4 content.
    <ItemListMotion selected={this.props.selected} data={DataAPI.types[4].items}>
          <div>0</div>
          <div onClick={this.props.nextLabel}>{this.props.message + this.props.isLastStep}</div>
        </ItemListMotion>
      </div>
    )
  }
}

export default Type4