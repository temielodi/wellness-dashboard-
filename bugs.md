# Bugs List

## Bug 1 - On running the application, the app crashes displaying an error that looks like this

```
Error:   × Unexpected token `div`. Expected jsx identifier
```

## Bug 2 - on home page, click the Get Started or the Go to Dashboard button to visit the /dashboard page, the error below pops up.

```
Error:   Error: savedGoals is not defined.
```

## Bug 3 - On running the application, the app crashes displaying a runtime error that looks like this -

```
Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead.
```

## Bug 4 - on dashboard page, navigate to the progress page, the error below pops up.

```
Error:   ReferenceError: CardHeader is not defined.
```

## Bug 5 - On the goals page, clicking the increase button on the first goal doesnt work, you also see that the progress shows NaN.

## Bug 6 - When you increase progress with one goal, it seems to affect other goal cards.

```
Encountered two children with the same key, `5`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
```

## Bug 7 - on goals page, click the increase button and the progress percentage goes down instead of increasing by 1%.

## Bug 8 - After adding a new goal, the added goal doesn't persist on the page.
