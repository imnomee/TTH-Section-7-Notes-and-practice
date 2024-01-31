import {createRoot} from 'react-dom/client'

const desc = 'I just started learning react from the start once again'
const myTitleID = 'main-title'
const name = 'Noms'

const element = (
      <div>
            <h1 id={myTitleID}>{name}'s First React element</h1>
            <p className = 'main-doc'>{desc}</p>
            <input value={10 * 20}/>
      </div>
)

const root = createRoot(document.getElementById('root'));

root.render(element);