/*
 * @Author: LHN
 * @Date: 2020-10-16 11:11:00
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-16 11:34:59
 * @description: In User Settings Edit
 * @FilePath: \vue-ssr\src\entry-server.js
 */
import { createApp } from './app'

export default context => {
	
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)

    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) {
		return reject({code: 404})
	}
		
    Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
			return Component.asyncData({
              store
            })
        }
    })).then(() => {
        context.state = store.state
        resolve(app)          
    }).catch(reject)
  })
  
}
