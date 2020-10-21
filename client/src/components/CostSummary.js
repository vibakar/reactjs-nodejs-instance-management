import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

function CostSummary(props) {
  const [checked, toggleSwitch] = useState(props.costFormat === 'usd' ? true : false);
  const [stoppedCost, setStoppedCost] = useState(0);
  const [runningCost, setRunningCost] = useState(0);

  useEffect(()=> {
    if(props.instances) {
      let stopped = 0;
      let running = 0;
      props.instances.forEach(ins => {
        if(ins.status.toLowerCase() === "stopped")
          stopped+= ins.costPerHour;
        else 
          running+= ins.costPerHour;
      });
      setStoppedCost(stopped);
      setRunningCost(running);
    }
  }, [props.instances], [props.costFormat])
  
  const handleSwitch = (e) => {
    toggleSwitch(e.target.checked);
    var usdPerRup = 0.015;
    if(e.target.checked) {
      props.setCostFormat('usd');
      setStoppedCost(stoppedCost * usdPerRup);
      setRunningCost(runningCost * usdPerRup);
    } else {
      props.setCostFormat('ind');
      setStoppedCost(stoppedCost / usdPerRup);
      setRunningCost(runningCost / usdPerRup);
    }
  }

  const getEntity = () => {
    return checked ? String.fromCharCode(36) : String.fromCharCode(8377);
  }

  return (
    <Card className="summary">
        <CardContent>
          <div className="flex-container">
            <div>
              <Typography><strong>{getEntity()}</strong> <strong>{runningCost.toFixed(2)}/hr</strong></Typography>
              <Typography>Running Instances</Typography>
            </div>
            <div>
              <Typography><strong>{getEntity()}</strong> <strong>{stoppedCost.toFixed(2)}/hr</strong></Typography>
              <Typography>Stopped Instances</Typography>
            </div>
            <div className="ml-auto">
              <Typography>
              <span>INR</span>
                <Switch
                  checked={checked}
                  onChange={handleSwitch}
                  color="primary"
                />
                <span>USD</span>
              </Typography>
            </div>
          </div>
        </CardContent>
    </Card>
  );
}

export default CostSummary;
