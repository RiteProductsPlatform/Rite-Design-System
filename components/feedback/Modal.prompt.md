Centred dialog on a `rgba(6,33,26,.55)` scrim. 16px radius, sunken footer rail.

```jsx
<Modal open={open} onClose={close} title="Run full load?"
  description="This truncates the target tables before loading."
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button onClick={run}>Run load</Button></>}>
  …
</Modal>
```

Primary action last, on the right. Closes on scrim click and Escape.
