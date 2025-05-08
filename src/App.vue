<script setup lang="ts">
import { MultiStepForm } from "@/features"
import { Step1, Step2, Step3, Step4 } from "@/steps"
import type { FormData } from "@/type";
</script>

<template>
    <div class="w-full h-screen  flex items-center justify-center bg-bg py-20">
        <MultiStepForm v-slot="{ step, values }">
            <Step1 v-if="step == 1"></Step1>
            <Step2 v-if="step == 2"></Step2>
            <Step3 v-if="step == 3"></Step3>
            <Step4 :values="values as FormData" v-if="step == 4"></Step4>
        </MultiStepForm>
    </div>

</template>

<style scoped></style>
