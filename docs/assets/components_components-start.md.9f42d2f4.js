import{_ as s,o as n,c as a,a as p}from"./app.4070362b.js";const y=JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u5982\u4F55\u4F7F\u7528","slug":"\u5982\u4F55\u4F7F\u7528"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"}],"relativePath":"components/components-start.md"}'),l={name:"components/components-start.md"},t=p(`<h3 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 Panda UI \u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B66\u4E60\u5E76\u719F\u7EC3\u4F7F\u7528\u8FC7 uni-app</p><h3 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u6309\u7167\u4EE5\u4E0B\u7684\u65B9\u5F0F\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u4EE5 <code>Button</code> \u4E3A\u4F8B</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u65B9\u5F0F\u4E00 \uFF1A\u901A\u8FC7 npm \u5B89\u88C5</p><p>\u4F7F\u901A\u8FC7 npm \u5B89\u88C5\uFF0C\u9700\u8981\u5148\u901A\u8FC7 vue-cli \u521B\u5EFA uni-app \u9879\u76EE</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install pandaUI  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add pandaUI </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6B64\u65B9\u6CD5\u6682\u4E0D\u652F\u6301\uFF0C\u76EE\u524D\u63A8\u8350\u65B9\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u65B9\u5F0F\u4E8C \uFF1A\u5728\u9875\u9762\u4E2D\u5F15\u7528\u3001\u6CE8\u518C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vue2\u65B9\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import pandaButton from &quot;@/components/panda-button/panda-button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">	components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		pandaButton</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">vue3\u65B9\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import pandaButton from &quot;@/components/panda-button/panda-button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;panda-button text=&quot;\u9ED8\u8BA4\u6309\u94AE&quot;&gt;&lt;/panda-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u65B9\u5F0F\u4E09\uFF1Aeasycom\u7EC4\u4EF6\u89C4\u8303</p><p>\u4F20\u7EDFvue\u7EC4\u4EF6\uFF0C\u9700\u8981\u5B89\u88C5\u3001\u5F15\u7528\u3001\u6CE8\u518C\uFF0C\u4E09\u4E2A\u6B65\u9AA4\u540E\u624D\u80FD\u4F7F\u7528\u7EC4\u4EF6\u3002easycom\u5C06\u5176\u7CBE\u7B80\u4E3A\u4E00\u6B65</p><p>\u5728 <code>pages.json</code> \u4E2D \u6DFB\u52A0\u914D\u7F6E\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4E0B\u8F7D\u5B89\u88C5\u65F6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;easycom&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;autoscan&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;custom&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;panda-(.*)&quot;: &quot;@/components/panda-$1/panda-$1.vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F7F\u7528npm\u5B89\u88C5\u65F6\u914D\u7F6E\uFF08\u914D\u7F6E\u5B8C\u6210\u540E\u91CD\u65B0\u7F16\u8BD1\u8FD0\u884C  \u6682\u4E0D\u652F\u6301\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;easycom&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;autoscan&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;custom&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;panda-(.*)&quot;: &quot;@/components/panda-$1/panda-$1.vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[t];function e(c,r,A,i,C,u){return n(),a("div",null,o)}var D=s(l,[["render",e]]);export{y as __pageData,D as default};
