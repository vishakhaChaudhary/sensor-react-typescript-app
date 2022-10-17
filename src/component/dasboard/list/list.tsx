/* import packages */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from "@mui/material";
import { SettingsApplicationsRounded } from "@mui/icons-material";

/*import style */
import { DetailButton, Item, OptionButton } from "./list.style";
/* import service */
import { sensorService } from "../../../service";
/* import helper */
import { baseHelper } from "../../../helper";
/*import constants */
import { cms } from '../../../constant/constant';


const SensorList: React.FC = () => {
  const history = useHistory();
  const { data, isLoading } = useQuery(cms.query.SENSOR_LIST, () =>
    sensorService.fetchAll()
  );
  const [totalItem, setTotalItem] = useState(0);
  const [pages, setPages] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const { paging, results } = data || {};
    setItems(results);
    setTotalItem(paging.count);
    setPageSize(paging.pageSize);
  }, [data, isLoading]);


  if (isLoading) {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  const renderBody = () => {
    return items?.map((item: any) => {
      const { localeDate = "" } = baseHelper.filterTimestamp(item?.last_online);

      return (
        <TableRow key={item.device_id}>
          <TableCell>
            <h4>{item.device_id}</h4>
          </TableCell>
          <TableCell>{localeDate}</TableCell>
          <TableCell>{item.last_temp}</TableCell>
          <TableCell>{item.location}</TableCell>
          <TableCell style={{ width: 200 }} align="right">
            <span style={{ marginTop: "2px" }}>
              <OptionButton
                variant="contained"
                size="small"
                onClick={() =>
                  history.push(`/sensor/edit/${item.device_id}`)
                }
              >
                {cms.button.edit}
              </OptionButton>
              <DetailButton
                sx={{ ml: 1 }}
                variant="contained"
                size="small"
                onClick={() =>
                  history.push(`/sensor/details/${item.device_id}`)
                }
              >
                {cms.button.details}
              </DetailButton>
            </span>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2, ml: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <Item>
              <div>
                <h3>{cms.title.sensorList}</h3>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <Item>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Tooltip title={cms.button.addSensor}>
                  <IconButton onClick={() => history.push("/sensor/add")}>
                    <SettingsApplicationsRounded />
                  </IconButton>
                </Tooltip>
              </div>
            </Item>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>{renderBody()}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default SensorList;
