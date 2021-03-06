export default class EndTurnButton {
    constructor(scene) {
        this.renderedButton = null

        this.render = (x, y) => {
            let button = scene.add.image(x, y, 'endTurn').setScale(0.5, 0.5).setInteractive({ cursor: 'pointer' })
            button.x -= button.displayWidth*0.75

            button.on('pointerup', () => {
                if (scene.gameState.inPregame) {
                    if (scene.gameState.endGame) {
                        alert("The game has already ended")
                    } else if (scene.player.cards.length > 5) {
                        alert("You need to have 5 cards to end pregame")
                    } else {
                        scene.socket.emit('endPregame', scene.roomName)
                        scene.currentTurnText.text = "Waiting..."                
                    }
                } else {
                    if (this.turnCanEnd()) {
                        scene.socket.emit('endTurn', scene.roomName)
                    } else {
                        this.alertTurnCantEnd()
                    }
                }
            })

            this.renderedButton = button
            return button
        }

        this.turnCanEnd = () => {
            return scene.gameState.isYourTurn() &&
                   scene.gameState.cardDrawn &&
                   !scene.gameState.inPregame
        }

        this.alertTurnCantEnd = () => {
            if (!scene.gameState.isYourTurn()) {
                alert("It's not your turn")
            } else if (!scene.gameState.cardDrawn) {
                alert("You haven't drawn a card yet")
            } else if (scene.gameState.inPregame) {
                alert("It's still the pregame")
            } else {
                console.log("Error: unexpected game state")
            }
        }
    }
}