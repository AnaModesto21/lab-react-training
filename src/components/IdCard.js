export const IdCard = ({lastName, firstName, birth, gender, height, picture}) => {
    return (
        <div>
            <img src={picture} alt="person" />
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{birth}</p>
            <p>{gender}</p>
            <p>{height}</p>
        </div>
    )
}

export default IdCard;