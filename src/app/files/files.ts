// files.ts

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || ''

export const getAssetUrl = (filename: string) => `${ASSET_BASE_URL}${filename}`

// Example exports
export const college_pic = getAssetUrl('19ccb648-bd2c-4dac-bdf7-9d66b0636fe9')


//HomePage
export const intro = getAssetUrl('2262efeb-9668-4174-9ce4-539ed451a427')
export const adi = getAssetUrl('7d60cedb-cbb5-464e-bb7c-daca59b729be')
export const shaun = getAssetUrl('09886345-e9f0-4dcb-81d4-6a9c328ee99c')
export const sharu = getAssetUrl('8fb9a215-7879-48db-b2d6-48c1f4c12786')
export const zane = getAssetUrl('d466006a-1ba8-4b6a-b071-ce633250114b')


//about/governance
export const gov1 = getAssetUrl('8da50c8d-22a9-46e5-bde0-9cb7d898c473')
export const gov2 = getAssetUrl('c66b17a6-71a4-4a17-b844-134c79299e21')
