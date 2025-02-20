type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", pageNumber.toString());

  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
  const prevPage = currentPage - 1 < 1 ? pageCount : currentPage - 1;
  const nextPage = currentPage + 1 > pageCount ? 1 : currentPage + 1;

  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });

  return { prevUrl, nextUrl };
};
