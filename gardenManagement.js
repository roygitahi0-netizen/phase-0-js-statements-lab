const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
//Using if statements to check on temperature
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}
//Using if statements to check on time of day
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
}else {
  console.log("Lights off");
}
while (soilMoisture < 40) {
  console.log("Watering the garden...");
  soilMoisture += 5;
}
console.log("Soil moisture is now at " + soilMoisture + "%");