# List


<div class="list">
    <header>
        <div class="list-col">Header Column</div>
        <div class="list-col">Header Column</div>
        <div class="list-col">Header Column</div>
    </header>
    <div class="list-item">
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
</div>

```html
<div class="list">
<header>
    <div class="list-col">Header Column</div>
    <div class="list-col">Header Column</div>
    <div class="list-col">Header Column</div>
</header>
<div class="list-item">
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
</div>
<div class="list-item">
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
</div>
</div>
```

<h2>Grid view</h2>
<p>The benefit to using <code>.list</code> is the same data can be flipped to a grid quite easily. The example following is similar list above (minus the header) with more items. The default basis is 33% but can be adjusted by adding <code>.grid-list-25</code></p>

<div class="list grid-list">
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
</div>

```html
<div class="list grid-list">
<div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
</div>
<div class="list-item">
    <div class="list-col"><b>Item Name</b></div>
    <div class="list-col">Item Column</div>
    <div class="list-col">Item Column</div>
</div>
...
</div>
```

<p>The default min width <small class="sub-note">(flex-basis)</small> is <code>33%</code> but can be adjusted by adding <code>.grid-list-20</code>,<code>.grid-list-25</code>,<code>.grid-list-50</code></p>

<div class="list grid-list grid-list-25">
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
    <div class="list-item">
        <div class="list-col"><b>Item Name</b></div>
        <div class="list-col">Item Column</div>
        <div class="list-col">Item Column</div>
    </div>
</div>

```html
<div class="list grid-list grid-list-25">
...
</div>
```