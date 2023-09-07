function getTemplate(o) {
  o = o || {};
  const theme = o.theme || "default";
  const stylePath = o.stylePath || "../../src/_style.css";
  let templateString = `
<div class="h-full w-full">
  <div class="bg-gray-300 h-64 w-64 items-center">
    <div>SignIn</div>
    <div>
      <input type="text" placeholder="Enter emailId" />
      <button class="bg-blue-300">OTP</button>
    </div>
    <div>
      <button>Create account</button>
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
