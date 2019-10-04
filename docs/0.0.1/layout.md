# Layout

{{$siteTitle}} provides a very basic set of flex utility classes to get a typical grid going. It starts with the container of ``.flex-grid`` which applies ``display: flex;`` and items with a class of ``.col``. The ``.col`` elements have a flex grow of 1 to fill the container.

The grid will break down to a single column at the set ``$break-width``. Default ``$break-width`` is ``400px``.

<div class="flex-grid">
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
</div>

```html
<div class="flex-grid">
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
    <div class="col">
        .col
    </div>
</div>
```

## Utilities

There is also the enevitable ``.flex`` utility class to apply display: flex onto your desired element. Two additional utility classes exist for spacing assistance.

``.flex`` implements ``display: flex``;

``.flex-around`` implements ``justify-content: space-around;``

``.flex-between`` implements ``justify-content: space-between;``