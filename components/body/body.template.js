function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "../../src/_style.css";
  let templateString = `
<div class="items-center h-full w-full">
  <tv-signin></tv-signin>
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
