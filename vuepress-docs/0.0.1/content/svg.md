# SVG

A set of color classes are provided to easily add framework colors to svgs. Use with both stroke and fill.

## Stroke

<svg height="80" width="300">
  <g fill="none">
    <path class="stroke-primary" d="M5 20 l215 0" />
    <path class="stroke-light" d="M5 40 l215 0" />
    <path class="stroke-success" d="M5 60 l215 0" />
  </g>
</svg>

Stroke classes are available via ``.stroke-{color}`` for all colors. Apply to your path.

## Fill

<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-light" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-light" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>

<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-success" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-success" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>

<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-primary" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-primary" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>

Fill classes are available via ``.fill-{color}`` for all colors. Apply to your path.

## Icons

If you combine these with a icon-hover-{fill|stroke}-{color} and place your svg inside an ``<a>`` the desired fill or stroke will be applied on hover:

<a>
<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-light icon-hover-fill-primary" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-light icon-hover-fill-primary" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>
</a>
<a>
<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-light icon-hover-fill-success" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-light icon-hover-fill-success" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>
</a>

<a>
<svg height="40" width="300">
  <g fill="none">
    <path class="stroke-primary icon-hover-stroke-success" d="M5 10 l215 0" />
    <path class="stroke-light icon-hover-stroke-danger" d="M5 30 l215 0" />
  </g>
</svg>
</a>

```
<a>
<svg width="48" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
    <path class="fill-none" d="M0,0h24v24H0V0z"></path> 
    <path class="fill-light icon-hover-fill-primary" opacity=".3" d="M5,5h4v6H5V5z M15,13h4v6h-4V13z M5,17h4v2H5V17z M15,5h4v2h-4V5z"></path> 
    <path class="fill-light icon-hover-fill-primary" d="M3,13h8V3H3V13z M5,5h4v6H5V5z M13,21h8V11h-8V21z M15,13h4v6h-4V13z M13,3v6h8V3H13z M19,7h-4V5h4V7z M3,21h8v-6H3V21z  M5,17h4v2H5V17z"></path>
</svg>
</a>
```