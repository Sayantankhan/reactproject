import React from 'react';
import MovieBrowser from './component/Movie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
          <MovieBrowser />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
