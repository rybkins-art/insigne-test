module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/styles/mixins/_index.scss";
            @import "@/styles/common/_index.scss";
          `
        }
      }
    }
}