<script setup lang="ts">
import { MultiStepForm } from "@/features"
import { Step1, Step2, Step3, Step4 } from "@/steps"
import type { FormData } from "@/type";
</script>

<template>
    <div class="w-full md:h-screen h-max  flex items-center justify-center bg-bg py-20">
        <MultiStepForm v-slot="{ step, values, changeAction }">
            <Step1 v-if="step == 1"></Step1>
            <Step2 v-if="step == 2"></Step2>
            <Step3 v-if="step == 3"></Step3>
            <Step4 :values="values as FormData" @changeAction="changeAction" v-if="step == 4"></Step4>
        </MultiStepForm>
    </div>

</template>

<style scoped></style>
