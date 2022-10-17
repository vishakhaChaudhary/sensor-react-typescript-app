/* import packages */
import React from "react";
import { Box, Grid } from "@mui/material";
/* import style */
import { Item } from "./dashboard.style";
/* import component */
import StatsComponent from "./stats";
import SensorList from "./list";
/* import constants */
import { cms } from '../../constant/constant';

const Dashboard: React.FC = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ ml: 5, pl: 5, pr: 5 }}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4} sm={4} lg={4}>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <h4>{cms.title.totalSensors}</h4>
                    <h5>182</h5>
                  </Box>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sm={4} lg={4}>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <h4>{cms.title.openAlerts}</h4>
                    <h5>2</h5>
                  </Box>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sm={4} lg={4}>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <h4>{cms.title.totalCustomers}</h4>
                    <h5>14</h5>
                  </Box>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <StatsComponent />
        <SensorList />
      </Grid>
    </>
  );
};

export default Dashboard;
