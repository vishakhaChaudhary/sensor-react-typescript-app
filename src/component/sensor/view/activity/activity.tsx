/* import packages */
import React from "react";
import { useQuery } from "react-query";
import { Box, Grid, IconButton } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
/* import style */
import { Item } from "../detail.style";
import { ListItem, Text } from "./activity.style";
/* import constant */
import { cms } from '../../../../constant/constant';
/* import service */
import { sensorService } from "../../../../service";

const ActivityComponent = () => {
  const { query } = cms;
  const { data: items } = useQuery(query.EVENT, () =>
    sensorService.getSensorEvents()
  );

  const renderList = () => {
    return items?.map((item: any) => {
      const { time } = item;
      const hour = new Date(JSON.parse(time)).getHours();

      return (
        <Grid item xs={12} md={12} sm={12} lg={12} key={item.event_name}>
          <ListItem>
            <Box sx={{ flex: 2 }}>
              <Grid container>
                <Grid item md={1}>
                  <IconButton>
                    <AccountCircleOutlined />
                  </IconButton>
                </Grid>
                <Grid item md={4} sx={{ mt: -1, ml: 1 }}>
                  <h5>{item.event_name}</h5>
                  <p style={{ marginTop: "-2em", fontSize: "0.5rem" }}>
                    {`${!hour ? 1 : hour} hours ago`}
                  </p>
                </Grid>
              </Grid>
            </Box>
            <Text>{item.description}</Text>
          </ListItem>
        </Grid>
      );
    });
  };
  return (
    <Grid container>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <h4>{cms.title.activity}</h4>
        <Item variant="outlined">
          <Grid container>{renderList()}</Grid>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ActivityComponent;
