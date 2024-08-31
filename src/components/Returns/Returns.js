import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Button from '@mui/material/Button';

const initialPayments = [
  {
    orderNumber: "ORD12345",
    customerName: "John Doe",
    dispatchedDate: "2024-08-15",
    amount: "₹100",
    status: "Return",
    type: "Return",
  },
  {
    orderNumber: "ORD12346",
    customerName: "Jane Smith",
    dispatchedDate: "2024-08-16",
    amount: "₹150",
    status: "Replacement",
    type: "Replacement",
  },
  // Add more initial data if needed
];

export default function Payments() {
  const [payments, setPayments] = useState(initialPayments);
  const [filteredPayments, setFilteredPayments] = useState(initialPayments);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter) => {
    if (filter === "All") {
      setFilteredPayments(payments);
    } else {
      setFilteredPayments(payments.filter(payment => payment.type === filter));
    }
    setSelectedFilter(filter);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredPayments.length) : 0;

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        {/* Header and filter buttons section */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Returns</h2>
          <div className="flex justify-center space-x-2">
            <Button
              variant="contained"
              style={{
                backgroundColor: selectedFilter === "All" ? '#003375' : '#d1d5db',
                color: selectedFilter === "All" ? 'white' : '#1f2937',
                borderRadius: '0.375rem'
              }}
              onClick={() => handleFilterChange("All")}
            >
              All
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: selectedFilter === "Return" ? '#003375' : '#d1d5db',
                color: selectedFilter === "Return" ? 'white' : '#1f2937',
                borderRadius: '0.375rem'
              }}
              onClick={() => handleFilterChange("Return")}
            >
              Return
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: selectedFilter === "Replacement" ? '#003375' : '#d1d5db',
                color: selectedFilter === "Replacement" ? 'white' : '#1f2937',
                borderRadius: '0.375rem'
              }}
              onClick={() => handleFilterChange("Replacement")}
            >
              Replacement
            </Button>
          </div>
        </div>

        {/* Table section */}
        <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
          <Table>
            <TableHead>
  <TableRow>
    <TableCell
      style={{
        backgroundColor: '#003375',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Align text to center
        padding: '8px', // Consistent padding
      }}
    >
      Order Id
    </TableCell>
    <TableCell
      style={{
        backgroundColor: '#003375',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Align text to center
        padding: '8px', // Consistent padding
      }}
    >
      Customer Name
    </TableCell>
    <TableCell
      style={{
        backgroundColor: '#003375',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Align text to center
        padding: '8px', // Consistent padding
      }}
    >
      Amount
    </TableCell>
    <TableCell
      style={{
        backgroundColor: '#003375',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Align text to center
        padding: '8px', // Consistent padding
      }}
    >
      Dispatched Date
    </TableCell>
    <TableCell
      style={{
        backgroundColor: '#003375',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Align text to center
        padding: '8px', // Consistent padding
      }}
    >
      Status
    </TableCell>
  </TableRow>
</TableHead>

<TableBody>
  {filteredPayments
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((item, index) => (
      <TableRow
        key={index}
        className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
      >
        <TableCell style={{ padding: '8px', textAlign: 'center' }}>{item.orderNumber}</TableCell>
        <TableCell style={{ padding: '8px', textAlign: 'center' }}>{item.customerName}</TableCell>
        <TableCell style={{ padding: '8px', textAlign: 'center' }}>{item.amount}</TableCell>
        <TableCell style={{ padding: '8px', textAlign: 'center' }}>{item.dispatchedDate}</TableCell>
        <TableCell style={{ padding: '8px', textAlign: 'center' }}>
          <span className={`inline-flex items-center justify-center rounded-full w-32 h-8 text-xs font-semibold ring-1 ring-inset
            ${item.status === "Return" ? 'bg-red-200 text-red-800' :
             item.status === "Replacement" ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}
          >
            {item.status}
          </span>
        </TableCell>
      </TableRow>
    ))}
  {emptyRows > 0 && (
    <TableRow style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={5} />
    </TableRow>
  )}
</TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={5}
                  count={filteredPayments.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  className="text-sm"
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
