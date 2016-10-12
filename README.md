# jquery-focus-flyout

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-focus-flyout"><img src="https://api.travis-ci.org/ianmcburnie/jquery-focus-flyout.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-focus-flyout?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-focus-flyout/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-focus-flyout"><img src="https://david-dm.org/ianmcburnie/jquery-focus-flyout.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-focus-flyout#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-focus-flyout/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery plugin that creates the basic interactivity for a flyout that opens on focus of trigger element

```js
$(selector).focusFlyout();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install jquery-focus-flyout
```

## Example

Markup before plugin:

```html
<div class="flyout">
    <input class="flyout__trigger" />
    <div class="flyout__live-region" aria-live="off">
        <div class="flyout__overlay">
            <!-- flyout content -->
        </div>
    </div>
</div>
```

Execute plugin:

```js
$('.flyout').focusFlyout();
```

Markup after plugin:

```html
<div class="flyout" id="inputflyout-0">
    <input aria-controls="inputflyout-0-overlay" aria-expanded="false" />
    <div class="flyout__live-region" aria-live="off">
        <div class="flyout__overlay" id="inputflyout-0-overlay">
            <!-- flyout content -->
        </div>
    </div>
</div>
```

'Focus' event on button will now toggle aria-expanded state of trigger element. CSS can use this state to hide/show overlay. For example:

```css
.flyout__overlay {
    display: none;
    position: absolute;
    z-index: 1;
}
.flyout__trigger[aria-expanded=true] ~ .flyout__live-region > .flyout__overlay {
    display: block;
}
```

## Events

* `flyoutExpand` - the flyout has expanded
* `flyoutCollapse` - the flyout has collapsed

## Development

Useful NPM task runners:

* `npm start` for local browser-sync development.
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies

Execute `npm run` to view all available CLI scripts.

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-focus-flyout

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-focus-flyout?branch=master
