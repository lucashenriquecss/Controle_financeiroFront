
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Tables from '../components/Table/Table.js';

function Dashboard() {

  return (
    <div className="Dashboard">
      <Navbar/>
      <Tables/>
    </div>
  );
}

export default Dashboard;