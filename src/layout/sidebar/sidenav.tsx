import { Addchart, Home, People, Settings, SsidChart } from "@mui/icons-material";
import { Dashboard } from "../../component";
import { cms } from "../../constant/constant";

export const sideNavbar = [
    {
        id: 'dashboard',
        label: cms.label.dashboard,
        path: '/',
        icon: <Home />,
        component: Dashboard
      },
      {
        id: 'reports',
        label: cms.label.reports,
        path: '/reports',
        icon: <Addchart />,
        component: Dashboard
      },
      {
        id: 'sensors',
        label: cms.label.sensors,
        path: '/sensors',
        icon: <SsidChart />,
        component: Dashboard
      },
      {
        id: 'users',
        label: cms.label.users,
        path: '/users',
        icon: <People />,
        component: Dashboard
      },
      {
        id: 'settings',
        label: cms.label.settings,
        path: '/settings',
        icon: <Settings />,
        component: Dashboard
      }
]