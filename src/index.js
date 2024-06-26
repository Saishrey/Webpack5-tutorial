import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import addImage from './add-image.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
// helloWorldButton.render();

// helloWorld();
// addImage();


if (process.env.NODE_ENV == 'production') {
    console.log('Production mode')
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode')
}


helloWorldButton.methodThatDoesNotExist()