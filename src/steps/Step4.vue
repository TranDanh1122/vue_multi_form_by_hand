<script setup lang="ts">
import type { FormData } from '@/type';
import { computed } from 'vue';
const props = defineProps<{ values: FormData }>()
const total = computed(() => {
    const planPrice = props.values.plan.price
    const addOnsPrice = props.values.addOns.reduce((sum, el) => sum += Number(el.price), 0)
    return Number(planPrice) + addOnsPrice
})
const unit = computed(() => {
    return props.values.duration == '1' ? 'yr' : 'mo'
})
const emit = defineEmits()

</script>
<template>
    <div class='flex flex-col gap-6'>
        <div class='flex flex-col gap-3'>
            <h1 class='text-denim heading'>Finishing up</h1>
            <p class='body_l text-grey'>Double-check everything looks OK before confirming.</p>
        </div>
        <div class='flex flex-col'>
            <div class='flex flex-col bg-very_light_grey'>
                <div class='flex justify-between items-center p-6 '>
                    <div>
                        <h2 class=' font-medium text-denim capitalize'>{{ values.plan.name }} ({{ values.duration == "1"
                            ? "Yearly" : "Monthly" }})</h2>
                        <span @click="emit('changeAction')" class='underline body_m text-grey cursor-pointer hover:text-purple'>Change</span>
                    </div>
                    <span class='font-bold'>${{ values.plan.price }}/{{ unit }} </span>
                </div>

                <div v-for="(addOn) in values.addOns" :key="addOn.name"
                    class='flex justify-between items-center px-6 py-3 '>
                    <span class='body_m text-grey cursor-pointer capitalize'>{{ addOn.name }}</span>
                    <span class='body_m'> ${{ addOn.price }} / {{ unit }}</span>
                </div>

            </div>
            <div class='flex justify-between items-center px-6 py-3 '>
                <span class='body_m text-grey cursor-pointer'>Total (per {{ values.duration == '1' ? 'year' :
                    'month' }})</span>
                <span class='text-[1.25rem] leading-5 text-purple font-bold'>+${{ total }}/ {{ unit }}</span>
            </div>
        </div>
    </div>
</template>