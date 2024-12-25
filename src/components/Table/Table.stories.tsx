import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { testCols } from './data';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const columns = [
  {
    header: 'Patient Information',
    accessor: 'patientInfo',
    className: 'w-1/3',
    render: (value, row) => (
      <div>
        <div>{row.name}</div>
        <div>{row.dob}</div>
        <div>Clinic Patient ID: {row.clinicId}</div>
        <div>Baxter Patient ID: {row.baxterId}</div>
      </div>
    ),
  },
  {
    header: 'Attending Physician',
    accessor: 'physician',
    className: 'w-1/4',
  },
  {
    header: 'Status',
    accessor: 'status',
    className: 'w-1/6',
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'w-1/6',
    render: (value, row) => (
      <button className='text-blue-600 hover:underline'>Edit</button>
    ),
  },
];


export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: columns,
    data:testCols,
    useServerSidePagination: false
    
  },
};

