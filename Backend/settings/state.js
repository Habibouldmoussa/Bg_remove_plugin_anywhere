module.export = class State {
    constructor() {
        this.state = {
            flipHorizontal: false,
            internalResolution: 'medium',
            segmentationThreshold: 0.7,
            backgroundColour: '#ffffff'
        }

        this.subscribers = new Set()
    }
}