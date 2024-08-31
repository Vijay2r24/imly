
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { tableCellClasses } from '@mui/material/TableCell';

// // Define StyledTableCell and StyledTableRow
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375', // Dark blue color
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(even)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function UserRoleForm() {
//   const [role, setRole] = useState('');
//   const [status, setStatus] = useState('active');
//   const [roleData, setRoleData] = useState([
//     { id: '1', name: 'Admin', status: 'Active' },
//     { id: '2', name: 'Store User', status: 'Inactive' },
//     { id: '3', name: 'Finance', status: 'Active' },
//     { id: '4', name: 'Production', status: 'Inactive' },
//     { id: '5', name: 'Technical', status: 'Active' },
//   ]);

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (role && status) {
//       const roleIdMap = {
//         admin: '1',
//         'store user': '2',
//         finance: '3',
//         production: '4',
//         technical: '5',
//       };

//       const newRoleId = roleIdMap[role.toLowerCase()] || 'Unknown';
//       const newRoleName = role;
//       const newStatus = status.charAt(0).toUpperCase() + status.slice(1);

//       setRoleData([
//         ...roleData,
//         {
//           id: newRoleId,
//           name: newRoleName,
//           status: newStatus,
//         },
//       ]);

//       setRole('');
//       setStatus('active');
//     } else {
//       alert('Please fill out all fields before saving.');
//     }
//   };

//   const handleCancel = () => {
//     setRole('');
//     setStatus('active');
//   };

//   return (
//     <div className="max-w-5xl mx-auto h-auto">
//       {/* Form Section */}
//       <div className="mt-6 bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4 px-2">User Role</h2>
//             <select
//               id="role"
//               name="role"
//               value={role}
//               onChange={handleRoleChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             >
//               <option value="" disabled>Select a role</option>
//               <option value="admin">Admin</option>
//               <option value="store user">Store User</option>
//               <option value="finance">Finance</option>
//               <option value="production">Production</option>
//               <option value="technical">Technical</option>
//             </select>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700">
//               Status
//             </label>
//             <div className="flex items-center mt-2">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="status"
//                   value="active"
//                   checked={status === 'active'}
//                   onChange={handleStatusChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Active</span>
//               </label>
//               <label className="inline-flex items-center ml-6">
//                 <input
//                   type="radio"
//                   name="status"
//                   value="inactive"
//                   checked={status === 'inactive'}
//                   onChange={handleStatusChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Inactive</span>
//               </label>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-end gap-4">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-3 px-8 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-sm font-medium text-white shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Table Section */}
//       <div className="mt-4 bg-white p-8 rounded-lg shadow-md">
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Role ID</StyledTableCell>
//                 <StyledTableCell>Role Name</StyledTableCell>
//                 <StyledTableCell>Status</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {roleData.map((role, index) => (
//                 <StyledTableRow key={index}>
//                   <StyledTableCell>{role.id}</StyledTableCell>
//                   <StyledTableCell>{role.name}</StyledTableCell>
//                   <StyledTableCell>{role.status}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }

// export default UserRoleForm;



import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import * as XLSX from "xlsx";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaTable, FaPlus } from 'react-icons/fa';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375', // Dark blue color
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;
  const theme = useTheme();

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
function UserRoleForm() {
  const [formData, setFormData] = useState({ id: '', name: '', status: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [roleData, setRoleData] = useState([
    { id: '1', name: 'Admin', status: 'Active' },
    { id: '2', name: 'Store User', status: 'Inactive' },
    { id: '3', name: 'Finance', status: 'Active' },
    { id: '4', name: 'Production', status: 'Inactive' },
    { id: '5', name: 'Technical', status: 'Active' },
  ]);

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle cancel button click
  const handleCancel = () => {
    setFormData({ id: '', name: '', status: 'Active' });
    setEditingIndex(null);
    setIsFormVisible(false);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Edit existing role
      const updatedRoles = [...roleData];
      updatedRoles[editingIndex] = { ...formData, id: updatedRoles[editingIndex].id };
      setRoleData(updatedRoles);
    } else {
      // Add new role
      setRoleData([...roleData, { ...formData, id: (roleData.length + 1).toString() }]);
    }
    handleCancel();
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const realIndex = page * rowsPerPage + index;
    const updatedRoles = roleData.filter((_, i) => i !== realIndex);
    setRoleData(updatedRoles);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setFormData({
      ...formData,
      status: e.target.value,
    });
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Export to Excel
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportUsersData = () => {
    exportToExcel(roleData, 'Roles');
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setFormData(roleData[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, roleData.length - page * rowsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      {!isFormVisible ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
  <h2 className="text-xl font-semibold mb-2 sm:mb-0">Roles</h2>

  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 w-full sm:w-auto">
    <div className="relative flex w-full sm:w-[20rem]">
      <label htmlFor="searchName" className="sr-only">Search</label>
      <input
        id="searchName"
        type="text"
        placeholder="Search by Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <IoIosSearch />
      </div>
    </div>
  </div>

  <ul className="flex flex-col sm:flex-row gap-2 list-none w-full sm:w-[20rem]">
    <li className="w-full">
      <button
        type="button"
        className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
        onClick={() => setIsFormVisible(true)}
      >
        <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
        Add New Role
      </button>
    </li>
    <li className="w-full">
      <button
        type="button"
        onClick={handleExportUsersData}
        className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
      >
        <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
        Export
      </button>
    </li>
  </ul>
</div>


          <br />
          <TableContainer component={Paper}>
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {roleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell>{row.id}</StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>
                        <span
                          className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
                            row.status === "Active"
                              ? "bg-green-100 text-green-800 shadow-md"
                              : "bg-pink-100 text-pink-800 shadow-md"
                          }`}
                        >
                          {row.status}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell>
  <button
    type="button"
    onClick={() => handleEditClick(page * rowsPerPage + index)}
    className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 w-full sm:w-auto"
  >
    <AiOutlineEdit aria-hidden="true" />
    Edit
  </button>
  <button
    type="button"
    onClick={() => handleDeleteClick(index)}
    className="inline-flex items-center gap-x-1 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 mt-2 sm:mt-0 sm:ml-4 w-full sm:w-auto"
  >
    <MdOutlineDeleteOutline aria-hidden="true" />
    Delete
  </button>
</StyledTableCell>

                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={roleData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-[60%] sm:ml-16 lg:ml-72">
          <h2 className="text-xl font-semibold">{editingIndex !== null ? "Edit Role" : "Add New Role"}</h2>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">
                Role Name
              </label>
              <input
                id="roleName"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <div className="mt-1 flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={formData.status === "Active"}
                    onChange={handleStatusChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={formData.status === "Inactive"}
                    onChange={handleStatusChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
           
            <div className="mt-6 flex justify-end gap-4">
     <button
      type="submit"
      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Save
    </button>
    <button
                type="button"
                onClick={handleCancel}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
              >
                Cancel
              </button>
   </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserRoleForm;
