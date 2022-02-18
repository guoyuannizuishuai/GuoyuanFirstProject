import _ from 'lodash';
// import './style.css'
// import Icon from './images/head.png';
import printMe from './print';
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function component() {
    let element = document.createElement('div');
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // var btn = document.createElement('button');
    // btn.innerHTML = 'Click ssss me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);
    let button = document.createElement('button');
    let br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);
    btn.onclick = Print.bind(null, 'Hello webpack!');;
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //   let print = module.default;
    //   print();
    // });

    // element.classList.add('hello');
    // let myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    return element;
}
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     let element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;

//   }).catch(error => 'An error occurred while loading the component');
// }
// getComponent.then(component => {
//   document.body.appendChild(component);
// })
  document.body.appendChild(component());