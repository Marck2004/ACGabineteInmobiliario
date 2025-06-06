import { defineCollection, z } from "astro:content";

const properties = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        area: z.number(),
        houseType: z.string(),
        reference: z.string(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        address: z.string(),
        videos: z.array(z.string()).nullable(),
        images: z.array(z.string()),
        features: z.object({
            extras: z.array(z.string()),
            pricePerMeter: z.number(),
            usableArea: z.number(),
            plotArea: z.number(),
            floors: z.number(),
            constructionYear: z.number(),
            totalPrice: z.string()
        }),
        energeticCertification: z.object({
            consumption: z.string(),
            co2Emissions: z.string()
        })
    })
})

const blogProperties = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        company: z.string()
    })
})

export const collections = { properties, blogProperties }