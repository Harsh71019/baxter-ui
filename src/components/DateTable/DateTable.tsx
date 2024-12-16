export interface Patient {
  name: string;
  dob: string;
  physician: string;
  deviceType: string;
  status: 'active' | 'inactive';
}

export interface DailyRecord {
  date: string;
  status: 'missing' | 'completed' | 'flagged' | 'not-required';
}

import React from 'react';
import Pagination from './Pagination';

export interface DateTableProps {
  startDate: string;
  endDate: string;
  patients: Patient[];
  records: Record<string, DailyRecord[]>;
  currentPage: number;
  recordsPerPage: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
  onRecordsPerPageChange: (recordsPerPage: number) => void;
  onViewPhotos: (patientId: string) => void;
  onViewDetails: (patientId: string) => void;
}

const DateTable: React.FC<DateTableProps> = ({
  startDate,
  endDate,
  patients,
  records,
  currentPage,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
  onViewPhotos,
  onViewDetails,
  totalRecords,
}) => {
  // Generate date range for column headers
  const getDates = (start: string, end: string) => {
    const dates = [];
    const current = new Date(start);
    const endDate = new Date(end);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const dateRange = getDates(startDate, endDate);

  // Status icon components
  const StatusIcon = ({ status }: { status: DailyRecord['status'] }) => {
    switch (status) {
      case 'completed':
        return <div className="h-6 w-6 rounded-full bg-green-500" />;
      case 'missing':
        return (
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="red" />
            </svg>
          </div>
        );
      case 'flagged':
        return (
          <div className="flex items-center">
            <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24">
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
            </svg>
          </div>
        );
      default:
        return <div className="h-6 w-6 border-2 border-gray-300" />;
    }
  };

  return (
    <div className="flex flex-col">
      <Pagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        onPageChange={onPageChange}
        onRecordsPerPageChange={onRecordsPerPageChange}
      />
      <div className="font-arial overflow-x-auto">
        <table className="border-collapse">
          <thead className="bg-[#e0e9f2]">
            <tr className="h-[40px] bg-[#e0e9f2]">
              <th className="w-[250px] border border-gray-400 bg-[#e0e9f2] p-0 pl-4 text-left text-xs">
                <div>Patient</div>
              </th>
              {dateRange.map(date => (
                <th
                  key={date.toISOString()}
                  className="w-[80px] border border-gray-400 bg-[#e0e9f2] p-0"
                >
                  <div className="flex flex-col justify-center p-0">
                    <div className="p-0 text-xs">
                      {date.toLocaleDateString('en-US', { weekday: 'long' })}
                    </div>
                    <div className="p-0 text-xs font-normal">{date.getDate()}</div>
                  </div>
                </th>
              ))}
              <th className="w-[150px] border border-gray-400 bg-[#e0e9f2] p-0 text-xs">
                <div>Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr className="h-[91px]" key={patient.name}>
                <td className="border px-4 py-2">
                  <div className="flex flex-col">
                    <div className="font-bold">{patient.name}</div>
                    <div className="text-sm text-gray-600">{patient.dob}</div>
                    <div className="text-sm">Physician: {patient.physician}</div>
                    <div className="text-sm">{patient.deviceType}</div>
                  </div>
                </td>
                {dateRange.map(date => (
                  <td key={date.toISOString()} className="item-center border px-4 py-2 text-center">
                    <div className="flex items-center justify-center">
                      <StatusIcon
                        status={
                          records[patient.name]?.find(
                            r => new Date(r.date).toDateString() === date.toDateString()
                          )?.status || 'not-required'
                        }
                      />
                    </div>
                  </td>
                ))}
                <td className="border px-4 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onViewPhotos(patient.name)}
                      className="rounded bg-blue-500 p-2 text-white"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => onViewDetails(patient.name)}
                      className="rounded bg-gray-200 p-2"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-7h18v5H3V3z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        onPageChange={onPageChange}
        onRecordsPerPageChange={onRecordsPerPageChange}
      />
    </div>
  );
};

export default DateTable;
