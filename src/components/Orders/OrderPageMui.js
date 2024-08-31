import {
  Edit as EditIcon,
  Home as HomeIcon,
  Print as PrinterIcon,
  List as ListIcon,
  PendingActions as PendingIcon, 
  LocalShipping as DispatchedIcon,
  CheckBox  as ApprovedIcon, 
  Architecture as DesignIcon,
  PrecisionManufacturing as ProductionIcon,
  Engineering as TechnicalIcon,
  DoDisturbAlt as CancelledIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PrinterIcon from '@mui/icons-material/Print';

const data = [
  {
    id: 1000252,
    name: "RIVAGO",
    balance: 1000,
    price: 50000,
    status: "pending",
    operation: "Cancel Order",
  },
  {
    id: 1000253,
    name: "CASINO",
    balance: 1200,
    price: 50000,
    status: "dispatched",
    operation: "Already Dispatched",
  },
  {
    id: 1000254,
    name: "ACRILIA",
    balance: 1500,
    price: 50000,
    status: "design",
    operation: "Cancel Order",
  },
  {
    id: 1000255,
    name: "ARTEX",
    balance: 2500,
    price: 50000,
    status: "approved",
    operation: "Cancel Order",
  },
  {
    id: 1000256,
    name: "LAZZARO",
    balance: 2000,
    price: 50000,
    status: "cancelled",
    operation: "Cancelled",
  },
  {
    id: 1000257,
    name: "MILANO",
    balance: 800,
    price: 50000,
    status: "technical",
    operation: "Cancel Order",
  },
  {
    id: 1000258,
    name: "LAZZARO",
    balance: 1800,
    price: 50000,
    status: "cancelled",
    operation: "Cancelled",
  },
  {
    id: 1000259,
    name: "LEON",
    balance: 1500,
    price: 50000,
    status: "production",
    operation: "Cancel Order",
  },
  {
    id: 1000260,
    name: "FLIPPO",
    balance: 2000,
    price: 50000,
    status: "dispatched",
    operation: "Already Dispatched",
  },
  {
    id: 1000261,
    name: "LUCENTO",
    balance: 1700,
    price: 50000,
    status: "production",
    operation: "Cancel Order",
  },
  {
    id: 1000262,
    name: "LEON",
    balance: 1000,
    price: 50000,
    status: "cancelled",
    operation: "Cancelled",
  },
  {
    id: 1000263,
    name: "LAZZARO",
    balance: 1000,
    price: 50000,
    status: "technical",
    operation: "Cancel Order",
  },
  {
    id: 1000264,
    name: "CASINO",
    balance: 1000,
    price: 50000,
    status: "approved",
    operation: "Cancel Order",
  },
  {
    id: 1000265,
    name: "LEON",
    balance: 4000,
    price: 50000,
    status: "Design",
    operation: "Cancel Order",
  },
];
const UserData = ({ users }) => {
  const navigate = useNavigate();

  const isDispatched = (statusChecker) => {
    return statusChecker === "dispatched" || statusChecker === "Dispatched";
  };

  const isActive = (orderChecker) => {
    return orderChecker === "Cancel Order" || orderChecker === "cancel order";
  };

  const handleOrderUpdate = (event, order) => {
    event.preventDefault();
    navigate("/update-order", { state: { order } });
  };

  return (
    <>
      {users.map((curUser) => {
        const { id, name, price, balance, status, operation } = curUser;

        return (
          <TableRow key={id}>
            <TableCell align="center">
              <Typography fontWeight="bold" sx={{ fontSize: "0.875rem" }}>
                {id}
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6c7079", fontSize: "0.875rem" }}
            >
              {name}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6c7079", fontSize: "0.875rem" }}
            >
              &#8377;{price}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6c7079", fontSize: "0.875rem" }}
            >
              &#8377;{balance}
            </TableCell>
            <TableCell align="center">
              <Button
                disableRipple
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  minWidth: "8vw",
                  color: isDispatched(status) ? "green" : "#BD2B2B",
                  backgroundColor: isDispatched(status) ? "#eefcee" : "#FFF3F2",
                  borderColor: isDispatched(status) ? "green" : "#BD2B2B",
                  border: 1,
                  textTransform: "capitalize",
                  fontSize: "0.875rem",
                  boxShadow: "none",
                  ":hover": {
                    color: isDispatched(status) ? "green" : "#BD2B2B",
                    backgroundColor: isDispatched(status)
                      ? "#eefcee"
                      : "#FFF3F2",
                    borderColor: isDispatched(status) ? "green" : "#BD2B2B",
                    boxShadow: "none",
                  },
                }}
              >
                {status}
              </Button>
            </TableCell>
            <TableCell align="left">
              <Button
                disableRipple
                variant="contained"
                sx={{
                  boxShadow: "none",
                  backgroundColor: isActive(operation) ? "#dc2626" : "#c5c5c5",
                  color: "#FFFEFE",
                  fontSize: "0.875rem",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: isActive(operation)
                      ? "#ef4444"
                      : "#c5c5c5",
                    boxShadow: "none",
                  },
                }}
              >
                {operation}
              </Button>
            </TableCell>
            <TableCell align="center">
              <Button onClick={(e) => handleOrderUpdate(e, curUser)}
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  boxShadow: "none",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#3b82f6 ",
                    boxShadow: "none",
                  },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

const OrderPageMui = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState(""); // State for the status filter

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setPage(0); // Reset to the first page when filter changes
  };

  const filteredData = statusFilter
    ? data.filter(
        (item) => item.status.toLowerCase() === statusFilter.toLowerCase()
      )
    : data;

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Container maxWidth="lg" sx={{ p: 4, marginBottom: "1rem" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="p"
          alignItems={"center"}
          fontWeight="600"
          color="black"
          fontSize={"1.25rem"}
        >
          Orders
        </Typography>
        <Box >
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#003375",
              color: "white",
              mx: 1,
              boxShadow: "none",
              textTransform: "capitalize",
              fontSize: "0.875rem",
              ":hover": {
                backgroundColor: "#cadcfc",
                color: "#374151",
                boxShadow: "none",
              },
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
              mr: 0,
              boxShadow: "none",
              textTransform: "capitalize",
              fontSize: "0.875rem",
              ":hover": {
                backgroundColor: "#cadcfc",
                color: "#374151",
                boxShadow: "none",
              },
            }}
            startIcon={<PrinterIcon />}
            href="/create-order"
          >
            Export Order
          </Button>
        </Box>
      </Box>
      {/* Filter Buttons */}
      <Box display="flex" justifyContent="center" my={1}
          padding={"0.5rem"}
          paddingTop={"1.5rem"}
        >
        {/* <Box
          backgroundColor="rgba(243, 244, 246, 1)"
          
        > */}
          <Button
            variant={statusFilter === "" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("")}
            startIcon={<ListIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "" ? "#003375" : "white",
              color: statusFilter === "" ? "white" : "#374151",
              border: statusFilter === "" ? "none" : "none",
              ":hover": {
                backgroundColor: statusFilter === "" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            All
          </Button>
          <Button
            variant={statusFilter === "pending" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("pending")}
            startIcon={<PendingIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "pending" ? "#003375" : "white",
              color: statusFilter === "pending" ? "white" : "#374151",
              border: statusFilter === "pending" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "pending" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "pending" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Pending
          </Button>
          <Button
            variant={statusFilter === "dispatched" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("dispatched")}
            startIcon={<DispatchedIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "dispatched" ? "#003375" : "white",
              color: statusFilter === "dispatched" ? "white" : "#374151",
              border: statusFilter === "dispatched" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "dispatched" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "dispatched" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Dispatched
          </Button>
          <Button
            variant={statusFilter === "approved" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("approved")}
            startIcon={<ApprovedIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "approved" ? "#003375" : "white",
              color: statusFilter === "approved" ? "white" : "#374151",
              border: statusFilter === "approved" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "approved" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "approved" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Approved
          </Button>
          <Button
            variant={statusFilter === "design" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("design")}
            startIcon={<DesignIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "design" ? "#003375" : "white",
              color: statusFilter === "design" ? "white" : "#374151",
              border: statusFilter === "design" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "design" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "design" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Design
          </Button>
          <Button
            variant={statusFilter === "production" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("production")}
            startIcon={<ProductionIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "production" ? "#003375" : "white",
              color: statusFilter === "production" ? "white" : "#374151",
              border: statusFilter === "production" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "production" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "production" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Production
          </Button>
          <Button
            variant={statusFilter === "technical" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("technical")}
            startIcon={<TechnicalIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "technical" ? "#003375" : "white",
              color: statusFilter === "technical" ? "white" : "#374151",
              border: statusFilter === "technical" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "technical" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "technical" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Technical
          </Button>
          <Button
            variant={statusFilter === "cancelled" ? "contained" : "outlined"}
            disableRipple
            onClick={() => handleStatusFilter("cancelled")}
            startIcon={<CancelledIcon />}
            sx={{
              mx: 1,
              textTransform: "capitalize",
              fontSize: "0.875rem",
              boxShadow: "none",
              bgcolor: statusFilter === "cancelled" ? "#003375" : "white",
              color: statusFilter === "cancelled" ? "white" : "#374151",
              border: statusFilter === "cancelled" ? "none" : "none",
              ":hover": {
                backgroundColor:
                  statusFilter === "cancelled" ? "#cadcfc" : "#cadcfc",
                color: statusFilter === "cancelled" ? "white" : "#374151",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Cancelled
          </Button>
        {/* </Box> */}
      </Box>
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#003375" }}>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Order Id
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Product Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Price
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Payment Balance
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Status
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Operation
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <UserData users={paginatedData} />
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default OrderPageMui;
