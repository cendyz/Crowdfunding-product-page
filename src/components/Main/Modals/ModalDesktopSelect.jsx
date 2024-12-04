import closeImg from '../../../images/icon-close-modal.svg'
import './modalDesktopSelect.scss'
import { modalDesktopSelectData } from '../../../data'

const ModalDesktopSelect = () => {
	return (
		<div className='modal'>
			<div className='modal-up-box'>
				<h2 className='modal-box-title'>Back this project</h2>
				<img src={closeImg} alt='X icon' className='modal-up-box-x' />
			</div>
			<p className='modal-box-text'>
				Want to support us in bringing Mastercraft Bamboo Monitor Riser out
				in the world?
			</p>
			{modalDesktopSelectData.map(
				({ inputId, title, pledge, amount, text }) => {
					return (
						<div className='modal-box-inner-desktop' key={inputId}>
							<div className='modal-up-wrapper'>
								<div className='input-box'>
									<input
										type='radio'
										name='pledge'
										id={inputId}
										className='modal-input-desktop'
									/>
								</div>
								<div className='modal-select-desktop'>
									<div className='modal-text-up'>
										<label
											htmlFor={inputId}
											className='modal-select-label-desktop'>
											{title}
											<span className='modal-select-label-span-desktop'>
												Pledge ${pledge || ''} or more
											</span>
										</label>
										<div className='modal-box-inner-left-desktop'>
											<p className='modal-box-inner-left-price-desktop'>
												{amount || '0'}
											</p>
											<p className='modal-box-inner-left-text-desktop'>
												left
											</p>
										</div>
									</div>
									<p className='modal-box-inner-text-desktop'>{text}</p>
								</div>
							</div>
							<div className='modal-bottom-wrapper'>
								<label className='modal-bottom-label'>
									Enter your pledge
								</label>
								<div className='modal-bottom-right'>
									<input
										type='text'
										className='modal-bottom-input'
										placeholder={amount || ''}
									/>
									<button className='modal-bottom-continue'>
										Continue
									</button>
								</div>
							</div>
						</div>
					)
				}
			)}
		</div>
	)
}
export default ModalDesktopSelect
