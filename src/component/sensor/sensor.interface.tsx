export interface Sensor {
    device_id?: string,
    customer: string,
    location: string,
    last_online: number, 
    min_temp_limit: number,
    max_temp_limit: number,
    monitor_min_temp: boolean,
    monitor_max_temp: boolean,
}

export interface FormProps {
    values: Sensor,
    title: string,
    buttonLabel: string,
    alert: any,
    setState: Function,
    onSubmit: Function
}

export interface Overview {
    total_messages: number,
    alerts: number,
    down_time: number
}

export const overviewState: Overview = {
    total_messages: 0,
    alerts: 0,
    down_time: 0
}   

export const initialState: Sensor = {
    device_id: '',
    location: '',
    customer: '',
    last_online: 0,
    min_temp_limit: 0,
    max_temp_limit: 0,
    monitor_min_temp: false, 
    monitor_max_temp: false,
}