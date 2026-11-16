<template>
  <h1>Hello App!</h1>

  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <nav>
    <RouterLink to="/">Go to ToDo</RouterLink> |
    <RouterLink to="/modals">Go to Modals</RouterLink> |
    <RouterLink to="/buttons">Go to Buttons</RouterLink> |
    <RouterLink to="/messages">Go to Messages</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>