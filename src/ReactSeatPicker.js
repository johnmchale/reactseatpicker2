import React, { useState } from 'react';

function ReactSeatPicker() {
  const [seats, setSeats] = useState([
    ['grey', 'grey', 'grey'],
    ['grey', 'grey', 'grey'],
  ]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    if (seats[rowIndex][seatIndex] === 'grey') {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][seatIndex] = 'green';
      setSeats(updatedSeats);
    } else if (seats[rowIndex][seatIndex] === 'green') {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][seatIndex] = 'grey';
      setSeats(updatedSeats);
    }
  };

  const handleSaveClick = () => {
    const updatedSeats = [...seats];
    for (let i = 0; i < updatedSeats.length; i++) {
      for (let j = 0; j < updatedSeats[i].length; j++) {
        if (updatedSeats[i][j] === 'green') {
          updatedSeats[i][j] = 'orange';
        }
      }
    }
    setSeats(updatedSeats);
  };

  return (
    <div>
      <h1>React Seat Picker</h1>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            {rowIndex === 0 ? 'A' : 'B'}
          </div>
          {row.map((seat, seatIndex) => (
            <div
              key={seatIndex}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: seat,
                display: 'inline-block',
                marginRight: '10px',
                textAlign: 'center',
              }}
              onClick={() => handleSeatClick(rowIndex, seatIndex)}
            >
              {seatIndex + 1}
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSaveClick}>Save Booking</button>
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{ width: '20px', height: '20px', backgroundColor: 'grey' }}
        />
        <p style={{ marginLeft: '10px' }}>Unreserved</p>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'green',
            marginLeft: '20px',
          }}
        />

        <p style={{ marginLeft: '10px' }}>Reserved</p>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'orange',
            marginLeft: '20px',
          }}
        />
        <p style={{ marginLeft: '10px' }}>Booked</p>
      </div>
    </div>
  );
}

export default ReactSeatPicker;
