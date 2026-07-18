import './Button.css'


const Button = (props) => {
    const { title, description } = props.language;

    return (
        <>
            <button onClick={props.onClickCustom} className={props.open ? "active" : undefined}>
                {title}
            </button>
        </>
    )
}

export default Button;