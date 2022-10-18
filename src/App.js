import 'bootstrap/dist/css/bootstrap.css';
import { marked } from "marked";

import {useState} from 'react';
function App() {
  const defaultInput = "Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://avatars2.githubusercontent.com/u/9892522?s=100&v=4 'freeCodeCamp Avatar')  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text.  "  ;
  const [text,setText]=useState(defaultInput);
  const handleChange=(event)=>{
    setText((event.target.value));
    
  }
  return (
    <div id="mainContent" className="container">
      <main>
        <h1 className='text-center'>Markdown Previewer</h1>
        <div className="row">
          <div className="col">
              <section >
                <h2>Editor</h2>
                <textarea id="editor" name="editor" value={text} onChange={handleChange} className="w-100 vh-100"/>
                

                
              </section>
          </div>
          <div className="col">
            <h2>Previewer</h2>
            <section id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}>
             
              
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
