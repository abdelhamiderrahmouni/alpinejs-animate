<!-- write a Readme for this package -->
# Alpinejs Animate

This package provides a simple way to animate elements using Alpine.js (and animate.css for the moment).

## Requirements
- [Alpine.js](https://alpinejs.dev)
- [Animate.css](https://animate.style)

## Installation
```bash
npm install alpinejs-animate
```

## Usage
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