define("vs/language/typescript/spiffcode.contribution",["require","exports","vs/editor/edcore.main"], function(require, exports) {
	"use strict";
	window.getMonacoProviderRegistry = () => {
		return new Promise(c => {
			require(["vs/editor/common/modes"], modes => c(modes));
		});
	};
});
