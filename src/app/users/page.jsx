"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./users.module.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://photographerz.onrender.com/api/users?page=${page}&photographer=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data);
        setTotalPages(data.meta.pageCount);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handlePagination = (direction) => {
    if (direction === "prev" && page > 1) {
      setPage((prevPage) => prevPage - 1);
    } else if (direction === "next") {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Photographer..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={classes.users}>
        {loading && <Loading />}
        {users.map((user) => (
          <div key={user._id} className={classes.user}>
            <div className={classes.avatar}>
              <Image src={user.avatar} alt="avatar" fill />
            </div>
            <div className={classes.username}>@{user.username}</div>
            <div className={classes.info}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>

            <div className={classes.email}>{user.email}</div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(1)}>first page</button>
        <button onClick={() => handlePagination("prev")} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePagination("next")}
          disabled={page === totalPages}
        >
          Next
        </button>
        <button onClick={() => setPage(totalPages)}>last page</button>
      </div>
    </div>
  );
}

const Loading = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {items?.map(() => (
        <div key={Math.random()} className={`${classes.user}, pulse`}>
          <div
            className={classes.avatar}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#fff2",
            }}
          ></div>

          <div
            className={classes.username}
            style={{ width: "150px", height: "20px", backgroundColor: "#fff2" }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "20px",
              backgroundColor: "#fff2",
              margin: "0 auto",
              borderRadius: "1rem",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};
