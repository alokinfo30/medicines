import React from 'react';

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
  uniqueCompanies: string[];
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCompany,
  setSelectedCompany,
  uniqueCompanies
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex-1">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search Name/Code</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search..."
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 transition"
        />
      </div>
      <div className="w-full md:w-64">
        <label htmlFor="company-filter" className="block text-sm font-medium text-gray-700">Filter by Company</label>
        <select
          id="company-filter"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 transition bg-white"
        >
          {uniqueCompanies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button
          onClick={() => { setSearchTerm(''); setSelectedCompany('All'); }}
          className="w-full md:w-auto px-4 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition shadow-sm"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;