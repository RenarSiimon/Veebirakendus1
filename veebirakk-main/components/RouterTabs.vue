<script setup>

<template>
    <div class="tabs is-centered">
        <ul>
            <template v-for="route in $router.getRoutes()" :key="route.path">
                <li v-if="route.name" :class="{ 'is-active': route.path === $route.path }">
                    <RouterLink :to="route.path">
                        {{ route.name }}
                    </RouterLink>
                </li>
            </template>
        </ul>
    </div>
</template>

<style scoped>

</style>