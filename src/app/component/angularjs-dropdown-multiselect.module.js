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

  return function(options, selectedModel, idField) {

    var filtered = [];
    // loop through new options
    for (var i = 0; i < options.length; i++) {

      var option = options[i];
			  // filter down already selected IDs
			if (selectedModel.filter(function(selected) { return selected[idField] == option[idField]; }).length === 0) {
				// if there are no results, return the object to the filter
        
        filtered.push(option);
			}
    }
    // boom, return the Array after iteration's complete
    return filtered;
  };
});
