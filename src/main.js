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
