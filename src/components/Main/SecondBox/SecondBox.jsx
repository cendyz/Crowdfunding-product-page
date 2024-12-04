import './secondBox.scss'
import { v4 as uuidv4 } from 'uuid'
import { secondData } from '../../../data'

const SecondBox = () => {
	return (
		<div className='second-box'>
			<div className='second-box-wrapper'>
				{secondData.map(({ price, text }) => {
					const id = uuidv4()
					return (
						<div className='second-box-content' key={id}>
							<p className='second-box-content-price'>{price}</p>
							<p className='second-box-content-text'>{text}</p>
							<div className='second-box-content-line'></div>
						</div>
					)
				})}
			</div>
			<div className='second-box-line'></div>
		</div>
	)
}
export default SecondBox
