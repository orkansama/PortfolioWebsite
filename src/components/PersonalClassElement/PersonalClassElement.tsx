import './style/personalClassElementStyle.css'

export function PersonalClassElement() {
  return (
    <pre className="whoami-code">
      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">name</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="string">"Orkan"</span>;
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">lastname</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="string">"Gökcen"</span>;
      </span>


      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">birthDate</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="keyword">new</span>{" "}
        <span className="class">Date</span>(
        <span className="string">"2005-11-29"</span>);
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">languages</span>{" "}
        <span className="operator">=</span>{" "}
        [<span className="string">"German"</span>,{" "}
        <span className="string">"English"</span>];
      </span>

      <span className="code-line">
        <span className="console">console</span>.
        <span className="function-name">log</span>(
        {"{"}
      </span>

      <span className="code-line">  <span className="var">name</span>,</span>
      <span className="code-line">  <span className="var">lastname</span>,</span>
      <span className="code-line">  <span className="var">birthDate</span>,</span>
      <span className="code-line">
        {"  "}
        <span className="var">languages</span>,
      </span>
      <span className="code-line">
        {"}"});
      </span>
    </pre>
  );
}