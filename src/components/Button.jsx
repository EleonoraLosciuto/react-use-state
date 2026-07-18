import './Button.css'


const Button = (props) => {
    const { title, description } = props.language;

    return (
        <>
            <button>
                {title}
            </button>
        </>
    )
}

export default Button;