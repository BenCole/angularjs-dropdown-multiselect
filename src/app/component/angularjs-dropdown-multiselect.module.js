import dropdownDirective from './angularjs-dropdown-multiselect.directive';

angular.module('angularjs-dropdown-multiselect', [])
.directive('dmDropdownStaticInclude', ($compile) => {
	'ngInject';

	return function directive(scope, element, attrs) {
		const template = attrs.dmDropdownStaticInclude;
		const contents = element.html(template).contents();
		$compile(contents)(scope);
	};
})
.directive('ngDropdownMultiselect', dropdownDirective)
.filter('alreadySelectedFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(options, selectedModel) {


    var filtered = [];
    // loop through new options
    for (var i = 0; i < options.length; i++) {

      var option = options[i];

			  // filter down already selected IDs
			if (selectedModel.filter(function(selected) { return selected.id == option.id; }).length === 0) {
				// if there are no results, return the object to the filter
        filtered.push(option);
			}
    }
    // boom, return the Array after iteration's complete
    return filtered;
  };
});

