export default class OpponentCard {
    constructor(scene, cardType) {
        this.render = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(0.1, 0.1).setInteractive({ cursor: 'pointer' })
            scene.input.setDraggable(card);

            card.setData({type: 'card', cardType: cardType})
            return card
        }
    }
}