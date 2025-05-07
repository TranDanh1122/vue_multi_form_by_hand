<script setup lang="ts">
</script>
<template>
            <div :class="`rounded-lg w-full px-4 py-5 border-[1px] border-solid mb:flex mb:items-center mb:gap-4 mb:justify-start ${'border-[var(--light-gray)]'}
                ${'border-[var(--purplish-blue)] bg-[var(--magnolia)]'}`">
            <img src="" alt="" class="w-10 h-10 object-cover rounded-full" />
            <div>
                <h2 class="text-[var(--marine-blue)] font-medium mt-10">{title}</h2>
                <span class=" text-[var(--cool-gray)] block">${duration == "0" ? monthvalue : yearvalue}/{duration == "0" ? "mo" : "yr"}</span>
                <span :class="`body-s text-[var(--marine-blue)] transition-opacity duration-150 ease-linear 
                    ${'opacity-0'}
                    ${'opacity-100'}`">2 months free</span>
            </div>

        </div>
</template>