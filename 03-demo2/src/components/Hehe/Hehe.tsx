import * as React from 'react'
import './Hehe.less'

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
        <div className="Hehe">
          <h2>I'm purple</h2>
          <p>This is an example. <span>This is an example.</span> This is an example. This is an example. This is an example. This is an example. This is an example. This is an example.</p>
        </div>
      </div>
    )
  }
}
