const HTML = document.createElement('div')
HTML.classList.add('keybord-mouse')
HTML.innerHTML = `
<div class="keybord-mouse">
			<div class="keybord">
				<div class="main-part">
					<div class="line-1">
						<div id='27' class="type-1">Esc</div>
						<div class="group-1">
							<div id='112' class="type-1">F1</div>
							<div id="113" class="type-1">F2</div>
							<div id="114" class="type-1">F3</div>
							<div id="115" class="type-1">F4</div>
						</div>
						<div class="group-2">
							<div id="116" class="type-1">F5</div>
							<div id="117" class="type-1">F6</div>
							<div id="118" class="type-1">F7</div>
							<div id="119" class="type-1">F8</div>
						</div>
						<div class="group-3">
							<div id="120" class="type-1">F9</div>
							<div id="121" class="type-1">F10</div>
							<div id="122" class="type-1">F11</div>
							<div id="123" class="type-1">F12</div>
						</div>
					</div>
					<div class="line-2">
						<div id="192" class="type-3">
							<span>~</span><span>\`</span><span>Ё</span>
						</div>
						<div id="49" class="type-2">
							<span>!</span><span>1</span>
						</div>
						<div id="50" class="type-3">
							<span>@</span><span>"</span><span>2</span>
						</div>
						<div id="51" class="type-3">
							<span>#</span><span>№</span><span>3</span>
						</div>
						<div id="52" class="type-3">
							<span>$</span><span>;</span><span>4</span>
						</div>
						<div id="53" class="type-2">
							<span>%</span><span>5</span>
						</div>
						<div id="54" class="type-3">
							<span>^</span><span>:</span><span>6</span>
						</div>
						<div id="55" class="type-3">
							<span>&</span><span>?</span><span>7</span>
						</div>
						<div id="56" class="type-2">
							<span>*</span><span>8</span>
						</div>
						<div id="57" class="type-2">
							<span>(</span><span>9</span>
						</div>
						<div id="48" class="type-2">
							<span>)</span><span>0</span>
						</div>
						<div id="189" class="type-2">
							<span>_</span><span>-</span>
						</div>
						<div id="187" class="type-2">
							<span>+</span><span>=</span>
						</div>
						<div id="8" class="type-4">Backspace</div>
					</div>
					<div class="line-3">
						<div id="9" class="type-4">Tab</div>
						<div id="81" class="type-5">
							<span>Q</span><span>Й</span>
						</div>
						<div id="87" class="type-5">
							<span>W</span><span>Ц</span>
						</div>
						<div id="69" class="type-5">
							<span>E</span><span>У</span>
						</div>
						<div id="82" class="type-5">
							<span>R</span><span>К</span>
						</div>
						<div id="84" class="type-5">
							<span>T</span><span>Е</span>
						</div>
						<div id="89" class="type-5">
							<span>Y</span><span>Н</span>
						</div>
						<div id="85" class="type-5">
							<span>U</span><span>Г</span>
						</div>
						<div id="73" class="type-5">
							<span>I</span><span>Ш</span>
						</div>
						<div id="79" class="type-5">
							<span>O</span><span>Щ</span>
						</div>
						<div id="80" class="type-5">
							<span>P</span><span>З</span>
						</div>
						<div id="219" class="type-3">
							<span>{</span><span>[</span><span>Х</span>
						</div>
						<div id="221" class="type-3">
							<span>}</span><span>]</span><span>Ъ</span>
						</div>
						<div id="220" class="type-6">
							<span>|</span><span>/</span><span>\</span><span>\</span>
						</div>
					</div>
					<div class="line-4">
						<div id="20" class="type-4">CapsLk</div>
						<div id="65" class="type-5">
							<span>A</span><span>Ф</span>
						</div>
						<div id="83" class="type-5">
							<span>S</span><span>Ы</span>
						</div>
						<div id="68" class="type-5">
							<span>D</span><span>В</span>
						</div>
						<div id="70" class="type-5">
							<span>F</span><span>А</span>
						</div>
						<div id="71" class="type-5">
							<span>G</span><span>П</span>
						</div>
						<div id="72" class="type-5">
							<span>H</span><span>Р</span>
						</div>
						<div id="74" class="type-5">
							<span>J</span><span>О</span>
						</div>
						<div id="75" class="type-5">
							<span>K</span><span>Л</span>
						</div>
						<div id="76" class="type-5">
							<span>L</span><span>Д</span>
						</div>
						<div id="186" class="type-3">
							<span>:</span><span>;</span><span>Ж</span>
						</div>
						<div id="222" class="type-3">
							<span>"</span><span>'</span><span>Э</span>
						</div>
						<div id="13" class="type-4">Enter</div>
					</div>
					<div class="line-5">
						<div id="16" class="type-4">Shift</div>
						<div id="90" class="type-5">
							<span>Z</span><span>Я</span>
						</div>
						<div id="88" class="type-5">
							<span>X</span><span>Ч</span>
						</div>
						<div id="67" class="type-5">
							<span>C</span><span>С</span>
						</div>
						<div id="86" class="type-5">
							<span>V</span><span>М</span>
						</div>
						<div id="66" class="type-5">
							<span>B</span><span>И</span>
						</div>
						<div id="78" class="type-5">
							<span>N</span><span>Т</span>
						</div>
						<div id="77" class="type-5">
							<span>M</span><span>Ь</span>
						</div>
						<div id="188" class="type-3">
							<span><</span><span>,</span><span>Б</span>
						</div>
						<div id="190" class="type-3">
							<span>></span><span>.</span><span>Ю</span>
						</div>
						<div id="191" class="type-6">
							<span>?</span><span>,</span><span>/</span><span>.</span>
						</div>
						<div id="16" class="type-4">Shift</div>
					</div>
					<div class="line-6">
						<div class="group-1">
							<div id="17" class="type-1">Ctrl</div>
							<div id="null" class="type-1">Fn</div>
							<div id="91" class="type-1">Win</div>
							<div id="18" class="type-1">Alt</div>
						</div>
						<div id="32" class="type-space">Space</div>
						<div class="group-2">
							<div id="18" class="type-1">Alt</div>
							<div id="93" class="type-1">Ctx</div>
							<div id="17" class="type-1">Ctrl</div>
						</div>
					</div>
				</div>
				<div class="function-part">
					<div class="line-1">
						<div id="41" class="type-1">Print<br>Screen</div>
						<div id="145" class="type-1">Scrol<br>Lock</div>
						<div id="19" class="type-1">Pause</div>
					</div>
					<div class="line-2">
						<div id="45" class="type-1">Insert</div>
						<div id="36" class="type-1">Home</div>
						<div id="33" class="type-1">Page<br>Up</div>
					</div>
					<div class="line-3">
						<div id="46" class="type-1">Delete</div>
						<div id="35" class="type-1">End</div>
						<div id="34" class="type-1">Page<br>Down</div>
					</div>
					<div class="line-4">
						<div id="null" class="type-1"></div>
						<div id="null" class="type-1"></div>
						<div id="null" class="type-1"></div>
					</div>
					<div class="line-5">
						<div id="null" class="type-1"></div>
						<div id="38" class="type-1">&uarr;</div>
						<div id="null" class="type-1"></div>
					</div>
					<div class="line-6">
						<div id="37" class="type-1">&larr;</div>
						<div id="40" class="type-1">&darr;</div>
						<div id="39" class="type-1">&rarr;</div>
					</div>
				</div>
				<div class="numpad-part">
					<div class="main">
						<div class="line-empty">
							<div id="null" class="type-1"></div>
							<div id="null" class="type-1"></div>
							<div id="null" class="type-1"></div>
						</div>
						<div class="line-1">
							<div id="144" class="type-1">Num<br>Lock</div>
							<div id="111" class="type-1">&divide;</div>
							<div id="106" class="type-1">&times;</div>
						</div>
						<div class="line-2">
							<div id="103" class="type-1">7</div>
							<div id="104" class="type-1">8</div>
							<div id="105" class="type-1">9</div>
						</div>
						<div class="line-3">
							<div id="100" class="type-1">4</div>
							<div id="101" class="type-1">5</div>
							<div id="102" class="type-1">6</div>
						</div>
						<div class="line-4">
							<div id="97" class="type-1">1</div>
							<div id="98" class="type-1">2</div>
							<div id="99" class="type-1">3</div>
						</div>
						<div class="main-bottom">
							<div id="96" class="type-4">0</div>
							<div id="110" class="type-1">,</div>
						</div>
					</div>
					<div class="main-right">
						<div class="group-1">
							<div id="null" class="type-1"></div>
							<div id="109" class="type-1">-</div>
						</div>
						<div class="group-2">
							<div id="107" class="type-7">+</div>
							<div id="13" class="type-7">Enter</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mouse">
				<svg width="162" height="309" viewBox="0 0 162 309" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path id='MouseBottom' d="M2.84229 133.935V227.837C2.84229 264.726 2.84229 283.171 14.3021 294.63C25.762 306.09 44.2072 306.09 81.0977 306.09V306.09C117.988 306.09 136.433 306.09 147.893 294.63C159.353 283.171 159.353 264.726 159.353 227.838V133.935" stroke="black" stroke-width="3.91264"/>
					<path id='LeftMouse' d="M74.8604 43.0351V62.428C74.8604 67.0591 76.5486 70.8133 81.0981 70.8133V133.935H2.84229V79.1107C2.84229 36.9498 36.4187 2.77173 77.8374 2.77173H81.0981V34.6499C76.5486 34.6499 74.8604 38.404 74.8604 43.0351Z" stroke="black" stroke-width="3.91264"/>
					<path id='RightMouse' d="M87.3354 43.0348V62.4278C87.3354 67.0588 85.6472 70.813 81.0977 70.813V133.935H159.354V79.1104C159.354 36.9496 125.777 2.77148 84.3584 2.77148H81.0977V34.6496C85.6472 34.6496 87.3354 38.4038 87.3354 43.0348Z" stroke="black" stroke-width="3.91264"/>
					<path id='CenterMouse' d="M74.8604 43.0351V62.4281C74.8604 67.0591 76.5485 70.8133 81.098 70.8133C85.6475 70.8133 87.3353 67.0589 87.3353 62.4278V43.0349C87.3353 38.4039 85.6475 34.6499 81.098 34.6499C76.5485 34.6499 74.8604 38.4041 74.8604 43.0351Z"/>
				</svg>
			</div>
		</div>
`
document.body.append(HTML)

