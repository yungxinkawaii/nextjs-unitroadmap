import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1 style={{ margin: "20px 10px" }}>
          <Link href="/posts/first-post">👷Engineering</Link>
        </h1>
      </div>
      <div>
        <h1 style={{ margin: "20px 10px" }}>
          <Link href="/posts/first-post">💻Computer Science</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
