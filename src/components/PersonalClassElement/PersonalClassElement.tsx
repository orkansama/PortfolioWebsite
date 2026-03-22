import './style/personalClassElementStyle.css'

export function PersonalClassElement() {
  return (
    <pre className="whoami-code">
      <span className="code-line">
        <span className="keyword">function</span>{" "}
        <span className="function-name">age</span>
        <span className="punctuation">(</span>
        <span className="param">date: Date</span>
        <span className="punctuation">)</span>{" "}
        <span className="punctuation">{"{"}</span>
      </span>

      <span className="code-line">
        {"  "}
        <span className="keyword">return</span>{" "}
        <span className="keyword">new</span> Date()
        <span className="punctuation">.</span>
        <span className="function-name">getFullYear</span>()
        <span className="operator"> - </span>
        <span className="console">date</span>
        <span className="punctuation">.</span>
        <span className="function-name">getFullYear</span>();
      </span>

      <span className="code-line">
        <span className="punctuation">{"}"}</span>
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">name</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="string">"Louis"</span>;
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">birthDate</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="keyword">new</span>{" "}
        <span className="class">Date</span>(
        <span className="string">"2003-09-23"</span>);
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">languages</span>{" "}
        <span className="operator">=</span>{" "}
        [<span className="string">"French"</span>,{" "}
        <span className="string">"English"</span>];
      </span>

      <span className="code-line">
        <span className="keyword">const</span>{" "}
        <span className="var">skills</span>{" "}
        <span className="operator">=</span> [
      </span>

      <span className="code-line">
        {"  "}
        <span className="string">
          {"Python "}
          <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6z" />
          </svg>
        </span>
        ,
      </span>

      <span className="code-line">
        {"  "}
        <span className="string">
          {"JavaScript "}
          <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80z" />
          </svg>
        </span>
        ,
      </span>

      <span className="code-line">];</span>

      <span className="code-line">
        <span className="console">console</span>.
        <span className="function-name">log</span>(
        {"{"}
      </span>

      <span className="code-line">  <span className="var">name</span>,</span>
      <span className="code-line">  <span className="var">birthDate</span>,</span>
      <span className="code-line">
        {"  "}
        <span className="var">age</span>:{" "}
        <span className="function-name">age</span>(
        <span className="var">birthDate</span>),{" "}
        <span className="comment">// 21</span>
      </span>
      <span className="code-line">
        {"  "}
        <span className="var">languages</span>,
      </span>
      <span className="code-line">
        {"  "}
        <span className="var">skills</span>,
      </span>

      <span className="code-line">
        {"}"});
      </span>
    </pre>
  );
}