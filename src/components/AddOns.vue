<script setup lang="ts"></script>
<template>
     <div :class="`flex justify-start items-center px-6 py-5 gap-6 w-full border-[1px] border-solid rounded-lg ${'border-[var(--light-gray)]'}
            ${'border-[var(--purplish-blue)] bg-[var(--alabaster)]'}`">
            <input type="checkbox" :checked="true" />
            <div class="flex flex-col gap-2">
                <h2 class=' font-medium text-[var(--marine-blue)]'>{title}</h2>
                <span class='m text-[var(--light-gray)]'>{desc}</span>
            </div>
            <span class='ml-auto m text-[var(--purplish-blue)]'>+${duration == "1" ? yearvalue : monthvalue}/{duration == "1" ? "yr" : "mo"} </span>
        </div>
</template>