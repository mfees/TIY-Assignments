### 1. `<ul>` -- Unordered List

* *type:* block-level
* *content:* zero or more <li> elements, eventually mixed with <ol> and <ul> elements.
* *support:* all
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

### 9. `<header>` -- Header

* *type:* block-level
* *content:* Flow content, but with no <header> or <footer> descendant
* *support:* all
* *example:*
```
<header>
  This is a logo
</header>
```
<header>
  This is a logo
</header>

### 10. `<table>` -- Table

* *type:* block-level
* *content:* In this order:
an optional <caption> element,
zero or more <colgroup> elements,
an optional <thead> element,
one of the two alternatives:
one <tfoot> element, followed by:
zero or more <tbody> elements,
or one or more <tr> elements,
a second alternative followed by an optional <tfoot> element:
either zero or more <tbody> elements,
or one or more <tr> elements
* *support:* all
* *example:*
```
<table>
  <tr>
    <td>Cats</td>
    <td>Kittens</td>
  </tr>
  <tr>
    <td>Dogs</td>
    <td>Puppies</td>
  </tr>  
</table>
```
<table>
  <tr>
    <td>Cats</td>
    <td>Kittens</td>
  </tr>
  <tr>
    <td>Dogs</td>
    <td>Puppies</td>
  </tr>  
</table>


### 11. `span` -- Span 

* *type:* inline
* *content:* Phrasing content
* *support:* all
* *example:*
```
<span>This is for the span element</span>
```
<span>This is for the span element</span>

### 12. `em` -- Em 

* *type:* inline
* *content:* Phrasing content
* *support:* all
* *example:*
```
<p>How about dem <em>italics?</em></p>
```
<p>How about dem <em>italics?</em></p>

### 13. `button` -- Button 

* *type:* inline
* *content:* Phrasing content
* *support:* all
* *example:*
```
<p>This is a</p><button name= "button"button</button>
```
<p>This is a</p><button name= "button">button</button>

### 14. `strong` -- Strong 

* *type:* inline
* *content:* Phrasing content
* *support:* 
* *example:*
```
<p>My love for cats is <strong>STRONG</strong></p>
```
<p>My love for cats is <strong>STRONG.</strong></p>

### 15. `abbr` -- Abbr 

* *type:* inline
* *content:* Phrasing content
* *support:* all
* *example:*
```
<p>It's a party in the <abbr title= "United States of America">USA</abbr></p>
```
<p>It's a party in the <abbr title= "United States of America">USA</abbr></p>

## 16. `img` -- Img

* *type:* inline
* *content:* None, it is an empty element
* *support:* all
* *example:*
```
<img src="mdn-logo-sm.png" alt="MD Logo" />
```
<img src="mdn-logo-sm.png" alt="MD Logo" />

## 17. `acronym` -- Acronym

* *type:* inline
* *content:* 
* *support:* all
* *example:*
```
This is <acronym title="Hyper Text Markup Language">HTML</acronym>
```
This is <acronym title="Hyper Text Markup Language">HTML</acronym>

## 18. `cite` -- Cite

* *type:* inline
* *content:* Phrasing content
* *support:* all
* *example:*
```
Find more information here. <cite>[ISO-0000]</cite>
```
Find more information here. <cite>[ISO-0000]</cite>

## 19. `a` -- A

* *type:* inline
* *content:* Transparent, containing either flow content or phrasing content.
* *support:* all
* *example:*
```
<p>Find me on GitHub <a href= "https://github.com/mfees">here</a></p>
```
<p>Find me on GitHub <a href= "https://github.com/mfees">here.</a></p>

## 20. `time` -- Time

* *type:* inline
* *content:* Phrasing content, but no descendant time elements
* *support:* all
* *example:*
```
<p>I eat the dinner foods at <time>7:00pm</time>
```
<p>I eat the dinner foods at <time>7:00pm</time>