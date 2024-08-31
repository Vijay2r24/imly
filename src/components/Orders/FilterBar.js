
// import React from 'react';
// import { FaList, FaTruck,FaTasks, FaBan,FaSpinner,FaCheckCircle, FaBroom} from 'react-icons/fa';
// import {
//   Edit as EditIcon,
//   Home as HomeIcon,
//   Print as PrinterIcon,
//   List as ListIcon,
//   PendingActions as PendingIcon, 
//   LocalShipping as DispatchedIcon,
//   CheckBox  as ApprovedIcon, 
//   Architecture as DesignIcon,
//   PrecisionManufacturing as ProductionIcon,
//   Engineering as TechnicalIcon,
//   DoDisturbAlt as CancelledIcon,
// } from "@mui/icons-material";
// import Button from '@mui/material/Button';
// const FilterBar = ({ selectedFilter, onFilterChange }) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-2">
//   <Button
//     variant="contained"
//     startIcon={<FaList />}
//     className="w-30 sm:w-32"
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
//     startIcon={<PendingIcon />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "Pending" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "pending" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("Workstarted")}
//   >
//     Pending
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<ApprovedIcon />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "approved" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "approved" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("approved")}
//   >
//    Approved
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<DesignIcon />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "design" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "design" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("design")}
//   >
//     Design
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
//     startIcon={<ProductionIcon />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "production" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "production" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("production")}
//   >
//    Production
//   </Button>
//   <Button
//     variant="contained"
//     startIcon={<TechnicalIcon />}
//     className="w-full sm:w-32"
//     style={{
//       backgroundColor: selectedFilter === "technical" ? '#003375' : '#d1d5db',
//       color: selectedFilter === "technical" ? 'white' : '#1f2937',
//       borderRadius: '0.375rem',
//     }}
//     onClick={() => onFilterChange("technical")}
//   >
//     Technical
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
//   );
// };

// export default FilterBar;
// import React from 'react';
// import { FaList, FaTruck, FaBan } from 'react-icons/fa';
// import {
//   PendingActions as PendingIcon,
//   CheckBox as ApprovedIcon,
//   Architecture as DesignIcon,
//   PrecisionManufacturing as ProductionIcon,
//   Engineering as TechnicalIcon,
// } from "@mui/icons-material";
// import Button from '@mui/material/Button';

// const FilterBar = ({ selectedFilter, onFilterChange }) => {
//   const buttonStyles = {
//     width: '120px', // Fixed width for equal size
//     height: '50px', // Fixed height for equal size
//     backgroundColor: '#d1d5db',
//     color: '#1f2937',
//     borderRadius: '0.375rem',
//     padding: '8px 0', // Adjusted padding for height
//     fontSize: '14px', // Increased font size for better visibility
//     marginRight: '8px', // Consistent gap between buttons
//   };

//   return (
//     <div className="flex overflow-x-auto justify-center items-center"> {/* Ensure all buttons in one row */}
//       <Button
//         variant="contained"
//         startIcon={<FaList />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "All" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "All" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("All")}
//       >
//         All
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<PendingIcon />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "Pending" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "Pending" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("Pending")}
//       >
//         Pending
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<ApprovedIcon />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "approved" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "approved" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("approved")}
//       >
//         Approved
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<DesignIcon />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "design" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "design" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("design")}
//       >
//         Design
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<FaTruck />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "Dispatched" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "Dispatched" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("Dispatched")}
//       >
//         Dispatched
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<ProductionIcon />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "production" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "production" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("production")}
//       >
//         Production
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<TechnicalIcon />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "technical" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "technical" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("technical")}
//       >
//         Technical
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<FaBan />}
//         style={{
//           ...buttonStyles,
//           backgroundColor: selectedFilter === "Canceled" ? '#003375' : '#d1d5db',
//           color: selectedFilter === "Canceled" ? 'white' : '#1f2937',
//         }}
//         onClick={() => onFilterChange("Canceled")}
//       >
//         Canceled
//       </Button>
//     </div>
//   );
// };

// export default FilterBar;
import React from 'react';
import { FaList, FaTruck, FaBan } from 'react-icons/fa';
import {
  PendingActions as PendingIcon,
  CheckBox as ApprovedIcon,
  Architecture as DesignIcon,
  PrecisionManufacturing as ProductionIcon,
  Engineering as TechnicalIcon,
} from "@mui/icons-material";
import Button from '@mui/material/Button';

const FilterBar = ({ selectedFilter, onFilterChange }) => {
  const buttonStyles = {
    width: '120px', // Fixed width for equal size
    height: '50px', // Fixed height for equal size
    backgroundColor: '#d1d5db',
    color: '#1f2937',
    borderRadius: '0.375rem',
    padding: '8px 0', // Adjusted padding for height
    fontSize: '14px', // Increased font size for better visibility
    marginRight: '8px', // Consistent gap between buttons
  };

  return (
    <div className="flex flex-wrap overflow-x-auto justify-center items-center gap-2 sm:gap-0">
      <Button
        variant="contained"
        startIcon={<FaList />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "All" ? '#003375' : '#d1d5db',
          color: selectedFilter === "All" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("All")}
      >
        All
      </Button>
      <Button
        variant="contained"
        startIcon={<PendingIcon />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "Pending" ? '#003375' : '#d1d5db',
          color: selectedFilter === "Pending" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("Pending")}
      >
        Pending
      </Button>
      <Button
        variant="contained"
        startIcon={<ApprovedIcon />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "approved" ? '#003375' : '#d1d5db',
          color: selectedFilter === "approved" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("approved")}
      >
        Approved
      </Button>
      <Button
        variant="contained"
        startIcon={<DesignIcon />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "design" ? '#003375' : '#d1d5db',
          color: selectedFilter === "design" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("design")}
      >
        Design
      </Button>
      <Button
        variant="contained"
        startIcon={<FaTruck />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "Dispatched" ? '#003375' : '#d1d5db',
          color: selectedFilter === "Dispatched" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("Dispatched")}
      >
        Dispatched
      </Button>
      <Button
        variant="contained"
        startIcon={<ProductionIcon />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "production" ? '#003375' : '#d1d5db',
          color: selectedFilter === "production" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("production")}
      >
        Production
      </Button>
      <Button
        variant="contained"
        startIcon={<TechnicalIcon />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "technical" ? '#003375' : '#d1d5db',
          color: selectedFilter === "technical" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("technical")}
      >
        Technical
      </Button>
      <Button
        variant="contained"
        startIcon={<FaBan />}
        style={{
          ...buttonStyles,
          backgroundColor: selectedFilter === "Canceled" ? '#003375' : '#d1d5db',
          color: selectedFilter === "Canceled" ? 'white' : '#1f2937',
        }}
        onClick={() => onFilterChange("Canceled")}
      >
        Canceled
      </Button>
    </div>
  );
};

export default FilterBar;
