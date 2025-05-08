<script setup lang="ts">
import { Input } from "@/components"
</script>
<template>

    <div class='flex flex-col gap-10'>
        <div class='flex flex-col gap-3'>
            <h1 class='text-denim heading'>Personal info</h1>
            <p class='body_l text-grey'>Please provide your name, email address, and phone number.</p>
        </div>
        <div class='flex flex-col gap-6'>
            <Input name="name" label="Name" placeHolder="e.g. Stephen King" />
            <Input name="email" label="Email" placeHolder="e.g. stephenking@lorem.com" />
            <Input name="phone" label="Phone Number" placeHolder="e.g. +1 234 567 890" />
        </div>
    </div>


</template>