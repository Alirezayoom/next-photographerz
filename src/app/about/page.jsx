import Link from "next/link";

export default function About() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style={{ margin: "0 auto" }}
        >
          <path
            fill="currentColor"
            d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm2 1v12h16V7zm10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10M4 2h6v2H4z"
          />
        </svg>
        <div>
          <p style={{ marginBottom: "8px" }}>
            Design & Developed by{" "}
            <Link
              href="https://github.com/alirezayoom"
              target="_blank"
              rel="noreferrer"
            >
              Alireza
            </Link>
          </p>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
}
