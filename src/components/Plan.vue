<script setup lang="ts">
import type { PlanData } from '@/type';
import { Field, useField } from 'vee-validate';
import { watch } from 'vue';
defineProps<{ name: string, plan: PlanData }>()
</script>
<template>
    <Field :name="name" v-slot="{ field, setValue }">
        <div @click="() => { setValue({ name: plan.name, price: plan.computedPrice }) }" :class="`rounded-lg w-full px-4 py-5 border border-solid 
                mb:flex mb:items-center mb:gap-4 mb:justify-start cursor-pointer
                ${(field.value?.name ?? '') == plan.name ? 'border-purple bg-very_light_grey' : 'border-border'}`">


            <img :src="plan.image" :alt="plan.name" class="w-10 h-10 object-cover rounded-full" />
            <div>
                <h2 class="text-denim font-medium mt-10">{{ plan.name }}</h2>
                <span class=" text-grey block">{{ plan.computedPriceStr }}</span>
                <span
                    :class="`body-s text-denim transition-opacity duration-150 ease-linear ${plan.bonus ? 'opacity-100' : 'opacity-0'}`">
                    {{ plan.bonus }}</span>
            </div>

        </div>
    </Field>

</template>