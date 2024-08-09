const Header = () => {
  return (
    <div className="App-header ">
      <div>
        <img
          alt="logo"
          src="/Assets/i2c-inc-logo-1A55750693-seeklogo.com.png"
          height={33}
          width={55}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="transparent-button">About us</button>
        <button className="transparent-button">Suggestions</button>
        <button className="transparent-button">Careers</button>
        <button className="contactus-button">Contact Us</button>
      </div>
    </div>
  );
};
export default Header;
