import kaboom from "kaboom"

// initialize context
kaboom()
// Game settings

// load the B E A N and stuff
loadSprite("bean", "sprites/bean.png")
loadSprite("Burp", "sprites/Burp.png")
// add a character to screen
add([
	// list of 冰淇淋
	sprite("bean"),
	pos(80, 40),
	area(),
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
