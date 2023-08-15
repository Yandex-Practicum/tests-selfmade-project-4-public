import path from'path';import{mkfile,mkdir}from'@hexlet/immutable-fs-trees';import{checkStructure,checkW3C,checkStyles,checkCSS,checkOrderStylesheetLinks,checkAlternativeFonts,checkBodyElements,checkLang,checkTitleEmmet,checkElementsBySelectors,checkPropertiesByElement,checkVideoAttributes,checkLayout}from'./lib.js';import initPuppeteer from'./puppeteer.js';const runTests=async(a,b)=>{const c=mkdir('project',[mkfile('index.html'),mkdir('styles',[mkfile('style.css')]),mkdir('fonts',[])]),d=checkStructure(a,c);if(d.length)return d;const{browser:e,page:f}=await initPuppeteer(path.join(a,'index.html')),g=(await Promise.all([//checkW3C(path.join(projectPath, 'index.html')),
//checkCSS(projectPath),
checkStyles(path.join(a,'styles','style.css'),'styles|style.css'),checkLang(f,b),checkTitleEmmet(f),checkLayout(f)])).flat();return await e.close(),g};export default runTests;