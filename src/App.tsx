import React, { useState, useMemo } from 'react';
import { RAW_DATA, ProcessedDrug } from './data';
import useDebounce from './hooks/useDebounce';
import Filters from './components/Filters';
import DrugTable from './components/DrugTable';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('All');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Data preprocessing
  const processedData = useMemo((): ProcessedDrug[] => 
    RAW_DATA.map((item, index) => ({
      ...item,
      uniqueId: index + 1,
      name: `${item.genericName} (${item.brandName})`
    }))
  , []);

  const uniqueCompanies = useMemo(() => {
    const companies = new Set(processedData.map(d => d.company));
    return ['All', ...Array.from(companies).sort()];
  }, [processedData]);

  const filteredAndSortedData = useMemo((): ProcessedDrug[] => {
    let currentData = processedData;

    if (selectedCompany !== 'All') {
      currentData = currentData.filter(d => d.company === selectedCompany);
    }

    if (debouncedSearchTerm) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      currentData = currentData.filter(d =>
        d.name.toLowerCase().includes(searchLower) ||
        d.code.toLowerCase().includes(searchLower)
      );
    }

    const sortedData = [...currentData].sort((a, b) => {
      const dateA = new Date(a.launchDate);
      const dateB = new Date(b.launchDate);
      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      return 0;
    });
    return sortedData;
  }, [processedData, selectedCompany, debouncedSearchTerm]);

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Drug Information Dashboard</h1>
        <p className="text-gray-500 mb-8">
          Displaying <span className="font-semibold text-blue-600">{filteredAndSortedData.length}</span> drugs, sorted by launch date (latest first).
        </p>

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          uniqueCompanies={uniqueCompanies}
        />

        <DrugTable data={filteredAndSortedData} onCompanyClick={setSelectedCompany} />
      </div>
    </div>
  );
};

export default App;