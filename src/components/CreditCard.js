export const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const myArray = ['Visa', 'Mastercard'];

  const randomCardType = myArray[Math.floor(Math.random() * myArray.length)];

  const cardNumber = Math.floor(1000 + Math.random() * 9000);

  const randMonth = Math.floor(1 + Math.random() * 12);

  const randYear = Math.floor(22 + Math.random() * 15);

  return (
    <>
      <p>{randomCardType}</p>
      <p>***{cardNumber}</p>
      <p>{randMonth}</p>
      <p>20{randYear}</p>

      <p></p>
    </>
  );
};

export default CreditCard;
