import type { filterWithChilds } from "@/interfaces/filterWithChildsInterface";

export const filterWithChildsConst: filterWithChilds[] = [
    {name: "Operación", childs: ["Venta"]},
    {name: "Tipo", childs: ["Vivienda", "Piso", "Casa / Chalet", "Local", "Nave industrial"]}
]