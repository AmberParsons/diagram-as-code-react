import { Koograph } from "./koograph";
import { Service } from "./service";

export function drawGraph() {
    const creditfileGateway = new Service('creditfile-gateway', 1);
    const creditfileTransformer = new Service('creditfileTransformer', 2);

    creditfileGateway.talksTo(creditfileTransformer);

    const graph = new Koograph();

    graph.addNode(creditfileGateway);
    graph.addNode(creditfileTransformer);

    console.log('Graph in createGraph', graph)
    return graph;
}