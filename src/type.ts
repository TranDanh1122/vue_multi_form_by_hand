export interface InputProps {
    name: string,
    label: string,
    placeHolder: string
}
export interface StepProps {
    step: number,
    title: string
}
export interface ExtraData {
    name: string,
    price: string
}
export interface DurationProps {
    name: string,
}
export interface FormData {
    name: string,
    email: string,
    phone: string,
    plan: ExtraData,
    duration: string,
    addOns: ExtraData[]
}
export interface PlanData {
    name: string,
    price: string,
    priceYrs: string,
    bonus: string,
    bonusYrs: string,
    image: string,
    computedPrice?: string,
    computedPriceStr?: string,
}
export interface AddOnData {
    name: string,
    price: string,
    priceYrs: string,
    desc : string,
    computedPrice?: string,
    computedPriceStr?: string,
}