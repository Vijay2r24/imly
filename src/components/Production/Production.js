
// import * as React from 'react';
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import StatusBadge from './Satus';

// import FilterBar from './FilterBar';
// import StatusUpdateDialog from '../Orders/StatusUpdateDialog';
// import { PlusIcon } from '@heroicons/react/20/solid';
// import { FaChevronRight } from 'react-icons/fa';
// import {TablePagination
// } from "@mui/material";


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
     
//       [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#003375', // Dark blue color
//         color: theme.palette.common.white,
//         fontWeight: 'bold',
//       },
//       [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//       },
//     },
    
//   }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: '1000252', productName: "Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50, image: '', status: 'Workstarted' },
//         { id: 2, name: '1000251', productName: "Casino", price: '₹1200', discount: '15%', size: 'L', stock: 32, image: '', status: 'Ready to Dispatch' },
//         { id: 3, name: '1000249', productName: "ACRILIA", price: '₹1500', discount: '20%', size: 'S', stock: 23, image: '', status: 'Payment Done' },
//         { id: 4, name: '1000248', productName: "ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30, image: '', status: 'Site Clearance' },
//         { id: 5, name: '1000244', productName: "LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: '', status: 'Cancelled' },
//         { id: 6, name: '1000241', productName: "Milano", price: '₹800', discount: '35%', size: 'L', stock: 0, image: '', status: 'Dispatched' },
//         { id: 7, name: '1000238', productName: "Lema", price: '₹1800', discount: '40%', size: 'S', stock: 0, image: '', status: 'Site Clearance' },
//         { id: 8, name: '1000231', productName: "viay", price: '₹1500', discount: '42%', size: 'L', stock: 0, image: '', status: 'Payment Done' },
//         { id: 9, name: '1000253', productName: "azmal", price: '₹1502', discount: '44%', size: 'XL', stock: 0, image: '', status: 'Ready to Dispatch' },
//         { id: 10, name: '1000265', productName: "Bindhu", price: '₹1505', discount: '45%', size: 'XXL', stock: 0, image: '', status: 'Workstarted' },
//     ]);

