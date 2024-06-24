import React, { useState } from 'react';
import './App.css';
import Desk from './components/Desk';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import { desks, membershipTiers } from './data';

function App() {

  const [deskData, setDeskData] = useState(desks);
  const [totalRevenue, setTotalRevenue] = useState({
    basic: 0,
    premium: 0,
    executive: 0,
    team: 0
  });

  const handleBooking = (deskId, membership, hours) => {
    const updatedDesks = deskData.map(desk => 
        desk.id === deskId ? { ...desk, booked: true } : desk
    );
    setDeskData(updatedDesks);

    const rate = deskData.find(desk => desk.id === deskId).type === 'individual' ? membershipTiers[membership] : 25;
    const discount = hours > 3 ? 0.9 : 1;
    const totalCost = rate * hours * discount;

    setTotalRevenue(prevRevenue => ({
        ...prevRevenue,
        [deskData.find(desk => desk.id === deskId).type === 'individual' ? membership : 'team']: prevRevenue[deskData.find(desk => desk.id === deskId).type === 'individual' ? membership : 'team'] + totalCost
    }));

    alert(`Desk ${deskId} booked successfully! Total cost: $${totalCost.toFixed(2)}`);
};
  
  return (
      <div className="App">
          <h1>Co-working Space Booking System</h1>
          <div className="desks">
              {deskData.map(desk => (
                  <Desk key={desk.id} desk={desk} />
              ))}
          </div>
          <BookingForm onBooking={handleBooking} desks={deskData} />
          <Dashboard totalRevenue={totalRevenue} />
      </div>      
  );
}

export default App;