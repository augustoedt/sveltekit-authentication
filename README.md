# Svelte.kit Authentication

## How it authenticates:

Basically the application after a succefull login its saves a cookie that its checked if exist on every application request by `hooks.server.ts`. When you try to access private data through url, its automatically check if you have a token and if it grants you access to read it. This access control can be made by `+page.server.ts` for each page.

## Creating user type:

The first step to event.locals recognize user its to create a User type on `./src/lib/types.ts` and register user type on `./src/app.d.ts`

```typescript
// ./src/app.d.ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user: import('$lib/types').User | undefined;
	}
	// interf`ce PageData {}
	// interface Platform {}
}
```

## Create `./src/hooks.server.ts`

This file will run when the application starts up. Inside the hooks.server.ts, handle function tries to get jwt cookie that its created when you successful log in `./src/pages/login/+page.svelte`

```typescript
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt');
	event.locals.user = jwt && JSON.parse(atob(jwt));
	const response = await resolve(event);
	return response;
};
```

## On protected routes create `page.server.ts`

In this example profile its a protected route, to prevent unauthorized access
the logic can be made like the example bellow:

```typescript
export const load: PageServerLoad = ({ locals }) => {
	if (!locals.user) throw redirect(302, '/login');
	return {
		user: locals.user
	};
};
```

