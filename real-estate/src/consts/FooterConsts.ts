import Buildings from "@/assets/svg/Buildings.astro";
import Pencil from "@/assets/svg/Pencil.astro";
import type { footerItemsInterface } from "@/interfaces/FooterItemsInterface";

export const footerConsts: footerItemsInterface[] = [
    {
        title : 'Legal',
        childs : [{name: 'Política de privacidad', url: "/Política_de_privacidad"}, {name: 'Aviso legal', url: "/Aviso_legal"}, {name: 'Política de cookies', url: "/Política_de_cookies"}, {name: 'Preferencias de cookies', isModal: true}],
    },
    {
        title : 'Links de ayuda',
        childs : [{name: 'Últimos inmuebles', url: '/'}, {name: 'Anuncios destacados', url: '/'}, {name: 'Buscar inmuebles', url: '/'}, {name: 'Nuestro equipo', url: '/#team'}]
    },
    {
        title : 'Información de contacto',
        childs : [{name: 'Formulario de contacto', svg: Pencil, url: '/contacto'}, { name: 'Nuestras oficinas', svg: Buildings, url: 'https://maps.google.com/?cid=2421549759704066347'}]
    }
]