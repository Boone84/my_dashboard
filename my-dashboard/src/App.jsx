import { useState } from "react";
import "./App.css";
import { mockData } from "./mockData.js";
import { mockGeoFeatures } from "./mockGeoFeatures.js";
import Box from "@mui/material/Box";

function App() {
  console.log(mockData);
  console.log(mockGeoFeatures);

  return (
    <>
      <h1>test</h1>
    </>
  );
}

function BoxComponent(color, width, height) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        backgroundColor: color,
        margin: 2,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}

export default function BoxSx() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <div style={{ display: "flex" }}>
        {BoxComponent("primary.dark", 200, 500)}
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div style={{ display: "flex", flexDirection: "column", }}>
          {BoxComponent("secondary.dark", 200, 235)}
          {BoxComponent("error.dark", 200, 235)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", }}>
          {BoxComponent("warning.dark", 200, 235)}
          {BoxComponent("info.dark", 200, 235)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", }}>
          {BoxComponent("success.dark", 200, 235)}
          {BoxComponent("info.light", 200, 235)}
        </div>
      </div>
    </div>
  );
}
