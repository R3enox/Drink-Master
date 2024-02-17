import { useState } from 'react';
import { Drinks } from '../../components/Drinks/Drinks';
import { DrinksSearch } from '../../components/Drinks/DrinksSearch';
import { PageTitle } from '../../components/PageTitle';

export default function DrinksPage() {
  const [filters, setFilters] = useState('');

  const onFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  return (
    <div>
      <PageTitle title="Drinks" />
      <br />
      <DrinksSearch onFilterChange={onFilterChange} />
      <br />
      <Drinks filters={filters} />
    </div>
  );
}
