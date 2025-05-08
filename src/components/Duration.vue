<script setup lang="ts">
import type { DurationProps } from '@/type';
import { Field, ErrorMessage } from 'vee-validate';
defineProps<DurationProps>()

</script>
<template>
    <div class="flex items-center justify-center py-3 gap-6 bg-very_light_grey w-full rounded-md">
        <Field :name="name" v-slot="{ field }">
            <span :class="`font-bold ${field.value == '0' ? 'text-denim' : 'text-grey'}`">
                Monthly
            </span>
            <input type="range" min="0" max="1" v-bind="field"/>
            <span :class="`font-bold ${field.value == '1' ? 'text-denim' : 'text-grey'}`">
                Yearly
            </span>
        </Field>
    </div>
    <ErrorMessage :name="name" class="text-red_err body_m font-bold" />
</template>
<style scoped>
input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #022959;
    border-radius: 10px;
    max-width: 35px;
    padding: 2px;
}

input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
    appearance: none;
    -webkit-appearance: none;
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
</style>