# Bootstrap 4 - Grid
> Bootstrap v4.3.1 grid only styles

## Cheatsheet
```txt
.container
.container-fluid
.row

.col-# (<576px)
.col-sm-# (≥576px)
.col-md-# (≥768px)
.col-lg-# (≥992px)
.col-xl-# (≥1200px)

.col /* equal width cols, same on all screen sizes */
.col-* /* responsive equal width cols, can be sm, md, lg, or xl */

.no-gutters 
.offset-*-# /* example (.offset-lg-5) */

.order-#
.nested columns
```

## Mixins (semantic grid)

```txt
@include make-container();
@include make-row();
@include make-col-ready();

@include media-breakpoint-up(sm) {
    @include make-col(6);
}
```

## Suport Browsers
IE 10

## How to use npm tasks (This step is optional) 

1. Download the repository
2. Install dependencies (npm install)

**Task listing**
- npm run dev (converts scss to css)
- npm run build (css compressed)

## Questions
If you have any difficulty using the Gulp Boilerplate or would like some aspect of the current configuration, open an [issue](https://github.com/theandersonn/bootstrap-4-grid/issues/new) and explain your difficulty.

## References
- [Bootstrap - Documentation](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options)
- [Bootstrap - Code](https://github.com/twbs/bootstrap)


## License
[MIT](https://github.com/theandersonn/bootstrap-4-grid/blob/master/LICENSE.md) © [Anderson Nascimento](https://github.com/theandersonn)