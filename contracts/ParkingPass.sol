// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ParkingPass {
    struct Booking {
        address user;
        uint256 timestamp;
    }

    mapping(uint256 => Booking) public bookings;

    event SlotBooked(uint256 slotId, address indexed user);
    event SlotCancelled(uint256 slotId, address indexed user);

    function bookSlot(uint256 slotId) external {
        require(bookings[slotId].user == address(0), "Slot already booked.");
        bookings[slotId] = Booking(msg.sender, block.timestamp);
        emit SlotBooked(slotId, msg.sender);
    }

    function cancelBooking(uint256 slotId) external {
        require(bookings[slotId].user == msg.sender, "You didn't book this slot.");
        delete bookings[slotId];
        emit SlotCancelled(slotId, msg.sender);
    }

    function getSlotUser(uint256 slotId) external view returns (address) {
        return bookings[slotId].user;
    }
}
