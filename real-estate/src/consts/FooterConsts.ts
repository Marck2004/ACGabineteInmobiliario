import Buildings from "@/assets/svg/Buildings.astro";
import Pencil from "@/assets/svg/Pencil.astro";
import type { footerItemsInterface } from "@/interfaces/FooterItemsInterface";

export const footerConsts: footerItemsInterface[] = [
    {
        title : 'Legal',
        childs : [{name: 'Política de privacidad'}, {name: 'Aviso legal'}, {name: 'Política de cookies'}, {name: 'Preferencias de cookies'}]
    },
    {
        title : 'Links de ayuda',
        childs : [{name: 'Últimos inmuebles'}, {name: 'Anuncios destacados'}, {name: 'Buscar inmuebles'}, {name: 'Nuestro equipo', url: '/#team'}]
    },
    {
        title : 'Información de contacto',
        childs : [{name: 'Formulario de contacto', svg: Pencil, url: '/contacto'}, { name: 'Nuestras oficinas', svg: Buildings, url: 'https://maps.google.com/?cid=2421549759704066347'}]
    }
]