const Styles = document.createElement('style')
Styles.innerHTML = `
body{margin:0;padding:0;box-sizing:border-box}
.active{background:#000;color:#fff;transition:all .05s}
.active-mouse{fill:#000;transition:all .05s}
.montserrat{font-family:Montserrat,sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal}
.keybord-mouse{display:flex;flex-direction:row;gap:50px;position:absolute;bottom:10px;right:10px;transform-origin:bottom right;transform:scale(.8);z-index:99999999999999999999;align-items:center;width:min-content}
.mouse{height:min-content;width:min-content}
.keybord{display:flex;flex-direction:row;align-items:center;gap:30px;font-family:Montserrat,sans-serif;font-weight:500;font-size:14px;height:min-content;width:min-content;border:3px solid #000;padding:15px;border-radius:15px}
.type-1:empty{opacity:0}
.function-part,.main-part,.numpad-part .main{display:flex;flex-direction:column;gap:7px}
.function-part .line-1,.function-part .line-2,.function-part .line-3,.function-part .line-4,.function-part .line-5,.function-part .line-6,.line-1 .group-1,.line-1 .group-2,.line-1 .group-3,.main-part .line-1,.main-part .line-2,.main-part .line-3,.main-part .line-4,.main-part .line-5,.main-part .line-6,.main-part .line-6 .group-1,.main-part .line-6 .group-2,.numpad-part,.numpad-part .line-1,.numpad-part .line-2,.numpad-part .line-3,.numpad-part .line-4,.numpad-part .line-5,.numpad-part .line-6,.numpad-part .line-empty,.numpad-part .main-bottom{display:flex;flex-direction:row;align-items:center;gap:3px}
.main-part .line-1{justify-content:space-between;padding-bottom:7px}
.type-1,.type-2,.type-3,.type-4,.type-5,.type-6,.type-7,.type-space{display:flex;flex-direction:column;justify-content:center;align-items:center;width:50px;height:50px;border-radius:10px;border:3px solid #000;text-align:center}
.type-3,.type-5,.type-6{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:0;grid-row-gap:0;justify-items:center;align-items:center}
.type-2{display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:0;grid-row-gap:0;justify-items:center;align-items:center}
.type-5 span:last-child{grid-area:2/2/3/3}
.type-3 span:first-child,.type-5 span:first-child{grid-area:1/1/2/2}
.type-3 span:nth-child(2){grid-area:1/2/2/3}
.type-3 span:last-child{grid-area:2/1/3/2}
.type-4{width:100px}
.main-part .line-4 .type-4:first-child,.numpad-part .main .main-bottom>div:first-child{width:109px}
.main-part .line-5 .type-4:first-child{width:118px}
.main-part .line-5 .type-4:last-child{width:150px}
.main-part .line-6,.numpad-part .main .main-bottom{justify-content:space-between}
.type-space{width:100%}
.numpad-part{align-items:stretch}
.type-7{height:100%}
.numpad-part .main-right,.numpad-part .main-right .group-1,.numpad-part .main-right .group-2{justify-content:space-between;display:flex;flex-direction:column;gap:7px}
.numpad-part .main-right{position:relative}
.numpad-part .main-right .group-2{height:-webkit-fill-available}
`
document.head.append(Styles)

