function Skill({ name, icon, color }) {
  return (
    <>
      <span
        style={{
          backgroundColor: color,
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        {name}
        {icon && <span>{icon}</span>}
      </span>
    </>
  );
}
export default Skill;
