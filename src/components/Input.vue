<script setup lang="ts">
</script>
<template>
     <fieldset class='flex flex-wrap justify-between gap-y-2 gap-2'>
            <label for="name" class='m text-[var(--marine-blue)] font-bold'>{label}</label>
            <span class="text-right l text-[var(--strawberry-red)] font-bold">{error}</span>
            <input type="text"  class="`w-full font-medium l border-[1px] border-solid  px-4 py-3 rounded-md min-h-[3rem]`" />
        </fieldset>
</template>