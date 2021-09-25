import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { ArchiveIcon } from '@heroicons/react/solid'

function Header() {
	return (
		<div className='header flex space-x-9 mt-3 p-5 pt-2 border border-t-0 border-d-2 border-gray-300 '>
			<div className='logo text-3xl font-light hover: cursor-pointer ml-5 mr-8 flex'>
				<img
					src='https://findicons.com/files/icons/2754/google_drive/512/google_drive_alternate_blue.png'
					className='w-10 p-0 mr-2 text-red-400'
				/>
				ji-Drive
			</div>

			<div className='search text-3xl font-light hover: cursor-pointer flex-grow'>
				<div className='searchBar bg-gray-200 space-x-1 flex rounded-lg'>
					<SearchIcon className='h-6 m-2 mb-0 text-gray-500' />
					<input
						type='text'
						className='outline-none bg-transparent'
						placeholder='Search'
					/>
				</div>
			</div>

			<div className=' text-3xl font-light hover: cursor-pointer ri'>
				this is header
			</div>
		</div>
	)
}

export default Header
