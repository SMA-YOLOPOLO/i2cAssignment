import Form from "./FormSection";

const RegistrationForm = () => {
  return (
    <div
      className="row"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className="col-sm-12 col-md-6">
        <img src="/Assets/Group 81.png" alt="groupPic" />
      </div>
      <div
        className="col-sm-12 col-md-6"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form />
      </div>
    </div>
  );
};
export default RegistrationForm;
