import nodemailer from 'nodemailer';

export async function sendEmail(data: { name: string; email: string; phone: string, serviceType: string,
    details:string }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: data.email,
    to: import.meta.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${data.name}`,
    text: data.details,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return { success: false, error };
  }
}
