import React from 'react';
import TrafficLight from 'react-trafficlight';

const TrafficLightContainer = () => (
  <div>
    <TrafficLight RedOn />
    <TrafficLight RedOn YellowOn />
    <TrafficLight YellowOn />
    <TrafficLight GreenOn />
  </div>
);

export default TrafficLightContainer;