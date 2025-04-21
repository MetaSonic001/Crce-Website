// files.ts

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || ''

export const getAssetUrl = (filename: string) => `${ASSET_BASE_URL}${filename}`

// Example exports
export const college_pic = getAssetUrl('19ccb648-bd2c-4dac-bdf7-9d66b0636fe9')

export const intro = getAssetUrl('2262efeb-9668-4174-9ce4-539ed451a427')
