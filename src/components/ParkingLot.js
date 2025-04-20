import React, { useState } from 'react';
import '../components/ParkingLot.css';
import { connectContract } from '../blockchain';
import { QRCodeCanvas } from 'qrcode.react';

const totalSlots = 32;

const ParkingLot = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSlotClick = async (slotId) => {
    try {
      setIsProcessing(true);
      const contract = await connectContract();
      if (!contract) return;

      const userAddress = await contract.getSlotUser(slotId);
      if (userAddress !== "0x0000000000000000000000000000000000000000") {
        alert(`❌ Slot ${slotId} is already booked.`);
        return;
      }

      const tx = await contract.bookSlot(slotId);
      await tx.wait();

      alert(`✅ Slot ${slotId} successfully booked!`);
      setMyBookings([...myBookings, slotId]);
      setBookedSlot(slotId);
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancelBooking = async () => {
    if (myBookings.length === 0) {
      alert("⚠️ You have no bookings to cancel.");
      return;
    }

    const confirmCancel = window.confirm("Do you want to cancel all your bookings?");
    if (!confirmCancel) return;

    try {
      setIsProcessing(true);
      const contract = await connectContract();
      if (!contract) return;

      for (const slotId of myBookings) {
        const tx = await contract.cancelBooking(slotId);
        await tx.wait();
      }

      alert("🗑️ All bookings cancelled.");
      setMyBookings([]);
      setBookedSlot(null);
    } catch (err) {
      console.error(err);
      alert("❌ Cancellation failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  const renderSlotColumn = (slotIds) => (
    <div className="slot-column">
      {slotIds.map((id) => (
        <div
          key={id}
          className={`parking-slot ${myBookings.includes(id) ? 'booked' : ''}`}
          onClick={() => handleSlotClick(id)}
        >
          {id}
        </div>
      ))}
    </div>
  );

  return (
    <div className="parking-lot-container">
      <div className="top-labels">
        <div className="horizontal-label">Entrance</div>
        <h1>ParkChain – Digital Parking Pass</h1>
        <div className="horizontal-label">Exit</div>
      </div>

      <div className="layout-grid">
        {renderSlotColumn([1, 2, 3, 4, 5, 6, 7, 8])}
        <div className="drive-lane">Drive Lane</div>
        {renderSlotColumn([9, 10, 11, 12, 13, 14, 15, 16])}
        <div className="drive-lane">Drive Lane</div>
        {renderSlotColumn([17, 18, 19, 20, 21, 22, 23, 24])}
        <div className="drive-lane">Drive Lane</div>
        {renderSlotColumn([25, 26, 27, 28, 29, 30, 31, 32])}
      </div>

      <button
        className="cancel-reservation-btn"
        disabled={myBookings.length === 0 || isProcessing}
        onClick={handleCancelBooking}
      >
        Cancel Reservation
      </button>

      {isProcessing && <p>⏳ Processing transaction, please wait...</p>}

      {bookedSlot && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3>🎫 Show this QR at the gate</h3>
          <QRCodeCanvas value={`Slot ${bookedSlot}`} size={128} />
          <p>Slot {bookedSlot} booked</p>
        </div>
      )}
    </div>
  );
};

export default ParkingLot;
