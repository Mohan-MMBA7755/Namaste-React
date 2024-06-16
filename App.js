const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{class:"heading"},"I'm h1 Tag"),
        React.createElement("h2",{class:"heading"},"I'm h2 Tag")]
    ),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{class:"heading"},"I'm h1 Tag"),
        React.createElement("h2",{class:"heading"},"I'm h2 Tag")]
    )]);
console.log(parent);

const r = ReactDOM.createRoot(document.getElementById("root"));

r.render(parent);