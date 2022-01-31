import {
    IntentFactory,
    IntentPortFactory,
    IntentPortModel,
    IntentModel
  } from "./Intent";
  import {
    DiagramEngine,
    DiagramModel,
    DiagramWidget
  } from "storm-react-diagrams";
  import * as React from "react";
  require("storm-react-diagrams/dist/style.min.css");
  
  export class Diagram extends React.Component {
    engine = new DiagramEngine();
    model = new DiagramModel();
  
    state = {
      updated: Math.random()
    };
    componentDidMount() {
      const { engine, model } = this;
      engine.installDefaultFactories();
      engine.registerPortFactory(
        new IntentPortFactory("diamond", config => new IntentPortModel())
      );
      engine.registerNodeFactory(new IntentFactory());
      // setup the diagram model
  
      // create four nodes in a way that straight links wouldn't work
      // const nodes = [];
      // nodes.push(new IntentModel());
      // nodes[0].setPosition(340, 350);
  
      // nodes.push(new IntentModel());
      // nodes[1].setPosition(700, 450);
  
      // const links = [];
      // links.push(nodes[0].getPort("right").link(nodes[1].getPort("left")));
  
      // model.addAll(...nodes, ...links);
    }
  
    addNode = () => {
      const { model } = this;
      const node = new IntentModel();
      node.setPosition(200, 200);
      node.name = document.getElementById('node_name').value;
      model.addNode(node);
      this.setState({ updated: Math.random() });
    };
  
    render() {
      this.engine.setDiagramModel(this.model);
  
      return (
        <div style={{background:'#2b314c',display:'flex'}}>
          <div style={{margin:'80px 0'}}>
            <label style={{color:'white'}}>name</label>&nbsp;&nbsp;&nbsp;
          <input type = "text" ref = 'node_name' id = 'node_name' style={{margin:'30px 0'}} />
          {/* <input type = "text" ref = 'node_name' id = 'node_name' style={{margin:'30px 0'}} /> */}
          <button onClick={this.addNode}>Add Coins</button>
          </div>
          
            <DiagramWidget
              className="srd-demo-canvas"
              diagramEngine={this.engine}
              maxNumberPointsPerLink={0}
            />
        </div>
      );
    }
  }
  