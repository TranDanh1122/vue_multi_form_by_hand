<script setup lang="ts">
import MultiStepForm from "./features/MultiStepForm.vue"
import { Step1, Step, Step2, Step3 } from "./components"
const steps = [
    { step: 1, title: "your info" },
    { step: 2, title: "select plan" },
    { step: 3, title: "add-ons" },
    { step: 4, title: "summary" }
]
</script>

<template>
    <div class="w-full h-full  min-w-screen min-h-screen flex items-center justify-center bg-bg">
        <MultiStepForm>
            <div class='w-1/3 mb:w-full bg-[url(./images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat bg-center
        mb:bg-[url(./images/bg-sidebar-mobile.svg)] 
        h-full flex flex-col mb:flex-row gap-8 px-8 py-10'>
                <Step v-for="(step) in steps" />

            </div>
            <!-- <Step1></Step1> -->
            <!-- <Step2></Step2> -->
            <Step3></Step3>
        </MultiStepForm>
    </div>

</template>

<style scoped></style>
