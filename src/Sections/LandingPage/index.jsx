import VerticalSlider from "./Components/VerticalSlider";

const LandingPage = () => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      <div
        className="col-sm-12 col-md-6"
        style={{ marginTop: "2%", width: "40%" }}
      >
        <div style={{ textAlign: "left", fontSize: 30 }}>
          <h1>
            Lorem ipsum
            <span
              style={{
                color: "#46b0e6",
                display: "inline-block",
                paddingLeft: 10,
                paddingRight: -10,
                maxWidth: "min-content",
                fontSize: "80%",
                margin: "0 5 0 5",
              }}
            >
              dolor
              <div style={{ marginTop: "-45px" }}>
                <img
                  src="/Assets/Vector 17.png"
                  alt=""
                  width={"100%"}
                  height={"auto"}
                />
              </div>
            </span>
            sit
          </h1>

          <h1> amet yo 👋</h1>
        </div>

        <VerticalSlider />
      </div>
      <div className="col-sm-12 col-md-6" style={{ marginLeft: "2%" }}>
        <img src="/Assets/Group 84.png" alt="groupPic" />
      </div>
    </div>
  );
};
export default LandingPage;
