import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/` + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/` + id, values)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Update a user</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter name"
                required
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Name:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Enter name"
                required
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
            </div>
            <Link to="/">
              <button className="btn btn-success">Update</button>
            </Link>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
