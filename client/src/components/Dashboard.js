import React from "react";
import Header from './Header';
import Summary from './Summary';
import Instances from './Instances';

function Dashboard() {
  return (
    <div>
      <Header></Header>
      <Summary></Summary>
      <Instances></Instances>
    </div>
  );
}

export default Dashboard;
