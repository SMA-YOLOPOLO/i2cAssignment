const Footer = () => {
  return (
    <>
      <div className="App-footer ">
        <div style={{ justifyContent: "start" }}>
          <img
            alt="logo"
            src="/Assets/i2c-inc-logo-1A55750693-seeklogo.com.png"
            height={33}
            width={55}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="transparent-button">FAQs</button>
          <button className="transparent-button">Privacy Policy</button>
          <button className="transparent-button">Other</button>
          <button className="contactus-button">Contact Us</button>
        </div>
      </div>
      <div style={{ textAlign: "left", padding: "1px 5%" }}>
        Copyright @ 2023 i2c inc. All rights reserved.
      </div>
    </>
  );
};
export default Footer;
