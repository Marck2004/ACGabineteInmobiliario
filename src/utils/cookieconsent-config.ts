import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom center',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
      // services: {
      //   cc_cookie: {
      //     cookies: [
      //       {
      //         name: /^_ga/,
      //       },
      //     ],
      //     onAccept: () => {
      //       console.log('servicio cc_cookie aceptado');
      //     }
      //   }
      // }
    },
    functionality: {
      enabled: false,
      // services: {
      //   'chat_tool': {
      //     onAccept: () => {
      //       console.log('servicio chat_tool aceptado');
      //     }
      //   }
      // }
    },
    analytics: {
      enabled: false,
      // services: {
      //   'google_analytics': {
      //     onAccept: () => {
      //       console.log('servicio google_analytics aceptado');
      //     }
      //   }
      // }
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Uso de cookies en el sitio web",
          description:
            `Este sitio web utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En general, estas tecnologías pueden servir para finalidades muy diversas, como, por ejemplo, reconocerte como usuario, obtener información sobre tus hábitos de navegación, o personalizar la forma en que se muestra el contenido. Los usos concretos que hacemos de estas tecnologías se describen en la Política de Cookies del sitio Web. Puedes retirar tu consentimiento u oponerte al procesamiento de datos según el interés legítimo en cualquier momento en la opción Gestionar Cookies y en la Política de Cookies y Política de Privacidad del sitio web.`,
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          showPreferencesBtn: 'Configurar preferencias'
        },
        preferencesModal: {
          title: 'Configurar preferencias de Cookies',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          savePreferencesBtn: 'Configurar preferencias',
          closeIconLabel: 'Cerrar modal',
          sections: [
            {
              title: 'Información general sobre cookies del sitio web',
              description:
                'Este sitio web usa cookies. Las usamos para mejorar tu experiencia en nuestros sitios web y también con fines de análisis y de marketing. Respetamos tu privacidad, por lo que te damos la opción de rechazar ciertos tipos de cookies. Haz clic en cada categoría para obtener más información y cambiar tus preferencias. Al bloquear ciertos tipos de cookies, es posible que esto afecte tu experiencia en el sitio web y limite los servicios que te podemos prestar.',
            },
            {
              title:
                'Cookies estrictamente necesarias',
              description:
                `<table style="border-collapse: collapse; width: 100%; font-size: 0.875rem;">
              <thead style="background-color: #f3f4f6;">
                <tr>
                  <th style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem; text-align: left;">Cookie</th>
                  <th style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem; text-align: left;">Dominio</th>
                  <th style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem; text-align: left;">Duración</th>
                  <th style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem; text-align: left;">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem;">cc_cookie</td>
                  <td style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem;">www.acgabineteinmobiliario.com</td>
                  <td style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem;">6 meses</td>
                  <td style="border: 1px solid #d1d5db; padding: 0.25rem 0.5rem;">
                    Permite preservar los ajustes realizados en esta herramienta de configuración de cookies.
                  </td>
                </tr>
                </tr>
              </tbody>
              </table>
                Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. De forma general, solo se utilizan en acciones como cuando solicita servicios, establece sus preferencias de privacidad, inicia sesión o completa formularios. Puede configurar su navegador para bloquear o alertar sobre estas cookies, pero algunas partes de la web no funcionarán. Estas cookies no almacenan ninguna información de identificación personal.`,
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de funcionalidad',
              description:
                'Utilizamos un conjunto de cookies que son opcionales para que el sitio web funcione. Normalmente, solo se establecen en respuesta a la información proporcionada al sitio web para personalizar y optimizar tu experiencia. Por ejemplo: habilitar la herramienta de chat.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies analíticas',
              description:
                'Estas cookies nos permiten cuantificar el número de visitas y fuentes de tráfico para poder evaluar el rendimiento de nuestro sitio y mejorarlo. Nos ayudan a saber qué páginas son las más o las menos visitadas y de qué manera los visitantes navegan por el sitio.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Cookies de publicidad',
              description:
                'Utilizamos cookies para hacer que nuestros anuncios sean más atractivos y valiosos para los visitantes del sitio. Algunas aplicaciones comunes de las cookies son seleccionar publicidad en función de lo que sea relevante para un usuario; mejorar los informes sobre el rendimiento de la campaña publicitaria; y evitar mostrar anuncios que el usuario ya ha visto.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Más información',
              description:
                'Para ampliar la información o realizar consultas sobre las Cookies o políticas del sitio web, por favor <span class="hover:underline hover:text-[#c22a24] font-bold">póngase en contacto.</span>',
            },
          ],
        },
      },
    },
  },
};