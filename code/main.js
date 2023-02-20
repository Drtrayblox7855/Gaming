import kaboom from "kaboom"

// initialize context
kaboom()

// load the B E A N
loadSprite("bean", "sprites/bean.png")

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
  add([
    pos(15, 300),
    text("You cannot play this game on a mobile telephone!", {
    size: "24",
    font: "sink",
}),
    ])
})