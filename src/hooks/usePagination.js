import { useSearchParams } from 'react-router-dom';

import { getDeviceType } from 'helpers/getDeviceType';
import { CountPagesOfPagination } from 'constants/paginationLimits';

export const usePagination = (pageLimits) => {
  const [params, setParams] = useSearchParams();
  const page = params.get('page') ?? 1;
  const limit = params.get('limit') ?? pageLimits[getDeviceType()];
  const countPagesOfPagination = CountPagesOfPagination[getDeviceType()];

  const setPage = (value) => {
    params.set('page', value);
    setParams(params);
  };

  const setLimit = (value) => {
    params.set('limit', value);
    setParams(params);
  };

  return {
    page: Number(page),
    limit: Number(limit),
    countPagesOfPagination,
    setPage,
    setLimit,
  };
};
