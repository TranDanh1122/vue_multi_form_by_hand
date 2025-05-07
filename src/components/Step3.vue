<script setup lang="ts">
import AddOns from "./AddOns.vue"
</script>
<template>
     <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <h1 class="text-[var(--marine-blue)] heading">Pick add-ons</h1>
                <p class="l text-[var(--cool-gray)]">Add-ons help enhance your gaming experience.</p>
            </div>
            <div class="flex flex-col gap-4 w-full">
                <AddOns  />
                <AddOns  />
                <AddOns />
            </div>
            <span class="text-center l text-[var(--strawberry-red)] font-bold">{error.add_ons}</span>

        </div>
</template>