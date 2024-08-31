
import React from 'react';
import { FaList, FaTruck,FaTasks, FaBan,FaSpinner,FaCheckCircle, FaBroom} from 'react-icons/fa';
import Button from '@mui/material/Button';
const FilterBar = ({ selectedFilter, onFilterChange }) => {
  return (
//     <div className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0">
//   <Button
//     variant="contained"
//     startIcon={<FaList />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "All" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "All" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("All")}
//   >
//     All
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaTasks />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Workstarted" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "Workstarted" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Workstarted")}
//   >
//     Work started
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaTruck />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Ready to Dispatch" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "Ready to Dispatch" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Ready to Dispatch")}
//   >
//     Ready to Dispatch
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaCheckCircle />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "PaymentDone" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "PaymentDone" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("PaymentDone")}
//   >
//     Payment Done
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaTruck />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Dispatched" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "Dispatched" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Dispatched")}
//   >
//     Dispatched
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaBroom />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Site Clearance" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "Site Clearance" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Site Clearance")}
//   >
//     Site Clearance
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<FaBan />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Canceled" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "Canceled" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Canceled")}
//   >
//     Canceled
//   </Button>
// </div>
<div className="flex flex-wrap justify-center gap-2">
  <Button
    variant="contained"
    startIcon={<FaList />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "All" ? '#003375' : '#d1d5db',
      color: selectedFilter === "All" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("All")}
  >
    All
  </Button>
  <Button
    variant="contained"
    startIcon={<FaTasks />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "Workstarted" ? '#003375' : '#d1d5db',
      color: selectedFilter === "Workstarted" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("Workstarted")}
  >
    Work started
  </Button>
  <Button
    variant="contained"
    startIcon={<FaTruck />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "Ready to Dispatch" ? '#003375' : '#d1d5db',
      color: selectedFilter === "Ready to Dispatch" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("Ready to Dispatch")}
  >
    Ready to Dispatch
  </Button>
  <Button
    variant="contained"
    startIcon={<FaCheckCircle />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "PaymentDone" ? '#003375' : '#d1d5db',
      color: selectedFilter === "PaymentDone" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("PaymentDone")}
  >
    Payment Done
  </Button>
  <Button
    variant="contained"
    startIcon={<FaTruck />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "Dispatched" ? '#003375' : '#d1d5db',
      color: selectedFilter === "Dispatched" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("Dispatched")}
  >
    Dispatched
  </Button>
  <Button
    variant="contained"
    startIcon={<FaBroom />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "Site Clearance" ? '#003375' : '#d1d5db',
      color: selectedFilter === "Site Clearance" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("Site Clearance")}
  >
    Site Clearance
  </Button>
  <Button
    variant="contained"
    startIcon={<FaBan />}
    className="w-full sm:w-32"
    style={{
      backgroundColor: selectedFilter === "Canceled" ? '#003375' : '#d1d5db',
      color: selectedFilter === "Canceled" ? 'white' : '#1f2937',
      borderRadius: '0.375rem',
    }}
    onClick={() => onFilterChange("Canceled")}
  >
    Canceled
  </Button>
</div>
  
  );
};

export default FilterBar;
