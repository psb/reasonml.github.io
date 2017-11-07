webpackJsonp([250],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-make-html.json":function(a,e){a.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.Make.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;<a class="post" href="MoreLabels.Hashtbl.MakeSeeded.html" title="MoreLabels.Hashtbl.MakeSeeded">Next</a>\n</div>\n<h1>Functor <a href="type_MoreLabels.Hashtbl.Make.html">MoreLabels.Hashtbl.Make</a></h1>\n\n<pre><span class="keyword">module</span> Make: (H: HashedType) =&gt; S with type key = H.t;\n</pre><table border="0" cellpadding="3" width="100%">\n<tbody><tr>\n<td align="left" valign="top" width="1%%"><b>Parameters: </b></td>\n<td>\n<table class="paramstable">\n<tbody><tr>\n<td align="center" valign="top" width="15%">\n<code>H</code></td>\n<td align="center" valign="top">:</td>\n<td><code class="type">HashedType</code>\n</td></tr></tbody></table>\n</td>\n</tr>\n</tbody></table>\n<hr width="100%">\n\n<pre id="TYPEkey"><span class="keyword">type</span> key;\n</pre>\n\n\n<pre id="TYPEt"><span class="keyword">type</span> t(&apos;a);\n</pre>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: int =&gt; t(&apos;a);\n</pre>\n<pre id="VALclear"><span class="keyword">let</span> clear: t(&apos;a) =&gt; unit;\n</pre>\n<pre id="VALreset"><span class="keyword">let</span> reset: t(&apos;a) =&gt; unit;\n</pre>\n<pre id="VALcopy"><span class="keyword">let</span> copy: t(&apos;a) =&gt; t(&apos;a);\n</pre>\n<pre id="VALadd"><span class="keyword">let</span> add: (t(&apos;a), ~key: key, ~data: &apos;a) =&gt; unit;\n</pre>\n<pre id="VALremove"><span class="keyword">let</span> remove: (t(&apos;a), key) =&gt; unit;\n</pre>\n<pre id="VALfind"><span class="keyword">let</span> find: (t(&apos;a), key) =&gt; &apos;a;\n</pre>\n<pre id="VALfind_all"><span class="keyword">let</span> find_all: (t(&apos;a), key) =&gt; list(&apos;a);\n</pre>\n<pre id="VALreplace"><span class="keyword">let</span> replace: (t(&apos;a), ~key: key, ~data: &apos;a) =&gt; unit;\n</pre>\n<pre id="VALmem"><span class="keyword">let</span> mem: (t(&apos;a), key) =&gt; bool;\n</pre>\n<pre id="VALiter"><span class="keyword">let</span> iter: (~f: (~key: key, ~data: &apos;a) =&gt; unit, t(&apos;a)) =&gt; unit;\n</pre>\n<pre id="VALfold"><span class="keyword">let</span> fold: (~f: (~key: key, ~data: &apos;a, &apos;b) =&gt; &apos;b, t(&apos;a), ~init: &apos;b) =&gt; &apos;b;\n</pre>\n<pre id="VALlength"><span class="keyword">let</span> length: t(&apos;a) =&gt; int;\n</pre>\n<pre id="VALstats"><span class="keyword">let</span> stats: t(&apos;a) =&gt; MoreLabels.Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.Make.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-make-html-936ec94c4e5bbe419fea.js.map