/* import packages */
import React, { useEffect, useState } from "react";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";

/* import interface */
import { initialState } from "../sensor.interface";
/* import constants */
import { cms } from "../../../constant/constant";
/* import component */
import { Form } from "../generic";
/* import service */
import { sensorService } from "../../../service";

const EditSensorComponent: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { query } = cms;
  const [state, setState] = useState(initialState);
  const [banner, setBanner] = useState({
    isOpen: false,
    status: "",
    message: "",
  });

  const { data: sensorData, isLoading: queryLoading } = useQuery(
    query.VIEW_SENSOR,
    () => sensorService.viewSensor(id)
  );

  useEffect(() => {
    if (queryLoading) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      device_id: sensorData.device_id,
      customer: sensorData.customer,
      last_online: sensorData.last_online,
      location: sensorData.location,
    }));
  }, [queryLoading, sensorData]);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(sensorService.updateSensor, {
    onSuccess: (data) => {
      setBanner((prevState) => ({
        ...prevState,
        isOpen: true,
        status: cms.label.success,
        message: cms.messages.success.updateSensor,
      }));

      history.push("/");
    },
    onError: () => {
      setBanner((prevState) => ({
        ...prevState,
        isOpen: true,
        status: cms.label.error,
        message: cms.messages.error.somethingWentWrong,
      }));
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onSubmit = () => {
    const reqData = { ...state };
    const currentData = new Date();
    reqData.last_online = Math.floor(currentData as any/ 1000);
    mutate(reqData);
  };

  return (
    <>
      <Form
        values={state}
        setState={setState}
        title={cms.title.editSensor}
        buttonLabel={cms.button.updateSensor}
        alert={banner}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EditSensorComponent;
