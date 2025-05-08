<script setup lang="ts">
import { AddOns } from '@/components';
import { ADDONS_DATA } from '@/ults/const';
import { formatPrice } from '@/ults/formatPrice';
import { useField, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';
const { value: duration } = useField('duration')
const formatedData = computed(() => {
    return ADDONS_DATA.map((el) => {
        const priceByDuration = duration.value == 0 ? el.price : el.priceYrs
        const formattedPrice = formatPrice(priceByDuration)
        const priceStr = `${formattedPrice}/${duration.value == 0 ? "mth" : "yrs"}`
        return {
            ...el,
            computedPrice: priceByDuration,
            computedPriceStr: priceStr,

        }
    })
})
</script>
<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
            <h1 class="text-denim heading">Pick add-ons</h1>
            <p class="body_l text-grey">Add-ons help enhance your gaming experience.</p>
        </div>
        <div class="flex flex-col gap-4 w-full">
            <AddOns name="addOns" v-for="(addon) in formatedData" :key="addon.name" :addon />
        </div>
        <ErrorMessage name="addOns" class="text-center body_l text-red_err font-bold" />
    </div>
</template>