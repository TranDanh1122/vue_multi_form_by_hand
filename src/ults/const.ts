import type { AddOnData, PlanData } from "@/type"

export const REG_PHONE = /^0\d{9}$/
export const PLAN_DATA: PlanData[] = [
    {
        name: "Arcade",
        price: "9",
        priceYrs: "90",
        bonus: "",
        bonusYrs: "2 months free",
        image: "/images/icon-arcade.svg"
    },
    {
        name: "Advanced",
        price: "12",
        priceYrs: "120",
        bonus: "",
        bonusYrs: "3 months free",
        image: "/images/icon-advanced.svg"
    },
    {
        name: "Pro",
        price: "15",
        priceYrs: "150",
        bonus: "",
        bonusYrs: "4 months free",
        image: "/images/icon-pro.svg"
    }
]
export const ADDONS_DATA: AddOnData[] = [
    {
        name: "Online service",
        price: "1",
        priceYrs: "10",
        desc: "Access to multiplayer games"
    },
    {
        name: "Larger storage",
        price: "2",
        priceYrs: "20",
        desc: "Extra 1TB of cloud save"
    },
    {
        name: "Customizable profile",
        price: "2",
        priceYrs: "20",
        desc: "Custom theme on your profile"
    }
]
