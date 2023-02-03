import React, { useState, useEffect } from 'react';

function ReactSeatPicker() {
  const [seats, setSeats] = useState([
    [
      {
        id: 1,
        row: 'A',
        seatNumber: 1,
        status: 'unreserved',
      },
      {
        id: 2,
        row: 'A',
        seatNumber: 2,
        status: 'reserved',
      },
      {
        id: 3,
        row: 'A',
        seatNumber: 3,
        status: 'booked',
      },
    ],
    [
      {
        id: 4,
        row: 'B',
        seatNumber: 1,
        status: 'unreserved',
      },
      {
        id: 5,
        row: 'B',
        seatNumber: 2,
        status: 'reserved',
      },
      {
        id: 6,
        row: 'B',
        seatNumber: 3,
        status: 'booked',
      },
    ],
  ]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const updatedSeats = [...seats];
    const seat = updatedSeats[rowIndex][seatIndex];
    if (seat.status === 'unreserved') {
      seat.status = 'reserved';
      setSeats(updatedSeats);
    } else if (seat.status === 'reserved') {
      seat.status = 'unreserved';
      setSeats(updatedSeats);
    }
  };

  const handleSaveClick = () => {
    const updatedSeats = [...seats];
    updatedSeats.forEach((row) => {
      row.forEach((seat) => {
        if (seat.status === 'reserved') {
          seat.status = 'booked';
        }
      });
    });
    setSeats(updatedSeats);
  };

  return (
    <div>
      <h1>React Seat Picker</h1>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            {row[0].row}
          </div>
          {row.map((seat, seatIndex) => (
            <div
              key={seat.id}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor:
                  seat.status === 'unreserved'
                    ? 'grey'
                    : seat.status === 'reserved'
                    ? 'green'
                    : 'orange',
                display: 'inline-block',
                marginRight: '10px',
                textAlign: 'center',
              }}
              onClick={() => handleSeatClick(rowIndex, seatIndex)}
            >
              {seat.seatNumber}
              {seat.row}
              {seat.id}
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

        <p
          style={{
            marginLeft: '10px',
          }}
        >
          Reserved
        </p>
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
