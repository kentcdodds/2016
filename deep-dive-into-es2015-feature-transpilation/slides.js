var slides = [
  {
    feature: true,
    content: "<h1 class=''><span class='green'>ES6</span> Feature Transpilation</h1>"
  },
  {
    title: "README.md",
    p: [
      "Kyle Hill (<strong class='blue'>@kylehill</strong>)",
      "Washington, DC",
      "Front End at <span class='purple'>Upside Travel</span>",
      "We're hiring! (of course)"
    ]
  },
  {
    feature: true,
    image: "images/biscoff.jpg"
  },
  {
    title: "tl;dw",
    content: "<h2>Don't use <span class='mono'>class</span> right now"
  },
  {
    title: "tl;dw",
    content: "<h2>Don't use <span class='mono'>class</span> right now<br/>(or maybe ever)</h2>"
  },
  {
    feature: true,
    content: "<h2>History Lesson!</h2>"
  },
  {
    title: "JavaScript",
    p: [
      "<span class='red'>1995</span>",
      "Prototype written by Brendan Eich in ten days",
      "Shows up in Netscape Navigator 2.2 in September",
      "Microsoft creates JScript for IE in <span class='red'>1996</span>"
    ]
  },
  {
    title: "ECMAScript v1",
    p: [
      "<span class='red'>1997</span>",
      "Published standard",
      "Largely conformed to by browser vendors"
    ]
  },
  {
    title: "ECMAScript v2",
    p: [
      "<span class='red'>1998</span>",
      "Small editorial changes"
    ]
  },
  {
    title: "ECMAScript v3",
    p: [
      "<span class='red'>1999</span>",
      "<span class='mono'>try</span> / <span class='mono'>catch</span>",
      "Useful errors",
      "Regular expressions",
      "Improved formatting and string handling"
    ]
  },
  {
    title: "<span class='strike'>ECMAScript v4</span>",
    p: [
      "<span class='red'>nope</span>",
    ]
  },
  {
    feature: true,
    image: "images/reasons.jpg"
  },
  {
    title: "ECMAScript <span class='blue'>v5</span> New Features",
    p: [
      "<span class='red'>2009</span>",
      "Strict mode",
      "Native JSON",
      "Array <span class='mono'>.map</span> / <span class='mono'>.filter</span> / <span class='mono'>.reduce</span> / <span class='mono'>.forEach</span>",
      "Function <span class='mono'>.bind</span>",
      "Very few syntactical/operator changes"
    ]
  },
  {
    title: "<span class='blue'>ES5</span> Adoption",
    p: [
      "IE: <span class='red'>2011</span>, v9",
      "Firefox: <span class='red'>2011</span>, v4",
      "Chrome: <span class='red'>2011</span>, v13",
      "Safari: <span class='red'>2012</span>, v5.1.4"
    ]
  },
  {
    title: "<span class='blue'>ES5</span> \"Solutions\"",
    p: [
      "Arbitrary minimum browser requirements",
      "Polyfills",
      "Dependencies on jQuery/underscore/lodash"
    ]
  },
  {
    title: "ECMAScript <span class='green'>v6</span> New Features",
    p: [
      "<span class='red'>2015</span>",
      "New types: <span class='mono'>Map</span>, <span class='mono'>Set</span>, <span class='mono'>Promise</span>, <span class='mono'>Symbol</span>, etc",
      "<span class='mono'>Object.assign</span>",
      "<span class='mono'>Array.from</span>",
      "<span class='mono'>String.includes</span>"
    ]
  },
  {
    title: "<span class='green'>ES6</span> Syntactical Changes",
    p: [
      "<span class='mono'>() => {}</span>",
      "<span class='mono'>function *(){ yield 1; yield 2; }</span>",
      "<span class='mono'>class</span>, <span class='mono'>extends</span>, and <span class='mono'>super</span>",
      "<span class='mono'>...</span> operator",
      "destructuring / left-hand assignment"
    ]
  },
  {
    title: "yeah don't worry there's more",
    p: [
      "<span class='mono'>function (a, ...b) {}",
      "<span class='mono'>function (a = 1) {}",
      "<span class='mono'>`template ${'literals'}`</span>",
      "<span class='mono'>const</span> and <span class='mono'>let</span>",
      "<span class='mono'>for (x of y)</span>"
    ]
  },
  {
    feature: true,
    content: "<h2>Polyfills won't work for syntactical changes</h2>"
  },
  {
    title: "<span class='blue'>compile</span> <em>(v.)</em>",
    p: [
      "the act of using an automated program",
      "to convert code from one (human-readable) programming language",
      "to another, lower-level language or machine code"
    ]
  },
  {
    title: "Compilation",
    p: [
      "<span class='green'>Static code analysis prevents some runtime errors</span>",
      "<span class='green'>Compiler optimizes for performance</span>"
    ]
  },
  {
    title: "Compilation",
    p: [
      "Static code analysis prevents some runtime errors",
      "Compiler optimizes for performance",
      "<span class='red'>Initial setup costs can be prohibitive</span>",
      "<span class='red'>Debugging can be onerous</span>",
      "<span class='red'>Output difficult/impossible to understand</span>"
    ]
  },
  {
    title: "<span class='blue'>transpile</span> <em>(v.)</em>",
    p: [
      "the act of using an automated program",
      "to convert code from one (human-readable) programming language",
      "to another language at relatively <span class='blue'>the same level of abstraction</span>"
    ]
  },
  {
    feature: true,
    content: "<h2>There are so, so many<br/>transpile-to-JavaScript languages</h2>"
  },
  {
    feature: true,
    image: "images/languages.png"
  },
  {
    feature: true,
    content: "<h2>Let's just transpile <span class='green'>ES6</span> into <span class='blue'>ES5</span>"
  },
  {
    feature: true,
    image: "images/babel.png"
  },
  {
    feature: true,
    image: "images/cost.png"
  },
  {
    feature: true,
    content: "<h1>Two Big Important Assumptions</h1>"
  },
  {
    feature: true,
    content: "<h2>#1<br/><span class='purple'>All things being equal, it is a better practice to write JS code in JavaScript than an adjunct language.</h2>"
  },
  {
    title: "JS > transpilation",
    p: [
      "Complexity is reduced",
      "Dependencies are removed",
      "Easier to hire for/onboard"
    ]
  },
  {
    feature: true,
    content: "<h2>#2<br/><span class='purple'>Page weight inflation is bad.</h2>"
  },
  {
    title: "Large page weight",
    p: [
      "Makes your page less performant",
      "Murders mobile data plans",
      "Reduces accessibility"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "<span class='purple'>Q: How can we transpile <es6 /> into <es5 /> without seeing substantial page weight inflation?</span>"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "Q: How can we transpile <es6/> into <es5/> without seeing substantial page weight inflation?",
      "<span class='purple'>A: Find features that transpile well and embrace them first.</span>"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "Q: How can we transpile <es6/> into <es5/> without seeing substantial page weight inflation?",
      "A: Find features that transpile well and embrace them first.",
      "<span class='purple'>And watch out for economies of scale!</span>"
    ]
  },
  {
    title: "Let's do science!",
    p: [
      "Step 1: Write <es6/> code that includes a single feature",
      "Step 2: Write code that includes a hundred instances of that same feature",
      "Step 3: Transpile both into <es5/>"
    ]
  },
  {
    title: "Let's do science!",
    p: [
      "For each feature:",
      "<span class='purple'>Raw</span>: ((es6 / es5) + (es6-at-scale / es5-at-scale))",
      "<span class='purple'>Impact</span>: Math.min((es5 / 250), 1)",
      "<span class='purple'>Feature</span>: 100 - (50 * ((2 - <span class='purple'>raw</span>) * <span class='purple'>impact</span>))",
      "Produces a score between 0-100"
    ]
  },
  {
    title: "const/let - <es6/>",
    hasCode: true,
code: function() {
  const a = 123
  let b = 456

  function c () {
    const a = 789
  }
}
  },
  {
    title: "const/let - <es5/>",
    score: 100,
    hasCode: true,
code: function() {
  var a = 123
  var b = 456
  
  function c () {
    var _a = 789
  }
}
  },
  {
    title: "template strings - <es6/>",
    hasCode: true,
code: function() {
  var x = "b"
  var y = `a${x}c`
}
  },
  {
    title: "template strings - <es5/>",
    score: 94,
    hasCode: true,
code: function() {
  var x="b";
  var y="a"+x+"c";
}
  },
  {
    title: "fat arrow (ordinary) - <es6/>",
    hasCode: true,
code: function() {
  var a = (x) => x * 2
  var b = x => x * 2
  var c = x => {
    return x * 2
  }
}
  },
  {
    title: "fat arrow (ordinary) - <es5/>",
    score: 92,
    hasCode: true,
code: function() {
  function a(x) { return x * 2 }
  function b(x) { return x * 2 }
  function c(x) { return x * 2 }
}
  },
  {
    title: "fat arrow (this) - <es6/>",
    hasCode: true,
code: function() {
  return {
    a: "x",
    b: function() {
      return () => this.a
    }
  }
}
  },
  {
    title: "fat arrow (this) - <es5/>",
    score: 85,
    hasCode: true,
code: function() {
  return {
    a: "x",
    b: function b(){
      var _this=this;
      return function(){
        return _this.a;
      }
    }
  };
}
  },
  {
    title: "spread (array merging) - <es6/>",
    hasCode: true,
code: function () {
  var x = [1, 2, ...[3, 4, 5], 6, 7]
}
  },
  {
    title: "spread (array merging) - <es5/>",
    score: 99,
    hasCode: true,
code: function () {
  var x = [1, 2].concat([3, 4, 5], [6, 7]);
}
  },
  {
    title: "spread (function calls) - <es6/>",
    hasCode: true,
code: function () {
  var x = function(){}
  x(...[1,2,3])
}
  },
  {
    title: "spread (function calls) - <es5/>",
    score: 98,
    hasCode: true,
code: function () {
  var x = function x(){}
  x.apply(undefined,[1,2,3]);
}
  },
  {
    title: "spread (string) - <es6/>",
    slideClass: "bad",
    hasCode: true,
code: function () {
  var a = ["a", ..."bcd", "e"]
}
  },
  {
    title: "spread (string) - <es5/>",
    score: 31,
    slideClass: "bad",
    hasCode: true,
code: function () {
  function _toConsumableArray(arr){
    if(Array.isArray(arr)){
      for(var i=0,arr2=Array(arr.length);i<arr.length;i++){
        arr2[i]=arr[i];
      }
      return arr2;
    }
    else{
      return Array.from(arr);
    }
  }
  var x=["a"].concat(_toConsumableArray("bcd"),["e"]);
}
  },
  {
    title: "spread (unknown) - <es6/>",
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  return [...a]
}
  },
  {
    title: "spread (unknown) - <es5/>",
    score: 31,
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  function _toConsumableArray(arr){
    if(Array.isArray(arr)){
      for(var i=0,arr2=Array(arr.length);i<arr.length;i++){
        arr2[i]=arr[i];
      }
      return arr2;
    }
    else{
      return Array.from(arr);
    }
  }
  return [].concat(_toConsumableArray(a));
}
  },
  {
    title: "object (destructuring) - <es6/>",
    hasCode: true,
code: function () {
  var a = "b"
  var c = "d"
  var e = { a, c }
}
  },
  {
    title: "object (destructuring) - <es5/>",
    score: 93,
    hasCode: true,
code: function () {
  var a = "b";
  var c = "d";
  var e = { a: a, c: c };
}
  },
  {
    title: "object (shorthand methods) - <es6/>",
    hasCode: true,
code: function () {
  var a = { b() { return "c" } }
}
  },
  {
    title: "object (shorthand methods) - <es5/>",
    score: 92,
    hasCode: true,
code: function () {
  var a = { 
    b: function b(){
      return"c";
    }
  };
}
  },
  {
    title: "object (variable properties) - <es6/>",
    hasCode: true,
code: function () {
  var a = "b"
  var c = { [a]: "d" }
}
  },
  {
    title: "object (shorthand methods) - <es5/>",
    score: 24,
    slideClass: "bad",
    hasCode: true,
code: function () {
  function _defineProperty(obj,key,value){
    if(key in obj){
      Object.defineProperty(obj,key,{
        value:value,
        enumerable:true,
        configurable:true,
        writable:true
      });
    }
    else{
      obj[key]=value;
    }
    return obj;
  }
  var a="b";var c=_defineProperty({},a,"d");
}
  },
  {
    title: "params (rest) - <es6/>",
    hasCode: true,
code: function (a, ...b) {
  return b
}
  },
  {
    title: "params (rest) - <es5/>",
    score: 53,
    slideClass: "iffy",
    hasCode: true,
code: function (a) {
  for(var _len=arguments.length, b = Array(_len>1?_len-1:0), _key=1;
      _key<_len;
      _key++){
    b[_key-1]=arguments[_key];
  }
  return b;
}
  },
  {
    title: "params (defaults) - <es6/>",
    hasCode: true,
code: function (a = 1, b = 2) {
  return a + b
}
  },
  {
    title: "params (default) - <es5/>",
    score: 44,
    slideClass: "iffy",
    hasCode: true,
code: function () {
  var a=(arguments.length<=0||arguments[0]===undefined)
    ? 1
    : arguments[0];
  var b=(arguments.length<=1||arguments[1]===undefined)
    ? 2
    : arguments[1];
  return a+b;
}
  },
  {
    title: "for-of (inline) - <es6/>",
    hasCode: true,
code: function () {
  for (var i of [1, 2, 3]) {
    console.log(i)
  }
}
  },
  {
    title: "for-of (inline) - <es5/>",
    score: 77,
    hasCode: true,
code: function () {
  var _arr=[1,2,3];
  for(var _i=0;_i<_arr.length;_i++){
    var i=_arr[_i];
    console.log(i);
  }
}
  },
  {
    title: "for-of (variable) - <es6/>",
    hasCode: true,
code: function (a) {
  for (var i of a) {
    console.log(i)
  }
}
  },
  {
    title: "for-of (variable) - <es5/>",
    score: 7,
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  var _iteratorNormalCompletion=true;
  var _didIteratorError=false;
  var _iteratorError=undefined;
  try{
    for(var _iterator=a[Symbol.iterator](),_step;
        !(_iteratorNormalCompletion=(_step=_iterator.next()).done);
        _iteratorNormalCompletion=true){
      var i=_step.value;
      console.log(i);
    }
  }
  catch(err){
    _didIteratorError=true;
    _iteratorError=err;
  }
  finally{
    try{
      if(!_iteratorNormalCompletion&&_iterator.return){
        _iterator.return();
      }
    }
    finally{
      if(_didIteratorError){
        throw _iteratorError;
      }
    }
  }
}
  },
  {
    title: "destructuring (from object) - <es6/>",
    hasCode: true,
code: function(i) {
  var {a,b,c} = i
}
  },
  {
    title: "destructuring (from object) - <es5/>",
    score: 87,
    hasCode: true,
code: function (i){
  var a=i.a;
  var b=i.b;
  var c=i.c;
}
  },
  {
    title: "destructuring (from inline array) - <es6/>",
    hasCode: true,
code: function() {
  var [a,b,c] = [1,2,3]
}
  },
  {
    title: "destructuring (from inline array) - <es5/>",
    score: 93,
    hasCode: true,
code: function (){
  var a=1, b=2, c=3;
}
  },
  {
    title: "destructuring (from inline string) - <es6/>",
    hasCode: true,
code: function() {
  var [a,b,c] = "str"
}
  },
  {
    title: "destructuring (from inline string) - <es5/>",
    score: 11,
    slideClass: "bad",
    hasCode: true,
code: function (){
  var _slicedToArray=function(){
    function sliceIterator(arr,i){
      var _arr=[];
      var _n=true;
      var _d=false;
      var _e=undefined;
      try{
        for(var _i=arr[Symbol.iterator](),_s;
            !(_n=(_s=_i.next()).done);
            _n=true){
          _arr.push(_s.value);
          if(i&&_arr.length===i)break;
        }
      }
      catch(err){
        _d=true;
        _e=err;
      }
      finally{
        try{
          if(!_n&&_i["return"]) _i["return"]();
        }
        finally{
          if(_d) throw _e;
        }
      }
      return _arr;
    }

    return function(arr,i){
      if(Array.isArray(arr)){
        return arr;
      }
      else if(Symbol.iterator in Object(arr)){
        return sliceIterator(arr,i);
      }
      else{
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  var _str="str";
  var _str2=_slicedToArray(_str,3);
  var a=_str2[0];
  var b=_str2[1];
  var c=_str2[2];
}
  },
  {
    title: "generator - <es6/>",
    hasCode: true,
code: function* () {
  yield 1;
  yield 2;
  yield 3;
}
  },
  {
    title: "generator - <es5/>",
    score: 14,
    slideClass: "bad",
    hasCode: true,
code: function () {
  var a=regeneratorRuntime.mark(function a(){
    return regeneratorRuntime.wrap(function a$(_context){
      while(1){
        switch(_context.prev=_context.next){
          case 0:
            _context.next=2;
            return 1;
          case 2:
            _context.next=4;
            return 2;
          case 4:
            _context.next=6;
            return 3;
          case 6:
          case"end":
            return _context.stop();
        }
      }
    },a,this);
  });
}
  },
  {
    feature: true,
    content: "<h2>pssst... regeneratorRuntime requires the <span class='mono'>babel-polyfill</span></h2>"
  },
  {
    title: "class (empty) - <es6/>",
    hasCode: true,
code: function (){
  class a {}
}
  },
  {
    title: "class (empty) - <es5/>",
    score: 35,
    slideClass: "iffy",
    hasCode: true,
code: function() {
  function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var a=function a(){_classCallCheck(this,a);};
}
  },
  {
    title: "class (methods) - <es6/>",
    hasCode: true,
code: function (){
  class a { b(){} }
}
  },
  {
    title: "class (methods) - <es5/>",
    score: 10,
    slideClass: "bad",
    hasCode: true,
code: function() {
  var _createClass=function(){
    function defineProperties(target,props){
      for(var i=0;i<props.length;i++){
        var descriptor=props[i];
        descriptor.enumerable=descriptor.enumerable||false;
        descriptor.configurable=true;
        if("value"in descriptor)descriptor.writable=true;
        Object.defineProperty(target,descriptor.key,descriptor);
      }
    }
    return function(Constructor,protoProps,staticProps){
      if(protoProps) defineProperties (Constructor.prototype,protoProps);
      if(staticProps) defineProperties (Constructor,staticProps);
      return Constructor
    ;}
  ;}();
  function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var a=function(){
    function a(){
      _classCallCheck(this,a);
    }
    _createClass(a,[
      { key:"b",value:function b(){} }
    ]);
    return a;
  }();
}
  },
  {
    title: "class (extends) - <es6/>",
    hasCode: true,
code: function (){
  class a { }
  class b extends a { }
}
  },
  {
    title: "class (extends) - <es5/>",
    score: 6,
    slideClass: "bad",
    hasCode: true,
code: function() {
  function _possibleConstructorReturn(self,call){
    if(!self){
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call&&(typeof call==="object"||typeof call==="function")?call:self;
  }
  function _inherits(subClass,superClass){
    if(typeof superClass!=="function"&&superClass!==null){
      throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);
    }
    subClass.prototype=Object.create(superClass&&superClass.prototype,{
      constructor:{
        value:subClass,
        enumerable:false,
        writable:true,
        configurable:true
      }
    });
    if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;
  }
  function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var a=function a(){
    _classCallCheck(this,a);
  };
  var b=function(_a){
    _inherits(b,_a);
    function b(){
      _classCallCheck(this,b);
      return _possibleConstructorReturn(this,Object.getPrototypeOf(b).apply(this,arguments));
    }
    return b;
  }(a);
}
  },
  {
    feature: true,
    content: "<h2>So, about those assumptions...</h2>"
  },
  {
    feature: true,
    content: "<h2>#1<br/><span class='purple'>All things being equal, it is a better practice to write JS code in JavaScript than an adjunct language.</h2>"
  },
  {
    title: "Consider transpilation",
    p: [
      "Complexity is reduced",
      "<span class='purple'>If we're going always to transpile our code to target older ES versions, why not choose a language with less wat</span>",
    ]
  },
  {
    title: "Consider transpilation",
    p: [
      "Dependencies are removed",
      "<span class='purple'>Modern JS development often necessitates a build chain -- you have twenty other dependencies</span>",
    ]
  },
  {
    title: "Consider transpilation",
    p: [
      "Easier to hire for/onboard",
      "<span class='purple'>People like programming with new toys</span>"
    ]
  },
  {
    feature: true,
    content: "<h2>#2<br/><span class='purple'>Page weight inflation is bad.</h2>"
  },
  {
    title: "Living with large page weight",
    p: [
      "Makes your page less performant",
      "<span class='purple'>Programming is always about tradeoffs, and developer happiness is as finite/valuable a resource as perf</span>",
    ]
  },
  {
    title: "Living with large page weight",
    p: [
      "Murders mobile data plans",
      "<span class='purple'>Product decisions may require platform proliferation, and you might not need to worry about mobile devices</span>",
    ]
  },
  {
    title: "Living with large page weight",
    p: [
      "Reduces accessibility",
      "<span class='purple'>Accessibility is good! And it's often something to aim for, but the realities of 'whoever ships wins' may apply too</span>"
    ]
  },
  {
    title: "<span class='purple'>Conclusions</span>",
    p: [
      "Transpilation isn't a panacea",
      "Be sensible with your tradeoffs",
      "Investigate what your tools are actually doing"
    ]
  }
]


