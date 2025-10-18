import React from 'react';
import { TABLE_CONFIG } from '../data';
import { formatDate } from '../utils/dateUtils';
import { ProcessedDrug } from '../data';

interface DrugTableProps {
  data: ProcessedDrug[];
  onCompanyClick: (company: string) => void;
}

const DrugTable: React.FC<DrugTableProps> = ({ data, onCompanyClick }) => {
  // Render cell content
  const renderCell = (item: ProcessedDrug, columnKey: keyof ProcessedDrug) => {
    switch (columnKey) {
      case 'launchDate':
        return formatDate(item.launchDate);
      case 'company':
        return (
          <button
            onClick={() => onCompanyClick(item.company)}
            className="text-blue-600 hover:text-blue-800 hover:underline transition duration-150 text-left"
          >
            {item.company}
          </button>
        );
      default:
        return item[columnKey];
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-2xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 sticky top-0">
          <tr>
            {TABLE_CONFIG.columns.map(column => (
              <th
                key={column.id}
                className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.uniqueId} className="hover:bg-gray-50 transition duration-100">
                {TABLE_CONFIG.columns.map(column => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {renderCell(item, column.key)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={TABLE_CONFIG.columns.length} className="px-6 py-10 text-center text-gray-500 text-lg font-medium">
                No drugs match the current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DrugTable;