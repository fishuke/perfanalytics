const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function getReports(startTime: number, endTime: number) {
    return fetch(`${API_BASE_URL}/reports?start-time=${startTime}&end-time=${endTime}`)
        .then(data => data.json())
}