<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { Step } from "../components"
import { step1Schema, step2Schema } from "@/schema/schema";
import { computed, reactive, ref, watch, watchEffect } from "vue";
import * as yup from 'yup'
import type { AddOnData, ExtraData, FormData } from "@/type";
import { ADDONS_DATA, PLAN_DATA } from "@/ults/const";
const steps = [
    { step: 1, title: "your info" },
    { step: 2, title: "select plan" },
    { step: 3, title: "add-ons" },
    { step: 4, title: "summary" }
]
const currentStep = ref(1)

const formData = reactive<FormData>({ //lưu lại data cho khỏi mất mỗi khi chuyến step, xử lí thêm vì dùng v-if, ko phải v-show (v-show gây quá tải dom)
    name: "",
    email: "",
    phone: "",
    plan: { name: "", price: "" },
    duration: "1",
    addOns: []
})
const schema = computed(() => {
    return currentStep.value == 1 ? step1Schema : (currentStep.value == 2 ? step2Schema : yup.object())
})
const { handleSubmit, setValues, values } = useForm({
    validationSchema: schema,
    initialValues: formData
})

const submit = handleSubmit(values => {
    const step = currentStep.value
    if (step < 4) {
        currentStep.value = step + 1
    }
    Object.assign(formData, values)
    setValues(formData) //set data vào form data khi chuyển step
})
const handleBack = () => {
    const step = currentStep.value
    if (step > 1)
        currentStep.value = step - 1
    Object.assign(formData, values)
    setValues(formData)
}
const { value: duration } = useField('duration')
const { value: plan, setValue: setPlan } = useField('plan')
const { value: addOns, setValue: setAddOn } = useField('addOns')


watch(duration, (newDuration) => {

    const planData = PLAN_DATA.find(el => el.name == ((plan.value as ExtraData).name ?? ""))
    if (planData) {
        setPlan({ name: planData.name, price: newDuration == "1" ? planData.priceYrs : planData.price })
        Object.assign(formData , planData)
    }
    const newAddOns = (addOns.value as ExtraData[]).map((add: ExtraData) => {
        const addOnData = ADDONS_DATA.find(el => el.name == add.name) as AddOnData
        return {
            name: addOnData?.name,
            price: newDuration == "1" ? addOnData.priceYrs : addOnData.price
        }
    })

    if (newAddOns) {
        setAddOn(newAddOns)
        Object.assign(formData , newAddOns)
    }
}, { flush: 'sync' })
</script>
<template>
    <div class="w-3/5 h-6/7 md:min-h-[600px] bg-white rounded-lg flex justify-start">
        <div class='md:w-1/3 w-full 
        md:bg-[url(./images/bg-sidebar-desktop.svg)] 
        bg-cover bg-no-repeat bg-center
        bg-[url(./images/bg-sidebar-mobile.svg)] 
        h-full flex flex-col mb:flex-row gap-8 px-8 py-10'>
            <Step v-for="(step) in steps" :step="step.step" :title="step.title">
                <template v-slot:step>
                    <h3
                        :class="` w-8 h-8 font-bold flex items-center justify-center rounded-full 
                    ${currentStep == step.step ? 'bg-sky_blue text-denim' : 'bg-transparent border border-white text-white'} `">
                        {{ step.step }}
                    </h3>
                </template>
            </Step>
        </div>

        <form @submit="submit" class="px-25 pt-14 pb-8 w-2/3">
            <slot :step="currentStep" :values></slot>
            <div class="flex items-center mt-24">
                <button type="button" @click="handleBack" v-if="currentStep > 1" class="body_l text-grey cursor-pointer">Go
                    Back</button>
                <button type="submit" v-if="currentStep < 4"
                    class="body_l text-white bg-denim px-6 py-4 rounded-md ml-auto font-bold cursor-pointer">Next
                    Step</button>
            </div>
        </form>

    </div>
</template>