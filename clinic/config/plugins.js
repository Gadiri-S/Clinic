module.exports = ({ env }) => ({
    // ...
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          Blog: {
            field: 'Slug',
            references: 'Title',
          },
        },
      },
    },
    // ...
  });