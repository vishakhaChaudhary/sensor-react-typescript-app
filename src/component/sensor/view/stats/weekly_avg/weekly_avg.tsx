/* import packages */
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, Grid } from "@mui/material";
/* import constants */
import { cms } from "../../../../../constant/constant";
/* import service */
import { sensorService } from "../../../../../service";
/* import component */
import { AreaChart } from "../../../../common";

const AverageWeeklyReportComponent = () => {
  const { query } = cms;
  const [statsData, setStatsData] = useState([]);
  const { data, isLoading } = useQuery(query.WEEKLY_AVG_STATS, () =>
    sensorService.getWeeklyAvgStats()
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setStatsData(data[0].stats);
  }, [isLoading, data]);

  const renderChart = () => {
    return (
      <Box sx={{ mt: 5 }}>
        <AreaChart
          areaData={statsData}
          primaryDataKey="temp"
          secondaryDataKey="time"
          width={400}
          height={200}
        />
      </Box>
    );
  };

  return (
    <>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <div>
              <h3>{cms.title.weeklyAvgTemp}</h3>
            </div>
            <Grid container sx={{ ml: 5 }}>
              <Grid item xs={6}>
                {renderChart()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AverageWeeklyReportComponent;
