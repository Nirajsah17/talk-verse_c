function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "./style.min.css";
  let templateString = `
  <div class="w-screen h-screen">
    <div class="items-center">
      <div class="h-full w-full">
        <tv-nav></tv-nav>
      </div>
      <div class="h-full w-full">
        <tv-body></tv-body>
      </div>
    </div>
    </div>
  `;

  templateString = addStyle(templateString, stylePath);
  const template = document.createElement('template');
  template.innerHTML = templateString;
  return template;
}

function addStyle(templateStr, stylePath) {
  templateStr += `<link type="text/css" rel="stylesheet" href="${stylePath}" >`;
  return templateStr;
}

export default getTemplate;