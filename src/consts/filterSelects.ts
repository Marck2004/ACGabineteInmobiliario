import type { filterSelectsInterface } from "@/interfaces/filterSelectsInterface";

export const filterSelects: filterSelectsInterface[] =
[
    {name: "Precio", maxLength: 4000000, minLength: 20000, frequency: 20000},
    {name: "Estancias", maxLength: 10, minLength: 1, frequency: 1},
    {name: "Baños", maxLength: 10, minLength: 1, frequency: 1},
    {name: "Superficie", maxLength: 1000, minLength: 20, frequency: 20}
]