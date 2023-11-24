// TemplateProcessor class definition
function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {
    var placeholderRegex = /{{\s*([^}\s]+)\s*}}/g;

    var filledTemplate = this.template.replace(placeholderRegex, function(match, property) {
        return dictionary.hasOwnProperty(property) ? dictionary[property] : '';
    });

    return filledTemplate;
};

// Example Usage:

// Create a TemplateProcessor instance with the template string
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

// Provide a dictionary with values for the placeholders
var dictionary = { month: 'July', day: '1', year: '2016' };
var filledTemplate = dateTemplate.fillIn(dictionary);

// Output the filled template
var outputContainer = document.getElementById('output-container');
outputContainer.textContent = filledTemplate;
