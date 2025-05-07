<script setup lang="ts">
import Plan from "./Plan.vue"
</script>
<template>
    <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <h1 class="text-[var(--marine-blue)] heading">Select your plan</h1>
                <p class="l text-[var(--cool-gray)]">You have the option of monthly or yearly billing.</p>
            </div>
            <div class="flex gap-4 mb:flex-col ">
                <Plan  />
                <Plan  />
                <Plan  />
            </div>
            <Duration />
            <span class="text-center l text-[var(--strawberry-red)] font-bold">{error.plan}</span>
        </div>
</template>