import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("bean", "sprites/bean.png")

// add a character to screen
add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(),
])

// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})

// burp on "b"
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