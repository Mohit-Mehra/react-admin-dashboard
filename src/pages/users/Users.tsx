import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable.tsx";
import "./users.scss";
import { userRows } from "../../data.ts";
import { useState } from "react";
import Add from "../../components/add/Add.tsx";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 90,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 90,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 180,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 140,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 90,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 90,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
