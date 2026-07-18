import './Button.css'


const Button = (props) => {
    const { title } = props.language; // destructuring to extract title from language attribute 

    return (
        <>
            <button onClick={props.onClickCustom} className={props.open ? "active" : undefined}>
                {title}
            </button>
        </>
    )
}

export default Button;