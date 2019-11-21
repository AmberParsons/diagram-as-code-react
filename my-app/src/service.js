class Service {
    constructor(label, image, position, count = 1){
        this.label = label;
        this.image = image;
        this.position = position;
        this.id = count;
        this.edges = [];

        window.diagram.add(this);
    }

    talksTo(otherService) {
        this.edges.push({ from: this.id, to: otherService.id})
    }
}

module.exports = Service;