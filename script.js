const waqiApiKey = "a64019cb8a03f619fa719ad51f63bd08abd50747";

async function fetchWAQIDataForCountry() {
    const selectedValue = document.getElementById("countrySelector").value;
    await fetchWAQIData(selectedValue);
}

async function fetchWAQIData(location = "geo:48.8534;2.3488") {
    try {
        const response = await fetch(
            `https://api.waqi.info/feed/${location}/?token=${waqiApiKey}`
        );
        const data = await response.json();

        if (data.status === "ok") {
            const iaqi = data.data.iaqi;

            // Update Dashboard
            document.getElementById("temperature").textContent = iaqi.t ? iaqi.t.v : "N/A";
            document.getElementById("humidity").textContent = iaqi.h ? iaqi.h.v : "N/A";
            document.getElementById("pm25").textContent = iaqi.pm25 ? iaqi.pm25.v : "N/A";
            document.getElementById("pm10").textContent = iaqi.pm10 ? iaqi.pm10.v : "N/A";
            document.getElementById("co").textContent = iaqi.co ? iaqi.co.v : "N/A";
            document.getElementById("no2").textContent = iaqi.no2 ? iaqi.no2.v : "N/A";
            document.getElementById("ozone").textContent = iaqi.o3 ? iaqi.o3.v : "N/A";
            document.getElementById("so2").textContent = iaqi.so2 ? iaqi.so2.v : "N/A";

            // Generate Charts
            generateLineChart(iaqi);
            generateBarChart(iaqi);
            generateDoughnutChart(iaqi);
        } else {
            console.error("Failed to fetch WAQI data.");
        }
    } catch (error) {
        console.error("Error fetching WAQI data:", error);
    }
}

function generateLineChart(iaqi) {
    const ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["PM2.5", "PM10", "CO", "NO2", "Ozone", "SO2"],
            datasets: [
                {
                    label: "PM2.5",
                    data: [iaqi.pm25?.v || 0],
                    borderColor: "red",
                },
                {
                    label: "PM10",
                    data: [iaqi.pm10?.v || 0],
                    borderColor: "blue",
                },
                {
                    label: "CO",
                    data: [iaqi.co?.v || 0],
                    borderColor: "green",
                },
                {
                    label: "NO2",
                    data: [iaqi.no2?.v || 0],
                    borderColor: "orange",
                },
                {
                    label: "Ozone",
                    data: [iaqi.o3?.v || 0],
                    borderColor: "purple",
                },
                {
                    label: "SO2",
                    data: [iaqi.so2?.v || 0],
                    borderColor: "pink",
                },
            ],
        },
    });
}

function generateBarChart(iaqi) {
    const ctx = document.getElementById("barChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["PM2.5", "PM10", "CO", "NO2", "Ozone", "SO2"],
            datasets: [
                {
                    label: "Pollutant Levels",
                    data: [
                        iaqi.pm25?.v || 0,
                        iaqi.pm10?.v || 0,
                        iaqi.co?.v || 0,
                        iaqi.no2?.v || 0,
                        iaqi.o3?.v || 0,
                        iaqi.so2?.v || 0,
                    ],
                    backgroundColor: [
                        "red",
                        "blue",
                        "green",
                        "orange",
                        "purple",
                        "pink",
                    ],
                },
            ],
        },
    });
}

function generateDoughnutChart(iaqi) {
    const ctx = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["PM2.5", "PM10", "CO", "NO2", "Ozone", "SO2"],
            datasets: [
                {
                    data: [
                        iaqi.pm25?.v || 0,
                        iaqi.pm10?.v || 0,
                        iaqi.co?.v || 0,
                        iaqi.no2?.v || 0,
                        iaqi.o3?.v || 0,
                        iaqi.so2?.v || 0,
                    ],
                    backgroundColor: [
                        "red",
                        "blue",
                        "green",
                        "orange",
                        "purple",
                        "pink",
                    ],
                },
            ],
        },
    });
}

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

// Initialize the dashboard
fetchWAQIData();

