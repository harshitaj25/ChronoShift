import React, { useState } from "react";
import { DateTime } from "luxon";
import timeZones from "../utils/timezones";

const TimeZoneConverter = () => {
    const [inputTime, setInputTime] = useState("");
    const [fromZone, setFromZone] = useState("UTC");
    const [toZone, setToZone] = useState("Asia/Kolkata");
    const [result, setResult] = useState("");

    const handleConvert = () => {
        const dt = DateTime.fromISO(inputTime, { zone: fromZone });
        if (!dt.isValid) {
            setResult("Invalid time format. Use YYYY-MM-DDTHH:mm format.");
            return;
        }
        const converted = dt.setZone(toZone);
        setResult(converted.toFormat("ffff"));
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Time Converter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                <input
                    type="datetime-local"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    className="p-2 rounded border w-full text-black"
                />
                <select value={fromZone} onChange={(e) => setFromZone(e.target.value)} className="p-2 rounded border text-black">
                    {timeZones.map((zone) => (
                        <option key={zone}>{zone}</option>
                    ))}
                </select>
                <select value={toZone} onChange={(e) => setToZone(e.target.value)} className="p-2 rounded border text-black">
                    {timeZones.map((zone) => (
                        <option key={zone}>{zone}</option>
                    ))}
                </select>
                <button onClick={handleConvert} className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
                    Convert
                </button>
            </div>
            {result && <p className="mt-4 font-mono text-lg">{result}</p>}
        </div>
    );
};

export default TimeZoneConverter;
