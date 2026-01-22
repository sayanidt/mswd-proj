function TextField({
  label,
  placeholder,
  width,
  maxLength,
  icon,
  iconPosition = "left", // "left" | "right"
}) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
      width: width || "300px",
    },
    label: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "5px",
      fontWeight:"bold",
      textAlign:"left",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      border: "2px solid #ccc",
      borderRadius: "5px",
      padding: "0 10px",
    },
    icon: {
      marginRight: iconPosition === "left" ? "8px" : "0",
      marginLeft: iconPosition === "right" ? "8px" : "0",
      display: "flex",
      alignItems: "center",
      color: "#666",
    },
    input: {
      flex: 1,
      padding: "10px",
      fontSize: "16px",
      border: "none",
      outline: "none",
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>

      <div style={styles.inputWrapper}>
        {icon && iconPosition === "left" && (
          <span style={styles.icon}>{icon}</span>
        )}

        <input
          type="text"
          style={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
        />

        {icon && iconPosition === "right" && (
          <span style={styles.icon}>{icon}</span>
        )}
      </div>
    </div>
  );
}

export default TextField;
