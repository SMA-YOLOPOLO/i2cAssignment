import ImageSlider from "./Components/imageSlider";

const ClientSection = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Trusted By</h1>
      </div>
      <div style={{ marginTop: "-26px" }}>
        <img src="/Assets/Vector 17.png" alt="" />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            maxWidth: "25%",
          }}
        >
          The old clock struck midnight, and the house fell silent except for
          the soft crackle of the fireplace.
        </p>
      </div>
      <ImageSlider />
    </div>
  );
};
export default ClientSection;
