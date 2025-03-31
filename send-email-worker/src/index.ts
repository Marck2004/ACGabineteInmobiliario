/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const apiKey = env.RESEND_API_KEY;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "tu-email@tudominio.com",
        to: "marcosmaestrocobo@gmail.com",
        subject: "Prueba de email desde Cloudflare Worker",
        html: "<h1>¡Hola!</h1><p>Este es un correo enviado desde un Worker.</p>"
      })
    });

    return new Response(await response.text(), { status: response.status });
	},
} satisfies ExportedHandler<Env>;
