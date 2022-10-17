/* import packages */
import React, { useState } from "react";
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from "react-router-dom";
/* import interface */
import { initialState } from "../sensor.interface";
/* import component */
import { Form } from "../generic";
/* import constants */
import { cms } from "../../../constant/constant";
/* import services */
import { sensorService } from "../../../service";

const AddSensorComponent: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const [banner, setBanner] = useState({
    isOpen: false,
    status: '',
    message: '',
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(sensorService.createSensor, {
    onSuccess: (data) => {
      setBanner((prevState) => ({
        ...prevState,
        isOpen: true,
        status: cms.label.success,
        message: cms.messages.success.createSensor
      }));
      setTimeout(() => {
        history.push('/');
      }, 2000)
    },
    onError: () => {
      setBanner((prevState) => ({
        ...prevState,
        isOpen: true,
        status: cms.label.error,
        message: cms.messages.error.somethingWentWrong
      }));
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });

  const onSubmit = () => {
    const reqData = { ...state };
    reqData.last_online = Math.floor(Date.now() / 1000);
    delete reqData.device_id;
    mutate(reqData);
  };

  return (
    <>
      <Form
        values={state}
        setState={setState}
        title={cms.title.newSensor}
        buttonLabel={cms.button.addSensor}
        alert={banner}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default AddSensorComponent;
