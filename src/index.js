import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();


// const Root = () => {
//   return (
//       <div>
      
//       <BrowserRouter>
//       <div>
//       <Route exact path='/' component={Project} />
//       <Route path='/AboutMe' component={AboutMe} />
//       <Route path='/Portfolio' component={Portfolio} />
//       <Route path='/Resume' component={Resume} />
//       <Route path='/Contact' component={Contact} />
//       </div>
//       </BrowserRouter>
//       </div>
//   );
// };

// render(<Root />, document.getElementById('root'));


