import Sliders from './Sliders'
import React from 'react'
// 使用的时候就是模块联邦配置的key
const RemoteNewsList = React.lazy(() => import('app1/NewsList'))
const App = () => {
	return (
		<div>
			<h2>238910-host</h2>
			<Sliders></Sliders>
			<React.Suspense fallback="238910">
				<RemoteNewsList></RemoteNewsList>
			</React.Suspense>
		</div>
	)
}
export default App
