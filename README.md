# Matrix Display
Simple matrix display component created in JavaScript.

![alt text](http://sztorc.com/matrix-display/vFzsV8ufdG.gif "Matrix Display")

###Showcase

[github.guru](https://github.guru)

### Usage

First, you have to create display with dot elements in your html file:

```html
<div id="matrix-display">
	<svg width="721" height="110" class="matrix-svg">
		<g transform="translate(20, 20)">
			<g transform="translate(0, 0)">
			  <rect width="11" height="11" y="0" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="13" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="26" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="39" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="52" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="65" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="78" fill="#eeeeee"></rect>
			</g>
			<g transform="translate(13, 0)">
			  <rect width="11" height="11" y="0" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="13" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="26" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="39" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="52" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="65" fill="#eeeeee"></rect>
			  <rect width="11" height="11" y="78" fill="#eeeeee"></rect>
			</g>

			....
		</g>
	</svg>
</div>
```
Now, you can run the script using following code:

```javascript
	//constructor
	var dm = new MatrixDisplay({
		repeat: true,
		containerEl: '#matrix-display .matrix-svg',
		compositions: [
		{
		    text: 'hello',
		    fx: 'none',
		    invert: false,
		    speed: 40
		},
		{
		    text: 'world',
		    fx: 'none',
		    invert: true,
		    speed: 40
		}]
	});

	//run compositions
	dm.run();  
```

### Compositions
Every slide is called composition. You can add any slides (compositions) to your display.

Composition object:
```javascript

{
	text: 'Your text', //composition text
	fx: 'none', //composition animation (available: 'left', 'right', 'up', 'down')
	speed: 40, //animation speed in ms
	colors: ['#00B9FD', '#9C00DD', '#0074C5'], //custom text colors
	background: '#eeeeee', //background color
	invert: true, //invert colors <-> background
	duration: 1000, //time to wait between slides (use if fx is set to none)
}

```

### Methods
Some useful methods

Run compositions
```javascript
dm.run();
```

Run compositions by passing compositions in array
```javascript
var compositions = [
	{ text: 'Text1', fx: 'none' },
	{ text: 'Text2', fx: 'down' }
];
dm.run(compositions);
```

Animate text
```javascript
var composition = { text: 'Some text1', fx: 'left' };
dm.animateText(composition);
```

Animate text
```javascript
var composition = { text: 'Some text 2', fx: 'left' };
dm.animateText(composition);
```

Display text
```javascript
dm.displayText({text: 'Your text'});
```

Get option
```javascript
dm.getOption('repeat');
```

Set option
```javascript
dm.setOption('repeat', true);
```

### TODO
- Initialize display by size (generating DOM elements)
- More effects and additional transitions
- Additional fonts

### License
MIT