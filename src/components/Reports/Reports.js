


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';

function ReportGenerator() {
  const [activeTab, setActiveTab] = useState('salesReport');
  const navigate = useNavigate();

  const [salesReport, setSalesReport] = useState({
    dateRange: { startDate: '', endDate: '' },
    productCategory: '',
    store: '', // Added store field
  });

  const [paymentReport, setPaymentReport] = useState({
    dateRange: { startDate: '', endDate: '' },
    productCategory: '',
    store: '',
  });

  const [returnReport, setReturnReport] = useState({
    dateRange: { startDate: '', endDate: '' },
    productCategory: '',
    store: '',
  });

  const [customerFeedback, setCustomerFeedback] = useState({
    dateRange: { startDate: '', endDate: '' },
    productCategory: '',
    store: '',
  });

  const [generatedReport, setGeneratedReport] = useState(null);

  const handleInputChange = (reportType, field, value) => {
    if (reportType === 'salesReport') {
      setSalesReport({ ...salesReport, [field]: value });
    } else if (reportType === 'paymentReport') {
      setPaymentReport({ ...paymentReport, [field]: value });
    } else if (reportType === 'returnReport') {
      setReturnReport({ ...returnReport, [field]: value });
    } else if (reportType === 'customerFeedback') {
      setCustomerFeedback({ ...customerFeedback, [field]: value });
    }
  };

  const handleSubmit = (reportType) => {
    if (reportType === 'salesReport') {
      setGeneratedReport({ reportType: 'salesReport', data: salesReport });
    } else if (reportType === 'paymentReport') {
      setGeneratedReport({ reportType: 'paymentReport', data: paymentReport });
    } else if (reportType === 'returnReport') {
      setGeneratedReport({ reportType: 'returnReport', data: returnReport });
    } else if (reportType === 'customerFeedback') {
      setGeneratedReport({ reportType: 'customerFeedback', data: customerFeedback });
    }
  };

  const exportToExcel = (reportType, data) => {
    const dataArray = Array.isArray(data) ? data : [data];
    const ws = XLSX.utils.json_to_sheet(dataArray);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${reportType} Report`);
    XLSX.writeFile(wb, `${reportType}_report.xlsx`);
  };

  const exportToPDF = (reportType, data) => {
    const dataArray = Array.isArray(data) ? data : [data];
    const doc = new jsPDF();
    doc.setFontSize(12);

    doc.text(`${reportType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Report`, 10, 10);

    let yOffset = 20;
    dataArray.forEach((report, index) => {
      if (yOffset > 270) { // Check if page is full
        doc.addPage();
        yOffset = 10;
      }
      doc.text(`${index + 1}. ${JSON.stringify(report)}`, 10, yOffset);
      yOffset += 10;
    });

    doc.save(`${reportType}_report.pdf`);
  };

  const renderTable = (data) => {
    return (
      <table className="min-w-full bg-white border border-gray-200 rounded-md mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">Field</th>
            <th className="border px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Start Date</td>
            <td className="border px-4 py-2">{data.dateRange.startDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">End Date</td>
            <td className="border px-4 py-2">{data.dateRange.endDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product Category</td>
            <td className="border px-4 py-2">{data.productCategory}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Store</td>
            <td className="border px-4 py-2">{data.store}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-auto p-6 bg-white shadow-lg rounded-lg mt-10 mx-10 mb-10">
      <h2 className="text-2xl font-bold mb-4">Report Generator</h2>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-6">
  <button
    onClick={() => setActiveTab('salesReport')}
    className={`px-4 py-2 rounded-md ${activeTab === 'salesReport' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
  >
    Sales Report
  </button>
  <button
    onClick={() => setActiveTab('paymentReport')}
    className={`px-4 py-2 rounded-md ${activeTab === 'paymentReport' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
  >
    Payment Report
  </button>
  <button
    onClick={() => setActiveTab('returnReport')}
    className={`px-4 py-2 rounded-md ${activeTab === 'returnReport' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
  >
    Return Report
  </button>
  <button
    onClick={() => setActiveTab('customerFeedback')}
    className={`px-4 py-2 rounded-md ${activeTab === 'customerFeedback' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
  >
    Customer Feedback
  </button>
</div>


      {activeTab === 'salesReport' && (
        <>
  <div className="mb-8 md:ml-40">
  <h3 className="text-xl font-semibold mb-4">Sales Report</h3>
  <div className="grid grid-cols-1 gap-6">
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.startDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, startDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="block text-xs font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.endDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, endDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-28 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Product Category</label>
        <select
          value={paymentReport.productCategory}
          onChange={(e) => handleInputChange('paymentReport', 'productCategory', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Category</option>
          {['Kitchen', 'Wardrobe', 'Both'].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:gap-44 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Store</label>
        <select
          value={paymentReport.store}
          onChange={(e) => handleInputChange('paymentReport', 'store', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Store</option>
          {['HSR layout Imly store', 'JP nagar Imly store ', 'Jayanagar Imly store '].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>


          <div className="flex space-x-4">
            <button
              onClick={() => handleSubmit('salesReport')}
              className="bg-custom-blue text-white px-4 py-2 rounded-md"
            >
              Generate Report
            </button>
            {generatedReport && generatedReport.reportType === 'salesReport' && (
              <>
                <button
                  onClick={() => exportToExcel('salesReport', generatedReport.data)}
                  className="bg-custom-blue text-white px-4 py-2 rounded-md"
                >
                  Export to Excel
                </button>
                <button
                  onClick={() => exportToPDF('salesReport', generatedReport.data)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Export to PDF
                </button>
              </>
            )}
          </div>

          {generatedReport && generatedReport.reportType === 'salesReport' && renderTable(generatedReport.data)}
        </>
      )}

      {activeTab === 'paymentReport' && (
        <>
          <div className="mb-8 md:ml-40">
  <h3 className="text-xl font-semibold mb-4">Payment Report</h3>
  <div className="grid grid-cols-1 gap-6">
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.startDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, startDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="block text-xs font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.endDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, endDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-28 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Product Category</label>
        <select
          value={paymentReport.productCategory}
          onChange={(e) => handleInputChange('paymentReport', 'productCategory', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Category</option>
          {['Kitchen', 'Wardrobe', 'Both'].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:gap-44 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Store</label>
        <select
          value={paymentReport.store}
          onChange={(e) => handleInputChange('paymentReport', 'store', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Store</option>
          {['HSR layout Imly store', 'JP nagar Imly store ', 'Jayanagar Imly store '].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>

          <div className="flex space-x-4">
            <button
              onClick={() => handleSubmit('paymentReport')}
              className="bg-custom-blue text-white px-4 py-2 rounded-md"
            >
              Generate Report
            </button>
            {generatedReport && generatedReport.reportType === 'paymentReport' && (
              <>
                <button
                  onClick={() => exportToExcel('paymentReport', generatedReport.data)}
                  className="bg-custom-blue text-white px-4 py-2 rounded-md"
                >
                  Export to Excel
                </button>
                <button
                  onClick={() => exportToPDF('paymentReport', generatedReport.data)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Export to PDF
                </button>
              </>
            )}
          </div>

          {generatedReport && generatedReport.reportType === 'paymentReport' && renderTable(generatedReport.data)}
        </>
      )}

      {activeTab === 'returnReport' && (
        <>
          <div className="mb-8 md:ml-40">
  <h3 className="text-xl font-semibold mb-4">Return Report</h3>
  <div className="grid grid-cols-1 gap-6">
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.startDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, startDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="block text-xs font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.endDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, endDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-28 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Product Category</label>
        <select
          value={paymentReport.productCategory}
          onChange={(e) => handleInputChange('paymentReport', 'productCategory', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Category</option>
          {['Kitchen', 'Wardrobe', 'Both'].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:gap-44 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Store</label>
        <select
          value={paymentReport.store}
          onChange={(e) => handleInputChange('paymentReport', 'store', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Store</option>
          {['HSR layout Imly store', 'JP nagar Imly store ', 'Jayanagar Imly store '].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>


          <div className="flex space-x-4">
            <button
              onClick={() => handleSubmit('returnReport')}
              className="bg-custom-blue text-white px-4 py-2 rounded-md"
            >
              Generate Report
            </button>
            {generatedReport && generatedReport.reportType === 'returnReport' && (
              <>
                <button
                  onClick={() => exportToExcel('returnReport', generatedReport.data)}
                  className="bg-custom-blue text-white px-4 py-2 rounded-md"
                >
                  Export to Excel
                </button>
                <button
                  onClick={() => exportToPDF('returnReport', generatedReport.data)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Export to PDF
                </button>
              </>
            )}
          </div>

          {generatedReport && generatedReport.reportType === 'returnReport' && renderTable(generatedReport.data)}
        </>
      )}

      {activeTab === 'customerFeedback' && (
        <>
          <div className="mb-8 md:ml-40">
  <h3 className="text-xl font-semibold mb-4">Customer Feedback</h3>
  <div className="grid grid-cols-1 gap-6">
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.startDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, startDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-40 gap-y-4">
        <label className="block text-xs font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={paymentReport.dateRange.endDate}
          onChange={(e) => handleInputChange('paymentReport', 'dateRange', { ...paymentReport.dateRange, endDate: e.target.value })}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-28 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Product Category</label>
        <select
          value={paymentReport.productCategory}
          onChange={(e) => handleInputChange('paymentReport', 'productCategory', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Category</option>
          {['Kitchen', 'Wardrobe', 'Both'].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:gap-44 gap-y-4">
        <label className="mt-2 text-xs font-medium text-gray-700">Store</label>
        <select
          value={paymentReport.store}
          onChange={(e) => handleInputChange('paymentReport', 'store', e.target.value)}
          className="mt-1 p-1 w-full md:w-1/3 border rounded-md"
        >
          <option value="">Select Store</option>
          {['HSR layout Imly store', 'JP nagar Imly store ', 'Jayanagar Imly store '].map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>


          <div className="flex space-x-4">
            <button
              onClick={() => handleSubmit('customerFeedback')}
              className="bg-custom-blue text-white px-4 py-2 rounded-md"
            >
              Generate Report
            </button>
            {generatedReport && generatedReport.reportType === 'customerFeedback' && (
              <>
                <button
                  onClick={() => exportToExcel('customerFeedback', generatedReport.data)}
                  className="bg-custom-blue text-white px-4 py-2 rounded-md"
                >
                  Export to Excel
                </button>
                <button
                  onClick={() => exportToPDF('customerFeedback', generatedReport.data)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Export to PDF
                </button>
              </>
            )}
          </div>

          {generatedReport && generatedReport.reportType === 'customerFeedback' && renderTable(generatedReport.data)}
        </>
      )}
    </div>
  );
}

export default ReportGenerator;
