import 'styles'
import { sayHelloTo } from './hello'
import { sayOla } from './hello'

let module: any;
const hot = module.hot;

const h1 = document.createElement('h1');
h1.innerText = sayHelloTo('Javascript Developer');
const span = document.createElement('span');
span.innerText = sayOla('me livrei da maldição');

document.body.appendChild(h1);
document.body.appendChild(span);

if (hot) {
    hot.accept();
    hot.dispose(() => h1.parentNode.removeChild(h1));
    hot.dispose(() => span.parentNode.removeChild(span));
}
