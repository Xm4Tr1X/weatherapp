import React from 'react';
import './App.css';
import { Layout } from 'antd'
import WeatherSelector from './components/WeatherSelector'

function App() {
  return (
    <div>
      <Layout className="App">
        <Layout.Header className="App-header">Weather App</Layout.Header>
        <Layout.Content>
          <WeatherSelector />
        </Layout.Content>
        {/* <Layout.Footer>Footer</Layout.Footer> */}
      </Layout>
    </div>
  );
}

export default App;
