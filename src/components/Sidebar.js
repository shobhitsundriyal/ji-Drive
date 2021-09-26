import React from 'react'
import {
	StarIcon,
	TrashIcon,
	FolderIcon,
	CloudIcon,
} from '@heroicons/react/outline'

function Sidebar() {
	const barSize = ((2 / 3) * 100).toString() + '%'
	function empty() {
		// Starred and Trash functionality
	}

	function active_option(id) {
		document.getElementById(id).click()
	}
	console.log(barSize)
	return (
		<div className='sidebar__container w-1/6 border-r-8 min-w-[200px] h-full pt-5'>
			<div className='sidebar__options flex flex-col'>
				<div className='options' onClick={empty}>
					<FolderIcon className='sidebar__icons' />
					<span>My Drive</span>
				</div>
				<div className='options' onClick={empty}>
					<StarIcon className='sidebar__icons' />
					<span>Starred</span>
				</div>
				<div className='options' onClick={empty}>
					<TrashIcon className='sidebar__icons' />
					<span> Trash</span>
				</div>

				<hr className='border border-gray-500 mx-3 bg-gray-500' />

				<div className=' cursor-default options'>
					<CloudIcon className='sidebar__icons' />
					<span>Storage</span>
					{/*Storage Bar*/}
				</div>
				<div class='barContainer pt-1 pl-5 pr-16 rounded'>
					<div class='h-2 mb-4  bg-blue-200 rounded overflow-hidden'>
						<div
							id='storageFull'
							style={{ width: barSize }}
							class='h-full bg-blue-500 z-10'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
