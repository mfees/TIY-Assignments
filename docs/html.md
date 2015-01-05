### 1. `<ul>` -- Unordered List

* *type:* block-level
* *content:* zero or more <li> elements, eventually mixed with <ol> and <ul> elements.
* *support:* 
* *example:*
```
<ul>
  <li>Thing One</li>
  <li>Thing Two</li>
</ul>
```
<ul>
  <li>Thing One</li>
  <li>Thing Two</li>
</ul>

### 2. `<ol>` -- Ordered List

* *type:* block-level
* *content:* Zero or more <li> elements
* *support:* Chrome, Firefox, Safari
* *example:*
```
<ol>
  <li>Cats</li>
  <li>Kittens</li>
</ol>
```
<ol>
  <li>Cats</li>
  <li>Kittens</li>
</ol>

### 3. `<section>` -- Section

* *type:* block-level
* *content:* Flow content
* *support:* all
* *example:*
```
<section>
  <h1>CATS</h1>
  <p>Cats are so cool.<p>
</section>
```
<section>
  <h1>CATS</h1>
  <p>Cats are so cool.<p>
</section>

### 4. `<footer>` -- Footer

* *type:* block-level
* *content:* Flow content, but with no <footer> or <header> descendants.
* *support:* all
* *example:*
```
<footer>
Cats rule. Copyright info 2015. | Dogs drool.
</footer>
```
<footer>
Cats rule. Copyright info 2015. | Dogs drool.
</footer>

### 5. `<div>` -- Div

* *type:* block-level
* *content:* Flow content
* *support:* all
* *example:*
```
<div>
  <p>I have a cat named cookie.</p>
</div>
```
<div>
  <p>I have a cat named cookie.</p>
</div>

### 6. `<blockquote>` -- Blockquote

* *type:* block-level
* *content:* Flow content
* *support:* all (but firefox (1.7 or earlier)
* *example:*
```
<blockquote cite="http://developer.mozilla.org">
  <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>  
```
<blockquote cite="http://developer.mozilla.org">
  <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>

### 7. `<output>` -- Output

* *type:* block-level
* *content:* Phrasing content
* *support:* Chrome, Firefox, Opera, Safari
* *example:*
```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result"></output>
</form>  
```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result"></output>
</form>

### 8. `<article>` -- Article

* *type:* block-level
* *content:* Flow Content
* *support:* all
* *example:*
```
<article>
  <h3>MEOW MEOW MEOW</h3>
  <p>I'm actually not that obsessed with cats...</p>
</article>
```
<article>
  <h3>MEOW MEOW MEOW</h3>
  <p>I'm actually not that obsessed with cats...</p>
</article>
