import { Component, Prop } from '@stencil/core';
//import infamous from 'infamous'
//declare var infamous: any; 

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    //infamous.html.useDefaultNames();
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
        <div id="content">
        <i-scene>
          <i-node position="100 100">
          <div id="innode"> Hello 3D </div>
          </i-node>
        </i-scene> 
        </div>
      </div>
    );
  }
}
