import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const db = getFirestore();
const colref = collection(db, "users");

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("email");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const unsubscribe = onSnapshot(colref, (snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
      setFilteredUsers(usersData);
    });

    console.log("run");

    return () => unsubscribe();
  }, [db]);

  const addUser = async (userData) => {
    try {
      await addDoc(colref, userData);
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(colref, userId));
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const toggleUserStatus = async (userId, status) => {
    try {
      await updateDoc(doc(colref, userId), {
        status: status === "active" ? "inactive" : "active",
      });
    } catch (error) {
      alert("Error updating status");
      console.log("Error updating status");
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterUsers(e.target.value);
  };

  const filterUsers = (filterText) => {
    const filtered = users.filter(
      (user) =>
        user.email.toLowerCase().includes(filterText.toLowerCase()) ||
        user.status.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortBy(value);
    sortUsers(filteredUsers, value, sortOrder);
  };

  const handleSortOrderChange = (event) => {
    const { value } = event.target;
    setSortOrder(value);
    sortUsers(filteredUsers, sortBy, value);
  };

  const sortUsers = (usersToSort, sortBy, sortOrder) => {
    const sorted = [...usersToSort].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredUsers(sorted);
  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by username or status"
        className="form-control mb-3"
      />
      <div className="d-flex mb-3">
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="form-select me-2"
        >
          <option value="email">Username</option>
          <option value="addeddate">Added Date</option>
          <option value="status">Status</option>
        </select>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="form-select"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Date Added</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) =>
            user.status === "active" ? (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  {user.addeddate
                    ? user.addeddate.toDate().toLocaleString()
                    : ""}
                </td>
                <td>{user.status}</td>
                <td>
                  <button
                    onClick={() => toggleUserStatus(user.id, user.status)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    {user.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <Link to="/home" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}

export default UsersTable;
