import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Data from './components/Data'

function App() {
	return (
		<div className='App '>
			<Header />
			<div className='flex h-screen'>
				<Sidebar />
				<Data className=' flex-grow' />
			</div>
		</div>
	)
}

export default App
