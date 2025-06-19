import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const ClockCard = ({ zone }) => {
    const [time, setTime] = useState(DateTime.now().setZone(zone));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(DateTime.now().setZone(zone));
        }, 1000);
        return () => clearInterval(interval);
    }, [zone]);

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-4 text-center">
            <h2 className="text-lg font-semibold">{zone}</h2>
            <p className="text-2xl font-mono">{time.toFormat("hh:mm:ss a")}</p>
            <p className="text-sm">{time.toFormat("cccc, dd LLL yyyy")}</p>
        </div>
    );
};

export default ClockCard;
