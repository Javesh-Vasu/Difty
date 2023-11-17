/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"baby-yellow-500": "#FFDC61",
				"baby-yellow-200": "#FFEDAD",
				"baby-yellow-100": "#FFF2DA",
				"baby-blue-500": "#AEAEEE",
				"baby-blue-200": "#DFD8F6",
				"baby-pink-500": "#FFAAA0",
				"baby-pink-200": "#FFD5CF",
				"baby-orange-500": "#FF934A",
			},
			fontSize: {
				xxsm: "12px",
			},
			minHeight: {
				90: "95vh",
			},
			backgroundImage: {
				wp1: 'url("./assets/wp1.jpeg")',
				wp2: 'url("./assets/wp2.jpeg")',
				wp3: 'url("./assets/wp3.jpeg")',
				wp4: 'url("./assets/wp4.jpeg")',
				wp5: 'url("./assets/wp5.jpeg")',
				wp6: 'url("./assets/wp6.jpeg")',
				wp7: 'url("./assets/wp7.jpeg")',
				wp8: 'url("./assets/wp8.jpeg")',
				wp9: 'url("./assets/wp9.jpeg")',
				wp10: 'url("./assets/wp10.jpeg")',
				wp11: 'url("./assets/wp11.jpeg")',
				wp12: 'url("./assets/wp12.jpeg")',
				wp13: 'url("./assets/wp14.jpeg")',
				wp14: 'url("./assets/wp15.jpeg")',
				wp15: 'url("./assets/wp16.jpeg")',
				wp16: 'url("./assets/wp17.jpeg")',
				wp17: 'url("./assets/wp18.jpeg")',
				wp18: 'url("./assets/wp19.jpeg")',
				wp19: 'url("./assets/wp20.jpeg")',
				wp20: 'url("./assets/wp21.jpeg")',
				wp21: 'url("./assets/wp22.jpeg")',
				wp22: 'url("./assets/wp23.jpeg")',
				wp23: 'url("./assets/wp24.jpeg")',
				wp24: 'url("./assets/wp25.jpeg")',
				wp25: 'url("./assets/wp26.jpeg")',
				wp26: 'url("./assets/wp27.jpeg")',
				bg1: 'url("./assets/bg1.jpg")',
				bg2: 'url("./assets/bg2.jpg")',
				bg3: 'url("./assets/bgd.jpg")',
			},
			fontSize: {
				xmd: "11px",
				xsm: "7px",
			},
			height: {
				"85": "355px",
				"488": "488px",
				"46": "8rem",
			},
			fontFamily: {
				baloo: ["'Baloo 2'", "sans-serif"],
				inter: ["'Inter'", "sans-serif"],
				playpen: ["'Playpen Sans'", "cursive"],
				kalam: ["'Kalam'", "cursive"],
			},
			minHeight: {
				half: "50vh"
			},
			colors: {
				"difty-orange": "#F95738",
				"difty-orange-400": "#FFEFD5",
				"mygray": "#f4f5fa",
			},
			borderRadius: {
				"4xl": "2.5rem"
			},
			boxShadow: {
				"2xl": "0 0px 50px -12px rgb(0 0 0 / 0.25);"
			},
			aspectRatio: {
				"a4": "0.6"
			}
		},
	},
	plugins: [],
};
