import './buttonStyles.css';

const Button = ({value, onClick}) => (
    <button
        className='app-button'
        onClick={(event) => onClick(event)}>
        {value}
    </button>
)
export default Button