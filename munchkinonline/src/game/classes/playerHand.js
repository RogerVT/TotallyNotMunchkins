import PlayerCard from './playerCard'
import Equipment from '../classes/equipment'

export default class PlayerHand {
    constructor(scene) {
        this.dimensions = {x: 0, y: 0, width: 0, height: 0, cardHeight: 0, cardWidth: 0}
        this.renderedOutline = null

        this.render = (x, y, width, height, cardWidth, cardHeight) => {
            this.dimensions.x = x
            this.dimensions.y = y 
            this.dimensions.width = width 
            this.dimensions.height = height
            this.dimensions.cardWidth = cardWidth
            this.dimensions.cardHeight = cardHeight

            let outline = scene.add.graphics()
            outline.lineStyle(4, 0x000000)
            outline.strokeRect(x, y, width, height)
            this.renderedOutline = outline

            this.dividerLine = scene.add.line(0, 0, x + width*0.4, height/2 + y, x + width*0.4, 1.5*height + y, 0x000)

            this.dropZone = scene.add.zone(x + width*0.2, y + height/2, width*0.4*0.8, height*0.8).setRectangleDropZone(width*0.4*0.8, height*0.8)
            this.dropZone.setData({type: "hand"})

            this.dropZone.on('pointerover', () => {
                scene.strengthText.text = `${scene.player.getFullStrength()}`
                if (scene.player.getFullStrength() < 10) {
                    scene.strengthText.text = '0' + scene.strengthText.text
                }
                scene.strengthText.setColor(scene.player.colorString)
            })

            this.equipment = new Equipment(scene, x + width*0.4, y, width*0.6, height, cardWidth, cardHeight)
            this.equipment.renderSlots()
        }

        this.addCard = (card, i) => {
            const maxCards = 3

            let playerCard = new PlayerCard(scene, card.deck)
            playerCard.render(this.dimensions.x + this.dimensions.cardWidth + 1.5*i*(this.dimensions.cardWidth/maxCards), this.dimensions.y + this.dimensions.height/2, card)
        }

        this.colorHand = (color) => {
            this.renderedOutline.destroy()
            this.renderedOutline = scene.add.graphics()
            this.renderedOutline.lineStyle(4, color)
            this.renderedOutline.strokeRect(this.dimensions.x, this.dimensions.y, this.dimensions.width, this.dimensions.height)
        }
    }
}