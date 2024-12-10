const cityData = {
    SEOUL: {
        temperature: 15.0,
        humidity: 60.0,
        lineChart: [
            { month: "Jan", pm25: 81, pm10: 41, o3: 20, no2: 24, so2: 4, co: 6 },
            { month: "Feb", pm25: 156, pm10: 32, o3: 23, no2: 34, so2: 4, co: 6 },
            { month: "Mar", pm25: 50, pm10: 38, o3: 35, no2: 16, so2: 4, co: 3 },
            { month: "Apr", pm25: 0, pm10: 42, o3: 22, no2: 18, so2: 3, co: 4 },
            { month: "May", pm25: 78, pm10: 49, o3: 30, no2: 24, so2: 4, co: 5 },
            { month: "Jun", pm25: 0, pm10: 33, o3: 18, no2: 20, so2: 2, co: 3 },
            { month: "Jul", pm25: 65, pm10: 40, o3: 28, no2: 22, so2: 5, co: 7 },
            { month: "Aug", pm25: 45, pm10: 35, o3: 25, no2: 26, so2: 4, co: 5 },
            { month: "Sep", pm25: 52, pm10: 38, o3: 29, no2: 24, so2: 4, co: 6 },
            { month: "Oct", pm25: 60, pm10: 40, o3: 30, no2: 26, so2: 5, co: 7 },
            { month: "Nov", pm25: 70, pm10: 45, o3: 35, no2: 30, so2: 6, co: 8 },
            { month: "Dec", pm25: 90, pm10: 50, o3: 40, no2: 35, so2: 7, co: 9 },
        ],
        barChart: { pm25: 65.1, pm10: 40.5, co: 5.6, no2: 25.8, o3: 26.8, so2: 4.7 },
    },
    BUSAN: {
        temperature: 18.0,
        humidity: 65.0,
        lineChart: [
            { month: "Jan", pm25: 60, pm10: 35, o3: 25, no2: 20, so2: 3, co: 4 },
            { month: "Feb", pm25: 45, pm10: 32, o3: 22, no2: 18, so2: 4, co: 5 },
            { month: "Mar", pm25: 72, pm10: 40, o3: 30, no2: 22, so2: 5, co: 6 },
            { month: "Apr", pm25: 54, pm10: 36, o3: 28, no2: 20, so2: 3, co: 4 },
            { month: "May", pm25: 65, pm10: 38, o3: 29, no2: 22, so2: 4, co: 5 },
            { month: "Jun", pm25: 70, pm10: 40, o3: 32, no2: 25, so2: 5, co: 6 },
            { month: "Jul", pm25: 80, pm10: 45, o3: 35, no2: 30, so2: 6, co: 7 },
            { month: "Aug", pm25: 50, pm10: 35, o3: 28, no2: 24, so2: 5, co: 6 },
            { month: "Sep", pm25: 55, pm10: 38, o3: 30, no2: 26, so2: 6, co: 7 },
            { month: "Oct", pm25: 60, pm10: 40, o3: 32, no2: 28, so2: 6.5, co: 8 },
            { month: "Nov", pm25: 65, pm10: 42, o3: 34, no2: 30, so2: 7, co: 8.5 },
            { month: "Dec", pm25: 70, pm10: 45, o3: 36, no2: 32, so2: 7.5, co: 9 },
        ],
        barChart: { pm25: 61.8, pm10: 38.2, co: 5.5, no2: 25.2, o3: 29.1, so2: 5.3 },
    },
    PARIS: {
        temperature: 12.0,
        humidity: 70.0,
        lineChart: [
            { month: "Jan", pm25: 40, pm10: 20, o3: 15, no2: 12, so2: 2, co: 3 },
            { month: "Feb", pm25: 42, pm10: 22, o3: 18, no2: 14, so2: 2.5, co: 3.5 },
            { month: "Mar", pm25: 45, pm10: 25, o3: 20, no2: 16, so2: 3, co: 4 },
            { month: "Apr", pm25: 50, pm10: 28, o3: 22, no2: 18, so2: 3.5, co: 4.5 },
            { month: "May", pm25: 55, pm10: 30, o3: 24, no2: 20, so2: 4, co: 5 },
            { month: "Jun", pm25: 60, pm10: 32, o3: 26, no2: 22, so2: 4.5, co: 5.5 },
            { month: "Jul", pm25: 65, pm10: 35, o3: 28, no2: 24, so2: 5, co: 6 },
            { month: "Aug", pm25: 70, pm10: 38, o3: 30, no2: 26, so2: 5.5, co: 6.5 },
            { month: "Sep", pm25: 75, pm10: 40, o3: 32, no2: 28, so2: 6, co: 7 },
            { month: "Oct", pm25: 80, pm10: 42, o3: 34, no2: 30, so2: 6.5, co: 7.5 },
            { month: "Nov", pm25: 85, pm10: 45, o3: 36, no2: 32, so2: 7, co: 8 },
            { month: "Dec", pm25: 90, pm10: 48, o3: 38, no2: 34, so2: 7.5, co: 8.5 },
        ],
        barChart: { pm25: 62.5, pm10: 34.5, co: 5.1, no2: 22.5, o3: 25.5, so2: 4.5 },
    },
    LONDON: {
        temperature: 10.0,
        humidity: 75.0,
        lineChart: [
            { month: "Jan", pm25: 30, pm10: 15, o3: 10, no2: 8, so2: 1, co: 2 },
            { month: "Feb", pm25: 35, pm10: 18, o3: 12, no2: 9, so2: 1.5, co: 2.5 },
            { month: "Mar", pm25: 40, pm10: 20, o3: 14, no2: 10, so2: 2, co: 3 },
            { month: "Apr", pm25: 45, pm10: 25, o3: 18, no2: 12, so2: 2.5, co: 3.5 },
            { month: "May", pm25: 50, pm10: 28, o3: 22, no2: 14, so2: 3, co: 4 },
            { month: "Jun", pm25: 55, pm10: 30, o3: 24, no2: 16, so2: 3.5, co: 4.5 },
            { month: "Jul", pm25: 60, pm10: 32, o3: 26, no2: 18, so2: 4, co: 5 },
            { month: "Aug", pm25: 65, pm10: 35, o3: 28, no2: 20, so2: 4.5, co: 5.5 },
            { month: "Sep", pm25: 70, pm10: 38, o3: 30, no2: 22, so2: 5, co: 6 },
            { month: "Oct", pm25: 75, pm10: 40, o3: 32, no2: 24, so2: 5.5, co: 6.5 },
            { month: "Nov", pm25: 80, pm10: 42, o3: 34, no2: 26, so2: 6, co: 7 },
            { month: "Dec", pm25: 85, pm10: 45, o3: 36, no2: 28, so2: 6.5, co: 7.5 },
        ],
        barChart: { pm25: 57.5, pm10: 29.5, co: 4.3, no2: 16.3, o3: 23.3, so2: 3.8 },
    },
    SHANGHAI: {
        temperature: 15.0,
        humidity: 60.0,
        lineChart: [
            { month: "Jan", pm25: 120, pm10: 60, o3: 40, no2: 20, so2: 10, co: 5 },
            { month: "Feb", pm25: 115, pm10: 55, o3: 35, no2: 18, so2: 9, co: 4.5 },
            { month: "Mar", pm25: 110, pm10: 50, o3: 30, no2: 16, so2: 8, co: 4 },
            { month: "Apr", pm25: 105, pm10: 45, o3: 25, no2: 14, so2: 7, co: 3.5 },
            { month: "May", pm25: 100, pm10: 40, o3: 20, no2: 12, so2: 6, co: 3 },
            { month: "Jun", pm25: 95, pm10: 35, o3: 18, no2: 10, so2: 5, co: 2.5 },
            { month: "Jul", pm25: 90, pm10: 30, o3: 16, no2: 8, so2: 4, co: 2 },
            { month: "Aug", pm25: 85, pm10: 25, o3: 14, no2: 6, so2: 3, co: 1.5 },
            { month: "Sep", pm25: 80, pm10: 20, o3: 12, no2: 4, so2: 2, co: 1 },
            { month: "Oct", pm25: 75, pm10: 15, o3: 10, no2: 2, so2: 1, co: 0.5 },
            { month: "Nov", pm25: 70, pm10: 10, o3: 8, no2: 1, so2: 0.5, co: 0.3 },
            { month: "Dec", pm25: 65, pm10: 5, o3: 6, no2: 0.5, so2: 0.2, co: 0.1 },
        ],
        barChart: { pm25: 92.5, pm10: 32.5, co: 2.5, no2: 11.5, o3: 22.5, so2: 5.2 },
    },
    MADRID: {
        temperature: 20.0,
        humidity: 50.0,
        lineChart: [
            { month: "Jan", pm25: 70, pm10: 30, o3: 25, no2: 18, so2: 5, co: 4 },
            { month: "Feb", pm25: 75, pm10: 32, o3: 28, no2: 20, so2: 6, co: 4.5 },
            { month: "Mar", pm25: 80, pm10: 35, o3: 30, no2: 22, so2: 6.5, co: 5 },
            { month: "Apr", pm25: 85, pm10: 38, o3: 32, no2: 24, so2: 7, co: 5.5 },
            { month: "May", pm25: 90, pm10: 40, o3: 35, no2: 26, so2: 7.5, co: 6 },
            { month: "Jun", pm25: 95, pm10: 42, o3: 38, no2: 28, so2: 8, co: 6.5 },
            { month: "Jul", pm25: 100, pm10: 45, o3: 40, no2: 30, so2: 8.5, co: 7 },
            { month: "Aug", pm25: 105, pm10: 48, o3: 42, no2: 32, so2: 9, co: 7.5 },
            { month: "Sep", pm25: 110, pm10: 50, o3: 45, no2: 34, so2: 9.5, co: 8 },
            { month: "Oct", pm25: 115, pm10: 52, o3: 48, no2: 36, so2: 10, co: 8.5 },
            { month: "Nov", pm25: 120, pm10: 55, o3: 50, no2: 38, so2: 10.5, co: 9 },
            { month: "Dec", pm25: 125, pm10: 58, o3: 52, no2: 40, so2: 11, co: 9.5 },
        ],
        barChart: { pm25: 92.5, pm10: 40.5, co: 6.2, no2: 27.5, o3: 35.5, so2: 7.5 },
    },
    BERLIN: {
        temperature: 9.0,
        humidity: 80.0,
        lineChart: [
            { month: "Jan", pm25: 25, pm10: 12, o3: 8, no2: 10, so2: 1, co: 1.5 },
            { month: "Feb", pm25: 28, pm10: 15, o3: 10, no2: 12, so2: 1.2, co: 1.8 },
            { month: "Mar", pm25: 32, pm10: 18, o3: 14, no2: 14, so2: 1.5, co: 2 },
            { month: "Apr", pm25: 35, pm10: 20, o3: 18, no2: 16, so2: 1.8, co: 2.5 },
            { month: "May", pm25: 40, pm10: 22, o3: 22, no2: 18, so2: 2, co: 3 },
            { month: "Jun", pm25: 45, pm10: 25, o3: 25, no2: 20, so2: 2.2, co: 3.5 },
            { month: "Jul", pm25: 50, pm10: 28, o3: 28, no2: 22, so2: 2.5, co: 4 },
            { month: "Aug", pm25: 55, pm10: 30, o3: 30, no2: 24, so2: 2.8, co: 4.5 },
            { month: "Sep", pm25: 60, pm10: 32, o3: 32, no2: 26, so2: 3, co: 5 },
            { month: "Oct", pm25: 65, pm10: 35, o3: 35, no2: 28, so2: 3.2, co: 5.5 },
            { month: "Nov", pm25: 70, pm10: 38, o3: 38, no2: 30, so2: 3.5, co: 6 },
            { month: "Dec", pm25: 75, pm10: 40, o3: 40, no2: 32, so2: 3.8, co: 6.5 },
        ],
        barChart: { pm25: 47.5, pm10: 25.5, co: 3.6, no2: 20, o3: 23.5, so2: 2.2 },
    },
    KYOTO: {
        temperature: 14.0,
        humidity: 70.0,
        lineChart: [
            { month: "Jan", pm25: 18, pm10: 10, o3: 12, no2: 8, so2: 1, co: 1.2 },
            { month: "Feb", pm25: 20, pm10: 12, o3: 14, no2: 10, so2: 1.2, co: 1.5 },
            { month: "Mar", pm25: 22, pm10: 14, o3: 16, no2: 12, so2: 1.5, co: 1.8 },
            { month: "Apr", pm25: 25, pm10: 16, o3: 18, no2: 14, so2: 1.8, co: 2 },
            { month: "May", pm25: 28, pm10: 18, o3: 20, no2: 16, so2: 2, co: 2.5 },
            { month: "Jun", pm25: 30, pm10: 20, o3: 22, no2: 18, so2: 2.2, co: 3 },
            { month: "Jul", pm25: 32, pm10: 22, o3: 25, no2: 20, so2: 2.5, co: 3.5 },
            { month: "Aug", pm25: 35, pm10: 25, o3: 28, no2: 22, so2: 2.8, co: 4 },
            { month: "Sep", pm25: 38, pm10: 28, o3: 30, no2: 24, so2: 3, co: 4.5 },
            { month: "Oct", pm25: 40, pm10: 30, o3: 32, no2: 26, so2: 3.2, co: 5 },
            { month: "Nov", pm25: 42, pm10: 32, o3: 34, no2: 28, so2: 3.5, co: 5.5 },
            { month: "Dec", pm25: 45, pm10: 35, o3: 36, no2: 30, so2: 3.8, co: 6 },
        ],
        barChart: { pm25: 30.3, pm10: 20.1, co: 3.3, no2: 18.0, o3: 23.0, so2: 2.2 },
    },
    OSAKA: {
        temperature: 16.0,
        humidity: 65.0,
        lineChart: [
            { month: "Jan", pm25: 20, pm10: 11, o3: 14, no2: 10, so2: 1, co: 1.3 },
            { month: "Feb", pm25: 22, pm10: 13, o3: 16, no2: 12, so2: 1.2, co: 1.6 },
            { month: "Mar", pm25: 25, pm10: 15, o3: 18, no2: 14, so2: 1.5, co: 2 },
            { month: "Apr", pm25: 28, pm10: 17, o3: 20, no2: 16, so2: 1.8, co: 2.3 },
            { month: "May", pm25: 30, pm10: 20, o3: 22, no2: 18, so2: 2, co: 2.8 },
            { month: "Jun", pm25: 32, pm10: 22, o3: 24, no2: 20, so2: 2.2, co: 3.2 },
            { month: "Jul", pm25: 35, pm10: 25, o3: 26, no2: 22, so2: 2.5, co: 3.5 },
            { month: "Aug", pm25: 38, pm10: 28, o3: 28, no2: 24, so2: 2.8, co: 4 },
            { month: "Sep", pm25: 40, pm10: 30, o3: 30, no2: 26, so2: 3, co: 4.5 },
            { month: "Oct", pm25: 42, pm10: 32, o3: 32, no2: 28, so2: 3.2, co: 5 },
            { month: "Nov", pm25: 45, pm10: 35, o3: 34, no2: 30, so2: 3.5, co: 5.5 },
            { month: "Dec", pm25: 48, pm10: 38, o3: 36, no2: 32, so2: 3.8, co: 6 },
        ],
        barChart: { pm25: 31.8, pm10: 22.1, co: 3.4, no2: 19.6, o3: 23.5, so2: 2.3 },
    },
    LOS_ANGELES: {
        temperature: 18.0,
        humidity: 50.0,
        lineChart: [
            { month: "Jan", pm25: 55, pm10: 30, o3: 20, no2: 15, so2: 3, co: 4 },
            { month: "Feb", pm25: 58, pm10: 32, o3: 22, no2: 16, so2: 3.2, co: 4.5 },
            { month: "Mar", pm25: 60, pm10: 35, o3: 25, no2: 18, so2: 3.5, co: 5 },
            { month: "Apr", pm25: 63, pm10: 38, o3: 28, no2: 20, so2: 3.8, co: 5.5 },
            { month: "May", pm25: 65, pm10: 40, o3: 30, no2: 22, so2: 4, co: 6 },
            { month: "Jun", pm25: 68, pm10: 42, o3: 32, no2: 24, so2: 4.2, co: 6.5 },
            { month: "Jul", pm25: 70, pm10: 45, o3: 35, no2: 26, so2: 4.5, co: 7 },
            { month: "Aug", pm25: 73, pm10: 48, o3: 38, no2: 28, so2: 4.8, co: 7.5 },
            { month: "Sep", pm25: 75, pm10: 50, o3: 40, no2: 30, so2: 5, co: 8 },
            { month: "Oct", pm25: 78, pm10: 52, o3: 42, no2: 32, so2: 5.2, co: 8.5 },
            { month: "Nov", pm25: 80, pm10: 55, o3: 45, no2: 34, so2: 5.5, co: 9 },
            { month: "Dec", pm25: 83, pm10: 58, o3: 48, no2: 36, so2: 5.8, co: 9.5 },
        ],
        barChart: { pm25: 67.3, pm10: 42.3, co: 6.3, no2: 24.2, o3: 32.5, so2: 4.1 },
    },
    MEXICO_CITY: {
        temperature: 20.0,
        humidity: 55.0,
        lineChart: [
            { month: "Jan", pm25: 100, pm10: 60, o3: 50, no2: 30, so2: 8, co: 6 },
            { month: "Feb", pm25: 105, pm10: 62, o3: 52, no2: 32, so2: 8.5, co: 6.5 },
            { month: "Mar", pm25: 110, pm10: 65, o3: 55, no2: 35, so2: 9, co: 7 },
            { month: "Apr", pm25: 115, pm10: 68, o3: 58, no2: 38, so2: 9.5, co: 7.5 },
            { month: "May", pm25: 120, pm10: 70, o3: 60, no2: 40, so2: 10, co: 8 },
            { month: "Jun", pm25: 125, pm10: 72, o3: 62, no2: 42, so2: 10.5, co: 8.5 },
            { month: "Jul", pm25: 130, pm10: 75, o3: 65, no2: 45, so2: 11, co: 9 },
            { month: "Aug", pm25: 135, pm10: 78, o3: 68, no2: 48, so2: 11.5, co: 9.5 },
            { month: "Sep", pm25: 140, pm10: 80, o3: 70, no2: 50, so2: 12, co: 10 },
            { month: "Oct", pm25: 145, pm10: 82, o3: 72, no2: 52, so2: 12.5, co: 10.5 },
            { month: "Nov", pm25: 150, pm10: 85, o3: 75, no2: 55, so2: 13, co: 11 },
            { month: "Dec", pm25: 155, pm10: 88, o3: 78, no2: 58, so2: 13.5, co: 11.5 },
        ],
        barChart: { pm25: 127.5, pm10: 72.5, co: 8.5, no2: 42.5, o3: 61.5, so2: 10.1 },
    },
    TOKYO: {
        temperature: 16.0,
        humidity: 65.0,
        lineChart: [
            { month: "Jan", pm25: 45, pm10: 25, o3: 20, no2: 12, so2: 2, co: 3 },
            { month: "Feb", pm25: 48, pm10: 28, o3: 22, no2: 14, so2: 2.5, co: 3.5 },
            { month: "Mar", pm25: 50, pm10: 30, o3: 25, no2: 16, so2: 3, co: 4 },
            { month: "Apr", pm25: 53, pm10: 32, o3: 28, no2: 18, so2: 3.5, co: 4.5 },
            { month: "May", pm25: 55, pm10: 35, o3: 30, no2: 20, so2: 4, co: 5 },
            { month: "Jun", pm25: 58, pm10: 38, o3: 32, no2: 22, so2: 4.5, co: 5.5 },
            { month: "Jul", pm25: 60, pm10: 40, o3: 35, no2: 24, so2: 5, co: 6 },
            { month: "Aug", pm25: 63, pm10: 42, o3: 38, no2: 26, so2: 5.5, co: 6.5 },
            { month: "Sep", pm25: 65, pm10: 45, o3: 40, no2: 28, so2: 6, co: 7 },
            { month: "Oct", pm25: 68, pm10: 48, o3: 42, no2: 30, so2: 6.5, co: 7.5 },
            { month: "Nov", pm25: 70, pm10: 50, o3: 45, no2: 32, so2: 7, co: 8 },
            { month: "Dec", pm25: 73, pm10: 52, o3: 48, no2: 34, so2: 7.5, co: 8.5 },
        ],
        barChart: { pm25: 58.8, pm10: 38.3, co: 5.3, no2: 21.7, o3: 31.2, so2: 4.3 },
    },
};

