sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/ZZZ_C_YPRODUCTList.gen",
	"project1/test/integration/pages/ZZZ_C_YPRODUCTObjectPage.gen"
], function (JourneyRunner, ZZZ_C_YPRODUCTListGenerated, ZZZ_C_YPRODUCTObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheZZZ_C_YPRODUCTListGenerated: ZZZ_C_YPRODUCTListGenerated,
			onTheZZZ_C_YPRODUCTObjectPageGenerated: ZZZ_C_YPRODUCTObjectPageGenerated
        },
        async: true
    });

    return runner;
});

