function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "../../src/_style.css";
  let templateString = `
  <div class="flex flex-row h-8 w-full bg-gray-200">
    <div>LOGO</div>
    <div class="p-2 text-sm cursor-pointer hover:text-white hover:bg-gray-400">subtitle</div>
    <div class="p-2 text-sm cursor-pointer hover:text-white hover:bg-gray-400">Mode</div>
    <div class="p-2 text-sm cursor-pointer hover:text-white hover:bg-gray-400">Profile</div>
    <div id="${o.domIds["signUp"]}" class="p-2 text-sm cursor-pointer hover:text-white hover:bg-gray-400">SignUp</div>
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
