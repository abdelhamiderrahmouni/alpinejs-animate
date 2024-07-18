# Alpinejs Animate

This package provides a simple way to animate elements using Alpine.js and Animate.css.

## Requirements
- [Alpine.js](https://alpinejs.dev)
- [Animate.css](https://animate.style)

## Installation
```bash
npm install alpinejs-animate
```

## Basic Usage

```html
<div x-animate="animationName">
    Content to animate
</div>
```

Replace `animationName` with any valid Animate.css animation name (e.g., "fadeIn", "bounceOut", etc.).

## Modifiers

### Intersection Observer

- `.intersect`: Triggers the animation when the element enters the viewport.

```html
<div x-animate.intersect="fadeIn">
    Animate when in viewport
</div>
```

### Delay

- `.delay.[milliseconds]`: Adds a delay before the animation starts.

```html
<div x-animate.delay.500="bounceIn">
    Animate after 500ms delay
</div>
```

### Repeat

- `.repeat.[count]`: Repeats the animation a specified number of times.
- `.repeat.infinite`: Repeats the animation indefinitely.

```html
<div x-animate.repeat.3="pulse">
    Animate 3 times
</div>
```

### Interval

- `.interval.[milliseconds]`: Sets the interval between repeated animations.
- `.repeat.[count].[interval]`: Repeats the animation a specified number of times.

```html
<div x-animate.repeat.3.interval.1000="flash">
    Animate 3 times with 1 second interval
</div>
```

or

```html
<div x-animate.repeat.3.100="pulse">
    Animate 3 times with 100ms interval
</div>
```

### Duration

- `.duration.[milliseconds]`: Sets the duration of each animation.

```html
<div x-animate.duration.2000="fadeIn">
    Fade in over 2 seconds
</div>
```

### Intersection Threshold

- `.threshold.[value]`: Sets the intersection threshold (0-100).
- `.half`: Sets the intersection threshold to 50%.
- `.full`: Sets the intersection threshold to 99%.

```html
<div x-animate.intersect.threshold.75="slideInUp">
    Animate when 75% visible
</div>
```

## Combining Modifiers

You can combine multiple modifiers to create complex animation behaviors:

```html
<div x-animate.intersect.delay.100.repeat.3.interval.500.duration.1000="bounce">
    Complex animation example
</div>
```

This will:
1. Trigger when the element intersects the viewport
2. Wait 100ms before starting
3. Repeat the animation 3 times
4. Wait 500ms between each repetition
5. Each animation lasts 1000ms

## Advanced Usage Examples

```html
<div x-data>
    <!-- Animate on intersection with 100ms delay, repeat 3 times every 100ms, and each animation lasts 500ms -->
    <div x-animate.intersect.delay.100.repeat.3.interval.100.duration.500>
        Content to animate with 100ms delay on intersection, repeating 3 times every 100ms, animation duration 500ms
    </div>
    <!-- Animate on intersection without delay, repeat infinitely every 500ms, and each animation lasts 800ms -->
    <div x-animate.intersect.repeat.infinite.interval.500.duration.800>
        Content to animate on intersection without delay, repeating infinitely every 500ms, animation duration 800ms
    </div>
    <!-- Animate immediately with 100ms delay, repeat 2 times every 200ms, and each animation lasts 600ms -->
    <div x-animate.delay.100.repeat.2.interval.200.duration.600>
        Content to animate with 100ms delay immediately, repeating 2 times every 200ms, animation duration 600ms
    </div>
    <!-- Animate immediately without delay, repeat once, and animation duration 400ms -->
    <div x-animate.duration.400>
        Content to animate without delay immediately, animation duration 400ms
    </div>
</div>
```

## Notes

- The directive automatically adds the `animate__animated` class and prefixes your animation name with `animate__`.
- Elements are initially hidden with the `invisible` class and revealed when the animation starts.
- When using `.intersect`, the animation only triggers once when the element enters the viewport.

Remember to include the Animate.css library in your project for the animations to work.

### Example of including Animate.css in your project
#### Using a CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css">
```

#### Using npm
```bash
npm install animate.css
```
and then import it in your JavaScript file:
```js
import 'animate.css';
```
or in your CSS file:
```css
@import 'animate.css';
```

## License
This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits
This package is heavily inspired by the following projects:
- [Alpinejs Intersect Class](https://github.com/heidkaemper/alpinejs-intersect-class)
- [Alpine Intersect Animate](https://github.com/s-patompong/alpine-intersect-animate)

And uses the following libraries:
- [Alpine.js](https://alpinejs.dev)
- [Animate.css](https://animate.style)

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

Would you like me to explain or clarify any part of this documentation further?