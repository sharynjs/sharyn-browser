# 🌹 @sharyn/browser

## clearCaches

**`clearCaches(reload=false, hardReload=true)`**: Clears all the [`caches`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) used by service workers.

```jsx
const UpdateBanner = () => (
  <div>
    A new version of the app is available!
    <a onClick={() => clearCaches(true)}>Click here to update</a>
  </div>
)
```

## getFormData

**`getFormData(formElement, omitEmptyFields=false)`**: Gives you the `FormData` of a `form` element.

```jsx
const Form = () => {
  const form = useRef(null)
  return (
    <>
      <form ref={form}>
        <input name="firstname" />
        <input name="lastname" />
      </form>
      <button onClick={() => console.log(getFormData(form.current))}>
        Log all form values
      </button>
      <button onClick={() => console.log(getFormData(form.current, true))}>
        Log truthy form values
      </button>
    </>
  )
}
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>@sharynjs/sharyn</b></a>.
</p>
