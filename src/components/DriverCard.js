import { Rating } from './Rating';

export const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'darkblue',
        width: '45%',
        paddingLeft: '10px',
        borderRadius: '8px',
        margin: '15px',
        color: 'white',
      }}
    >
      <img
        src={img}
        alt="profile"
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          paddingLeft: '15px',
          
        }}
      >
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          <i>
            {car.model} - {car.licensePlate}
          </i>
        </p>
      </div>
    </div>
  );
};