//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleStatusChange = (id, newStatus) => {
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     const handleCancel = (id) => {
//         const newStatus = 'Canceled';
//         handleStatusChange(id, newStatus);
//     };

//     const handleOrderUpdate = (event, order) => {
//         event.preventDefault();
//         navigate("/update-order", { state: { order } });
//     };

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
//     const OrderPageMui = () => {
//       const [page, setPage] = useState(0);
//       const [rowsPerPage, setRowsPerPage] = useState(5);
     
//       const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//       };
     
//       const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//       };
     
//       const paginatedData = data.slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage
//       );
//     }

//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//             <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//                 <div className="sm:flex sm:items-center">
//                     <div className="sm:flex-auto">
//                         <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Production Orders</h2>
//                     </div>
//                 </div>
//                 <div className="flex ml-20 justify-end mb-4">
//                     <div className="flex flex-wrap space-x-2">
//                         <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//                     </div>
//                 </div>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Order Id</StyledTableCell>
//             <StyledTableCell >Product Name</StyledTableCell>
//             <StyledTableCell align="center">Price</StyledTableCell>
//             <StyledTableCell align="center">Payment Balance</StyledTableCell>
//             <StyledTableCell align="center">Status</StyledTableCell>
//             <StyledTableCell align="center">Update</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredOrders.map((product) => (
//             <StyledTableRow key={product.id}>
//               <StyledTableCell>{product.name}</StyledTableCell>
//               <StyledTableCell>{product.productName}</StyledTableCell>
//               <StyledTableCell align="center">{product.price}</StyledTableCell>
//               <StyledTableCell align="center">{product.stock}</StyledTableCell>
//               <StyledTableCell align="center">
//                 <StatusBadge status={product.status} />
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 <button
//                   type="button"
//                   className={`rounded-md w-20 h-8 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                     product.status === "Dispatched"
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : product.status === "Canceled"
//                       ? "bg-gray-300 cursor-not-allowed"
//                       : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//                   } whitespace-normal`}
//                   disabled={product.status === "Dispatched" || product.status === "Canceled"}
//                   onClick={() => handleCancel(product.id)}
//                 >
//                   {product.status === "Dispatched" ? (
//                     <>
//                       Already <br /> Dispatched
//                     </>
//                   ) : product.status === "Canceled" ? (
//                     'Canceled'
//                   ) : (
//                     'Cancel Order'
//                   )}
//                 </button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <TableBody>
//             <UserData users={paginatedData} />
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//                 <StatusUpdateDialog
//                     isOpen={isDialogOpen}
//                     onClose={() => setIsDialogOpen(false)}
//                     item={{}} // You may need to pass the actual item or update this as needed
//                 />
//             </div>
//         </div>
//     );
// }

import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StatusBadge from './Satus';
import FilterBar from './FilterBar';
import StatusUpdateDialog from '../Orders/StatusUpdateDialog';
import { PlusIcon } from '@heroicons/react/20/solid';
import { FaChevronRight } from 'react-icons/fa';
import { TablePagination } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Orders() {
  const [products, setProducts] = useState([
    { id: 1, name: '1000252', productName: "Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50, image: '', status: 'Workstarted' },
    { id: 2, name: '1000251', productName: "Casino", price: '₹1200', discount: '15%', size: 'L', stock: 32, image: '', status: 'Ready to Dispatch' },
    { id: 3, name: '1000249', productName: "ACRILIA", price: '₹1500', discount: '20%', size: 'S', stock: 23, image: '', status: 'Payment Done' },
    { id: 4, name: '1000248', productName: "ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30, image: '', status: 'Site Clearance' },
    { id: 5, name: '1000244', productName: "LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: '', status: 'Cancelled' },
    { id: 6, name: '1000241', productName: "Milano", price: '₹800', discount: '35%', size: 'L', stock: 0, image: '', status: 'Dispatched' },
    { id: 7, name: '1000238', productName: "Lema", price: '₹1800', discount: '40%', size: 'S', stock: 0, image: '', status: 'Site Clearance' },
    { id: 8, name: '1000231', productName: "viay", price: '₹1500', discount: '42%', size: 'L', stock: 0, image: '', status: 'PaymentDone' },
    { id: 9, name: '1000253', productName: "azmal", price: '₹1502', discount: '44%', size: 'XL', stock: 0, image: '', status: 'Ready toDispatch' },
    { id: 10, name: '1000265', productName: "Bindhu", price: '₹1505', discount: '45%', size: 'XXL', stock: 0, image: '', status: 'Workstarted' },
  ]);

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleStatusChange = (id, newStatus) => {
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleCancel = (id) => {
    const newStatus = 'Canceled';
    handleStatusChange(id, newStatus);
  };

  const handleOrderUpdate = (event, order) => {
    event.preventDefault();
    navigate("/update-order", { state: { order } });
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);

  const paginatedData = filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-xl mb-5 font-semibold">Production Orders</h2>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
           <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell >Product Name</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Payment Balance</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell>{product.name}</StyledTableCell>
                  <StyledTableCell>{product.productName}</StyledTableCell>
                  <StyledTableCell align="center">{product.price}</StyledTableCell>
                  <StyledTableCell align="center">{product.stock}</StyledTableCell>
                  <StyledTableCell align="center">
                    <StatusBadge status={product.status} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      type="button"
                      className={`rounded-md w-20 h-8 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        product.status === "Dispatched"
                          ? "bg-gray-400 cursor-not-allowed"
                          : product.status === "Canceled"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
                      } whitespace-normal`}
                      disabled={product.status === "Dispatched" || product.status === "Canceled"}
                      onClick={() => handleCancel(product.id)}
                    >
                      {product.status === "Dispatched" ? (
                        <>
                          Already <br /> Dispatched
                        </>
                      ) : product.status === "Canceled" ? (
                        'Canceled'
                      ) : (
                        'Cancel Order'
                      )}
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredOrders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        <StatusUpdateDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          item={{}} // You may need to pass the actual item or update this as needed
        />
      </div>
    </div>
  );
}
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FilterBar from './FilterBar';
// import StatusBadge from './Satus'; // Assuming you have this component
// import StatusUpdateDialog from '../Orders/StatusUpdateDialog'; // Assuming this is a dialog component

// const Orders = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: '1000252', productName: "Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50, image: '', status: 'Workstarted' },
//     { id: 2, name: '1000251', productName: "Casino", price: '₹1200', discount: '15%', size: 'L', stock: 32, image: '', status: 'Ready to Dispatch' },
//     { id: 3, name: '1000249', productName: "ACRILIA", price: '₹1500', discount: '20%', size: 'S', stock: 23, image: '', status: 'Payment Done' },
//     { id: 4, name: '1000248', productName: "ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30, image: '', status: 'Site Clearance' },
//     { id: 5, name: '1000244', productName: "LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: '', status: 'Cancelled' },
//     { id: 6, name: '1000241', productName: "Milano", price: '₹800', discount: '35%', size: 'L', stock: 0, image: '', status: 'Dispatched' },
//     { id: 7, name: '1000238', productName: "Lema", price: '₹1800', discount: '40%', size: 'S', stock: 0, image: '', status: 'Site Clearance' },
//     { id: 8, name: '1000231', productName: "viay", price: '₹1500', discount: '42%', size: 'L', stock: 0, image: '', status: 'PaymentDone' },
//     { id: 9, name: '1000253', productName: "azmal", price: '₹1502', discount: '44%', size: 'XL', stock: 0, image: '', status: 'Ready toDispatch' },
//     { id: 10, name: '1000265', productName: "Bindhu", price: '₹1505', discount: '45%', size: 'XXL', stock: 0, image: '', status: 'Workstarted' },
//   ]);

//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const navigate = useNavigate();

//   const handleStatusChange = (id, newStatus) => {
//     setProducts((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   const handleCancel = (id) => {
//     const newStatus = 'Canceled';
//     handleStatusChange(id, newStatus);
//   };

//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);

//   const paginatedData = filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h2 className="text-xl mb-5 font-semibold">Production Orders</h2>
//           </div>
//         </div>
//         <div className="flex ml-20 justify-end mb-4">
//           <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-blue-900 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order Id</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Product Name</th>
//                 <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Price</th>
//                 <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Stock</th>
//                 <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Update</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {paginatedData.map((product) => (
//                 <tr key={product.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.productName}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{product.price}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{product.stock}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
//                     <StatusBadge status={product.status} />
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
//                     <button
//                       type="button"
//                       className={`rounded-md w-20 h-8 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                         product.status === "Dispatched"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : product.status === "Canceled"
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//                       }`}
//                       disabled={product.status === "Dispatched" || product.status === "Canceled"}
//                       onClick={() => handleCancel(product.id)}
//                     >
//                       {product.status === "Dispatched" ? (
//                         <>
//                           Already <br /> Dispatched
//                         </>
//                       ) : product.status === "Canceled" ? (
//                         'Canceled'
//                       ) : (
//                         'Cancel Order'
//                       )}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex items-center justify-between py-4">
//             <div className="flex-1 flex justify-between sm:hidden">
//               <button
//                 className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                 onClick={() => handleChangePage(null, page - 1)}
//                 disabled={page === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                 onClick={() => handleChangePage(null, page + 1)}
//                 disabled={page >= Math.ceil(filteredOrders.length / rowsPerPage) - 1}
//               >
//                 Next
//               </button>
//             </div>
//             <div className="hidden sm:flex sm:items-center sm:justify-between">
//               <div className="flex items-center">
//                 <span className="text-sm text-gray-700">
//                   Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredOrders.length)} of {filteredOrders.length} results
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="rowsPerPage" className="text-sm text-gray-700 mr-2">
//                   Rows per page:
//                 </label>
//                 <select
//                   id="rowsPerPage"
//                   value={rowsPerPage}
//                   onChange={handleChangeRowsPerPage}
//                   className="border border-gray-300 rounded-md py-1 px-2 text-sm"
//                 >
//                   <option value={5}>5</option>
//                   <option value={10}>10</option>
//                   <option value={25}>25</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//         <StatusUpdateDialog
//           isOpen={isDialogOpen}
//           onClose={() => setIsDialogOpen(false)}
//           item={{}} // You may need to pass the actual item or update this as needed
//         />
//       </div>
//     </div>
//   );
// };

// export default Orders;
