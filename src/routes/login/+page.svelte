<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>LOGIN PAGE</h1>
<form method="POST">
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	<input name="email" type="email" />
	<input name="password" type="password" />
	<button>Log in</button>
</form>
