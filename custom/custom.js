const root= document.getElementById("root")   //root me render karna hai
const customRender=function(reactElement, root) //function hai jo reaqct element ko render karta hai 
{
    const newElement= document.createElement(reactElement.type)
    newElement.innerHTML=reactElement.children
    newElement.setAttribute('href', reactElement.props.href)
    newElement.setAttribute('target', reactElement.props.target)

     root.appendChild( newElement)
     console.log( "Done")

}
//Khud ka react element hai 
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}
//calling function to do the rendering 
customRender( reactElement, root)