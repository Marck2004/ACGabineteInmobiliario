import { defineCollection, z } from "astro:content";

const properties = defineCollection({
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        tipo: z.string(),
        referencia: z.string(),
        direccion: z.string(),
        videos: z.array(z.string()).nullable(),
        imagenes: z.array(z.string()),
        caracteristicas: z.object({
            extras: z.array(z.string()),
            estancias: z.number(),
            baños: z.number(),
            precioPormetro: z.number(),
            superficie: z.number(), //filtro aqui
            areaDeParcela: z.number(),
            pisos: z.number(),
            añoConstruccion: z.number(),
            precio: z.string()
        }),
        certificacionEnergetica: z.object({
            consumo: z.string(),
            emisionesCo2: z.string()
        })
    })
})

const blogProperties = defineCollection({
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        fecha: z.string(),
        compañia: z.string()
    })
})

export const collections = { properties, blogProperties}