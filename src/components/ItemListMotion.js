import React from 'react'
import { Motion, spring, presets } from "react-motion";
import ItemList from '/src/components/ItemList'

export default class ItemListMotion extends React.Component {
  constructor(props) {
    super(props)
    this.item = React.createRef();
    this.state = { scrollTop: 0 }
  }

  scrollTo= (selectedNode) => {
    this.setState(prev => {
      return {
        scrollTop: selectedNode.offsetTop
      }
    })
  }

  render() {
    return (
      <ItemList selected={this.props.selected} data={this.props.data} onSelectChange={this.scrollTo}>
        {this.props.children[0]}
        {this.props.children[1]}
        <Motion
          style={{scrollTop: spring(this.state.scrollTop, { stiffness: 20, damping: 14 })}}>
          {currentStyles => { return <WindowScrollSink scrollTop={currentStyles.scrollTop} />}}
        </Motion>
      </ItemList>
    )
  }
}

class WindowScrollSink extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.scrollTop !== this.props.scrollTop) {
      document.scrollingElement.scrollTop = this.props.scrollTop
    }
  }

  render() {
    return null
  }
}