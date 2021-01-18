import React, { Component } from 'react'
import  { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import parser from 'html-react-parser'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:localStorage.getItem("demo")
    }
  }
  onchange=(e,editor)=>{
    var data=editor.getData();
    this.setState({
      data
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <CKEditor
        data={this.state.data}
        editor={ClassicEditor}
        onReady={editor=>{

        }}
        onChange={this.onchange}
        style={{height:"500px"}}
         />

         <button onClick={this.onSave}>save</button>
         <div>
           {parser(this.state.data)}
         </div>
      </>
    )
  }
  onSave=()=>{
    console.log(this.state.data);
    localStorage.setItem("demo",(this.state.data));
  }
}