addEventListener('keydown', (event) => {
	// console.log(event);
	console.log(`Клавиша нажата:`, event.key, event.keyCode);
	const keyPress = event.keyCode
	const hideInDOM = document.getElementById(keyPress)
	hideInDOM.classList.add('active')
})
addEventListener('keyup', (event) => {
	console.log(`Клавиша отпущена:`, event.key, event.keyCode);
	const keyPress = event.keyCode
	const hideInDOM = document.getElementById(keyPress)
	hideInDOM.classList.remove('active')
})
addEventListener('mousedown', (event) => {
	if (event.which === 1) document.getElementById('LeftMouse').classList.add('active-mouse')//console.log(`Левая кнопка мыши нажата: `, event.which, event.button);
	else if (event.which === 2) document.getElementById('CenterMouse').classList.add('active-mouse')// console.log(`Средняя кнопка мыши нажата: `, event.which, event.button);
	else if (event.which === 3) document.getElementById('RightMouse').classList.add('active-mouse') //console.log(`Правая кнопка мыши нажата: `, event.which, event.button);
})
addEventListener('mouseup', (event) => {
	if (event.which === 1) document.getElementById('LeftMouse').classList.remove('active-mouse')//console.log(`Левая кнопка мыши нажата: `, event.which, event.button);
	else if (event.which === 2) document.getElementById('CenterMouse').classList.remove('active-mouse')// console.log(`Средняя кнопка мыши нажата: `, event.which, event.button);
	else if (event.which === 3) document.getElementById('RightMouse').classList.remove('active-mouse') //console.log(`Правая кнопка мыши нажата: `, event.which, event.button);
})
window.addEventListener('load', () => {
	const currentWidth = window.innerWidth;
	const currentHeight = window.innerHeight;

	// document.querySelector('.keybord-mouse').style.transform = `scale(${(currentWidth + currentHeight) / (1280 + 720)})`//(1920 * 1080)
})