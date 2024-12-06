import { useState } from 'react'
import { FirstBox, SecondBox, LastBox, ModalSelect } from './index'
import './main.scss'

const Main = () => {
	const [activeBookmark, setActiveBookmark] = useState(false)

	return (
		<main className='main'>
			<FirstBox activeBookmark={activeBookmark} />
			<SecondBox />
			<LastBox />
			<ModalSelect setActiveBookmark={setActiveBookmark} />
		</main>
	)
}
export default Main
