
 
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PrinterIcon from '@mui/icons-material/Print';

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
            <h2 className="text-xl mb-5 font-semibold">Orders</h2>
          </div>
          <Box 
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },  // Stack buttons vertically on small screens
    alignItems: 'center',
    gap: { xs: 2, sm: 1 },  // Adds gap between buttons, different for small screens
    mx: 'auto',
  }}
>
  <Button
    variant="contained"
    disableRipple
    sx={{
      backgroundColor: "#003375",
      color: "white",
      mx: { xs: 0, sm: 1 },  // Remove horizontal margin on small screens
      mb: { xs: 1, sm: 0 },  // Add margin bottom on small screens for spacing
      boxShadow: "none",
      textTransform: "capitalize",
      fontSize: "0.875rem",
      ":hover": {
        backgroundColor: "#cadcfc",
        color: "#374151",
        boxShadow: "none",
      },
      width: { xs: '100%', sm: 'auto' },  // Full width on small screens
    }}
    startIcon={<HomeIcon />}
    href="/create-order"
  >
    Create Order
  </Button>
  <Button
    variant="contained"
    disableRipple
    sx={{
      backgroundColor: "#003375",
      color: "white",
      mr: { xs: 0, sm: 0 },  // Margin-right adjustment for responsiveness
      boxShadow: "none",
      textTransform: "capitalize",
      fontSize: "0.875rem",
      ":hover": {
        backgroundColor: "#cadcfc",
        color: "#374151",
        boxShadow: "none",
      },
      width: { xs: '100%', sm: 'auto' },  // Full width on small screens
    }}
    startIcon={<PrinterIcon />}
    href="/create-order"
  >
    Export Order
  </Button>
</Box>
        </div>
        <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
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