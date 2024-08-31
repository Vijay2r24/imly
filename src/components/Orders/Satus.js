// import React from 'react';

// const StatusBadge = ({ status }) => {
//   const badgeColor = status === "Delivered" ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-red-50 text-red-700 ring-red-600/20";

//   return (
//     <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeColor}`}>
//       {status}
//     </span>
//   );
// };

// export default StatusBadge;

import React from 'react';

const StatusBadge = ({ status }) => {
  const badgeColor =
  status === "Cancelled"
    ? "bg-red-100 text-red-800 ring-red-700/30" // Red background and text for Cancelled
    : status === "Dispatched"
    ? "bg-green-100 text-green-800 ring-green-700/30" // Green background and text for Dispatched
    : status === "Site Clearance"
    ? "bg-teal-100 text-teal-800 ring-teal-700/30" // Teal background and text for Site Clearance
    : status === "Payment Done"
    ? "bg-blue-100 text-blue-800 ring-blue-700/30" // Blue background and text for Payment Done
    : status === "Readyto Dispatch"
    ? "bg-yellow-100 text-yellow-800 ring-yellow-700/30" // Yellow background and text for Ready to Dispatch
    : status === "Workstarted"
    ? "bg-purple-100 text-purple-800 ring-purple-700/30" // Purple background and text for Workstarted
    : "bg-gray-100 text-gray-800 ring-gray-700/30"; // Default color for undefined statuses



  return (
    <span
      className={`inline-flex items-center justify-center rounded-full w-32 h-8 text-xs font-semibold ring-1 ring-inset ${badgeColor}`}
    >
      {status}
    </span>
  );
};


export default StatusBadge;
