import React, { useEffect, useState } from "react";
import Header from './Header';
import Cost from './Cost';
import Instances from './Instances';
import ApiService from '../services/api.service';

function Dashboard() {
  const [instances, setInstances] = useState(null);
  const [costFormat, setCostFormat] = useState('usd');

  useEffect(() => {
    if(!instances) {
      ApiService.getInstances().then(resp => {
        if(resp && resp.success)
          setInstances(resp.instances);
        else
          setInstances([]);
      });
    }
  });

  const updateInstance = (instance) => {
    let updatedInstances = instances.map(ins => {
      return (ins.id === instance.id) ? instance: ins;
    });
    setInstances(updatedInstances);
  }

  const handleAction = (status, id) => {
    if(status.toLowerCase() === "running") {
        ApiService.stopInstance(id).then(resp=> {
          updateInstance(resp.updatedInstance);
        });
    } else {
        ApiService.startInstance(id).then(resp=> {
          updateInstance(resp.updatedInstance);
        });
    }
  }

  return (
    <>
      <Header></Header>
      <Cost instances={instances} costFormat={costFormat} setCostFormat={setCostFormat}></Cost>
      <Instances instances={instances} costFormat={costFormat} setCostFormat={setCostFormat} handleAction={handleAction}></Instances>
    </>
  );
}

export default Dashboard;
