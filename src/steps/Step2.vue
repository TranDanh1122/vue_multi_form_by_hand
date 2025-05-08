<script setup lang="ts">
import { Plan, Duration } from '@/components'
import { PLAN_DATA } from '@/ults/const';
import { formatPrice } from '@/ults/formatPrice';
import { useField, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';
const { value: duration } = useField('duration')
const formatedData = computed(() => {
    return PLAN_DATA.map(plan => {
        const priceByDuration = duration.value == 0 ? plan.price : plan.priceYrs
        const formattedPrice = formatPrice(priceByDuration)
        const priceStr = `${formattedPrice}/${duration.value == 0 ? "mth" : "yrs"}`
        const bonus = duration.value == 0 ? plan.bonus : plan.bonusYrs
        return {
            ...plan,
            computedPrice: priceByDuration,
            computedPriceStr: priceStr,
            bonus: bonus
        }
    })
})
</script>
<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
            <h1 class="text-denim heading">Select your plan</h1>
            <p class="l text-grey">You have the option of monthly or yearly billing.</p>
        </div>
        <div class="flex gap-4 mb:flex-col ">

            <Plan name="plan" v-for="(plan) in formatedData" :plan="plan" :key="plan.name" />
        </div>
        <Duration name="duration" />
        <ErrorMessage name="plan" class="text-red_err body_m font-bold mx-auto" />
    </div>
</template>