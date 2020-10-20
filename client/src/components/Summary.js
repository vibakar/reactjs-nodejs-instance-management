import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

function Summary() {
  const [checked, toggeSwitch] = useState(false);
  return (
    <Card  className="summary">
        <CardContent>
          <div className="d-inline-block">
            <Typography>14.1/hr</Typography>
            <Typography>Running instances</Typography>
          </div>
          <div className="d-inline-block pl-50">
            <Typography>25.5/hr</Typography>
            <Typography>Stopped instances</Typography>
          </div>
          <div className="d-inline-block fl-right">
            <Typography>
            <span>INR</span>
              <Switch
                checked={checked}
                onChange={()=> toggeSwitch(!checked)}
                color="primary"
              />
              <span>USD</span>
            </Typography>
          </div>
        </CardContent>
    </Card>
  );
}

export default Summary;
