module.exports = {
	css: {
		requireModuleExtension: false,

		loaderOptions: {

			scss: {
        additionalData: `@import "~@/scss/style.scss";`
      }

		}
	}
}