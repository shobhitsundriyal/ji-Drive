import React from 'react'
import { ClipboardIcon } from '@heroicons/react/outline'
import moment from 'moment'

function Files(props) {
	const { filename, fileUrl, size, timestamp, owner } = props.file.data

	function getSize(size) {
		var divisor = 1024
		if (size < divisor) {
			//if size in bytes
			return size.toString() + ' B'
		}
		var finalSize = size
		var sizeStr = 'v'
		for (var i = 0; i < 3; i++) {
			finalSize = finalSize / divisor
			if (finalSize < divisor) {
				break
			}
		}
		switch (i) {
			case 0:
				sizeStr = finalSize.toFixed(2).toString() + ' KB'
				break
			case 1:
				sizeStr = finalSize.toFixed(2).toString() + ' MB'
				break
			case 2:
				sizeStr = finalSize.toFixed(2).toString() + ' GB'
				break
		}

		return sizeStr
	}

	return (
		<div className='filesContainer hover:bg-gray-50 cursor-pointer'>
			<div className=' flex h-11 ml-2 pt-2 items-center justify-between '>
				<div className='flex h-full'>
					<ClipboardIcon className='h-5' />
					<a
						href={fileUrl}
						target='_top'
						className='file_text ml-2 hover:text-blue-600 max-w-[200px] overflow-auto scrollbar-hide flex min-w-[200px]'
					>
						{filename}
					</a>
				</div>
				<div className='text-left '>{owner}</div>
				<div className=' text-right'>
					{moment(timestamp?.toDate()).format('DD/MM/YY')}
				</div>
				<div className='pr-5 text-right w-[100px]'>{getSize(size)}</div>
			</div>
			<hr className='mx-2' />
		</div>
	)
}

export default Files
