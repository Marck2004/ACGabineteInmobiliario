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

import { Resend } from 'resend';
// import { EmailTemplate } from './emails/email-template';

export default {
  async fetch(request: Request): Promise<Response> {
    const resend = new Resend('re_gBaL7VH1_1kt2ki3XKSn1ujZowPF9bARm');
    const data = await resend.emails.send({
      from: 'marcosmaestrocobo@gmail.com',
      to: ['marcosmaestrocobo@gmail.com'],
      subject: 'hello world',
      react: 'Hello',
    });
    return Response.json(data);
  }

}satisfies ExportedHandler<Env, ExecutionContext>;
