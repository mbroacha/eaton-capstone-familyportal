MaterialComponents = require 'MaterialComponents'
InputModule = require 'input'

#text inbox#

text1.onClick ->
	text1.animate
		options:
			time: 0.1
			curve: Bezier.ease
		backgroundColor: "rgba(217,217,217,1)"
	text1.onAnimationEnd ->
		flow.showNext(text_message)

#text message #

link.onClick ->
	link.animate
		backgroundColor: "rgba(188,187,193,0.5)"
		options:
			time: 0.1
			curve: Bezier.ease
	link.onAnimationEnd ->
		flow.showNext(verify_number)
	
#verify number#

verify = new InputModule.Input
	setup: true
	virtualKeyboard: false
	placeholder: "Phone Number"
	placeholderColor: "#757575" 
	text: "" 
	textColor: "#000" 
	type: "text" 
	backgroundColor: "#F0F0F0"
	fontSize: 16 
	fontFamily: "'Roboto', sans serif" 
	fontWeight: "400" 
	lineHeight: 1 
	tabIndex: 0 
	padding: 10 
	autofocus: false 
	goButton: false 
	submit: false 
	textarea: true
	disabled: false
	y: Align.center
	x: 45
	width: 265
	height: 32

verify.parent = verify_number

button = new MaterialComponents.RaisedButton
	themeColor: MaterialComponents.universal
	x: Align.center
	y: verify.y + 86
	disabled: true
	labelText: "verify"

button.parent = verify_number

verify.onClick ->
	button.disabled = false
	
button.onClick ->
	#if verify.isValid == true
		flow.showNext(portal)
		
	#else 
		#button.disabled = true

	
#portal#

replybutton = new MaterialComponents.RaisedButton
	themeColor: MaterialComponents.universal
	x: 32
	y: 379
	labelText: "Reply"
	disableRipple: true
	opacity: 0
replybutton.parent = portal

someArray = [message_back,Oval,intro_text]

message.onClick ->
	message_back.animate
		opacity: 1
		options:
			time: 0.1
	message_back.onAnimationEnd ->
		other_messages.animate
			y: replybutton.y + 50
			options:
				time: 0.2
				curve: Bezier.ease
				
		other_messages.onAnimationEnd ->
			for layer in someArray
				layer.animate
					opacity: 0
					options: 
						time: .1
		
			real_message.animate
				opacity: 1
				options:
					time: 0.1
	
			replybutton.animate
				opacity: 1
				options:
					time: 0.1
				
replybutton.onClick ->
	replybutton.opacity = 0
	flow.showNext(reply)

#new message#

new_message = new InputModule.Input
	setup: true
	virtualKeyboard: false
	placeholder: ""
	placeholderColor: "#757575" 
	text: "" 
	textColor: "#000" 
	type: "text" 
	backgroundColor: "#F0F0F0"
	fontSize: 16 
	fontFamily: "'Roboto', sans serif" 
	fontWeight: "400" 
	lineHeight: 1 
	tabIndex: 0 
	padding: 10 
	autofocus: false 
	goButton: false 
	submit: false 
	textarea: true
	disabled: false
	y: 382
	x: 32
	width: 300
	height: 181

verify.parent = verify_number
	
new_message.parent = reply

send = new MaterialComponents.RaisedButton
	themeColor: MaterialComponents.universal
	labelText: "Send"
	x: Align.center
	y: Tool_Bar.y - 70
send.parent = reply

send.onClick ->
	real_message.opacity = 0
			
	intro_text.opacity = 1
	
	other_messages.y = message.y + 74

	flow.showNext(portal)

	overlay.animate
		opacity: 1.00
		options:
			time: 0.1

OK.onClick ->
	OK.animate
		backgroundColor: "rgba(217,217,217,0.5)"
		options:
			time: 0.1
	
	OK.onAnimationEnd ->
		overlay.opacity = 0
		

#merge accounts#

merge_field = new InputModule.Input
	setup: true
	virtualKeyboard: false
	placeholder: "Phone Number/Email"
	placeholderColor: "#757575" 
	text: "" 
	textColor: "#000" 
	type: "text" 
	backgroundColor: "#F0F0F0"
	fontSize: 16 
	fontFamily: "'Roboto', sans serif" 
	fontWeight: "400" 
	lineHeight: 1 
	tabIndex: 0 
	padding: 10 
	autofocus: false 
	goButton: false 
	submit: false 
	textarea: true
	disabled: false
	y: Align.center
	x: Align.center
	width: 280
	height: 32

merge_field.parent = add_account

#menus#

menu_items = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9]

menubutton1.onClick ->
	menupop1.animate
		width: 148
		height: 160
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 1
	
portal.onClick ->
	menupop1.animate
		width: 0
		height: 0
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 0
			
menu3.onTouchStart ->
	menu3.backgroundColor = "rgba(217,217,217,0.5)"
	
menu3.onTouchEnd ->
	menu3.backgroundColor = "rgba(255,255,255,1)"
	flow.showNext(add_account)
	
	

menubutton2.onClick ->
	menupop2.animate
		width: 148
		height: 160
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 1
			
reply.onClick ->
	menupop2.animate
		width: 0
		height: 0
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 0
			
menu5.onTouchStart ->
	menu5.backgroundColor = "rgba(217,217,217,0.5)"
	
menu5.onTouchEnd ->
	menu5.backgroundColor = "rgba(255,255,255,1)"
	flow.showNext(portal)
	replybutton.opacity = 1
	
menu4.onTouchStart ->
	menu4.backgroundColor = "rgba(217,217,217,0.5)"
	
menu4.onTouchEnd ->
	menu4.backgroundColor = "rgba(255,255,255,1)"
	flow.showNext(add_account)
			
menubutton3.onClick ->
	menupop3.animate
		width: 148
		height: 160
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 1
			
add_account.onClick ->
	menupop3.animate
		width: 0
		height: 0
		options:
			time: 0.3
			curve: Bezier.ease
	for layer in menu_items
		layer.animate
			opacity: 0
			
menu8.onTouchStart ->
	menu8.backgroundColor = "rgba(217,217,217,0.5)"
	
menu8.onTouchEnd ->
	menu8.backgroundColor = "rgba(255,255,255,1)"
	
	flow.showNext(portal)
	
#Flow Component#

flow = new FlowComponent
		opacity: 1.00
		opacity: 1.00

flow.showNext(text_inbox)