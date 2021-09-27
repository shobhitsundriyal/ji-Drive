import React from 'react'
import { ClipboardIcon } from '@heroicons/react/outline'

function Files() {
	return (
		<div className='filesContainer hover:bg-gray-50 cursor-pointer'>
			<div className=' flex h-11 ml-2 pt-2 items-center justify-between'>
				<div className='flex'>
					<ClipboardIcon className='h-5' />
					<div className='file_text ml-2'>filename.ext</div>
				</div>
				<div className=' '>Owner</div>
				<div className=' '>Date</div>
				<div className='pr-5'>Size</div>
			</div>
			<hr className='mx-2' />
		</div>
	)
}

export default Files
