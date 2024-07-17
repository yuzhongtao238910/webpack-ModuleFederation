import Sliders from './Sliders'
import React from 'react'
import Host from './Host'
// 使用的时候就是模块联邦配置的key
const RemoteNewsList = React.lazy(() => import('app1/NewsList'))
const RemoteBanner = React.lazy(() => import('app1/Banner'))
const App = () => {
	return (
		<div>
			<h2>238910-host</h2>
			<Sliders></Sliders>
			<hr />
			<React.Suspense fallback="238910">
				<RemoteNewsList></RemoteNewsList>
			</React.Suspense>
			<React.Suspense fallback="2">
				<RemoteBanner></RemoteBanner>
			</React.Suspense>
			<hr />
			<Host></Host>
		</div>
	)
}
export default App
