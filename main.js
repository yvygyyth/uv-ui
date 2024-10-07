import App from './App'
import uvUI from '@/uni_modules/uv-ui-tools'
import { Request } from '@/util/request/index'
import { createPinia } from 'pinia'

const pinia = createPinia()
// uni.$uv.setConfig({
// 	config: {
// 			// 修改默认单位为rpx，相当于执行 uni.$uv.config.unit = 'rpx'
// 			unit: 'px'
// 	},
// 	props: {
// 		text: {
// 			color: {
// 				default: 'red'
// 			}
// 		}
// 	}
// })
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	// 引入请求封装
	Request(app)
	
	app.use(pinia)
	// app.use(uvUI,{mpShare:true})
	return {
		app
	}
}