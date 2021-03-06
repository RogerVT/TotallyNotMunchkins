import PlayerHand from '../classes/playerHand'
import Token from '../classes/token'

export default class Player {
    constructor(scene) {
        // UI Elements
        this.playerHand = new PlayerHand(scene)
        this.token = new Token(scene)
        this.color = null
        this.colorString = null

        // Data
        this.cards = []
        this.level = 1
        this.equipment = []
        this.power = 1
        this.gender = ""

        // Renders
        this.renderHand = (hWidth, hHeight, cardWidth, cardHeight, offset) => {
            this.playerHand.render(scene.scale.width/2 - hWidth/2, scene.scale.height - hHeight - offset, hWidth, hHeight, cardWidth, cardHeight)
        }

        this.renderToken = (startTile, index, sprite) => {
            this.token.render(startTile, index, /*isPlayerToken */ true, sprite + '-' + this.gender)
        }
        
        // Logic
        this.addToHand = (card, i) => {
            this.cards.push(card)
            this.playerHand.addCard(card, i)
        }

        this.removeCardAt = (index) => {
            this.cards.splice(index, 1)
        }

        this.getData = () => {
            return {
                cards: this.cards,
                level: this.level,
                equipment: this.equipment,
                power: this.power
            }
        }

        this.levelUp = (n) => {
            this.level += n
            this.level = Math.min(this.level, 10)
            this.token.renderedToken.data.set('level', this.level)
            scene.socket.emit('updateLevel', scene.roomName, scene.socket.id, this.level)
        }

        this.updateLevel = (level) => {
            this.level = level
            this.token.renderedToken.data.set('level', this.level)
        }

        this.chooseColor = (tokenImage) => {
            switch (tokenImage) {
                case "tokenYellow":
                    this.color = 0xD4AF37
                    this.colorString = "#D4AF37"
                    break;
                case "tokenRed":
                    this.color = 0xCA3013
                    this.colorString = "#CA3013"
                    break;
                case "tokenBlue":
                    this.color = 0x2D27A6
                    this.colorString = "#2D27A6"
                    break;
                case "tokenGreen":
                    this.color = 0x1E8000
                    this.colorString = "#1E8000"
                    break;
                default:
                    console.log("Error: unexpected token color")
            }
            this.playerHand.colorHand(this.color)
        }
    }
}