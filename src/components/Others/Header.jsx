const Header = ({ data }) => {
const loggedOutUser = () => {
 localStorage.removeItem("loggedInUser");
  window.location.reload();
};

  return (
    <div>
      <header className="w-full h-auto">
        <nav className="flex items-center justify-between w-full h-auto">
          <div className="logo">
            <h2 className="text-3xl font-medium text-white">
              Hello <br />
              <span className="text-4xl font-semibold text-white">{data?.firstName || "Admin"} 👋</span>
            </h2>
          </div>
          <button onClick={loggedOutUser} className="bg-red-600 text-white font-medium text-sm rounded-md py-2 px-4">
            Log Out
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
