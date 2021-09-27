import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Data from './components/Data'
import FilesHeader from './components/FilesHeader'
import Infoheader from './components/Infoheader'

function App() {
	return (
		<div className='App overflow-y-hidden'>
			<Header />
			<div className='flex h-[87vh]'>
				<Sidebar />
				<div className='flex flex-col w-full'>
					<FilesHeader />
					<Infoheader />
					<Data className=' flex-grow' />
				</div>
			</div>
		</div>
	)
}

export default App
