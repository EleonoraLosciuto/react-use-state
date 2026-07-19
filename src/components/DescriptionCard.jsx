import './DescriptionCard.css';

const DescriptionCard = ({ active }) => {

    return (active &&
        (
            <div className="description-card">
                <h2>{active.title}</h2>
                <p>{active.description}</p>
            </div>
        )
    )
}

export default DescriptionCard;