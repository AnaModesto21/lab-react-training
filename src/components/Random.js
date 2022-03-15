export const Random = () => {
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 100) + 1;
    return (
        <div>
            <p> {number1}</p>
            <p> {number2}</p>
        </div>
    )
}

export default Random;