import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
// import styles from './Table.module.scss';

interface Column {
  header: string;
  accessor: string;
  className?: string;
  render?: (value: any, row: any) => React.ReactNode;
}
export interface PaginationData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

interface TableData {
  page: number;
  totalPages: number;
  totalItems: number;
  data: any[];
}

export interface TableProps {
  columns: Column[];
  data: TableData;
  pageSize?: number;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
  useServerSidePagination?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  pageSize = 10,
  className = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
  useServerSidePagination = true,
}) => {
  const [paginatedData, setPaginatedData] = useState<TableData>(data);
  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 1,
    pageSize: pageSize,
    totalItems: 0,
  });

  const updatePagination = (page: number) => {
    if (useServerSidePagination) {
      setPagination({
        currentPage: page,
        totalPages: data.totalPages ? data.totalPages : 1,
        pageSize: pagination.pageSize,
        totalItems: data.totalItems ? data.totalItems : 1,
      });
      setPaginatedData(data)
    } else {
      setPagination({
        currentPage: page,
        totalPages: Math.ceil(data.data?.length / pageSize),
        pageSize: pagination.pageSize,
        totalItems: data.data?.length,
      });
      const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
        const endIndex = startIndex + pagination.pageSize;
      const pageData = data.data.slice(startIndex, endIndex);
      setPaginatedData({...data, data: pageData})
      console.log(data)
    }
  };
  const handlePageChange = (page: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: page,
    }));
  };

  useEffect(() => {
    updatePagination(pagination.currentPage);
  }, [pagination.currentPage, pagination.pageSize, useServerSidePagination]);
  return (
    <div className="w-full border border-black">
      <table className={`w-full border-collapse ${className}`}>
        <thead>
          <tr className={`bg-[#6e8bb4] text-white ${headerClassName}`}>
            {columns.map((column, index) => (
              <th key={index} className={`p-3 text-center text-xs ${column.className || ''}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData && paginatedData.data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-gray-200 text-xs ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 ${rowClassName} `}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={`p-3 ${cellClassName} ${column.className || ''}`}>
                  {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

Table.displayName = 'Table';
