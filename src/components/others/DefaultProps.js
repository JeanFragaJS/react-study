import React from "react"
export class DefaultProps extends React.Component {
  static defaultProps = {
    name: "João"
  }
  render () {
    return <h2>Meu nome é {this.props.name}</h2>
  }
}