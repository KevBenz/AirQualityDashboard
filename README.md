# AirQualityDashboard
Air Quality Monitoring Dashboard
Overview
The Air Quality Monitoring Dashboard is a web-based application designed to provide insights into air quality across multiple cities worldwide. By leveraging real-time data from the World Air Quality Index (WAQI) API, users can explore pollutant levels, environmental metrics (temperature and humidity), and historical trends through interactive and visually engaging charts.
________________________________________
Features
Core Functionalities
1.	Real-Time Data:
Displays pollutant levels and environmental metrics for selected cities:
Pollutants: PM2.5, PM10, CO, NO2, Ozone (O3), SO2.
Environmental Metrics: Temperature (°C), Humidity (%).
3.	Interactive Charts:
Line Chart: Visualizes pollutant trends over time using monthly data for 2024.
Bar Chart: Compares average pollutant levels for a selected city.
Doughnut Chart: Highlights pollutant distribution for the selected city.
4.  Dynamic City Selection:
Users can switch between cities via a dropdown menu to view real-time data and historical trends seamlessly.
________________________________________
Data Sources
1.	WAQI API:
Provides real-time air quality and environmental data.
Limitations: Does not support historical data beyond a few days and enforces rate limits.
2.	Manually Compiled Data:
Historical data for 2024 was created manually by:
Extracting one data point per month for each pollutant and city.
Calculating averages for pollutant levels to populate bar and doughnut charts.
________________________________________
Tools and Technologies
Frontend Development
•	HTML: Used to define the structure of the web pages.
•	CSS: Applied for styling and layout of the dashboard.
•	JavaScript: Enabled dynamic behavior, real-time data fetching, and chart rendering.
•	Chart.js: A library for creating interactive and visually appealing charts.
Data Handling
•	WAQI API: For real-time air quality data retrieval.
•	Excel: Used for preprocessing and organizing historical data manually.
________________________________________
Development Workflow
1.	Initial Setup:
o	Designed a clean, responsive user interface using HTML and CSS.
o	Integrated Chart.js to support dynamic data visualization.
2.	API Integration:
o	Successfully connected to the WAQI API to fetch real-time pollutant data.
o	Implemented mechanisms to handle API rate limits and ensure efficient data fetching.
3.	Historical Data Compilation:
o	Extracted monthly pollutant data for 2024 manually.
o	Computed average concentrations for pollutants to populate charts.
4.	Data Visualization:
o	Built interactive charts:
	Line Chart: Displays pollutant trends for 2024.
	Bar Chart: Summarizes average pollutant levels in a city.
	Doughnut Chart: Visualizes pollutant distribution within a city.
________________________________________
Challenges and Solutions
1.	API Limitations:
o	Challenge: Historical data was not available through the WAQI API.
o	Solution: Manually compiled monthly data points for 2024.
2.	Incomplete Data:
o	Challenge: Missing data for certain pollutants in some cities.
o	Solution: Filtered out incomplete records and used averages to fill gaps where possible.
3.	Dynamic City Selection:
o	Challenge: Ensuring seamless updates to charts when switching cities.
o	Solution: Implemented an event-driven system to update charts dynamically based on user selection.
________________________________________
Successes
1.	Successfully integrated the WAQI API for real-time pollutant data.
2.	Created dynamic and interactive charts using Chart.js.
3.	Designed a responsive, user-friendly interface.
4.	Compiled historical data manually to provide meaningful insights.
________________________________________
Failures and Lessons Learned
1.	API Rate Limiting: Encountered issues with simultaneous user requests; mitigated this with local caching.
2.	Manual Data Compilation: The process was time-consuming but necessary due to API constraints.
3.	Data Gaps: Missing pollutant data for some cities highlighted the need for more robust data sources.
________________________________________
Future Improvements
1.	Backend Integration:
o	Develop a backend server to automate historical data storage and retrieval.
2.	Expanded Data Sources:
o	Request extended WAQI API access or integrate additional APIs to enrich datasets.
3.	Mobile Optimization:
o	Enhance dashboard responsiveness for a better user experience on smartphones and tablets.
4.	Global City Coverage:
o	Add more cities and implement error handling for incomplete data.
5.	Advanced Visualizations:
o	Include scatter plots and heatmaps to provide deeper insights into pollutant distribution.
________________________________________
How to Use
1.	Open the Dashboard:
o	Open index.html in any modern web browser.
2.	Explore Features:
o	Select a city from the dropdown menu to:
	View real-time pollutant levels and environmental metrics.
	Analyze historical trends using line, bar, and doughnut charts.
________________________________________
Project Files
1.	index.html: Contains the main structure of the dashboard.
2.	styles.css: Includes all the styling for the user interface.
3.	script.js: Contains JavaScript code for:
o	Fetching real-time data from WAQI API.
o	Processing and visualizing data using Chart.js.
________________________________________
Conclusion

The Air Quality Monitoring Dashboard offers an intuitive and informative platform for tracking air quality across cities. While the project faced challenges with API limitations and manual data compilation, it successfully delivers actionable insights through its dynamic features and charts. Future updates will focus on automating data collection, improving responsiveness, and expanding city coverage to enhance its functionality and user experience.

