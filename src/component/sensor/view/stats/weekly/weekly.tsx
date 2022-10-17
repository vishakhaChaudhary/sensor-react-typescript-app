/* import packages */
import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useQuery } from "react-query";
/* style */
import { Item } from "../../detail.style";
/* import constants */
import { cms } from "../../../../../constant/constant";
/* import component */
import { LineChart } from "../../../../common";
/* import service */
import { sensorService } from "../../../../../service";

const WeeklyReport = () => {
  const { query } = cms;
  const [statsData, setStatsData] = useState([]);
  const { data, isLoading } = useQuery(query.WEEKLY_STATS, () =>
    sensorService.getWeeklyStats()
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setStatsData(data);
  }, [data]);

  const renderChart = () => {
    return (
      <Box>
        <LineChart
          lineData={statsData}
          primaryDataKey="temp"
          secondaryDataKey="time"
          width={700}
          height={300}
        />
      </Box>
    );
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 4 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Item variant="outlined">
              <div>
                <h3>{cms.title.tempDaily}</h3>
              </div>
              <Grid container sx={{ ml: 12 }}>
                <Grid item xs={6}>
                  {renderChart()}
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WeeklyReport;
