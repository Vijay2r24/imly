
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as XLSX from 'xlsx';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaTable, FaPlus } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types'; // For prop types validation

import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

 
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
 
const initialPeople = [
  // {
  //   name: "Jane Smith",
  //   title: "Chennai",
  //   email: "jane.smith@example.com",
  //   role: "7702253548",
  //   gender: "Female",
  //   addressLine1: "123 Main St",
  //   addressLine2: "Apt 4B",
  //   city: "Chennai",
  //   state: "Tamil Nadu",
  //   country: "India",
  // },
  // {
  //   name: "Alice Johnson",
  //   title: "Hyderabad",
  //   email: "alice.johnson@example.com",
  //   role: "7702253549",
  //   gender: "Female",
  //   addressLine1: "456 Oak St",
  //   addressLine2: "Suite 12",
  //   city: "Hyderabad",
  //   state: "Telangana",
  //   country: "India",
  // },
  // {
  //   name: "Robert Brown",
  //   title: "Mumbai",
  //   email: "robert.brown@example.com",
  //   role: "7702253550",
  //   gender: "Male",
  //   addressLine1: "789 Pine St",
  //   addressLine2: "",
  //   city: "Mumbai",
  //   state: "Maharashtra",
  //   country: "India",
  // },
  // {
  //   name: "Michael Davis",
  //   title: "Delhi",
  //   email: "michael.davis@example.com",
  //   role: "7702253551",
  //   gender: "Male",
  //   addressLine1: "101 Maple St",
  //   addressLine2: "Apt 3C",
  //   city: "Delhi",
  //   state: "Delhi",
  //   country: "India",
  // },

  {
    name: "ImlyStudio-Jakkur",
    title: "Bengaluru",
    email: "jakkur@imlystudio.com",
    role: "7702253548",
    gender: "Female",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },
  {
    name: "ImlyStudio-InfantryRoad",
    title: "Bengaluru",
    email: "infantryroad@imlystudio.com",
    role: "7702253549",
    gender: "Female",
    addressLine1: "456 Oak St",
    addressLine2: "Suite 12",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },
  {
    name: "ImlyStudio-HSRLayout",
    title: "Bengaluru",
    email: "hsrlayout@imlystudio.com",
    role: "7702253550",
    gender: "Male",
    addressLine1: "789 Pine St",
    addressLine2: "",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },
  {
    name: "ImlyStudio-Indiranagar",
    title: "Bengaluru",
    email: "indiranagar@imlystudio.com",
    role: "7702253551",
    gender: "Male",
    addressLine1: "101 Maple St",
    addressLine2: "Apt 3C",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },

];

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

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
 
