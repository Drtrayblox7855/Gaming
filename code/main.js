import kaboom from "kaboom"

// initialize context
kaboom()
// Game settings
const SPEED = 320
const ENEMY_SPEED = 160

// load the B E A N and stuff
loadSprite("bean", "sprites/bean.png")
loadSprite("Burp", "sprites/Burp.png")
loadSprite("Grass", "sprites/Grass.png")
//adding the player
const Player = add([
  sprite("bean"),
	pos(80, 80),
	area(),
	origin("center"),
])

add([
  sprite("Grass"),
  pos(12, 20),
  scale(2),
])
// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})

// stuipidest thing on man earth
onKeyPress("b", burp)
// on like a touch imput from a phone or somethin
onTouchStart(() => { 
  addKaboom(mousePos()),
  add([
    pos(15, 300),
    text("Game not available!", {
    size: "24",
    font: "sink",
}),
    ])
})
// Oh crap. We are not liable for any summoned demons though.
onTouchMove(burp, () => {
  addKaboom(mousePos())
})
OnTouchEnd(() => {
  addKaboom(mousePos())
})
// Movement system
onKeyDown("D", () => {
  you.move(-SPEED, 0)
})
oKeyDown("A", () =>  {
  Player.move(SPEED, 0)
})
oKeyDown("W", () => {
Player.move(0, SPEED)
})
onKeyDown("S", () => {
  Player.move(0, -SPEED)
})
// Enemy A.I (Well, im gonna be fu-)















