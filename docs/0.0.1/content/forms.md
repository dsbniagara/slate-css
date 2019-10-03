# Forms

Use the ``.form-input`` class for you to use with your ``text``,``select``,``textarea``,``radios`` and ``checkboxes``.

<div class="form-field"><label for="name">Your name</label> <input id="name" type="text" name="name" placeholder="John Smith" class="form-input"></div>

<div class="form-field">
  <label for="select">Select a value</label> 
  <select id="select" class="form-input">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<div class="form-field">
  <label><input type="checkbox" class="form-switch"> Switch</label>
</div>

<div class="form-field">
  <label for="check1">
    <input id="check1" type="checkbox" class="form-input"> Check one
  </label>
  <label for="check2">
    <input id="check2" type="checkbox" class="form-input"> Check two
  </label>
</div>
<div class="form-field">
  <label for="radio1"><input id="radio1" name="radio" value="1" type="radio" class="form-input"> Radio 1</label> 
  <label for="radio2"><input id="radio2" name="radio" value="1" type="radio" class="form-input"> Radio 2</label>
</div>

<button type="button" class="btn btn--primary">Submit</button>
<button type="button" class="btn btn--light">Cancel</button>

### Large

<div class="form-field"><label for="lg-name">Your name</label> <input id="lg-name" type="text" name="name" placeholder="John Smith" class="form-input form-input--large"></div>

<div class="form-field">
  <label for="lg-select">Select a value</label> 
  <select id="lg-select" class="form-input form-input--large">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<div class="form-field">
  <label><input type="checkbox" class="form-switch form-switch--large"> Switch</label>
</div>

<div class="form-field">
  <label for="lg-check1">
    <input id="lg-check1" type="checkbox" class="form-input form-input--large"> Check one
  </label>
  <label for="lg-check2">
    <input id="lg-check2" type="checkbox" class="form-input form-input--large"> Check two
  </label>
</div>
<div class="form-field">
  <label for="lg-radio1"><input id="lg-radio1" name="radio" value="1" type="radio" class="form-input form-input--large"> Radio 1</label> 
  <label for="lg-radio2"><input id="lg-radio2" name="radio" value="1" type="radio" class="form-input form-input--large"> Radio 2</label>
</div>

<button type="button" class="btn btn-primary btn--large">Submit</button>

## Input

<div class="form-field"><label for="name">Your name</label> <input id="name" type="text" name="name" placeholder="John Smith" class="form-input"></div>


```html
<div class="form-field">
  <label for="name">Input</label>
  <input id="name" type="text" name="name" placeholder="John Smith" class="form-input">
</div>
```

## Select

<div class="form-field">
  <label for="select">Select a value</label> 
  <select id="select" class="form-input">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

```html
<div class="form-field">
  <label for="select">Select a value</label> 
  <select id="select" class="form-input">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

## Checkboxes

<div class="form-field">
  <label for="check">
    <input id="check" type="checkbox" class="form-input"> Check
  </label>
</div>

```html
<div class="form-field">
  <label for="check"><input id="check" type="checkbox" class="form-input"> Check</label>
</div>
```

## Radio

<div class="form-field">
  <label for="radio1"><input id="radio1" name="radio" value="1" type="radio" class="form-input"> Radio 1</label> 
  <label for="radio2"><input id="radio2" name="radio" value="1" type="radio" class="form-input"> Radio 2</label>
</div>

```html
<div class="form-field">
  <label for="radio1"><input id="radio1" name="radio" value="1" type="radio" class="form-input"> Radio 1</label> 
  <label for="radio2"><input id="radio2" name="radio" value="1" type="radio" class="form-input"> Radio 2</label>
</div>
```

## Textarea

<div class="form-field">
  <label for="comments">Your comments</label> 
  <textarea id="comments" placeholder="John Smith" class="form-input"></textarea>
</div>

```html
<div class="form-field">
  <label for="comments">Your comments</label> 
  <textarea id="comments" placeholder="John Smith" class="form-input"></textarea>
</div>
```