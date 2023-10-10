function customRender(reactElement, container){
    
const domtElement = document.createElement(reactElement.type)
domtElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domtElement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domtElement)

}


const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)

