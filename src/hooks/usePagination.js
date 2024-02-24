import { useSearchParams } from 'react-router-dom';

import { getDeviceType } from 'helpers/getDeviceType';
import { CountPagesOfPagination } from 'constants/paginationLimits';

export const usePagination = (pageLimits) => {
  const [params, setParams] = useSearchParams();
  const page = params.get('page') ?? 1;
  const per_page = params.get('per_page') ?? pageLimits[getDeviceType()];
  const countPagesOfPagination = CountPagesOfPagination[getDeviceType()];

  const setPage = (value) => {
    params.set('page', value);
    setParams(params);
  };

  const setPerPage = (value) => {
    params.set('per_page', value);
    setParams(params);
  };

  return {
    page: Number(page),
    per_page: Number(per_page),
    countPagesOfPagination,
    setPage,
    setPerPage,
  };
};
