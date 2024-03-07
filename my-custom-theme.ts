
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
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #4d7bfa 
		"--color-primary-50": "228 235 254", // #e4ebfe
		"--color-primary-100": "219 229 254", // #dbe5fe
		"--color-primary-200": "211 222 254", // #d3defe
		"--color-primary-300": "184 202 253", // #b8cafd
		"--color-primary-400": "130 163 252", // #82a3fc
		"--color-primary-500": "77 123 250", // #4d7bfa
		"--color-primary-600": "69 111 225", // #456fe1
		"--color-primary-700": "58 92 188", // #3a5cbc
		"--color-primary-800": "46 74 150", // #2e4a96
		"--color-primary-900": "38 60 123", // #263c7b
		// secondary | #4F46E5 
		"--color-secondary-50": "229 227 251", // #e5e3fb
		"--color-secondary-100": "220 218 250", // #dcdafa
		"--color-secondary-200": "211 209 249", // #d3d1f9
		"--color-secondary-300": "185 181 245", // #b9b5f5
		"--color-secondary-400": "132 126 237", // #847eed
		"--color-secondary-500": "79 70 229", // #4F46E5
		"--color-secondary-600": "71 63 206", // #473fce
		"--color-secondary-700": "59 53 172", // #3b35ac
		"--color-secondary-800": "47 42 137", // #2f2a89
		"--color-secondary-900": "39 34 112", // #272270
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #51a399 
		"--color-success-50": "229 241 240", // #e5f1f0
		"--color-success-100": "220 237 235", // #dcedeb
		"--color-success-200": "212 232 230", // #d4e8e6
		"--color-success-300": "185 218 214", // #b9dad6
		"--color-success-400": "133 191 184", // #85bfb8
		"--color-success-500": "81 163 153", // #51a399
		"--color-success-600": "73 147 138", // #49938a
		"--color-success-700": "61 122 115", // #3d7a73
		"--color-success-800": "49 98 92", // #31625c
		"--color-success-900": "40 80 75", // #28504b
		// warning | #fff67a 
		"--color-warning-50": "255 254 235", // #fffeeb
		"--color-warning-100": "255 253 228", // #fffde4
		"--color-warning-200": "255 253 222", // #fffdde
		"--color-warning-300": "255 251 202", // #fffbca
		"--color-warning-400": "255 249 162", // #fff9a2
		"--color-warning-500": "255 246 122", // #fff67a
		"--color-warning-600": "230 221 110", // #e6dd6e
		"--color-warning-700": "191 185 92", // #bfb95c
		"--color-warning-800": "153 148 73", // #999449
		"--color-warning-900": "125 121 60", // #7d793c
		// error | #dd5e56 
		"--color-error-50": "250 231 230", // #fae7e6
		"--color-error-100": "248 223 221", // #f8dfdd
		"--color-error-200": "247 215 213", // #f7d7d5
		"--color-error-300": "241 191 187", // #f1bfbb
		"--color-error-400": "231 142 137", // #e78e89
		"--color-error-500": "221 94 86", // #dd5e56
		"--color-error-600": "199 85 77", // #c7554d
		"--color-error-700": "166 71 65", // #a64741
		"--color-error-800": "133 56 52", // #853834
		"--color-error-900": "108 46 42", // #6c2e2a
		// surface | #0a0a0a 
		"--color-surface-50": "218 218 218", // #dadada
		"--color-surface-100": "206 206 206", // #cecece
		"--color-surface-200": "194 194 194", // #c2c2c2
		"--color-surface-300": "157 157 157", // #9d9d9d
		"--color-surface-400": "84 84 84", // #545454
		"--color-surface-500": "1 1 1", // #0a0a0a
		"--color-surface-600": "10 10 10", // #090909
		"--color-surface-700": "8 8 8", // #080808
		"--color-surface-800": "8 6 6", // #060606
		"--color-surface-900": "10 10 10", // #050505
		
	}
}