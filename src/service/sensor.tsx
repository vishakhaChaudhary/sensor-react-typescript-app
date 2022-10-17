import axios from "axios";
import { Sensor as SensorData } from "../component/sensor/sensor.interface";

const baseURL = "http://localhost:3009/sensor";
const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

class SensorService {
  constructor() {}

  /**
   * Method to fetch all sensors details
   * @returns response
   */
  fetchAll = async () => {
    try {
      const { data: response } = await axios.get(baseURL);
      return response;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to add a new sensor
   * @param data
   * @returns 
   */
  createSensor = async (data: SensorData) => {
    try {
      const { data: response } = await axios.post(baseURL, data, config);
      return response.result;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to update the sensor
   * @param data 
   * @returns 
   */
  updateSensor = async (data: SensorData) => {
    try {
      const url = `${baseURL}/${data.device_id}`;
      const { data: response } = await axios.put(url, data, config);
      return response.result;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to view sensor
   * @param id Sensor ID
   * @returns 
   */
  viewSensor = async (id: string) => {
    try {
      const url = `${baseURL}/${id}`;
      const { data: response } = await axios.get(url);
      return response.result;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to fetch sensor statistics
   * @returns results
   */
  getSensorStats = async () => {
    try {
      const url = `${baseURL}/stats`;
      const { data: response } = await axios.get(url);
      return response.results;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to fetch sensor activities
   * @returns results
   */
  getSensorEvents = async () => {
    try {
      const url = `${baseURL}/id/events`;
      const { data: response } = await axios.get(url);
      return response.results;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to fetch sensor logs
   * @returns results
   */
  getSensorLogs = async () => {
    try {
      const url = `${baseURL}/id/logs`;
      const { data: response } = await axios.get(url);
      return response.results;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to fetch sensor weekly average statistics
   * @returns results
   */
  getWeeklyAvgStats = async () => {
    try {
      const url = `${baseURL}/{id}/stats/weekly_avg`;
      const { data: response } = await axios.get(url);
      return response.results;
    } catch (err) {
      console.log("err", err);
    }
  };

  /**
   * Method to get sensor weekly statistics
   * @returns results
   */
  getWeeklyStats = async () => {
    try {
      const url = `${baseURL}/{id}/stats/weekly`;
      const { data: response } = await axios.get(url);
      return response.results;
    } catch (err) {
      console.log("err", err);
    }
  };
}

export default new SensorService();
