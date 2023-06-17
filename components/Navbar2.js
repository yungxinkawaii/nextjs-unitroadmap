import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px",
        display: "flex",
        justifyContent: "left",
        zIndex: 10, // Adjust the z-index value as needed
      }}
    >
      <div>
        <h1 style={{ margin: "20px 10px" }}>
          <Link href="/">🏠 home</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar2;