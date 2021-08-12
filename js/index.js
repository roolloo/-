let example = document.getElementById('example')

example.width = 500
example.height = 500

let width = example.width

let height = example.height

let ctx = example.getContext('2d')

let colorId

let colorArr = [{
		id: 1,
		color: '#FF0000'
	},
	{
		id: 2,
		color: '#C71585'
	}, {
		id: 3,
		color: '#666'
	}, {
		id: 4,
		color: '#FF8C00'
	}, {
		id: 5,
		color: '#FF7F50'
	}, {
		id: 6,
		color: '#00FF7F'
	}, {
		id: 7,
		color: '#2618B1'
	}, {
		id: 8,
		color: '#20B2AA'
	}, {
		id: 9,
		color: '#00CED1'
	}, {
		id: 11,
		color: '#fff'
	},
]

let j = 0

let rad = 0


let colorHidden = '#000'




example.onmousedown = function (event) {


	j++
	if (j == 1) {
		document.addEventListener('mousemove', mouseMove = (e) => {
			let x = e.pageX - 355

			let y = e.pageY - 50

			let pixel = ctx.getImageData(x, y, 1, 1).data

			let isOpaque = pixel[3] === 255

			ctx.beginPath()

			ctx.arc(x, y, 20 + rad, 0, Math.PI * 2, true)

			ctx.fillStyle = colorId
			ctx.fill()

			ctx.strokeStyle = colorHidden

			ctx.stroke()

			ctx.closePath()



			// return console.log(isOpaque), console.log(pixel)
		})

	} else if (j == 2) {
		j = 1
		colorHidden = 'rgba(0 , 0, 0, 0)'
		colorId = 'rgba(0 , 0, 0, 0)'
	}


}



let clear = document.getElementById('clear')

clear.addEventListener('click', () => {
	ctx.clearRect(0, 0, width, height)
})

let color__

let colorAA

let ArrName = ['.color__1', '.color__2', '.color__3', '.color__4', '.color__5', '.color__6', '.color__7', '.color__8', '.color__9', '.color__11']



color1 = document.querySelector(ArrName[0])
color2 = document.querySelector(ArrName[1])
color3 = document.querySelector(ArrName[2])
color4 = document.querySelector(ArrName[3])
color5 = document.querySelector(ArrName[4])
color6 = document.querySelector(ArrName[5])
color7 = document.querySelector(ArrName[6])
color8 = document.querySelector(ArrName[7])
color9 = document.querySelector(ArrName[8])
color10 = document.querySelector('.color__10')
color11 = document.querySelector(ArrName[9])

let id;

color1.style.backgroundColor = colorArr[0].color
color2.style.backgroundColor = colorArr[1].color
color3.style.backgroundColor = colorArr[2].color
color4.style.backgroundColor = colorArr[3].color
color5.style.backgroundColor = colorArr[4].color
color6.style.backgroundColor = colorArr[5].color
color7.style.backgroundColor = colorArr[6].color
color8.style.backgroundColor = colorArr[7].color
color9.style.backgroundColor = colorArr[8].color




color1.addEventListener('click', () => {
	id = 1

	if (id == colorArr[0].id) {
		colorId = colorArr[0].color
	}
	rad = 0

})
color2.addEventListener('click', () => {
	id = 2

	if (id == colorArr[1].id) {
		colorId = colorArr[1].color
	}
	rad = 0

})
color3.addEventListener('click', () => {
	id = 3
	if (id == colorArr[2].id) {
		colorId = colorArr[2].color
	}
	rad = 0

})
color4.addEventListener('click', () => {
	id = 4
	if (id == colorArr[3].id) {
		colorId = colorArr[3].color
	}
	rad = 0

})
color5.addEventListener('click', () => {
	id = 5
	if (id == colorArr[4].id) {
		colorId = colorArr[4].color
	}
	rad = 0

})
color6.addEventListener('click', () => {
	id = 6
	if (id == colorArr[5].id) {
		colorId = colorArr[5].color
	}
	rad = 0

})
color7.addEventListener('click', () => {
	id = 7
	if (id == colorArr[6].id) {
		colorId = colorArr[6].color
	}
	rad = 0

})
color8.addEventListener('click', () => {
	id = 8
	if (id == colorArr[7].id) {
		colorId = colorArr[7].color
	}
	rad = 0

})
color9.addEventListener('click', () => {
	id = 9
	if (id == colorArr[8].id) {
		colorId = colorArr[8].color
	}
	rad = 0

})

color10.addEventListener('click', () => {

	colorHidden = '#000'

})




color11.addEventListener('click', () => {
	id = 11
	if (id == colorArr[9].id) {
		colorId = colorArr[9].color

	}
	rad = 20
})

