var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

// describe('Form Functionality', function() {
// 	it('should detect if an element is visible', function() {
// 		webdriverio
// 		    .remote(options)
// 		    .url('https://internet.frontier.com/')
// 		    .catch(function(err) {
// 		        console.log(err);
// 		    });
// 	})
// })

function checkImage(elem, name) {
	webdriverio
	    .remote(options)
	    .init()
	    .url('https://internet.frontier.com/')
	    .isVisible(elem)
	    .then(function(img){
	      console.log(name + ' was: ' + img);
	    })
	    .end()
	    .catch(function(err) {
	        console.log(err);
	    });
}

checkImage('.hero', 'hero');
checkImage('.graphic', 'graphic');
checkImage('.section--bg', 'section-bg');

// webdriverio
// 	.remote(options)
//     .init()
//     .url('https://internet.frontier.com/')
//     .addValue('#zip', '28215')
//     .click('#js-track-form-check-availability')
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });








