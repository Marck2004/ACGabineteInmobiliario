import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

export async function sendEmail(data: {
	name: string;
	email: string;
	phone: string;
	serviceType?: string;
	details?: string;
}) {

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
	const logoPath = path.resolve("./public/logo-landing.webp");

	const htmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #c22a24; margin-bottom: 10px;">Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.phone}</p>
    ${data.serviceType ? `<p><strong>Tipo de servicio:</strong> ${data.serviceType}</p>` : ""}
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
    <p style="font-size: 16px;"><strong>Detalles:</strong></p>
    <p style="white-space: pre-wrap;">${data.details || "Sin detalles adicionales."}</p>
    <p style="font-size: 16px;"><strong>Tipo servicio:</strong></p>
    <p style="white-space: pre-wrap;">${data.serviceType || "No hay tipo de servicio."}</p>
      <img src="cid:logo-landing" alt="Imagen logo inmobiliaria" style="max-width:100%;">
  </div>
  `;

	const mailOptions = {
		from: data.email,
		to: process.env.EMAIL_USER,
		subject: `Nuevo mensaje de ${data.name}`,
		html: htmlContent,
		attachments: [
			{
				filename: "logo-landing.webp",
				path: logoPath,
				cid: "logo-landing",
			},
		],
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error("Error al enviar el correo:", error);
		return { success: false, error };
	}
}
