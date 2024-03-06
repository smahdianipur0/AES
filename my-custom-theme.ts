
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5aaee2 
		"--color-primary-50": "230 243 251", // #e6f3fb
		"--color-primary-100": "222 239 249", // #deeff9
		"--color-primary-200": "214 235 248", // #d6ebf8
		"--color-primary-300": "189 223 243", // #bddff3
		"--color-primary-400": "140 198 235", // #8cc6eb
		"--color-primary-500": "90 174 226", // #5aaee2
		"--color-primary-600": "81 157 203", // #519dcb
		"--color-primary-700": "68 131 170", // #4483aa
		"--color-primary-800": "54 104 136", // #366888
		"--color-primary-900": "44 85 111", // #2c556f
		// secondary | #697ace 
		"--color-secondary-50": "233 235 248", // #e9ebf8
		"--color-secondary-100": "225 228 245", // #e1e4f5
		"--color-secondary-200": "218 222 243", // #dadef3
		"--color-secondary-300": "195 202 235", // #c3caeb
		"--color-secondary-400": "150 162 221", // #96a2dd
		"--color-secondary-500": "105 122 206", // #697ace
		"--color-secondary-600": "95 110 185", // #5f6eb9
		"--color-secondary-700": "79 92 155", // #4f5c9b
		"--color-secondary-800": "63 73 124", // #3f497c
		"--color-secondary-900": "51 60 101", // #333c65
		// tertiary | #787878 
		"--color-tertiary-50": "235 235 235", // #ebebeb
		"--color-tertiary-100": "228 228 228", // #e4e4e4
		"--color-tertiary-200": "221 221 221", // #dddddd
		"--color-tertiary-300": "201 201 201", // #c9c9c9
		"--color-tertiary-400": "161 161 161", // #a1a1a1
		"--color-tertiary-500": "120 120 120", // #787878
		"--color-tertiary-600": "108 108 108", // #6c6c6c
		"--color-tertiary-700": "90 90 90", // #5a5a5a
		"--color-tertiary-800": "72 72 72", // #484848
		"--color-tertiary-900": "59 59 59", // #3b3b3b
		// success | #56d345 
		"--color-success-50": "230 248 227", // #e6f8e3
		"--color-success-100": "221 246 218", // #ddf6da
		"--color-success-200": "213 244 209", // #d5f4d1
		"--color-success-300": "187 237 181", // #bbedb5
		"--color-success-400": "137 224 125", // #89e07d
		"--color-success-500": "86 211 69", // #56d345
		"--color-success-600": "77 190 62", // #4dbe3e
		"--color-success-700": "65 158 52", // #419e34
		"--color-success-800": "52 127 41", // #347f29
		"--color-success-900": "42 103 34", // #2a6722
		// warning | #ffcb2e 
		"--color-warning-50": "255 247 224", // #fff7e0
		"--color-warning-100": "255 245 213", // #fff5d5
		"--color-warning-200": "255 242 203", // #fff2cb
		"--color-warning-300": "255 234 171", // #ffeaab
		"--color-warning-400": "255 219 109", // #ffdb6d
		"--color-warning-500": "255 203 46", // #ffcb2e
		"--color-warning-600": "230 183 41", // #e6b729
		"--color-warning-700": "191 152 35", // #bf9823
		"--color-warning-800": "153 122 28", // #997a1c
		"--color-warning-900": "125 99 23", // #7d6317
		// error | #ff5252 
		"--color-error-50": "255 229 229", // #ffe5e5
		"--color-error-100": "255 220 220", // #ffdcdc
		"--color-error-200": "255 212 212", // #ffd4d4
		"--color-error-300": "255 186 186", // #ffbaba
		"--color-error-400": "255 134 134", // #ff8686
		"--color-error-500": "255 82 82", // #ff5252
		"--color-error-600": "230 74 74", // #e64a4a
		"--color-error-700": "191 62 62", // #bf3e3e
		"--color-error-800": "153 49 49", // #993131
		"--color-error-900": "125 40 40", // #7d2828
		// surface | #3b3b3b 
		"--color-surface-50": "226 226 226", // #e2e2e2
		"--color-surface-100": "216 216 216", // #d8d8d8
		"--color-surface-200": "206 206 206", // #cecece
		"--color-surface-300": "177 177 177", // #b1b1b1
		"--color-surface-400": "118 118 118", // #767676
		"--color-surface-500": "59 59 59", // #3b3b3b
		"--color-surface-600": "53 53 53", // #353535
		"--color-surface-700": "44 44 44", // #2c2c2c
		"--color-surface-800": "35 35 35", // #232323
		"--color-surface-900": "29 29 29", // #1d1d1d
		
	}
}