import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { ArchiveIcon } from '@heroicons/react/solid'

function Header() {
	function focus() {
		document.getElementById('search_ip').focus()
	}
	return (
		<div className='header flex space-x-9 mt-3 p-5 pt-2 border border-t-0 border-d-2 border-gray-300 '>
			<div
				className='logo md:text-3xl font-light hover: cursor-pointer ml-5 mr-8 flex
      sm:text-base'
			>
				<img
					src='https://findicons.com/files/icons/2754/google_drive/512/google_drive_alternate_blue.png'
					className='w-10 p-0 mr-2 text-red-400'
				/>
				ji-Drive
			</div>

			<div className='search text-3xl font-light hover: cursor-pointer flex-grow pr-20'>
				<div className='searchBar bg-gray-200 space-x-1 flex rounded-lg'>
					<SearchIcon
						onClick={focus}
						className='h-6 m-2 mb-0 text-gray-500'
					/>
					<input
						id='search_ip'
						type='text'
						className='outline-none bg-transparent w-full p-2 text-sm text-gray-700'
						placeholder='Search'
					/>
				</div>
			</div>

			<div className=' text-3xl font-light hover: cursor-pointer ri flex items-center'>
				<span className='text-base text-gray-900 hover:underline pr-2'>
					*f_name*
				</span>
				<img
					src='https://www.seekpng.com/png/full/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'
					alt='pic'
					className='text-sm h-5 rounded-full'
				/>
			</div>
		</div>
	)
}

export default Header
