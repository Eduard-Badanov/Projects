let SettingsOfTimeParameters = {
	'Symbol': ':',
	'Data': true,
	'LocationX': 5.6,
	'LocationY': 96,
	'Hide': false,
}
window.addEventListener('load', () => {
let UserSetting;
function SaveCurrentSetting () {
	UserSetting = JSON.stringify(SettingsOfTimeParameters);
	localStorage.setItem('UserSetting', UserSetting);
	console.log(UserSetting);
}
// SaveCurrentSetting();
function LoadCurrentSetting () {
	UserSetting = localStorage.getItem('UserSetting');
	SettingsOfTimeParameters = JSON.parse(UserSetting);
	console.log(SettingsOfTimeParameters);
}
// LoadCurrentSetting();
function RemoveCurrentSetting () {
	localStorage.removeItem('UserSetting');
	return SettingsOfTimeParameters;
}

if (!localStorage.getItem('UserSetting')) {
	UserSetting = JSON.stringify(SettingsOfTimeParameters);
	localStorage.setItem('UserSetting', UserSetting);
}

LoadCurrentSetting();
UserSetting = JSON.parse(UserSetting);
SettingsOfTimeParameters.Symbol = UserSetting.Symbol;
SettingsOfTimeParameters.Data = UserSetting.Data;
SettingsOfTimeParameters.LocationX = UserSetting.LocationX;
SettingsOfTimeParameters.LocationY = UserSetting.LocationY;
SettingsOfTimeParameters.Hide = UserSetting.Hide;
SaveCurrentSetting();

let SettingsData;
if (SettingsOfTimeParameters.Data === true || SettingsOfTimeParameters.Data === '') {
	SettingsData =  'checked';
} else {
	SettingsData = '';
}

let SettingsHide;
if (SettingsOfTimeParameters.Hide === true || SettingsOfTimeParameters.Hide === "checked") {
	SettingsHide = 'checked';	
} else {
	SettingsHide = '';
}

// Creaate Element Time
const ElemetTime = document.createElement('div');
ElemetTime.className = 'ONEAS-data__time StylesOfJs';
document.getElementById('app').appendChild(ElemetTime);

// Create Element Settings of Time
const SettingsOfTime = document.createElement('div');
SettingsOfTime.className = 'ONEAS-settings__time StylesOfJs';
SettingsOfTime.style.display = 'none';
SettingsOfTime.innerHTML = (`
<div class="ONEAS-settings__time-title">Настройка времени</div>
<div class="ONEAS-settings__time--parametrs">
	<div class="ONEAS-settings__time-symbol-input">
		<div class="ONEAS-settings__time-symbol__input-text">Укажите символ:</div>
		<input type="text" class="ONEAS-settings__time-symbol__input ONEAS-settings__time-input" value=${SettingsOfTimeParameters.Symbol} />
	</div>
	<div class="ONEAS-settings__time-data-input">
		<div class="ONEAS-settings__time-data-input--text"> Показывать ДД.ММ.ГГГГ:</div>
		<label class="ONEAS-settings__time-data-input--input ONEAS-settings__time-checkbox"><input type="checkbox" ${SettingsData}><div class="checkbox-slider"><div class="checkbox-knob"></div></div></label>
	</div>
	<div class="ONEAS-setting__time-locations">
		<div class="ONEAS-setting__time-location--X">
			<div class="ONEAS-setting__time-location--X__text">Укажите положение по оси X:</div>
			<input type="text" class="ONEAS-setting__time-location--X__input ONEAS-settings__time-input" value=${SettingsOfTimeParameters.LocationX} />
		</div>
		<div class="ONEAS-setting__time-location--Y">
			<div class="ONEAS-setting__time-location--Y__text">Укажите положение по оси Y:</div>
			<input type="text" class="ONEAS-setting__time-location--Y__input ONEAS-settings__time-input" value=${SettingsOfTimeParameters.LocationY} />
		</div>
	</div>
	<div class="ONEAS-settings__time--hide">
		<div class="ONEAS-settings__time--hide__text">Скрыть время:</div>
		<label class="ONEAS-settings__time--hide__input ONEAS-settings__time-checkbox"><input type="checkbox" ${SettingsHide}><div class="checkbox-slider"><div class="checkbox-knob"></div></div></label>
	</div>
</div>
<button class="ONEAS-settings__time--close">Закрыть</button>
`);
document.getElementById('app').appendChild(SettingsOfTime);

// Create Element Button for Setting Menu
const ButtonForMenu = document.createElement('div');
ButtonForMenu.className = 'ONEAS-menu-settings StylesOfJs';
ButtonForMenu.innerHTML = (`
<div class="ONEAS-settings-icon-svg">
	<svg class="Time-Icon" width="2vh" height="2vh" enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m77.3 33.901c-2.372-4.196-2.045-9.308.352-13.763.765-1.421.311-3.184-1.079-4.003l-11.052-6.517c-1.427-.841-3.229-.334-4.083 1.086-2.584 4.294-6.728 7.099-11.438 7.099s-8.854-2.804-11.438-7.099c-.854-1.419-2.656-1.927-4.083-1.086l-11.051 6.517c-1.39.82-1.844 2.582-1.08 4.003 2.396 4.455 2.724 9.567.352 13.763-2.356 4.169-6.81 6.433-11.747 6.568-1.634.045-2.953 1.331-2.953 2.965v13.131c0 1.635 1.319 2.92 2.953 2.965 4.936.135 9.391 2.399 11.747 6.568 2.372 4.196 2.045 9.308-.352 13.763-.765 1.421-.311 3.184 1.079 4.003l11.051 6.517c1.427.841 3.229.334 4.083-1.086 2.583-4.294 6.728-7.099 11.438-7.099s8.854 2.804 11.438 7.099c.854 1.419 2.656 1.927 4.083 1.086l11.051-6.517c1.39-.82 1.844-2.582 1.079-4.003-2.396-4.455-2.724-9.567-.352-13.763 2.356-4.169 6.81-6.433 11.747-6.568 1.636-.044 2.955-1.33 2.955-2.964v-13.132c0-1.635-1.319-2.92-2.953-2.965-4.937-.135-9.391-2.399-11.747-6.568zm-27.3 31.099c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"/></svg>
</div>
`);
document.getElementById('app').appendChild(ButtonForMenu);

// Объявление значений
const SettingsOfTimeSymbol = document.querySelector('ONEAS-settings__time-symbol__input');
let SettingsOfTimeSymbolValue = document.getElementsByClassName('ONEAS-settings__time-symbol__input')[0].value;
const SettingsOfTimeData = document.querySelector('ONEAS-settings__time-data-input--input');
const SettingsOfTimeLocationX = document.querySelector('ONEAS-setting__time-location--X__input');
let SettingsOfTimeLocationXValue = document.getElementsByClassName('ONEAS-setting__time-location--X__input')[0].value;
const SettingsOfTimeLocationY = document.querySelector('ONEAS-setting__time-location--Y__input');
let SettingsOfTimeLocationYValue = document.getElementsByClassName('ONEAS-setting__time-location--Y__input')[0].value;

const SettingsOfHide = document.querySelector('ONEAS-settings__time--hide__input');
let SettingsOfTimeDataValue = document.getElementsByClassName('ONEAS-settings__time-data-input--input')[0].innerHTML;
if (SettingsOfTimeDataValue.includes('checked=""')) {
	SettingsOfTimeDataValue = true;
} else {
	SettingsOfTimeDataValue = false;
}
let SettingsOfHideValue = document.getElementsByClassName('ONEAS-settings__time--hide__input')[0].innerHTML;
if (SettingsOfHideValue.includes('checked=""')) {
	SettingsOfHideValue = true;
	SettingsOfHideValueDisplay = 'none';
} else {
	SettingsOfHideValue = false;
	SettingsOfHideValueDisplay = 'flex';
}

// Add Event Listeners
ButtonForMenu.addEventListener('click', () => {
	SettingsOfTime.style.display = 'flex';
});

const ButtonInSettingMenu = document.querySelector('.ONEAS-settings__time--close');
ButtonInSettingMenu.addEventListener('click', () => {
	SettingsOfTime.style.display = 'none';
	SaveCurrentSetting();
});


let NewSettingsOfTimeSymbolValue = document.querySelector('.ONEAS-settings__time-symbol__input');
NewSettingsOfTimeSymbolValue.addEventListener('input', (e) => {
	console.log(e.target.value);
    SettingsOfTimeParameters.Symbol = e.target.value;
	SaveCurrentSetting();
});

let NewSettingsOfTimeDataValue = document.querySelector('.ONEAS-settings__time-data-input--input');
NewSettingsOfTimeDataValue.addEventListener('input', (e) => {
	console.log(e.target.checked);
	SettingsOfTimeDataValue = e.target.checked;
	SettingsOfTimeParameters.Data = SettingsOfTimeDataValue;
	SaveCurrentSetting();
});

let NewSettingsOfTimeLocationXValue = document.querySelector('.ONEAS-setting__time-location--X__input');
NewSettingsOfTimeLocationXValue.addEventListener('input', (e) => {
	console.log(e.target.value);
	SettingsOfTimeParameters.LocationX = Number(e.target.value);
	SaveCurrentSetting();
});

let NewSettingsOfTimeLocationYValue = document.querySelector('.ONEAS-setting__time-location--Y__input');
NewSettingsOfTimeLocationYValue.addEventListener('input', (e) => {
	console.log(e.target.value);
	SettingsOfTimeParameters.LocationY = Number(e.target.value);
	SaveCurrentSetting();
});

let NewSettingsOfHideValue = document.querySelector('.ONEAS-settings__time--hide__input');
NewSettingsOfHideValue.addEventListener('input', (e) => {
	console.log(e.target.checked);
	SettingsOfTimeParameters.Hide = e.target.checked;
	SettingsOfHideValueDisplay = SettingsOfTimeParameters.Hide ? 'none' : 'flex';
	SaveCurrentSetting();
});

// Functions
function Time (symdol = SettingsOfTimeParameters.Symbol, Data = SettingsOfTimeDataValue) {
	// Current Time
	let currentTime = new Date();
	let year = currentTime.getFullYear();
	let month = currentTime.getMonth() + 1;
	let day = currentTime.getDate();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	// Formatting Time
	year = year < 10 ? `0${year}` : `${year}`;
	month = month < 10 ? `0${month}${symdol}` : `${month}${symdol}`;
	day = day < 10 ? `0${day}${symdol}` : `${day}${symdol}`;
	hours = hours < 10 ? `0${hours}${symdol}` : `${hours}${symdol}`;
	minutes = minutes < 10 ? `0${minutes}${symdol}` : `${minutes}${symdol}`;
	seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
	let DayMonthYear = `${day}${month}${year}`;
	let HoursMinutesSeconds = `${hours}${minutes}${seconds}`;
	
	if (Data == true) {
		function showTimeAll(DayMonthYear, HoursMinutesSeconds) {
			const time = `${DayMonthYear} ${HoursMinutesSeconds}`;
			ElemetTime.innerHTML = time;
		} showTimeAll(DayMonthYear, HoursMinutesSeconds);
	} else {
		function showTime(HoursMinutesSeconds) {
			const time = `${HoursMinutesSeconds}`;
			ElemetTime.innerHTML = time;
		} showTime(HoursMinutesSeconds);
	}
}
setInterval(Time, 1000);

// Adaptation
const CurrentWidthOfScreen = window.innerWidth;
const CurrentHeightOfScreen = window.innerHeight;

const CurrentCoefficient = CurrentWidthOfScreen * CurrentHeightOfScreen;
const StandartCoefficient = 1920 * 1080;
const Coefficient = CurrentCoefficient / StandartCoefficient;
console.log(Coefficient);

// Create Element Styles of Time
const FontsForTime = document.createElement('style');
const StylesOfSettingsOfTime = document.createElement('style');
const StylesOfTime = document.createElement('style');

function StylesOfTimers () {
	FontsForTime.innerHTML = (`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">`);
	document.head.appendChild(FontsForTime);

	StylesOfSettingsOfTime.innerHTML = (`
	.StylesOfJs {
		font-family: 'Roboto Condensed', sans-serif;
		// color: #fff;
		z-index: 99999999999999999999;
		// transform: scale(${Coefficient});
	}
	.ONEAS-settings__time {
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0.5vh;
		width: auto;
		height: 25vh;
		color: #fff;
		padding: 1.5vh;
		font-weight: 500;
		font-size: 1.5vh;
		text-shadow: 0 0 .5vh #000;
	}
	.ONEAS-settings__time-title {
		position: relative;
		margin: 0 auto;
		font-size: 2.2vh;
		font-weight: 700;
	}
	.ONEAS-settings__time--parametrs {
		border-top: 0.18vh solid #fff;
		padding-top: 1.5vh;
	}
	.ONEAS-settings__time--parametrs,
	.ONEAS-setting__time-locations {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: .8vh;
	}
	.ONEAS-settings__time-input {
		height: 2vh;
		width: 3.5vh;
		background: rgba(0, 0, 0, .7);
		border: none;
		border-radius: .5vh;
		color: #fff;
		font-weight: 600;
		font-size: 1.2vh;
		text-align: center;
		transition: all .2s;
	}
	.ONEAS-settings__time-input:focus {
		background: rgba(255, 255, 255, .7);
		color: #000;
		outline: none;
	}
	.ONEAS-settings__time-symbol-input, 
	.ONEAS-settings__time-data-input, 
	.ONEAS-setting__time-location--X,
	.ONEAS-setting__time-location--Y,
	.ONEAS-settings__time--hide {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: .5vh;
	}
	.ONEAS-settings__time-checkbox {
		height: 100%;	
		width: 1.5vh;
	}
	.ONEAS-settings__time-checkbox {
		display: block;
		width: 45px;
		height: 25px;
		cursor: pointer;
		position: relative;
		transform: scale(.9);
	}
	.ONEAS-settings__time-checkbox input[type="checkbox"] {
		display: none;
	}
	.ONEAS-settings__time-checkbox input[type="checkbox"]:checked+.checkbox-slider {
		background-color: #44cc66;
	}
	.ONEAS-settings__time-checkbox .checkbox-slider {
		/* background-color: rgba(44, 44, 44, 0.7); */
		background:rgba(0, 0, 0, .7);
		position: absolute;
		border-radius: 9.3vh;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-transition: all .3s ease;
		transition: all .3s ease;
	}
	.ONEAS-settings__time-checkbox .checkbox-knob {
		position: absolute;
		-webkit-transition: all .3s ease;
		transition: all .3s ease;
	}
	.ONEAS-settings__time-checkbox input[type="checkbox"]:checked+.checkbox-slider .checkbox-knob {
		left: calc(100% - 19px - 3px)
	}
	.ONEAS-settings__time-checkbox .checkbox-knob {
		width: calc(25px - 6px);
		height: calc(25px - 6px);
		border-radius: 50%;
		left: 3px;
		top: 3px;
		background-color: #fff;
	}
	.ONEAS-settings__time--close {
		height: 1.9vh;
		cursor: pointer;
		background: rgba(0, 0, 0, .6);
		color: gray;
		font-weight: 700;
		border: none;
		border-radius: .5vh;
		transition: all .3s;
	}
	.ONEAS-settings__time--close:hover {
		background: #fff;
		color: #000;
	}
	`);
	document.head.appendChild(StylesOfSettingsOfTime);

	StylesOfTime.innerHTML = (`
	.ONEAS-data__time {
		top: ${SettingsOfTimeParameters.LocationY}%;
		left: ${SettingsOfTimeParameters.LocationX}%;
		display: ${SettingsOfHideValueDisplay};
		position: absolute;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		border-radius: .5vh;
		padding: .5vh 2vh;
		font-size: 1.6vh;
		text-shadow: 0 0 .5vh #000;
		text-align: center;
	}
	`);
	document.head.appendChild(StylesOfTime);

	const StylesOfButtonForMenu = document.createElement('style');
	StylesOfButtonForMenu.innerHTML = (`
	.ONEAS-menu-settings {
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.6);
		border-radius: .5vh;
		font-size: 1.6vh;
		text-shadow: 0 0 .5vh #000;
		text-align: center;
		width: 3vh;
		height: 3vh;
		bottom: 1vh;
		left: 1vh;
		position: absolute;
		cursor: pointer;
		transition: all .3s;
	}
	.ONEAS-settings-icon-svg { 
		width: 2vh;
		height: 2vh;
	}
	.Time-Icon {
		position: relative;
		width: 2vh;
		height: 2vh;
		fill: #fff;
		transition: all .3s;
		filter: drop-shadow(0 0 .5vh #000);
	}
	.ONEAS-menu-settings:hover { 
		background: #fff
	}
	.ONEAS-menu-settings:hover .Time-Icon {
		fill: #000;
		filter: drop-shadow(0 0 .5vh gray);
	}
	`);
	document.head.appendChild(StylesOfButtonForMenu);	
	};
	setInterval(StylesOfTimers, 100);
})