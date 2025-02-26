export const handleInputs = (event, setFunction) => {
  event.preventDefault();
  const { name, value } = event.target;
  setFunction((prevState) => ({ ...prevState, [name]: value }));
};
