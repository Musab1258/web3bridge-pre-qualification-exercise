import React, { useState } from 'react';

const BookingForm = ({ onBooking, desks }) => {
    const [deskId, setDeskId] = useState('');
    const [membership, setMembership] = useState('basic');
    const [hours, setHours] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onBooking(deskId, membership, hours);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="desk">Desk</label>
            <select id="desk" value={deskId} onChange={(e) => setDeskId(e.target.value)}>
                <option value="" disabled>Select a desk</option>
                {desks.filter(desk => !desk.booked).map(desk => (
                    <option key={desk.id} value={desk.id}>Desk {desk.id} ({desk.type === 'individual' ? 'Individual' : 'Team'})</option>
                ))}
            </select>

            <label htmlFor="membership">Membership Tier</label>
            <select id="membership" value={membership} onChange={(e) => setMembership(e.target.value)} disabled={deskId && desks.find(desk => desk.id === deskId).type === 'team'}>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="executive">Executive</option>
            </select>

            <label htmlFor="hours">Hours</label>
            <input type="number" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} min="1" />

            <button type="submit" disabled={!deskId}>Book Desk</button>
        </form>
    );
};

export default BookingForm;