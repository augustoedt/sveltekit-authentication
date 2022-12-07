<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>PROFILE PAGE</h1>

<p>Welcome {data.user.name}!</p>

<form use:enhance method="POST" action="?/logout">
	<button class="btn btn-outline-danger">Or click here to logout.</button>
</form>
