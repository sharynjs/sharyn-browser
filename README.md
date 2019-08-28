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
