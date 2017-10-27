webpackJsonp([215],{"./node_modules/json-loader/index.js!./.cache/json/api-set-html.json":function(e,t){e.exports={data:{file:{relativePath:"api/Set.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Scanf.html" title="Scanf">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Sort.html" title="Sort">Next</a>\n</div>\n<h1>Module <a href="type_Set.html">Set</a></h1>\n\n<pre><span class="keyword">module</span> Set: sig .. end</pre><div class="info module top">\nSets over ordered types.\n<p>\n\n   This module implements the set data structure, given a total ordering\n   function over the set elements. All operations over sets\n   are purely applicative (no side-effects).\n   The implementation uses balanced binary trees, and is therefore\n   reasonably efficient: insertion and membership take time\n   logarithmic in the size of the set, for instance.\n</p><p>\n\n   The <code class="code">Make</code> functor constructs implementations for any type, given a\n   <code class="code">compare</code> function.\n   For instance:\n   </p><pre class="codepre">     module IntPairs =\n       struct\n         type t = int * int\n         let compare (x0,y0) (x1,y1) =\n           match Pervasives.compare x0 x1 with\n               0 -&gt; Pervasives.compare y0 y1\n             | c -&gt; c\n       end\n\n     module PairsSet = Set.Make(IntPairs)\n\n     let m = PairsSet.(empty |&gt; add (2,3) |&gt; add (5,7) |&gt; add (11,13))\n   </pre>\n<p>\n\n   This creates a new module <code class="code">PairsSet</code>, with a new type <code class="code">PairsSet.t</code>\n   of sets of <code class="code">int * int</code>.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">module</span> type OrderedType = sig .. end</pre><div class="info">\nInput signature of the functor <a href="Set.Make.html"><code class="code">Set.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info">\nOutput signature of the functor <a href="Set.Make.html"><code class="code">Set.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> Make: functor (Ord : OrderedType) -&gt; S  with type elt = Ord.t</pre><div class="info">\nFunctor building an implementation of the set structure\n   given a totally ordered type.\n</div>\n</div>'}}},pathContext:{relativePath:"api/Set.html"}}}});
//# sourceMappingURL=path---api-set-html-7c357a4d83f152c67465.js.map