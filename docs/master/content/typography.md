# Typography

The default font stack is a browser compatible stack.

```css
-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
The default font size is 12pt.
```

## Headings

All HTML headings,``<h1>`` through ``<h6>``, are available. Heading sizes are ``em`` based to provide resizablity based on your desired base font size or container font size. The sizes are also definable in the configuration file.


| Heading | Selectors | Variable | Default  |
| ------------- |:-------------:| :-------------:| -----:|
| <div class="h1">Heading 1</div> | ``<h1></h1>, .h1, .text-xl`` | --font-h1-size | 3em |
| <div class="h2">Heading 2</div> | ``<h2></h2>, .h2, .text-xl`` | --font-h2-size | 3em |
| <div class="h3">Heading 3</div> | ``<h3></h3>, .h3, .text-xl`` | --font-h3-size | 3em |
| <div class="h4">Heading 4</div> | ``<h4></h4>, .h4, .text-xl`` | --font-h4-size | 3em |
| <div class="h5">Heading 5</div> | ``<h5></h5>, .h5, .text-xl`` | --font-h5-size | 3em |
| <div class="h6">Heading 6</div> | ``<h6></h6>, .h6, .text-xl`` | --font-h6-size | 3em |

## Paragraphs

Paragraphs are sensible with just a bottom margin.

## Inline text

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>

## Lists

Lists are styled very close to native styles.

Unordered list

<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

Ordered list

<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>