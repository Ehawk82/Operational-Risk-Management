# gScript2019 
____

a library specified to the code habits of Ehawk LLC
<h1>TABLE OF CONTENTS</h1>

<h4>1: Features</h4>
<h4>2: Function Names</h4>
<h4>3: Notes</h4>

____

<h2>1: Features</h2>
- get elements by Id, className, tag, and quearySelector(s)
- toggle class name "_locked"
- creating and removing nodes
- toggle class name "_full" <sup>1</sup>
- access to localStorage API(under development)
-can get size of elements and client screen sizes
____
<h2>2: Function Names</h2>

<div><details><summary>bySel</summary><p>get elements by query selector</p><code> bySel(x);</code></details></div>
<div><details><summary>byId</summary><p>get elements by id</p><code> byId(x);</code></details></div>
<div><details><summary>byClass</summary><p>get elements by class name</p><code> byClass(x);</code></details></div>
<div><details><summary>bySelAll</summary><p>get all elements by query selector</p><code> bySelAll(x);</code></details></div>
<div><details><summary>deleteThis</summary><p>delete the element</p><code> deleteThis(x);</code></details></div>
<div><details><summary>makeFull</summary><p>add "_full" to class name</p><code> makeFull(x);</code></details></div>
<div><details><summary>takeFull</summary><p>remove "_full" from class name</p><code> takeFull(x);</code></details></div>
<div><details><summary>createEle</summary><p>create a mew element</p><code> createEle(x);</code></details></div>
<div><details><summary>byTag</summary><p>get elements by tag name, takes two params</p><code> byTag(x,y);</code></details></div>
<div><details><summary>saveLS</summary><p>save and stringify the local storage item</p><code> saveLS(x,y);</code></details></div>
<div><details><summary>loadLS</summary><p>load a local storage item</p><code> loadLS(x);</code></details></div>
<div><details><summary>clearLS</summary><p>clear the local storage</p><code> clearLS(x);</code></details></div>
<div><details><summary>removeLSitem</summary><p>remove a specific item from local storage</p><code> removeLSitem(x);</code></details></div>
<div><details><summary>makeLock</summary><p>add "_locked" to class</p><code>makeLock(x);</code></details></div>
<div><details><summary>takeLock</summary><p>removes "_locked" from class</p><code>takeLock(x);</code></details></div>
<div><details><summary>myHeight</summary><p>get's the height of any element, use <code>screen</code>for client scren size</p><code>myHeight(x);</code></details></div>
<div><details><summary>myWidth</summary><p>get's the width of any element, use <code>screen</code>for client scren size</p><code>myWidth(x);</code></details></div>
____
<h2>3: Notes</h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects