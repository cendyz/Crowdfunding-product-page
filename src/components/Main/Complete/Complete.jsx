import checkImg from '../../../images/icon-check.svg'

const Complete = () => {
	return (
		<div className='complete'>
			<img src={checkImg} alt='Success icon' className='complete-img' />
			<h3 className='complete-title'>Thanks for your support!</h3>
			<p className='complete-text'>
				Your pledge brings us one step closer to sharing Mastercraft Bamboo
				Monitor Riser worldwide. You will get an email once our campaign is
				completed.
			</p>
			<button className='complete-btn'>Got it!</button>
		</div>
	)
}
export default Complete
