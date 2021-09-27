import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Data from './components/Data'
import FilesHeader from './components/FilesHeader'
import Infoheader from './components/Infoheader'
import { useState } from 'react'
import { auth, provider } from './firebase'

function App() {
	const [user, setUser] = useState(null)
	const SignIn = () => {
		auth.signInWithPopup(provider)
			.then(({ user }) => {
				setUser(user)
			})
			.catch((error) => {
				alert(error.message)
			})
	}
	console.log(user)
	const name = user?.displayName.split(' ')
	//const fname = name[0]
	const photoUrl = user?.photoURL
	return user ? (
		<>
			<div className='App overflow-y-hidden'>
				<Header fname={name[0]} photoUrl={photoUrl} />
				<div className='flex h-[87vh]'>
					<Sidebar owner={name[0]} />
					<div className='flex flex-col w-full'>
						<FilesHeader />
						<Infoheader />
						<Data className=' flex-grow' />
					</div>
				</div>
			</div>
		</>
	) : (
		<>
			<div
				style={{
					backgroundImage:
						'url(' +
						'https://wallpaperaccess.com/full/2067446.jpg' +
						')',
				}}
				className='container relative h-[100vh] w-[100vw] scrollbar-hide'
			>
				<div
					style={{ backdropFilter: 'blur(4px)' }}
					className='rounded-md border-2 border-gray-600 shadow-2xl p-20 h-25 w-25 absolute left-[35vw] top-[20vh] flex flex-col'
				>
					<img
						src='https://findicons.com/files/icons/2754/google_drive/512/google_drive_alternate_blue.png'
						className='h-20 w-20 mb-3 ml-24 border-4 rounded-full p-4 bg-green-400'
					/>
					<span className='font-bold text-4xl my-6 text-white pb-5'>
						Login to ji-Drive
					</span>
					<button
						onClick={!user ? SignIn : console.log('there is user?')}
						className='btn rounded-xl bg-red-500 hover:bg-red-700 py-2 px-4 text-white'
					>
						{!user ? 'SignIn with Google' : 'Open ji-Drive'}
					</button>
				</div>
			</div>
		</>
	)
}

export default App
