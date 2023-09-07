function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "../../src/_style.css";
  let templateString = `
<div class="h-full w-full">
  <div class = "w-full h-12 flex justify-between shadow-md">
    <div>logo</div>
    <div class="flex">
      <div>
        <button class="border bg-purple-400 m-2 p-1 items-center">SignIn</button>
      </div>
      <div>
        <button class="border bg-purple-400 m-2 p-1 items-center">LogIn</button> 
        </div>
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
