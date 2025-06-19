import React, { useState } from "react";
import TimeZoneConverter from "./components/TimeZoneConverter";
import ClockCard from "./components/ClockCard";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [theme, setTheme] = useState("light");

  const popularZones = [
    "Asia/Kolkata",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  return (
    <div className={`${theme} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">🌍 Time Zone Converter</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularZones.map((zone) => (
            <ClockCard key={zone} zone={zone} />
          ))}
        </div>

        <div className="mt-8">
          <TimeZoneConverter />
        </div>
      </div>
    </div>
  );
};

export default App;
// import React, { useState } from "react";
// // import TimeZoneConverter from "./components/TimeZoneConverter";
// import ClockCard from "./components/ClockCard";
// import ThemeToggle from "./components/ThemeToggle";

