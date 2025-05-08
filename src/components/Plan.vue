<script setup lang="ts">
import type { PlanData } from '@/type';
import { Field } from 'vee-validate';
defineProps<{ name: string, plan: PlanData }>()
</script>
<template>
    <Field :name="name" v-slot="{ field, setValue }">
        <div @click="() => { setValue({ name: plan.name, price: plan.computedPrice }) }" :class="`rounded-lg w-full md:px-4 md:py-5 p-3 border border-solid 
                flex items-center gap-4 justify-start cursor-pointer md:block
                ${(field.value?.name ?? '') == plan.name ? 'border-purple bg-very_light_grey' : 'border-border'}`">


            <img :src="plan.image" :alt="plan.name" class="w-10 h-10 object-cover rounded-full" />
            <div>
                <h2 class="text-denim font-medium md:mt-10">{{ plan.name }}</h2>
                <span class=" text-grey block">{{ plan.computedPriceStr }}</span>
                <span
                    :class="`body-s text-denim transition-opacity duration-150 ease-linear ${plan.bonus ? 'opacity-100' : 'opacity-0'}`">
                    {{ plan.bonus }}</span>
            </div>

        </div>
    </Field>

</template>