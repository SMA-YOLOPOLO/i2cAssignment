const Perks = () => {
  const perks = [
    {
      imgUrl: "/Assets/lock.png",
      heading: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/chart.png",
      heading: "1000+ of reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/trophy.png",
      heading: "And more!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div
      className="perks-section "
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {perks.map((item) => {
        return (
          <div style={{ display: "flex", minWidth: "33.33%", margin: "0 2%" }}>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img alt="logo" src={item?.imgUrl} height="auto" width={55} />
            </div>
            <div style={{ textAlign: "left", marginLeft: 16 }}>
              <p style={{ color: "#f8a32f", fontWeight: "bold" }}>
                {item?.heading}
              </p>
              <p>{item?.description}</p>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};
export default Perks;
