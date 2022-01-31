import * as React from "react";
import { IntentPortWidget } from "./port_widget";

export class IntentWidget extends React.Component {
  static defaultProps = {
    size: 150,
    node: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { size, node, title } = this.props;
    let img;
    if((node.name == "bitcoin") || (node.name == "ethereum") || (node.name == "BNB"))
      img = node.name;
    else
      img = 'img';
    return (
      <div
        className={"diamond-node"}
        style={{
          position: "relative",
          width: size,
          height: size / 2
        }}
      >
        <div className={"intent-node"}>
          <span>{node.name}</span>
          {/* <img src={"../../logo.svg"} /> */}
          <img src={require('../images/'+img+'.png')} style={{width:'30%',height:'auto'}}/>
          {/* <span>Bitcoin</span> */}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: size / 2 / 2 - 8,
            left: -20
          }}
        >
          <IntentPortWidget name="left" node={node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: size / 2 - 8,
            top: -20
          }}
        >
          <IntentPortWidget name="top" node={node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: size + 4,
            top: size / 2 / 2 - 8
          }}
        >
          <IntentPortWidget name="right" node={node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: size / 2 - 8,
            top: size / 2 + 4
          }}
        >
          <IntentPortWidget name="bottom" node={node} />
        </div>
      </div>
    );
  }
}
