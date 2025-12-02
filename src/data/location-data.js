const data = [
  { location: "Dhaka", latitude: 23.7808875, longitude: 90.2792371 },
  { location: "Chattogram", latitude: 22.3569, longitude: 91.7832 },
  { location: "Rajshahi", latitude: 24.374, longitude: 88.6011 },
  { location: "Khulna", latitude: 22.8456, longitude: 89.5403 },
  { location: "Sylhet", latitude: 24.8949, longitude: 91.8687 },
  { location: "Barishal", latitude: 22.701, longitude: 90.3535 },
  { location: "Rangpur", latitude: 25.7439, longitude: 89.2752 },
  { location: "Mymensingh", latitude: 24.7471, longitude: 90.4203 },
];

function getLocations() {
  return data;
}
function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: "",
      longitude: "",
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
