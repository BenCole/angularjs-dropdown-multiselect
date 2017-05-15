import controller from './angularjs-dropdown-multiselect.controller';

export default function dropdownMultiselectDirective($compile, $filter) {
	return {
		restrict: 'AE',
		scope: {
			selectedModel: '=',
			options: '=',
			extraSettings: '=',
			events: '=',
			searchFilter: '=?',
			translationTexts: '=',
			disabled: '=',
			onSearch: '&',
			loaderClass: '=',
			isLoading: '='
		},
		transclude: {
			toggleDropdown: '?toggleDropdown',
		},
		controller,
		templateUrl: 'app/component/angularjs-dropdown-multiselect.html',
		link: function($scope) {
			// filter pre-selected 
			var filterOptions = $filter('alreadySelectedFilter')($scope.options, $scope.selectedModel, $scope.settings.idField);
			$scope.options = filterOptions;
		}
	}
}