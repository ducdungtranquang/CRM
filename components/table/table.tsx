import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã chính sách giá",
    width: 180,
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tên chính sách giá",
    width: 380,
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Đối tượng",
    dataIndex: "address",
    key: "1",
    width: 200,
  },
  {
    title: "Từ ngày",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Đến ngày",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Người tạo",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Ngày tạo",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Chức năng",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <button className="action_table">
        <img src="https://crm.timviec365.vn/assets/img/customer/3_cham.png" />
        Thao tác
      </button>
    ),
  },
];

const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const TableData: React.FC = () => (
  <div className="custom_table">
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={{ ...rowSelection }}
      bordered
      scroll={{ x: 1500, y: 300 }}
    />
  </div>
);

export default TableData;
