import type { Meta, StoryObj } from '@storybook/react';
import DateTable, { Patient, DailyRecord, DateTableProps } from './DateTable';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

interface DateTableWrapperProps
  extends Omit<
    DateTableProps,
    'currentPage' | 'recordsPerPage' | 'totalRecords' | 'onPageChange' | 'onRecordsPerPageChange'
  > {
  patients: Patient[];
  records: Record<string, DailyRecord[]>;
  startDate: string;
  endDate: string;
  onViewPhotos: (patientId: string) => void;
  onViewDetails: (patientId: string) => void;
}

const DateTableWithPagination: React.FC<DateTableWrapperProps> = ({
  patients: allPatients,
  records,
  startDate,
  endDate,
  onViewPhotos,
  onViewDetails,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const paginatedPatients = allPatients.slice(startIndex, endIndex);

  return (
    <DateTable
      startDate={startDate}
      endDate={endDate}
      patients={paginatedPatients}
      records={records}
      currentPage={currentPage}
      recordsPerPage={recordsPerPage}
      totalRecords={allPatients.length}
      onPageChange={setCurrentPage}
      onRecordsPerPageChange={newSize => {
        setRecordsPerPage(newSize);
        setCurrentPage(1);
      }}
      onViewPhotos={onViewPhotos}
      onViewDetails={onViewDetails}
      {...props}
    />
  );
};

const meta: Meta<typeof DateTable> = {
  title: 'Components/DateTable',
  component: DateTableWithPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: 'date',
      description: 'Start date for the table range',
    },
    endDate: {
      control: 'date',
      description: 'End date for the table range',
    },
    patients: {
      control: 'object',
      description: 'Array of patient data',
    },
    records: {
      control: 'object',
      description: 'Record of patient daily statuses',
    },
    onViewPhotos: { action: 'viewPhotos clicked' },
    onViewDetails: { action: 'viewDetails clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof DateTable>;

const generateMockRecords = (
  patients: Patient[],
  startDate: string,
  endDate: string
): Record<string, DailyRecord[]> => {
  const records: Record<string, DailyRecord[]> = {};
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  patients.forEach(patient => {
    records[patient.name] = Array(days)
      .fill(null)
      .map((_, index): DailyRecord => {
        const date = new Date(start);
        date.setDate(date.getDate() + index);
        return {
          date: date.toISOString().split('T')[0],
          status: ['missing', 'completed', 'not-required', 'flagged'][
            Math.floor(Math.random() * 4)
          ] as DailyRecord['status'],
        };
      });
  });

  return records;
};

const generateMockPatients = (count: number): Patient[] => {
  return Array(count)
    .fill(null)
    .map(
      (_, index): Patient => ({
        name: `Patient ${index + 1}`,
        dob: `${1990 + (index % 30)}-${(index % 12) + 1}-${(index % 28) + 1}`,
        physician: `Dr. ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][index % 5]}`,
        deviceType: ['CAPD Mobile', 'Homechoice Claria'][index % 2],
        status: index % 3 === 0 ? 'inactive' : 'active',
      })
    );
};

const allMockPatients = generateMockPatients(100);
const mockRecords = generateMockRecords(allMockPatients, '2024-12-07', '2024-12-13');

export const Default: Story = {
  args: {
    startDate: '2024-12-07',
    endDate: '2024-12-13',
    patients: allMockPatients,
    records: mockRecords,
    onViewPhotos: action('viewPhotos clicked'),
    onViewDetails: action('viewDetails clicked'),
  },
};

export const EmptyTable: Story = {
  args: {
    startDate: '2024-12-07',
    endDate: '2024-12-13',
    patients: [],
    records: {},
    onViewPhotos: action('viewPhotos clicked'),
    onViewDetails: action('viewDetails clicked'),
  },
};

export const SinglePage: Story = {
  args: {
    ...Default.args,
    patients: allMockPatients.slice(0, 5),
  },
};

export const MultiplePages: Story = {
  args: {
    ...Default.args,
  },
};

export const LastPage: Story = {
  args: {
    ...Default.args,
  },
};

export const CustomPageSize: Story = {
  args: {
    ...Default.args,
  },
};
