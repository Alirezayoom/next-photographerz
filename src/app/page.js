"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./photos.module.css";

export default function Photos() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://photographerz.onrender.com/api/photos?page=${page}&photo=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data.data);
        setTotalPages(data.meta.pageCount);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
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
          placeholder="Search Photo..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={classes.photos}>
        {loading && <Loading />}
        {images.map((photo) => (
          <div key={photo._id} className={classes.card}>
            <div className={classes.photo}>
              <Image src={photo.photo} alt="shot" fill />
            </div>

            <div className={classes.info}>
              <div className={classes.name}>{photo.name}</div>
              <div className={classes.ownerInfo}>
                <div>
                  <div className={classes.owner}>By: {photo.owner}</div>
                  <div className={classes.publishedAt}>
                    {new Date(photo.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
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
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {items?.map((item) => (
        <div key={item._id} className={`${classes.card}, pulse`}>
          <div
            className={classes.photo}
            style={{ backgroundColor: "#292929" }}
          ></div>

          <div
            className={classes.info}
            style={{ height: "90px", backgroundColor: "#333" }}
          >
            <div className={classes.name} />
            <div className={classes.ownerInfo}>
              <div>
                <div
                  className={classes.owner}
                  style={{
                    height: "1rem",
                    width: "200px",
                    backgroundColor: "#555",
                    borderRadius: "1rem",
                    marginBottom: "10px",
                  }}
                />
                <div
                  className={classes.owner}
                  style={{
                    height: "1rem",
                    width: "160px",
                    backgroundColor: "#555",
                    borderRadius: "1rem",
                    marginBottom: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
