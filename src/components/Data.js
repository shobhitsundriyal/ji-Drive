import React from 'react'
import Files from './Files'
import FilesHeader from './FilesHeader'
import Infoheader from './Infoheader'

function Data() {
	return (
		<div className='files_container overflow-scroll w-full scrollbar-hide min-w-[450px] relative'>
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />
			<Files />

			<div className='text-gray-500 flex justify-center font-thin'>
				<span className='self-center'>End of Files</span>
			</div>
		</div>
	)
}

export default Data
