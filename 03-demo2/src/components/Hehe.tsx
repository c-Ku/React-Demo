import * as React from 'react'

export interface HeheProps {
  compiler: string
  framework: string
}

export class Hehe extends React.PureComponent<HeheProps, {}> {
  render() {
    return (
      <div>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <h2>HeHehaha</h2>
      </div>
    )
  }
}
