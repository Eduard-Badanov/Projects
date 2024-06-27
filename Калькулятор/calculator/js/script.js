const display = document.getElementsByTagName('input')
const buttonClear = document.getElementById('btn-clear')
const buttonNegative = document.getElementById('btn-negative')
const buttonPercent = document.getElementById('btn-percent')
const buttonDivide = document.getElementById('btn-divide')
const buttonMultiply = document.getElementById('btn-mtp')
const buttonSubtract = document.getElementById('btn-minus')
const buttonAdd = document.getElementById('btn-plus')
const buttonEqual = document.getElementById('btn-equal')

const button0 = document.getElementById('btn-0')
const button1 = document.getElementById('btn-1')
const button2 = document.getElementById('btn-2')
const button3 = document.getElementById('btn-3')
const button4 = document.getElementById('btn-4')
const button5 = document.getElementById('btn-5')
const button6 = document.getElementById('btn-6')
const button7 = document.getElementById('btn-7')
const button8 = document.getElementById('btn-8')
const button9 = document.getElementById('btn-9')
const buttonDot = document.getElementById('btn-dot')

function getLastValue(element) {
	return (((display[0].value).split('')).at(-1) === element)
}

function clear() {
	display[0].value = ''
}
function equal() {
	const result = display[0].value
	display[0].value = eval(result)
	if (display[0].value == 'undefined') display[0].value = ''
	if (display[0].value == 'NaN') display[0].value = 'Error'
}
function negative() {
	display[0].value = (display[0].value) * -1
}
function percent() {
	if (getLastValue('%')) display[0].value += ''
	else display[0].value += '%'
}
function zero() {
	display[0].value += 0
	// if (getLastValue('0')) display[0].value += ''
	// else display[0].value += 0
}
function one() {
	display[0].value += 1
}
function two() {
	display[0].value += 2
}
function three() {
	display[0].value += 3
}
function four() {
	display[0].value += 4
}
function five() {
	display[0].value += 5
}
function six() {
	display[0].value += 6
}
function seven() {
	display[0].value += 7
}
function eight() {
	display[0].value += 8
}
function nine() {
	display[0].value += 9
}
function dot() {
	if (getLastValue('.')) display[0].value += ''
	else display[0].value += '.'
}
function plus() {
	if (getLastValue('+')) display[0].value += ''
	else display[0].value += '+'
}
function minus() {
	if (getLastValue('-')) display[0].value += ''
	else display[0].value += '-'
}
function divide() {
	if (getLastValue('/')) display[0].value += ''
	else display[0].value += '/'
}
function multiply() {
	if (getLastValue('*')) display[0].value += ''
	else display[0].value += '*'
}

buttonEqual.addEventListener('click', equal)

window.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') equal()
})

buttonClear.addEventListener('click', clear)
buttonNegative.addEventListener('click', negative)
buttonPercent.addEventListener('click', percent)

button0.addEventListener('click', zero)
button1.addEventListener('click', one)
button2.addEventListener('click', two)
button3.addEventListener('click', three)
button4.addEventListener('click', four)
button5.addEventListener('click', five)
button6.addEventListener('click', six)
button7.addEventListener('click', seven)
button8.addEventListener('click', eight)
button9.addEventListener('click', nine)
buttonDot.addEventListener('click', dot)

buttonAdd.addEventListener('click', plus)
buttonSubtract.addEventListener('click', minus)
buttonMultiply.addEventListener('click', multiply)
buttonDivide.addEventListener('click', divide)

window.addEventListener('load', () => {
	const currentWidth = window.innerWidth;
	const currentHeight = window.innerHeight;

	document.querySelector('.calculator').style.transform = `scale(${(currentWidth * currentHeight) / (1366 * 644) + 1})`;
})