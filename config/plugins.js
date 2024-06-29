module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
  //     providerOptions: {
  //       apiKey: env('SENDGRID_API_KEY'),
  //     },
  //     settings: {
  //       defaultFrom: env('SENDGRID_FROM'),
  //       defaultReplyTo: env('SENDGRID_TO'),
  //     },
  //   },
  // },
  // email: {
  //   config: {
  //     provider: 'amazon-ses',
  //     providerOptions: {
  //       key: env('AWS_SES_KEY'),
  //       secret: env('AWS_SES_SECRET'),
  //       amazon: 'https://email.ap-south-1.amazonaws.com',
  //     },
  //     settings: {
  //       defaultFrom: 'noreply@biosphere.studio',
  //       defaultReplyTo: 'support@biosphere.studio',
  //     },
  //   },
  // },

  email: {
    config:{
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_ACCESS_KEY_ID'),
        secret: env('AWS_ACCESS_SECRET'),
        amazon: `https://email.${env('AWS_REGION')}.amazonaws.com`,
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
      },
    }
  },
});