import closeImg from '../../../images/icon-close-modal.svg'

const Modal = () => {
	return (
		<div className='modal'>
			<div className='modal-up-box'>
				<h2 className='modal-box-title'>Back this project</h2>
				<img
					src={closeImg}
					alt='X icon'
					className='modal-up-box-x'
				/>
			</div>
			<p className='modal-box-text'>
				Want to support us in bringing Mastercraft Bamboo Monitor Riser out
				in the world?
			</p>
		
			<div className='modal-box-inner'>
				<div className='modal-select'>
					<input
						type='radio'
						name='pledge'
						id='four'
						className='modal-input'
					/>
					<label htmlFor='four' className='modal-select-label'>
						Pledge with no reward
						<span className='modal-select-label-span'>
							Pledge $25 or more
						</span>
					</label>
				</div>
				<p className='modal-box-inner-text'>
					Choose to support us without a reward if you simply believe in
					our project. As a backer, you will be signed up to receive
					product updates via email.
				</p>
				<div className='modal-box-inner-left'>
					<p className='modal-box-inner-left-price'>64</p>
					<p className='modal-box-inner-left-text'>left</p>
				</div>
			</div>
			<div className='modal-box-inner'>
				<div className='modal-select'>
					<input
						type='radio'
						name='pledge'
						id='zero'
						className='modal-input'
					/>
					<label htmlFor='zero' className='modal-select-label'>
						Bamboo Stand
						<span className='modal-select-label-span'>
							Pledge $25 or more
						</span>
					</label>
				</div>
				<p className='modal-box-inner-text'>
					You get an ergonomic stand made of natural bamboo. You've helped
					us launch our promotional campaign, and you’ll be added to a
					special Backer member list.
				</p>
				<div className='modal-box-inner-left'>
					<p className='modal-box-inner-left-price'>101</p>
					<p className='modal-box-inner-left-text'>left</p>
				</div>
			</div>
			<div className='modal-box-inner'>
				<div className='modal-select'>
					<input
						type='radio'
						name='pledge'
						id='zero'
						className='modal-input'
					/>
					<label htmlFor='zero' className='modal-select-label'>
						Black Edition Stand
						<span className='modal-select-label-span'>
							Pledge $75 or more
						</span>
					</label>
				</div>
				<p className='modal-box-inner-text'>
					You get a Black Special Edition computer stand and a personal
					thank you. You’ll be added to our Backer member list. Shipping is
					included.
				</p>
				<div className='modal-box-inner-left'>
					<p className='modal-box-inner-left-price'>64</p>
					<p className='modal-box-inner-left-text'>left</p>
				</div>
			</div>
			<div className='modal-box-inner'>
				<div className='modal-select'>
					<input
						type='radio'
						name='pledge'
						id='zero'
						className='modal-input'
					/>
					<label htmlFor='zero' className='modal-select-label'>
						gany Special EMahodition
						<span className='modal-select-label-span'>
							Pledge $200 or more
						</span>
					</label>
				</div>
				<p className='modal-box-inner-text'>
					You get two Special Edition Mahogany stands, a Backer T-Shirt,
					and a personal thank you. You’ll be added to our Backer member
					list. Shipping is included.
				</p>
				<div className='modal-box-inner-left'>
					<p className='modal-box-inner-left-price'>0</p>
					<p className='modal-box-inner-left-text'>left</p>
				</div>
			</div>
		</div>
	)
}
export default Modal
