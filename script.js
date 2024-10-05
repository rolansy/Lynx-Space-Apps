document.getElementById('continentSelect').addEventListener('change', function() {
    const continent = this.value;
    updateCharts(continent);
});

// Sample data (replace with actual data)
const data = {
    "Africa": {
        co2: [10, 20, 30, 40, 50],
        methane: [5, 10, 15, 20, 25],
        temp: [0.5, 0.6, 0.7, 0.8, 0.9],
        years: [2000, 2005, 2010, 2015, 2020]
    },
    // Add data for other continents
};

function updateCharts(continent) {
    const continentData = data[continent];

    // Update CO2 chart
    Plotly.newPlot('co2Chart', [{
        x: continentData.years,
        y: continentData.co2,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'CO₂ Emissions',
        line: {color: 'green'}
    }], {title: `CO₂ Emissions in ${continent} (2000-2020)`});

    // Update Methane chart
    Plotly.newPlot('methaneChart', [{
        x: continentData.years,
        y: continentData.methane,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Methane Emissions',
        line: {color: 'blue'}
    }], {title: `Methane Emissions in ${continent} (2000-2020)`});

    // Update Temperature chart
    Plotly.newPlot('tempChart', [{
        x: continentData.years,
        y: continentData.temp,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Temperature Change',
        line: {color: 'red'}
    }], {title: `Temperature Changes in ${continent} (2000-2020)`});
}

// script.js
// Existing code in script.js

document.addEventListener('DOMContentLoaded', function() {
    // Data for the map
    var data = [{
        type: 'scattergeo',
        mode: 'markers',
        locations: ['USA', 'CAN', 'MEX'],
        marker: {
            size: [20, 30, 40],
            color: ['red', 'green', 'blue']
        }
    }];

    // Layout for the map
    var layout = {
        title: 'Climate Change Impact Map',
        geo: {
            scope: 'world',
            projection: {
                type: 'orthographic'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        }
    };

    // Render the map
    Plotly.newPlot('mapChart', data, layout);

    // Load earthquake data and render the density map
    d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv', function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        var data = [{
            lon: unpack(rows, 'Longitude'),
            lat: unpack(rows, 'Latitude'),
            radius: 10,
            z: unpack(rows, 'Magnitude'),
            type: "densitymap",
            coloraxis: 'coloraxis',
            hoverinfo: 'skip'
        }];

        var layout = {
            map: {
                center: { lon: 60, lat: 30 },
                style: "outdoors",
                zoom: 2
            },
            coloraxis: { colorscale: "Viridis" },
            title: { text: "Earthquake Magnitude" },
            width: 600,
            height: 400,
            margin: { t: 30, b: 0 }
        };

        Plotly.newPlot('myDiv', data, layout);
    });
});