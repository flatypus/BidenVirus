const before =
  "https://gray-woio-prod.cdn.arcpublishing.com/resizer/LH5slY2yicga1qvMer2tb8KjwR4=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/6D2W6FDDIZHCZCPHETZ6M7TNTA.png";
const mouth_open =
  "https://media.discordapp.net/attachments/643964775457619970/1044536794353504306/6D2W6FDDIZHCZCPHETZ6M7TNTA1.png";

document.body.insertAdjacentHTML(
  "beforebegin",
  `<img id='funnyguy' style='position:fixed;bottom:0;z-index:10012301293;width:20vw;height:25vh' src='${before}'></img></div></div>`
);

document
  .getElementById("funnyguy")
  .addEventListener("onmousedown", function () {
    document.getElementById("funnyguy").src = mouth_open;
    setTimeout(function () {
      document.getElementById("funnyguy").src = before;
    }, 50);
  });
