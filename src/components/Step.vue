<script setup lang="ts">
import type { StepProps } from '@/type';


defineProps<StepProps>()
</script>
<template>
    <div class='flex items-center justify-start gap-4'>
        <slot name="step"></slot>
        <div class='flex flex-col uppercase mb:hidden'>
            <h3 class='text-light_blue body_s'>Step {{ step }}
            </h3>
            <h2 class='text-white font-bold body_m tracking-[1px]'>
                {{ title }}
            </h2>
        </div>
    </div>
</template>