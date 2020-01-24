# List

Lists work great when you need tabular data but want a mobile view that scales with little work. Combine with the mobile utility classes to get varying layouts within the same list.

<div class="list list--separator">
    <header class="hide-phone">
        <div class="w-10">#</div>
        <div class="w-30">Name</div>
        <div class="w-10">Age</div>
        <div class="w-20">Fav. Movie</div>
        <div class="w-20">Status</div>
        <div class="w-10"></div>
    </header>
    <div>
        <div class="w-10 hide-phone">2</div>
        <div class="w-30"><b>Jim Smith</b></div>
        <div class="w-10"><span class="hide-large">Age </span>22</div>
        <div class="w-20 hide-phone">Batman</div>
        <div class="w-20 hide-phone"><div class="badge badge--success">Success</div></div>
        <div class="w-10">...</div>
    </div>
    <div>
        <div class="w-10 hide-phone">1</div>
        <div class="w-30"><b>Jane Doe</b></div>
        <div class="w-10"><span class="hide-large">Age </span>12</div>
        <div class="w-20 hide-phone">Avengers</div>
        <div class="w-20 hide-phone"><div class="badge badge--danger">Danger</div></div>
        <div class="w-10">...</div>
    </div>
</div>

```html
<div class="list list--separator">
    <header class="hide-phone">
        <div class="w-10">#</div>
        <div class="w-30">Name</div>
        <div class="w-10">Age</div>
        <div class="w-20">Fav. Movie</div>
        <div class="w-20">Status</div>
        <div class="w-10"></div>
    </header>
    <div>
        <div class="w-10 hide-phone">2</div>
        <div class="w-30"><b>Jim Smith</b></div>
        <div class="w-10"><span class="hide-large">Age </span>22</div>
        <div class="w-20 hide-phone">Batman</div>
        <div class="w-20 hide-phone"><div class="badge badge--success">Success</div></div>
        <div class="w-10">...</div>
    </div>
    <div>
        <div class="w-10 hide-phone">1</div>
        <div class="w-30"><b>Jane Doe</b></div>
        <div class="w-10"><span class="hide-large">Age </span>12</div>
        <div class="w-20 hide-phone">Avengers</div>
        <div class="w-20 hide-phone"><div class="badge badge--danger">Danger</div></div>
        <div class="w-10">...</div>
    </div>
</div>
```

## Style variations

``.list--separator``

<div class="list list--separator">
    <header>
        <div>#</div>
        <div class="w-40">Name</div>
        <div>Age</div>
        <div>Fav. Movie</div>
        <div>Status</div>
        <div></div>
    </header>
    <div>
        <div>2</div>
        <div class="w-40"><b>Jim Smith</b></div>
        <div>22</div>
        <div>Batman</div>
        <div><div class="badge badge--success">Success</div></div>
        <div>...</div>
    </div>
    <div>
        <div>1</div>
        <div class="w-40"><b>Jane Doe</b></div>
        <div>12</div>
        <div>Avengers</div>
        <div><div class="badge badge--danger">Danger</div></div>
        <div>...</div>
    </div>
</div>

``.list--stripe .list--separator``

<div class="list list--separator list--stripe">
    <header>
        <div class="w-10">#</div>
        <div class="w-30">Name</div>
        <div class="w-10">Age</div>
        <div class="w-20">Fav. Movie</div>
        <div class="w-20">Status</div>
        <div class="w-10"></div>
    </header>
    <div>
        <div class="w-10">2</div>
        <div class="w-30"><b>Jim Smith</b></div>
        <div class="w-10">22</div>
        <div class="w-20">Batman</div>
        <div class="w-20"><div class="badge badge--success">Success</div></div>
        <div class="w-10">...</div>
    </div>
    <div>
        <div class="w-10">1</div>
        <div class="w-30"><b>Jane Doe</b></div>
        <div class="w-10">12</div>
        <div class="w-20">Avengers</div>
        <div class="w-20"><div class="badge badge--danger">Danger</div></div>
        <div class="w-10">...</div>
    </div>
</div>

<div class="list list--separator list--stripe">
    <header>
        <div class="w-10">#</div>
        <div>Name</div>
    </header>
    <div>
        <div class="w-10">2</div>
        <div><b>Jim Smith</b></div>
    </div>
    <div>
        <div class="w-10">1</div>
        <div><b>Jane Doe</b></div>
    </div>
</div>

<h2>Grid view</h2>
<p>The benefit to using <code>.list</code> is the same data can be flipped to a grid quite easily. The example following is similar list above (minus the header) with more items. The default basis is 33% but can be adjusted by adding <code>.grid-list-25</code></p>

<div class="list grid-list">
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
</div>

```html
<div class="list grid-list">
<div class="list-item">
        <div><b>Item Name</b></div>
    <div>Item Column</div>
    <div>Item Column</div>
</div>
<div class="list-item">
    <div><b>Item Name</b></div>
    <div>Item Column</div>
    <div>Item Column</div>
</div>
...
</div>
```

<p>The default min width <small class="sub-note">(flex-basis)</small> is <code>33%</code> but can be adjusted by adding <code>.grid-list-20</code>,<code>.grid-list-25</code>,<code>.grid-list-50</code></p>

<div class="list grid-list grid-list-25">
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
    <div class="list-item">
        <div><b>Item Name</b></div>
        <div>Item Column</div>
        <div>Item Column</div>
    </div>
</div>

```html
<div class="list grid-list grid-list-25">
...
</div>
```