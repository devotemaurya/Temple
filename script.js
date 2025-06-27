// Google Translate Init
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'hi',
    includedLanguages: 'en,hi',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Load Google Translate API script
let gtScript = document.createElement("script");
gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(gtScript);
