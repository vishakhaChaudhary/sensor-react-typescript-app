/* import packages */
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, Grid } from "@mui/material";
/*import style */
import { Item } from "../dashboard.style";
/*import service */
import { sensorService } from "../../../service";
/* import component */
import { AreaChart } from "../../common";
/* import helpers */
import { baseHelper } from "../../../helper";
/* import constants */
import { cms } from "../../../constant/constant";

const StatsComponent = () => {
  const [statsData, setStatsData] = useState([]);
  const { data, isLoading } = useQuery(cms.query.STATS, () =>
    sensorService.getSensorStats()
  );

  let chartData: any = [];
  const generateChartData = (sensorData: any) => {
    sensorData?.map((data: any) => {
      let obj = {
        name: data.device_id,
      };

      data.stats.map((item: any) => {
        const val = { ...item };
        const { date, month } = baseHelper.filterTimestamp(item.time);
        val.time = `${date}/${month}`;
        obj = { ...obj, ...val };
        chartData.push(obj);
      });
    });
    setStatsData(chartData);
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    generateChartData(data);
  }, [data]);

  const renderChart = () => {
    return (
      <Box>
        <AreaChart
          areaData={statsData}
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
                <h3>{cms.title.sensorTemp}</h3>
              </div>
              <Grid container sx={{ ml: 10 }}>
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

export default StatsComponent;
