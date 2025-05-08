<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import type { InputProps } from '@/type';
defineProps<InputProps>()
</script>
<template>
    <fieldset class='flex flex-col gap-y-2 gap-2'>
        <div class="flex items-center justify-between">
            <label for="name" class='text-denim font-bold body_m'>{{ label }}</label>
            <ErrorMessage :name="name" class="text-red_err font-bold body_m" />
        </div>

        <Field :name="name" v-slot="{ field }">
            <input type="text" v-bind="field" :placeholder="placeHolder"
                class="`w-full font-medium l border border-border placeholder:text-grey  px-4 py-3 rounded-md min-h-[3rem] focus-visible:outline-0 focus-visible:border-purple cursor-pointer`" />
        </Field>

    </fieldset>
</template>