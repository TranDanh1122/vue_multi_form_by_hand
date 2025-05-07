<script setup lang="ts">
import Input from "./Input.vue"
</script>
<template>
     <div class='flex flex-col gap-10'>
            <div class='flex flex-col gap-3'>
                <h1 class='text-[var(--marine-blue)] heading'>Personal info</h1>
                <p class='l text-[var(--cool-gray)]'>Please provide your name, email address, and phone number.</p>
            </div>
            <div class='flex flex-col gap-6'>
                <Input  />
                <Input />
                <Input />
            </div>
        </div>
</template>