let lineChart, barChart, doughnutChart;

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

function updateDashboardData() {
    const city = document.getElementById("countrySelector").value;
    const data = cityData[city];
    if (!data) {
        console.error("No data found for selected city:", city);
        return;
    }

    document.getElementById("temperature").textContent = data.temperature || "N/A";
    document.getElementById("humidity").textContent = data.humidity || "N/A";
    document.getElementById("pm25").textContent = data.barChart.pm25 || "N/A";
    document.getElementById("pm10").textContent = data.barChart.pm10 || "N/A";
    document.getElementById("co").textContent = data.barChart.co || "N/A";
    document.getElementById("no2").textContent = data.barChart.no2 || "N/A";
    document.getElementById("ozone").textContent = data.barChart.o3 || "N/A";
    document.getElementById("so2").textContent = data.barChart.so2 || "N/A";
}

function updateLineChart() {
    const city = document.getElementById("lineChartCitySelector").value;
    const data = cityData[city]?.lineChart || [];
    const ctx = document.getElementById("lineChart").getContext("2d");

    if (lineChart) lineChart.destroy();

    const datasets = [
        {
            label: "PM2.5",
            data: data.map((d) => d.pm25 || null),
            borderColor: "red",
            fill: false,
        },
        {
            label: "PM10",
            data: data.map((d) => d.pm10 || null),
            borderColor: "blue",
            fill: false,
        },
        {
            label: "Ozone",
            data: data.map((d) => d.o3 || null),
            borderColor: "green",
            fill: false,
        },
        {
            label: "NO2",
            data: data.map((d) => d.no2 || null),
            borderColor: "orange",
            fill: false,
        },
        {
            label: "SO2",
            data: data.map((d) => d.so2 || null),
            borderColor: "purple",
            fill: false,
        },
        {
            label: "CO",
            data: data.map((d) => d.co || null),
            borderColor: "pink",
            fill: false,
        },
    ];

    lineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map((d) => d.month),
            datasets: datasets.filter((d) => d.data.some((value) => value !== null)),
        },
        options: {
            spanGaps: true,
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

function updateBarChart() {
    const city = document.getElementById("barChartCitySelector").value;
    const data = cityData[city]?.barChart || {};
    const ctx = document.getElementById("barChart").getContext("2d");

    if (barChart) barChart.destroy();

    const labels = Object.keys(data).filter((key) => data[key] > 0);
    const values = labels.map((key) => data[key]);

    barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Pollutant Levels",
                    data: values,
                    backgroundColor: ["red", "blue", "green", "orange", "purple", "pink"],
                },
            ],
        },
    });
}

function updateDoughnutChart() {
    const city = document.getElementById("doughnutChartCitySelector").value;
    const data = cityData[city]?.barChart || {};
    const ctx = document.getElementById("doughnutChart").getContext("2d");

    if (doughnutChart) doughnutChart.destroy();

    const labels = Object.keys(data).filter((key) => data[key] > 0);
    const values = labels.map((key) => data[key]);

    doughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: ["red", "blue", "green", "orange", "purple", "pink"],
                },
            ],
        },
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateDashboardData();
    updateLineChart();
    updateBarChart();
    updateDoughnutChart();
});
