var data = require("self").data;
var pageMod = require("page-mod");
pageMod.PageMod({
  include: "http://www.ingress.com/intel*",
  contentScriptWhen: 'end',
  contentScriptFile: data.url("iitc.js")
});