export class Service {
    constructor(label, count = 1){
        this.label = label;
        this.id = count;
        this.edges = [];

        this.nodeInfo = { label: this.label, id: this.id };
    }

    talksTo(otherService) {
        console.log('Adding an edge!')
        this.edges.push({ from: this.id, to: otherService.id})
    }
}
