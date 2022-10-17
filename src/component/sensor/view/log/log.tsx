/* import packages */
import React from 'react'
import { useQuery } from 'react-query';
import { AccountCircleOutlined } from '@mui/icons-material';
import { Box, Grid, IconButton, Paper } from '@mui/material';
/* import style */
import { Item } from '../detail.style';
import { ListItem, Text } from './log.style';
/* import service */
import { sensorService } from '../../../../service';
/* import constants */
import { cms } from '../../../../constant/constant';

const SystemLogComponent = () => {
    const { query, title } = cms;
    const { data } = useQuery(query.LOG, () =>
        sensorService.getSensorLogs()
    );

    const items = [
        {
          title: 'DEVICE ONLINE',
          time: '3 hours ago',
          description: 'Some random display text'
        },
        {
          title: 'DEVICE OFFLINE',
          time: '3 hours ago',
          description: 'Some random device offline text'
        },
        {
          title: 'REQUEST TIMEOUT',
          time: '3 hours ago',
          description: 'Some random display request timeout text'
        }
      ]
      const renderList = () => {
        return (
          items.map((item) => {
            return (
              <Grid item xs={12} md={12} sm={12} lg={12} key={item.title}>
                  <ListItem>
                    <Box sx={{ flex: 2 }}>
                      <Grid container>
                        <Grid item md={1}>
                          <IconButton>
                            <AccountCircleOutlined />
                          </IconButton>
                        </Grid>
                        <Grid item md={4} sx={{ mt: -1, ml: 1 }}>
                          <h5>{item.title}</h5>
                          <p style={{ marginTop: "-2em", fontSize: "0.5rem" }}>
                            {item.time}
                          </p>
                        </Grid>
                      </Grid>
                    </Box>
                    <Text>{item.description}</Text>
                  </ListItem>
                </Grid>
            )
          })
        )
      }
      return (
        <Grid container>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <h4>{title.systemLog}</h4>
            <Item variant="outlined">
              <Grid container>
                {renderList()}
              </Grid>
            </Item>
          </Grid>
        </Grid>
      );
}

export default SystemLogComponent;
