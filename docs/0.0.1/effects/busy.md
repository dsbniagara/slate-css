# Busy

Get busy with aria-busy="true"

<p class="lead">Add the global loading identifier with <code>aria-busy="true"</code> to trigger display of your skeleton ui.</p>

### The .skeleton

<p>The skeleton is an element that gets shown inside an <code>aria-busy="true"</code> tag. The skeleton will be removed when the busy is removed. Use a div or a span for the desired output.</p>

<p><b>Note:</b> a span is set to inline-block with 100% as an inline skeleton would be invisible anyway.</p>

<div aria-busy="true">
    <span class="skeleton"></span>
    <div class="skeleton w-40"></div>
    <div class="skeleton w-20"></div>
</div>

<p>The width can be adjusted by adding <code>.w-20</code> <code>.w-40</code> <code>.w-60</code> <code>.w-80</code> classes. Each number corresponds to the width percentage.</p>

<p>It is best to use the skeletons as an empty element inside your UI, rather than adding the class name to existing elements.</p>

## Heading
<p>Add a skeleton inside a heading</p>

<div aria-busy="true">
    <h2><span class="skeleton w-20"></span></h2>
</div>

## Form Inputs
<p><code>.form-input</code>'s and <code>.btn</code>'s automatically get skeletonized.</p>

<div aria-busy="true">
<div class="form-field">
    <input type="text" class="form-input" />
</div>

<div class="form-field">
    <select id="name" class="form-input">
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
</div>
<div class="form-field">
    <input type="checkbox" class="form-input" /> Checkbox
</div>
<div class="form-field">
    <input type="radio" class="form-input" /> Radio
</div>
<div>
    <button type="button" class="btn btn-primary">Primary</button>
</div>
</div>

## Inside tables

Within tables, create a new row of skeletons and place a <code>.loading</code> class on the table row. This row will get hidden when <code>aria-busy="true"</code> is not set.

<table class="table"  aria-busy="true">
    <thead>
        <tr>
            <th width="10%"><a>Id</a></th>
            <th width="20%"><a>Name</a></th>
            <th width="20%"><a>Price</a></th>
        </tr>
    </thead>
    <tbody>
        <tr class="loading">
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
        </tr>
        <tr class="loading">
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
        </tr>
        <tr class="loading">
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
            <td><span class="skeleton">&nbsp;</span></td>
        </tr>
    </tbody>
</table>