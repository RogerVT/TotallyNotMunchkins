import PlayerHand from '../classes/playerHand'
import Token from '../classes/token'

export default class Player {
    constructor(scene) {
        // UI Elements
        this.playerHand = new PlayerHand(scene)
        this.token = new Token(scene)

        // Data
        this.cards = []
        this.level = 1
        this.equipment = []
        this.power = 1

        // Renders
        this.renderHand = (hWidth, hHeight, cardWidth, cardHeight, offset) => {
            this.playerHand.render(scene.scale.width/2 - hWidth/2, scene.scale.height - hHeight - offset, hWidth, hHeight, cardWidth, cardHeight)
        }

        this.renderToken = (startTile, index) => {
            this.token.render(startTile, index, /*isPlayerToken */ true, 'tokenBlue')
        }
        
        // Logic
        this.addToHand = (card, i) => {
            this.cards.push(card)
            this.playerHand.addCard(card, i)
            console.log(this.cards)
        }

        this.getData = () => {
            return {
                cards: this.cards,
                level: this.level,
                equipment: this.equipment,
                power: this.power
            }
        }
    }
}