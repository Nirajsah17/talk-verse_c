function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "../../src/_style.css";
  let templateString = `
  <div id="${o.domIds['container']}" class="w-full h-full flex flex-col justify-between items-center bg-gray-100">
    <div class="w-full h-full flex flex-row justify-between items-center p-2">
      <div></div>
      <div><h4>Title</h4></div>
      <div id="${o.domIds["cross"]}" class="cursor-pointer hover:text-red">X</div>
    </div>
    <div class="p-2">Body</div>
    <div class="w-full h-full flex flex-row justify-between items-center p-2">
      <div></div>
      <div><h4>Forgot password ?</h4></div>
      <div class="cursor-pointer">login</div>
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
