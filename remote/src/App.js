import NewsList from './NewsList'
import React from 'react'
const HostRemote = React.lazy(() => import('host/Host'))
const App = () => {
	return (
		<div>
			<h2>本地组件：NewsList</h2>
			<NewsList></NewsList>
			<hr></hr>
			远程组件：
			<React.Suspense fallback="loading">
				<HostRemote></HostRemote>
			</React.Suspense>
		</div>
	)
}
export default App
