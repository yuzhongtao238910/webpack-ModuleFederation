import React from 'react'
const HostRemote = React.lazy(() => import('app2/Host'))
const BannerRemote = React.lazy(() => import('app1/Banner'))
// 使用的时候就是模块联邦配置的key

const App = () => {
	return (
		<div>
			<React.Suspense fallback="1">
				<HostRemote></HostRemote>
			</React.Suspense>
			<React.Suspense fallback="1">
				<BannerRemote></BannerRemote>
			</React.Suspense>
		</div>
	)
}
export default App
