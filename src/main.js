// main.js

// some fun or whatever
{
  /**
   * what
   * is
   * ts
   * */
  let foo = console.log("hello world");
  foo;

  let bar = "idiot";
  console.log(Math.abs(Number(bar)));
  console.log(+bar);
  console.log(undefined);
}

// set this global for ez printing
const p = console.log;

p("numbers, strings, and operators");
{
  p(Infinity);
  p(+Infinity);
  p(-Infinity);
  p(NaN);
  p(Infinity + Infinity - Infinity);

  p(true);
  p(false);
  p(!true);
  p(!false);

  let foo,
    bar = 1;
  p(foo);
  p(bar);

  let baz = 1,
    qux = 2;
  p(baz == qux);
  p(baz === qux);
  p(baz != qux);
  p(baz !== qux);

  p("1, 2, " + 3);
  p("1, 2, " + [3, 4]);

  // p(13 + !0);
  p(13 + Number(!0));
  p("13" + !0);

  // p(5 == "5");
  // p("5" == 5);
  p(null == undefined);

  // p(5 === "5");
  // p("5" === 5);
  p(null === undefined);

  p("a"[1]);
  p("a".charAt(1));

  p("a".substring(0, 3)); // apparently slice just better

  p("asdf".length);

  foo = "asdf";
  // foo.length = 1;
}

{
  p("variables, arrays, and objects");

  // idiot = 1;
  // p(idiot);
  globalThis.idiot = 1;
  p(globalThis.idiot);

  const h = () => {
    p(foo);
    p(foo.length);
  };

  /**@type any[]*/
  let foo = ["hello", , 45, true];
  h();

  foo[1] = { idiot: "L" };
  h();

  foo.push(false);
  h();
  foo.unshift(true);
  h();

  foo.pop();
  h();
  foo.shift();
  h();

  p(foo.join(""));

  p({ idiot: "L" });

  p("foo".slice());
  p("foo".slice(0, 3)); // apparently slice just better

  p(foo.slice(1, 2));
  p(foo.slice(1, 3));

  let bar = [...foo];
  let baz = foo.splice(1, 3);
  let qux = bar.splice(1, 3, "new", "new", "new");

  p("foo", "bar", [1, 2]);
  p(foo, bar, baz, qux);

  const quux = { foo: 0, bar: 1, "baz qux": 2, null: 3, undefined: 4 };
  p(quux.foo);
  p(quux.bar);
  p(quux["baz qux"]);
  p(quux.null);
  p(quux.undefined);
  p(quux.idiot);
}

{
  p("logic and control structures");

  let foo = 0;
  if (foo == 2) {
    throw new Error("how");
  } else if (foo == 1) {
    throw new Error("how still");
  } else {
    try {
    } catch {
      throw new Error("correct but how still");
    }
  }

  while (true) {
    if (foo >= 5) break;
    p(foo);
    foo++;
  }

  do {
    p(foo);
    foo++;
  } while (foo < 10);

  for (let i = 0; i < 5; ++i) {
    p(i);
  }

  outer: for (let y = 0; y < 10; ++y)
    for (let x = 0; x < 10; ++x) {
      if (y == 2 && x == 0) break outer; // there's a continue outer
      p(`x: ${x}, y:${y}`);
    }

  const person = { fname: "Audie", lname: "Murphy", age: 19 };
  for (const k in person) p(k);
  for (const v of Object.values(person)) p(v);

  p((true && "Manfred") || "Richthofen");
  p((false && "Manfred") || "Richthofen");

  let witches = "Nachthexen";
  switch (witches) {
    default:
      p(witches);
      break;
    case "how":
    case "are":
    case "these":
    case "matching":
      throw new Error("how are these matching");
  }
}

{
  p("functions, scopes, and closures");

  function foo() { } // i won't be doing this for some reason
  const bar = () => {
    p("from the async crap");
  }; // this tho yes

  setTimeout(bar, 5000);
  setInterval(bar, 7000);

  const sayHelloInFiveSeconds = (/** @type {string} */ name) => {
    const prompt = `hello ${name}!`;
    setTimeout(() => alert(prompt), 3000);
  };
  sayHelloInFiveSeconds(window.prompt("What's ur name?"));
}
