// Path: ./api/example/controllers/example.js

module.exports = {
    async sendEmail(ctx) {
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'sajalsharma4399@gmail.com',
          from: 'support@biosphere.studio', // Optional if defaultFrom is set in config
          subject: 'Test Email',
          text: 'This is a test email sent from Strapi using AWS SES!',
          html: '<p>This is a test email sent from Strapi using AWS SES!</p>',
        });
        ctx.send({ message: 'Email sent successfully!' });
      } catch (error) {
        ctx.send({ error: 'Failed to send email', details: error });
      }
    },
  };
  