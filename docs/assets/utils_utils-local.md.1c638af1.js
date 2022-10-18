import{_ as s,o as n,c as a,d as l}from"./app.8869db2f.js";const d=JSON.parse('{"title":"\u672C\u5730\u5B58\u50A8","description":"","frontmatter":{},"headers":[{"level":3,"title":"local \u4F7F\u7528\u65B9\u5F0F\uFF08uniapp \u52A0 Uni\uFF0C\u4F8B\uFF1AlocalStorageSetItemUni\uFF09\uFF1A","slug":"local-\u4F7F\u7528\u65B9\u5F0F\uFF08uniapp-\u52A0-uni\uFF0C\u4F8B\uFF1Alocalstoragesetitemuni\uFF09\uFF1A"},{"level":3,"title":"session \u4F7F\u7528\u65B9\u5F0F","slug":"session-\u4F7F\u7528\u65B9\u5F0F"},{"level":3,"title":"\u5185\u90E8\u4EE3\u7801","slug":"\u5185\u90E8\u4EE3\u7801"}],"relativePath":"utils/utils-local.md"}'),e={name:"utils/utils-local.md"},p=l(`<h1 id="\u672C\u5730\u5B58\u50A8" tabindex="-1">\u672C\u5730\u5B58\u50A8 <a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a></h1><h3 id="local-\u4F7F\u7528\u65B9\u5F0F\uFF08uniapp-\u52A0-uni\uFF0C\u4F8B\uFF1Alocalstoragesetitemuni\uFF09\uFF1A" tabindex="-1">local \u4F7F\u7528\u65B9\u5F0F\uFF08uniapp \u52A0 Uni\uFF0C\u4F8B\uFF1AlocalStorageSetItemUni\uFF09\uFF1A <a class="header-anchor" href="#local-\u4F7F\u7528\u65B9\u5F0F\uFF08uniapp-\u52A0-uni\uFF0C\u4F8B\uFF1Alocalstoragesetitemuni\uFF09\uFF1A" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/** \u8BBE\u7F6E\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.localStorageSetItem(name, data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u83B7\u53D6\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.localStorageGetItem(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.localStorageRemoveItem(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u5168\u90E8\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.localStorageRemoveItemAll()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="session-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">session \u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#session-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/** \u8BBE\u7F6E\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.sessionSetItem(name, data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u83B7\u53D6\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.sessionGetItem(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.sessionRemoveItem(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u5168\u90E8\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">Bennett.sessionRemoveItemAll()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5185\u90E8\u4EE3\u7801" tabindex="-1">\u5185\u90E8\u4EE3\u7801 <a class="header-anchor" href="#\u5185\u90E8\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/** \u8BBE\u7F6E\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageSetItem(name, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.localStorage.setItem(name, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u83B7\u53D6\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageGetItem(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return window.localStorage.getItem(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageRemoveItem(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.localStorage.removeItem(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u5168\u90E8\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageRemoveItemAll() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.localStorage.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u8BBE\u7F6E\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function sessionSetItem(name, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.sessionStorage.setItem(name, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u83B7\u53D6\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function sessionGetItem(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return window.sessionStorage.getItem(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function sessionRemoveItem(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.sessionStorage.removeItem(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u5168\u90E8\u7F13\u5B58 **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function sessionRemoveItemAll() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.sessionStorage.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u8BBE\u7F6E\u7F13\u5B58 uniapp **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageSetItemUni(name, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return uni.setStorageSync(name, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u83B7\u53D6\u7F13\u5B58 uniapp **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageGetItemUni(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return uni.getStorageSync(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u7F13\u5B58 uniapp **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageRemoveItemUni(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return uni.removeStorageSync(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5220\u9664\u5168\u90E8\u7F13\u5B58 uniapp **/</span></span>
<span class="line"><span style="color:#A6ACCD;">export function localStorageRemoveItemAllUni() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return uni.clearStorageSync();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[p];function t(c,i,r,A,C,y){return n(),a("div",null,o)}var m=s(e,[["render",t]]);export{d as __pageData,m as default};
