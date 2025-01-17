import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelite = (id) => {
    const conform = window.confirm("Are you sure you want to delete");
    if (conform) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-item-center bg-light vh-100">
      <div className="w-75 rounded bg-white border shadow p-4 m-5">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/read/${d.id}`}>
                    <button className="btn btn-sm btn-info me-2">Read</button>
                  </Link>
                  <Link to={`/update/${d.id}`}>
                    <button className="btn btn-sm btn-primary me-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelite(d.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