export default function User(props) {
  const [people, setPeople] = useState(initialPeople);
  const [formData, setFormData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
 
  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPeople = [...people];
      updatedPeople[editingIndex] = formData;
      setPeople(updatedPeople);
      setEditingIndex(null);
    } else {
      setPeople([...people, formData]);
    }
    setFormData(null);
    setIsFormVisible(false);
  };
 
  // Handle cancel button click
  const handleCancel = () => {
    setFormData(null);
    setEditingIndex(null);
    setIsFormVisible(false);
  };
 
  // Handle add user button click
  const handleAddUserClick = () => {
    setFormData({
      name: "",
      title: "",
      email: "",
      role: "",
      gender: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
    });
    setEditingIndex(null);
    setIsFormVisible(true);
  };
 
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
 
  const handleExportUsersData = () => {
    exportToExcel(people, 'Customers');
  };
 
  
 
 
  const [paginatedPeople, setPaginatedPeople] = useState([]);


  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    const realIndex = page * rowsPerPage + index;
    setFormData(people[realIndex]);
    setEditingIndex(realIndex);
    setIsFormVisible(true);
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const realIndex = page * rowsPerPage + index;
    const updatedPeople = people.filter((_, i) => i !== realIndex);
    setPeople(updatedPeople);

    // Adjust the page if necessary
    if (updatedPeople.length <= page * rowsPerPage && page > 0) {
      setPage(page - 1);
    }
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    setPaginatedPeople(
      people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [people, page, rowsPerPage]);
  


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [status, setStatus] = useState('');
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleRoleSelect = (role) => {
      setSelectedRole(role);
      setIsDropdownOpen(false);
    };
 
    const [formDataitems, setFormDataitems] = useState({
      storeName: [], 
    });
  
    const handleFormChangeitems = (e) => {
      const { name, options } = e.target;
      const selectedValues = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
    }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      {/* Conditional Rendering */}
      {!isFormVisible ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center">
  <h2 className="text-xl font-semibold mb-2 sm:mb-0">Stores</h2>
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 w-full sm:w-auto">
    <div className="relative flex w-full sm:w-[20rem]">
      <label htmlFor="searchName" className="sr-only">Search</label>
      <input
        id="searchName"
        type="text"
        placeholder="Search by Name"
        value={searchName}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <IoIosSearch />
      </div>
    </div>
  </div>

  <div className="w-full sm:w-[20rem] mt-4 sm:mt-0">
    <ul className="flex flex-col sm:flex-row gap-2 list-none">
      <li className="w-full">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full"
          onClick={handleAddUserClick}
        >
          <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
          Add Stores
        </button>
      </li>
      <li className="w-full">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 w-full"
          onClick={handleExportUsersData}
        >
          <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
          Export Stores
        </button>
      </li>
    </ul>
  </div>
</div>

 
          <div className="mt-4">
            <div className="flex items-center space-x-8">
             
            </div>
 
            <TableContainer component={Paper} className="mt-4">
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Location</StyledTableCell>
                    {/* <StyledTableCell>Gender</StyledTableCell> */}
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedPeople.map((person, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{person.name}</StyledTableCell>
                      <StyledTableCell>{person.email}</StyledTableCell>
                      <StyledTableCell>{person.role}</StyledTableCell>
                      {/* <StyledTableCell>{person.title}</StyledTableCell> */}
                      {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
                      <StyledTableCell>
                        {person.addressLine1}
                        {person.addressLine2 && `, ${person.addressLine2}`}
                        <br />
                        {person.city}, {person.state}, {person.zipCode}
                      </StyledTableCell>
                      <StyledTableCell className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-2">
  <button
    type="button"
    onClick={() => handleEditClick(index)}
    className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 w-full sm:w-auto"
  >
    <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
    Edit
  </button>
  <button
    type="button"
    onClick={() => handleDeleteClick(index)}
    className="inline-flex items-center gap-x-1 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 w-full sm:w-auto mt-2 sm:mt-0"
  >
    <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
    Delete
  </button>
</StyledTableCell>

                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={7} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={6}
                      count={people.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
       
             <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
              <div className="flex flex-col">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData?.name || ""}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-400 rounded-md"
                  required
                />
              </div>

               {/* Address Line 1 */}
               <div>
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                value={formData?.addressLine1 || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
              />
            </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData?.email || ""}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-400 rounded-md"
                  required
                />
              </div>

                {/* Address Line 2 */}
             <div>
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                value={formData?.addressLine2 || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
              />
            </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium">Phone:</label>
                <input
                  id="phone"
                  name="role"
                  type="text"
                  value={formData?.role || ""}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-400 rounded-md"
                  required
                />
              </div>
               {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData?.city || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
              />
            </div>

            <div>
  <label htmlFor="storeName" className="block text-sm font-medium">
    Stores
  </label>
  <select
    name="storeName"
    value={formData.storeName}
    onChange={handleFormChange}
    required
    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
  >
    <option value="">Select Store Name</option>
    <option
      value="ABC Mart"
      // className="bg-blue-100 text-blue-800 shadow-sm"
    >
      ABC Mart
    </option>
    <option
      value="XYZ Store"
      // className="bg-yellow-100 text-yellow-800 shadow-sm"
    >
      XYZ Store
    </option>
    <option
      value="MegaShop"
      // className="bg-red-100 text-red-800 shadow-sm"
    >
      MegaShop
    </option>
    <option
      value="SuperMart"
      // className="bg-purple-100 text-purple-800 shadow-sm"
    >
      SuperMart
    </option>
    <option
      value="ElectroWorld"
      // className="bg-green-100 text-green-800 shadow-sm"
    >
      ElectroWorld
    </option>
  </select>
</div>
 {/* <div>
      <label htmlFor="storeName" className="block text-sm font-medium">
        Stores
      </label>
      <select
        name="storeName"
        value={formDataitems.storeName} // Ensure this is an array
        onChange={handleFormChangeitems}
        required
        multiple // Allow multiple selections
        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
      >
        <option value="ABC Mart">ABC Mart</option>
        <option value="XYZ Store">XYZ Store</option>
        <option value="MegaShop">MegaShop</option>
        <option value="SuperMart">SuperMart</option>
        <option value="ElectroWorld">ElectroWorld</option>
      </select>
    </div> */}

             {/* State */}
             <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData?.state || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
              />
            </div>
            <div></div>
          
  <div>
    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
      Zip Code
    </label>
    <input
      type="text"
      name="zipCode"
      value={formData?.zipCode || ""}
      onChange={handleFormChange}
      required
      pattern="\d{5,6}"
      title="Zip Code should be 5 or 6 digits."
      className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
    />
  </div>


            </div>
            <div className="mt-6 flex justify-end gap-4">
    <button
      type="submit"
      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
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