
// select root div
const domContainer = document.querySelector('#root');
// create the root of react dom
const root = ReactDOM.createRoot(domContainer);
// render what we see
root.render(React.createElement("h1", {}, "Our First React page has rendered"));    

