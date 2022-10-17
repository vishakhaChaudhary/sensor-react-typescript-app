/* import packages */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Grid, Skeleton } from "@mui/material";
import { CountGrid, Item } from "./detail.style";
/* import constants */
import { cms } from '../../../constant/constant';
/* import component */
import { AverageWeeklyReport, WeeklyReport } from "./stats";
import SystemLog from "./log";
import Activity from "./activity";
import { sensorService } from "../../../service";
import { initialState, overviewState } from "../sensor.interface";

const DetailsComponent: React.FC = () => {
  const { query } = cms;
  const { id } = useParams<{ id: string }>();
  const { data: sensorData, isLoading: queryLoading } = useQuery(
    query.VIEW_SENSOR,
    () => sensorService.viewSensor(id)
  );

  const [state, setState] = useState(initialState);
  const [overview, setOverview] = useState(overviewState);

  useEffect(() => {
    if (queryLoading) {
        return;
    }
    const { overview } = sensorData;
    setState((prevState) => ({
      ...prevState,
      device_id: sensorData.device_id
    }));

    setOverview(overview);
  }, [queryLoading, sensorData])
  
  if (queryLoading) {
    setTimeout(() => {
      return <Skeleton variant="circular" width={40} height={40} />;
    }, 5000);
  }

  return (
    <>
      <Grid container sx={{ ml: 6 }} spacing={0}>
            <h3 style={{marginLeft: '30px'}}>{`Sensor - ${state.device_id}`}</h3>
        <Grid item xs={12} sx={{ pl: 5, pr: 5 }}>
          <Grid container>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <Grid container>
                      <Grid item xs={6} md={6} sm={6} lg={6}>
                        <h3>{cms.title.totalMessages}</h3>
                        <h5>{cms.decription.totalMessage}</h5>
                      </Grid>
                      <CountGrid item xs={6} md={6} sm={6} lg={6}>
                        <h2>{overview.total_messages}</h2>
                      </CountGrid>
                    </Grid>
                  </Box>
                </div>
              </Item>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <Grid container>
                      <Grid item xs={6} md={6} sm={6} lg={6}>
                        <h3>{cms.title.downTime}</h3>
                        <h5>{cms.decription.totalDownTIme}</h5>
                      </Grid>
                      <CountGrid item xs={6} md={6} sm={6} lg={6}>
                        <h2>{overview.down_time}</h2>
                      </CountGrid>
                    </Grid>
                  </Box>
                </div>
              </Item>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <Grid container>
                      <Grid item xs={6} md={6} sm={6} lg={6}>
                        <h3>{cms.title.systemAlerts}</h3>
                        <h5>{cms.decription.systemAlerts}</h5>
                      </Grid>
                      <CountGrid item xs={6} md={6} sm={6} lg={6}>
                        <h2>{overview.alerts}</h2>
                      </CountGrid>
                    </Grid>
                  </Box>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Item variant="outlined">
                <div>
                  <Box sx={{ flex: 1 }}>
                    <AverageWeeklyReport />
                  </Box>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <WeeklyReport />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3, mb: 4 }} columnSpacing={10}>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <SystemLog />
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <Activity />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsComponent;
