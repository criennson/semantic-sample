$(function () {

	// Basic Tabs
	$('#basic-tab .item').tab();

	// Multiple Tab Groups
	$('#context1 .menu .item').tab({
			context: $('#context1')
	});
	$('#context2 .menu .item').tab({
			// special keyword works same as above
			context: 'parent'
	});

	// Default Paths
	$('#default-path .menu .item').tab({
			context: '.paths.example'
	});

	// Retreiving Remote Content
	$('.dynamic.example .menu .item').tab({
		cache: false,
		// faking API request
		apiSettings: {
			loadingDuration : 300,
			mockResponse    : function(settings) {
				var response = {
					first  : 'AJAX Tab One',
					second : 'AJAX Tab Two',
					third  : 'AJAX Tab Three'
				};
				return response[settings.urlData.tab];
			}
		},
		context : 'parent',
		auto    : true,
		path    : '/'
	});

	// Evaluating Scripts in HTML
	$('.eval.example .menu .item').tab({
		evaluateScripts : 'once',
		context         : 'parent',
		auto            : true,
		path            : '/'
	});

	// Using Hash History
	$('.history.example .menu .item').tab({
		context : '.history.example',
		history : true
	});

});