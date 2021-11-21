import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Bar2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Bar2D, FusionTheme);

const Bar2DChart = ({ data }) => {
  const chartConfigs = {
    type: "bar2D", // The chart type
    width: "500", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked", //Set the chart caption
        decimals: "0",
        xAxisName: "Forks",
        yAxisName: "Repos",
        palettecolors: "5d62b5,29c3be,f2726f",
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data,
    },
  };

  return (
    <div className="chart-wrapper">
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Bar2DChart;
