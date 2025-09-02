# Svelte-outside

[![npm version](https://flat.badgen.net/npm/v/svelte-outside?color=orange)](https://npmjs.com/package/svelte-outside)

A svelte use directive for click/tap outside an element.

## Installation

```bash
npm install svelte-outside
```

## Usage

```svelte
<script lang="ts">
  import { clickOutside, tapOutside } from "svelte-outside"
</script>

<div use:clickOutside={(e) => console.log("Clicked outside!")}>
  Content
</div>
```

Example usage [Svelte Playground](https://svelte.dev/playground/3c3162a857324d0db0f8bdf7fa4845d3?version=latest)
