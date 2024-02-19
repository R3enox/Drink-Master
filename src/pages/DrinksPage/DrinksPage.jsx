import { useEffect, useState } from 'react';
import { Drinks } from '../../components/Drinks/Drinks';
import { DrinksSearch } from '../../components/Drinks/DrinksSearch';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

export default function DrinksPage() {
  const [filters, setFilters] = useState('');

  const onFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <PageTitle title="Drinks" />
      <DrinksSearch onFilterChange={onFilterChange} />
      <Drinks filters={filters} />
    </div>
  );
}
