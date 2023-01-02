const downloadFile = (code) => {
  const file = new Blob([code], {type: ''});// anchor link
  const element = document.createElement("a");
  element.href = URL.createObjectURL(file);
  element.download = "README.MD";// simulate link click
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

export default downloadFile