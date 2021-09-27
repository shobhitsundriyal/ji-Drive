import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import Files from './Files'
import FilesHeader from './FilesHeader'
import Infoheader from './Infoheader'

function Data() {
	const [files, setFiles] = useState([])

	useEffect(() => {
		db.collection('myfiles').onSnapshot((snapshot) => {
			setFiles(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		})
	}, [])

	return (
		<div className='files_container overflow-scroll w-full scrollbar-hide min-w-[450px] relative'>
			{files.map((file) => {
				return <Files file={file} />
			})}

			<div className='text-gray-500 flex justify-center font-thin'>
				<span className='self-center'>No more Files</span>
			</div>
		</div>
	)
}

export default Data
