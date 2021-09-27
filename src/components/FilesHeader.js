import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function FilesHeader() {
	{
		/**Selected from sidebar menu */
	}
	return (
		<div className='data_header'>
			<div className='h-10 text-blue-500 flex'>
				<span className='font-bold  text-lg tracking-wide ml-3 pt-2'>
					My Drive
				</span>
				<ChevronDownIcon className='p-1 pb-2 mt-2 ml-2 text-gray-600' />
			</div>
			<hr className=' mx-2 border-2' />
		</div>
	)
}

export default FilesHeader
