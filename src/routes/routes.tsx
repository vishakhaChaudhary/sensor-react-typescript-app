import { AddSensor, EditSensor, Dashboard, SensorDetail } from "../component";
import { cms } from "../constant/constant";

const Routers = [
  {
    id: "dashboard",
    label: cms.label.dashboard,
    path: "/",
    component: Dashboard,
  },
  {
    id: "reports",
    label: cms.label.reports,
    path: "/reports",
    component: Dashboard,
  },
  {
    id: "addSensor",
    label: cms.label.sensors,
    path: "/sensor/add",
    component: AddSensor,
  },
  {
    id: "addSensor",
    label: cms.label.sensors,
    path: "/sensor/edit/:id",
    component: EditSensor,
  },
  {
    id: "sensorDetails",
    label: cms.label.sensors,
    path: "/sensor/details/:id",
    component: SensorDetail,
  },
  {
    id: 'sensors',
    label: cms.label.sensors,
    path: '/sensors',
    component: Dashboard
  },
  {
    id: 'users',
    label: cms.label.users,
    path: '/users',
    component: Dashboard
  },
  {
    id: 'settings',
    label: cms.label.settings,
    path: '/settings',
    component: Dashboard
  }
];

export default Routers;
