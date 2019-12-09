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
        this.network = new Network(this.appRef.current, { edges: this.edges, nodes: this.nodes }, {});
        window.scrollTo(0, 0)
    }

    render() {
        return (
          <div ref={this.appRef} />
        );
    }
}