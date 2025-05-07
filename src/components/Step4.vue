<script setup lang="ts">
</script>
<template>
     <div class='flex flex-col gap-6'>
            <div class='flex flex-col gap-3'>
                <h1 class='text-[var(--marine-blue)] heading'>Finishing up</h1>
                <p class='l text-[var(--cool-gray)]'>Double-check everything looks OK before confirming.</p>
            </div>
            <div class='flex flex-col'>
                <div class='flex flex-col bg-[var(--magnolia)]'>
                    <div class='flex justify-between items-center p-6 '>
                        <div>
                            <h2 class=' font-medium text-[var(--marine-blue)] capitalize'>{data.step2.plan.name} ({data.step2.duration == "1" ? "Yearly" : "Monthly"})</h2>
                            <span  class='underline m text-[var(--cool-gray)] cursor-pointer'>Change</span>
                        </div>
                        <span class=' font-bold'>{data.step2.duration == "1" ? `$${data.step2.plan.yearVal}/yr` : `$${data.step2.plan.monthVal}/mo`} </span>
                    </div>
                    <!-- {
                        data.step3.add_ons.map(add => {
                            return <div class='flex justify-between items-center px-6 py-3 '>
                                <span class='m text-[var(--cool-gray)] cursor-pointer capitalize'>{add.name}</span>
                                <span class='m'>{data.step2.duration == "1" ? `+$${add.yearVal}/yr` : `+$${add.monthVal}/mo`}</span>
                            </div>
                        })
                    } -->
                </div>
                <div class='flex justify-between items-center px-6 py-3 '>
                    <span class='m text-[var(--cool-gray)] cursor-pointer'>Total (per month)</span>
                    <span class='text-[1.25rem] leading-5 text-[var(--purplish-blue)] font-bold'>+${total}/{data.step2.duration == "1" ? "mo" : "yr"}</span>
                </div>
            </div>
        </div>
</template>