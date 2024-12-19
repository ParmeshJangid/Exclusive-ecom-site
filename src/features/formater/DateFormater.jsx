const DateFormater = (value) => {
  console.log("formater", value);
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default DateFormater;
