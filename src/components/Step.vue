<script setup lang="ts">
</script>
<template>
     <div class='flex items-center justify-start gap-4'>
            <h3 :class="` w-8 h-8 font-bold flex items-center justify-center rounded-full' ${'bg-[var(--light-blue)] text-[var(--marine-blue)]'},
                ${'bg-transparent border-[1px] border-solid border-white text-white'} `">{step.step}</h3>
            <div class='flex flex-col uppercase mb:hidden'>
                <h3 class='text-[var(--light-blue)] s '>Step {step.step}</h3>
                <h2 class='text-white font-bold m'>{step.title}</h2>
            </div>
        </div>
</template>