# Svelte-outside

[![npm version](https://flat.badgen.net/npm/v/svelte-outside?color=orange)](https://npmjs.com/package/svelte-outside)

A svelte use directive for click/tap outside an element.

## Installation

```bash
npm install svelte-outside
```

## Usage

**Click outside**
```svelte
<script lang="ts">
	import { clickOutside } from "svelte-outside"
</script>

<div use:clickOutside={(e) => console.log("Clicked outside!")}>
  Click outside me!
</div>
```

**Tap outside**
```svelte
<script lang="ts">
	import { tapOutside } from "svelte-outside"
</script>

<div use:tapOutside={(e) => console.log("Tap outside!")}>
  Tap outside me!
</div>
```
