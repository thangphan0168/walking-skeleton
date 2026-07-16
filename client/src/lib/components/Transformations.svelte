<script>
  let countState = $state({
    count: 0,
    note: "single digits",
    numbers: []
  });

  const increment = () => {
    countState.count++;
    countState.numbers.push(countState.count);
    if (countState.count > 9) {
        countState.note = "not single digits"
    }

  };
</script>

<h1>Reactive objects</h1>
<button onclick={increment}>Increment count</button>
<p>Count: {countState.count} ({countState.note})</p>
<p>Total numbers: {countState.numbers.length}
<p>Sum: {countState.numbers.reduce((a, b) => a + b, 0)}</p>
