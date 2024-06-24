import React from 'react';

const Desk = ({ desk }) => {
    return (
        <div className={`desk ${desk.booked ? 'booked' : 'available'}`}>
            Desk {desk.id} - {desk.type === 'individual' ? 'Individual' : 'Team'}
        </div>
    );
};

export default Desk;