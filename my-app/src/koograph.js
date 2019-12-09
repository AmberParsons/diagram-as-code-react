import { concat } from "ramda";

export class Koograph {
  constructor() {
    this.network = {};
    this.data = {};
    this.data.nodes = [];
    this.data.edges = [];
  }

  getEdges() {
    return this.data.edges;
  }

  getNodes() {
    return this.data.nodes;
  }

  addNode(node) {
    const edgesToAdd = node.edges;
    const nodeInfoToAdd = node.nodeInfo;

    console.log('Edges to add!', edgesToAdd)
    console.log('Node info to add!', nodeInfoToAdd)
    this.data.nodes.push(nodeInfoToAdd);
    this.data.edges = concat(this.data.edges, edgesToAdd)
  }
}
