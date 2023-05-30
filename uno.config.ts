import { defineConfig, presetUno, presetIcons } from "unocss"
import presetRemToPx from "@unocss/preset-rem-to-px"

const config = defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetRemToPx({
			baseFontSize: 4
		})
	]
})

export default config
