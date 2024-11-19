const iqAirAPIKey = '693fca49-1546-4984-addf-44e9e9b691b8';

async function fetchData() {
  const response = await fetch(`https://api.airvisual.com/v2/nearest_city?key=${iqAirAPIKey}`);
  const data = await response.json();
  if (data.status === "success") {
    document.getElementById('temperature').textContent = data.data.current.weather.tp;
    document.getElementById('humidity').textContent = data.data.current.weather.hu;
    document.getElementById('pm2_5').textContent = data.data.current.pollution.aqius;
    document.getElementById('pm10').textContent = data.data.current.pollution.aqicn;
  }
}

function generateHistoricalData() {
  return {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    temperature: [11.5, 10.3, 13.7, 18.2, 22.5, 25.1, 28.0, 27.5, 24.3, 18.9, 13.6, 9.7],
    humidity: [60, 65, 63, 58, 55, 53, 52, 51, 54, 58, 62, 65],
    pm2_5: [24, 28, 22, 20, 18, 15, 14, 16, 19, 23, 25, 27],
    pm10: [14, 16, 12, 11, 10, 8, 7, 9, 10, 12, 15, 16],
  };
}

function renderCharts() {
  const historicalData = generateHistoricalData();

  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: historicalData.months,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: historicalData.temperature,
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'Humidity (%)',
          data: historicalData.humidity,
          borderColor: 'green',
          fill: false
        }
      ]
    }
  });

  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['PM2.5', 'PM10'],
      datasets: [
        {
          label: 'Pollutant Levels (µg/m³)',
          data: [historicalData.pm2_5[11], historicalData.pm10[11]],
          backgroundColor: ['red', 'blue']
        }
      ]
    }
  });

  new Chart(document.getElementById('doughnutChart'), {
    type: 'doughnut',
    data: {
      labels: ['PM2.5', 'PM10'],
      datasets: [
        {
          data: [historicalData.pm2_5[11], historicalData.pm10[11]],
          backgroundColor: ['red', 'blue']
        }
      ]
    }
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach((section) => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

fetchData();
renderCharts();
