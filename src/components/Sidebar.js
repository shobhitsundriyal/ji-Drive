import React from 'react'
import { useState } from 'react'
import {
	StarIcon,
	TrashIcon,
	FolderIcon,
	CloudIcon,
	PlusIcon,
} from '@heroicons/react/outline'
import { Modal } from '@material-ui/core'
import { storage, db } from '../firebase'
import firebase from 'firebase/compat/app'
/*import { useReducer } from 'react'

function reducer(state, action) {
	if (action.type == 'My Drive') {
		return { dispaly: 'My Drive' }
	} else if (action.type == 'Starred') {
		return { dispaly: 'Starred' }
	} else {
		return { dispaly: 'Trash' }
	}
}  Reducer tesing*/

function Sidebar() {
	//const [state, dispatch] = useReducer(reducer, { dispaly: 'My Drive' }) Reducer testing

	const barSize = ((2 / 3) * 100).toString() + '%'
	function empty(e) {
		// Starred and Trash functionality
	}

	function active_option(id) {
		//dumb function
		document.getElementById(id).click()
	}

	//Modal
	const [open, setOpen] = useState(false)
	const [uploading, setUploading] = useState(false)
	const [file, setFile] = useState(null)

	function handleChange(e) {
		if (e.target.files[0]) {
			setFile(e.target.files[0])
		}
	}

	const handleUpload = (e) => {
		e.preventDefault()
		setUploading(true)
		storage
			.ref(`Files/${file.name}`)
			.put(file)
			.then((snapshot) => {
				storage
					.ref('Files/')
					.child(file.name)
					.getDownloadURL()
					.then((url) => {
						db.collection('myfiles').add({
							timestamp:
								firebase.firestore.FieldValue.serverTimestamp(),
							filename: file.name,
							fileUrl: url,
							size: snapshot.bytesTransferred,
							owner: 'No one',
						})
						{
							/**add total storage used from new collection */
						}
					})
				//setting when snapshot recivecd, if done out of this block modal will close intstantly
				setUploading(false)
				setOpen(false)
				setFile(null)
			})
	}

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<div className='modal_pop relative w-[500px] border-4 bg-white left-1/3 top-1/3 '>
					<form action='' className='items-center'>
						<div className='modal_head text-3xl font-bold p-10 pt-0'>
							Select file to upload
						</div>
						<div className='modal_body flex flex-col'>
							{uploading ? (
								<p className='text-2xl m-5'>Uploading...</p>
							) : (
								<>
									<input
										type='file'
										className='bg-gray-200 mb-5'
										onChange={handleChange}
									/>
									<input
										type='submit'
										className='post_submit options w-min bg-blue-700 text-white'
										onClick={handleUpload}
									/>
								</>
							)}
						</div>
					</form>
				</div>
			</Modal>
			<div className='sidebar__container w-1/6 border-r-8 min-w-[200px] h-full pt-5'>
				{/*<div>{state.dispaly}</div>*/}

				<div className='sidebar__options flex flex-col'>
					<button
						className='flex border-2 border-gray-600 text-xl m-2 p-2 my-1 hover:shadow-xl rounded-full space-x-3 shadow-md w-min hover:bg-gray-200 hover:scale-110 duration-200'
						onClick={() => setOpen(true)}
					>
						<PlusIcon className='w-7 mr-0 text-green-600 ' />
						<span className='mb-1 pr-4'>New</span>
					</button>
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
		</>
	)
}

export default Sidebar
