import './shadow.scss'

const Shadow = ({isEnabled}) => {
	return <div className={isEnabled && 'shadow'}></div>
}
export default Shadow
