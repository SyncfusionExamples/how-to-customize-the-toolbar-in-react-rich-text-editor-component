import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Image, Table, QuickToolbarSettingsModel,
   HtmlEditor, Inject, QuickToolbar  } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {

  public inlineQuickToolbar : QuickToolbarSettingsModel = {
    image : [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
      'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
  };

  public customToolbarSettings : object = {
    items : [
    'Bold', 'Italic', 'Underline', 'StrikeThrough', 'ClearAll', 
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|', 'CreateTable',
    'CreateLink', 'Image', 'Replace', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', '|', 'Preview', 'InsertCode' ],
    type: 'Scrollable',
    enableFloating: false
  };
  render() {
    return ( 
        <RichTextEditorComponent toolbarSettings={this.customToolbarSettings} 
        floatingToolbarOffset={0} quickToolbarSettings={this.inlineQuickToolbar}>
          <Inject services = {[Toolbar, Link, Image, HtmlEditor, Table, QuickToolbar]}></Inject>
          <p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
          <p><b>Key features:</b></p>
              <ul>
                <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
                <li><p>Capable of handling markdown editing.</p></li>
                <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                <li><p>Provides a fully customizable toolbar.</p></li>
                <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                <li><p>Supports third-party library integration.</p></li>
                <li><p>Allows a preview of modified content before saving it.</p></li>
                <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                <li><p>Contains undo/redo manager.</p></li>
                <li><p>Creates bulleted and numbered lists.</p></li>
              </ul>
          <img src={process.env.PUBLIC_URL + '/Feather.png'} style={{width: '150px', height: '150px'}}></img>
        </RichTextEditorComponent>
    );
  }
}
   
export default App;



 
 
