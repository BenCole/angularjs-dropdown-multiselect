This directive gives you a Bootstrap Dropdown with the power of AngularJS directives.

# Build commands

```
gulp build:component
```

Bundles to /dist

```
gulp serve
```
Serves demo at localhost:3000


## Dependencies
- required: AngularJS >= 1.5, Bootstrap >= 3.0

- Make sure to add the dependencies before the directive's js file. 
- Note: Bootstrap JS file is not needed for the directive, it just uses the CSS file

## Install
1. Download the files
	1. Using bower: <img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30">
		Just run `bower install angularjs-dropdown-multiselect`
	2. Using npm : 
		Just run `npm install angularjs-dropdown-multiselect`
	3. Manually:
		You can download the `.js` file directly or clone this repository
2. Include the file in your app
	- `<script type="text/javascript" src="angularjs-dropdown-multiselect.js"></script>`.
	- You can also use the minfined version (`angularjs-dropdown-multiselect.min.js`).
3. Include the module in angular (i.e. in `app.js`) - `angularjs-dropdown-multiselect`

## Usage and Documentation
See the documentation and examples in the GitHub pages:
http://dotansimha.github.io/angularjs-dropdown-multiselect/
