<script setup lang="ts">
import type { AddOnData, ExtraData } from '@/type';
import { Field, useField } from 'vee-validate';
import { computed } from 'vue';
const props = defineProps<{ name: string, addon: AddOnData }>()
const { value: addOns, setValue } = useField('addOns')
const isPicked = computed(() => {
    return (addOns.value as ExtraData[]).some((el: ExtraData) => el.name == props.addon.name)
})
const handleClick = (addOns: ExtraData[], newVal: ExtraData) => {
    let newAddOns = [...addOns]
    if (isPicked.value) {
        newAddOns = newAddOns.filter(el => el.name != newVal.name)
    } else {
        newAddOns.push(newVal)
    }
    setValue(newAddOns)
}
</script>
<template>
    <Field :name="name" v-slot="{ field }">
        <div @click="handleClick(field.value, { name: addon.name, price: addon.computedPrice ?? '' })" :class="`cursor-pointer flex justify-start items-center md:px-6 md:py-5 p-3 gap-6 w-full border rounded-lg
            ${isPicked ? 'border-purple bg-very_light_grey' : 'border-grey'}`">
            <div :class="`size-5 rounded-sm flex items-center justify-center ${isPicked ? 'bg-purple' : 'bg-white border border-border'} `">
                <img v-if="isPicked" src="/images/icon-checkmark.svg" alt="object-cover size-2.5">
            </div>
            <div class="flex flex-col gap-2">
                <h2 class=' font-medium text-denim'>{{ addon.name }}</h2>
                <span class='body_m text-grey'>{{ addon.desc }}</span>
            </div>
            <span class='ml-auto m text-purple'>+ {{ addon.computedPriceStr }} </span>
        </div>
    </Field>

</template>