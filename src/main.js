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

  p("a".substring(0, 3));

  p("asdf".length);

  foo = "asdf";
  // foo.length = 1;
}
