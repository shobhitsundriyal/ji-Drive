import React from 'react'

function Infoheader() {
	return (
		<div className='infoContainer'>
			<div className=' flex h-11 ml-2 pt-2 items-center justify-between font-semibold'>
				<div className='pl-5'>Name</div>
				<div className=' '>Owner</div>
				<div className=' '>Date</div>
				<div className='pr-5'>Size</div>
			</div>
			<hr className='mx-2' />
		</div>
	)
}

export default Infoheader
