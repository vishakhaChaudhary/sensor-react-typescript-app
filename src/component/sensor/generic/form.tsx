/* import packages */
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";

/* import style */
import { Item } from "./form.style";
/* import interface */
import { FormProps, Sensor } from "../sensor.interface";
/* import constants */
import { cms } from "../../../constant/constant";

const Form = (props: FormProps) => {
  const history = useHistory();
  const { values, setState, title, alert, buttonLabel, onSubmit } = props;
  const { monitor_min_temp, monitor_max_temp } = values;

  const setStateValues = (key: string, val: any) => {
    setState((prevState: Sensor) => ({
      ...prevState,
      [key]: val,
    }));
  }
  
  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setStateValues(name, value);
  };

  const handleCheckbox = (event: any) => {
    const { name, checked } = event.target;
    setStateValues(name, checked);
  };

  const renderAlert = () => {
    if (alert && alert.isOpen) {
      return (
        <Box sx={{pl:20, pr: 20}}>
          <Alert severity={alert.status}>
          <AlertTitle>{alert.status.toUpperCase()}</AlertTitle>
          {alert.message}
        </Alert>
        </Box>
      )
    }
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {renderAlert()}
          <Grid container spacing={1}>
            <Grid item xs={12} md={7} sm={6} lg={7}>
              <Item>
                <Box sx={{ p: 2 }}>
                  <h4>{title}</h4>
                  <hr />
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "30ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="device_id"
                        label={cms.label.sensorId}
                        name="device_id"
                        variant="outlined"
                        value={values.device_id}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <TextField
                        id="location"
                        label={cms.label.location}
                        variant="outlined"
                        name="location"
                        value={values.location}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <TextField
                        id="customer"
                        label={cms.label.customer}
                        variant="outlined"
                        name="customer"
                        value={values.customer}
                        onChange={handleInput}
                      />
                    </div>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={5} sm={6} lg={4}>
              <Item>
                <Box sx={{ p: 2 }}>
                  <h4>{cms.title.alerts}</h4>
                  <hr />
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "30ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="minTempThreshold"
                        label={cms.label.minTempThreshold}
                        type="number"
                        name="min_temp_limit"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handleInput}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={monitor_min_temp}
                            name="monitor_min_temp"
                            onChange={handleCheckbox}
                          />
                        }
                        label={cms.label.monitorMinTemp}
                      />
                    </div>
                    <div>
                      <TextField
                        id="maxTempThreshod"
                        label={cms.label.maxTempThreshold}
                        type="number"
                        name="max_temp_limit"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handleInput}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={monitor_max_temp}
                            name="monitor_max_temp"
                            onChange={handleCheckbox}
                          />
                        }
                        label={cms.label.monitorMaxTemp}
                      />
                    </div>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <Item>
                <hr />
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" onClick={() => onSubmit()}>
                    {buttonLabel}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => history.push('/')}
                    style={{ marginLeft: "10px" }}
                  >
                    {cms.button.cancel}
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
