import React from 'react'

export default class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.selectedNode = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.onSelectChange && prevProps.selected != this.props.selected) {
      this.props.onSelectChange(this.selectedNode.current.firstChild)
    }
  }

  render() {
    return (
      <div>
        {this.props.data.map((a, i) => (
          <div ref={i === this.props.selected ? (this.selectedNode) : ''}>
            {this.props.children[0]}
            {i === this.props.selected && this.props.children[1]}
          </div>
        ))}
        {this.props.children[2]}
      </div>
    )
  }
}