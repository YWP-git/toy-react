import {ToyReact, Component} from "./ToyReact.js";

class MyCompoent extends Component{
    render(){
        return <div>
            <span>Hello</span>
            <span>word</span>
            <span>!!</span>
            <div>
                {this.children}
            </div>
        </div>
    }
    
}

let a = <MyCompoent name="a" id="ida">
    <div>1234</div>
</MyCompoent>

ToyReact.render(
    a,
    document.body
);