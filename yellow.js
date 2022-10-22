//Bài 2
const $triangle = document.querySelector("#triangle");

const numberOneTriangle = (m) => {
  let html = "";

  for (let j = 0; j < m; j++) {
    for (let x = 0; x <= j; x++) {
      html += "*";
    }
    html += `<br/>`;
  }

  return html;
};

$triangle.innerHTML = numberOneTriangle(5)