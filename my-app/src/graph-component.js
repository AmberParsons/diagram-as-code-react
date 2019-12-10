import { DataSet, Network } from 'vis';
import React, { Component, createRef } from "react";

export class Graph extends Component {
    constructor(props) {
        super(props);
        this.edges = this.props.graphData.getEdges();
        this.nodes = this.props.graphData.getNodes();
        this.appRef = createRef();
        this.network = {}
    }

    componentDidMount() {
        this.edges = new DataSet(this.edges);
        this.nodes = new DataSet(this.nodes);
        this.network = new Network(this.appRef.current, { edges: this.edges, nodes: this.nodes }, 
        { 
            height: '500px',
            width: '500px', 
            edges: {
                arrows: {
                    to: {
                        enabled: true,
                        imageHeight: undefined,
                        imageWidth: undefined,
                        scaleFactor: 1,
                        src: undefined,
                        type: "arrow"
                    }
                }
            }, 
            nodes: { 
                shape: "box"
            } 
        }
        );
    }

    render() {
        return (
          <div ref={this.appRef} />
        );
    }
}