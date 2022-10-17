class BaseHelper {
    constructor() {}
    /**
     * Method to convert the timestamp
     * @param timestamp 
     * @returns {Object} date, month, year, hours, localeDate
     */
    filterTimestamp = (timestamp: string) => {
        let date = 0, month = 0, year = 0, hours = 0, localeDate = "";
        if (timestamp !== undefined) {
            const timeStamp = JSON.parse(timestamp);
            const dateTime = new Date(timeStamp);
            date = dateTime.getDate();
            hours = dateTime.getHours();
            month = dateTime.getMonth();
            year = dateTime.getFullYear();
            localeDate = dateTime.toLocaleString('de-DE', { month: 'short', year: 'numeric', day: 'numeric'});
        }
 
        return {
            date,
            month,
            year,
            hours,
            localeDate
        }
    }
}

export default new BaseHelper();