const Card_B = ({ title, description, ...props }) => {
    return (
        <div className='card card-A' {...props}>
            <h2 className="title">{title}</h2>
            {description}
        </div>
    )
}

export default Card_B