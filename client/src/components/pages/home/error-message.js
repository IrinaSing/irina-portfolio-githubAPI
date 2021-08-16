export const errorParagraph = (message, err) => {
  const p = document.createElement("p");
  p.innerHTML = `${message} ${err}`;
  return p;
};
