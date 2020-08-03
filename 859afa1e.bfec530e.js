(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(10),o=(n(0),n(251)),i={id:"instantiate_objects_reference",title:"Reference",sidebar_label:"Reference"},c={id:"patterns/instantiate_objects/instantiate_objects_reference",isDocsHomePage:!1,title:"Reference",description:"Hydra provides hydra.utils.instantiate() (and its alias hydra.utils.call()) for instantiating objects and calling functions. Prefer instantiate for creating objects and call for invoking functions.",source:"@site/docs/patterns/instantiate_objects/reference.md",permalink:"/docs/next/patterns/instantiate_objects/instantiate_objects_reference",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/instantiate_objects/reference.md",version:"next",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1596486257,sidebar_label:"Reference",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/patterns/instantiate_objects/instantiate_objects_overview"},next:{title:"Structured Configs with instantiate",permalink:"/docs/next/patterns/instantiate_objects/instantiate_with_structured_config"},latestVersionMainDocPermalink:"/docs/intro"},s=[{value:"Example config",id:"example-config",children:[]},{value:"Example ObjectConf definition",id:"example-objectconf-definition",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra provides ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",Object(o.b)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",Object(o.b)("inlineCode",{parentName:"p"},"call")," for invoking functions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def instantiate(config: Union[ObjectConf, DictConfig], *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An ObjectConf or DictConfig describing what to instantiate and what params to use\n    :param args: optional positional parameters pass-through\n    :param kwargs: optional named parameters pass-through\n    :return: the return value from the specified class\n    """\n')),Object(o.b)("p",null,"For using these functions, the config must have a key called ",Object(o.b)("inlineCode",{parentName:"p"},"target"),". If a key called ",Object(o.b)("inlineCode",{parentName:"p"},"params")," is also present, its value is passed as keyword arguments to class/function specified by ",Object(o.b)("inlineCode",{parentName:"p"},"target"),"."),Object(o.b)("h3",{id:"example-config"},"Example config"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# target function name or class method fully qualified name\ntarget: foo.Bar\n# optional parameters dictionary to pass when calling the target\nparams:\n  x: 10\n")),Object(o.b)("h3",{id:"example-objectconf-definition"},"Example ObjectConf definition"),Object(o.b)("p",null,"ObjectConf is defined in ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.types.ObjectConf"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"@dataclass\nclass ObjectConf(Dict[str, Any]):\n    # class, class method or function name\n    target: str = MISSING\n    # parameters to pass to target when calling it\n    params: Any = field(default_factory=dict)\n")),Object(o.b)("h4",{id:"example-usage"},"Example usage"),Object(o.b)("p",null,"example.py"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"class Foo:\n\n  # target: example.Foo\n  def __init__(self, x: int, y: int, z:int = 30) -> None:\n    self.x = x\n    self.y = y\n    self.z = z\n\n  # target: example.Foo.class_method\n  @classmethod\n  def class_method(cls, x: int) -> Any:\n    return cls(x, 10)\n    \n  # target: example.Foo.static_method\n  @staticmethod\n  def static_method(z: int) -> int:\n    return z + 1\n\n# target: example.bar\ndef bar(z: int) -> int:\n  return z + 2\n\n")),Object(o.b)("p",null,"To instantiate a ",Object(o.b)("inlineCode",{parentName:"p"},"example.Foo")," object:"),Object(o.b)("p",null,"config.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"foo:\n  target: example.Foo\n  params:\n    x: 10\n    y: 20\n")),Object(o.b)("p",null,"Now, to test these, ",Object(o.b)("inlineCode",{parentName:"p"},"instantiate")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"call"),") them as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from hydra.utils import instantiate\n# foo is as described in the config\nfoo: Foo = instantiate(cfg.foo) # Foo(x = 10, y = 20, z = 30)\n# you can also override the config values on the callsite:\nfoo2: Foo = instantiate(cfg.foo, x=100) # Foo(x = 100, y = 20, z = 30)\n# and even pass additional fields that are not in the config. \nfoo3: Foo = instantiate(cfg.foo, z=100) # Foo(x = 10, y = 20, z = 100)\n")),Object(o.b)("p",null,"We can also call functions from the standard library:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"myobject:\n  target: builtins.str\n  params:\n    object: 42\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import hydra\n\n@hydra.main(config_path="config.yaml")\ndef app(cfg):\n  foo: str = hydra.utils.instantiate(cfg)  # "42"\n\n')),Object(o.b)("p",null,"We can create the ",Object(o.b)("inlineCode",{parentName:"p"},"None")," object by setting the config to ",Object(o.b)("inlineCode",{parentName:"p"},"None"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"myobject: null\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import hydra\n\n@hydra.main(config_path="config.yaml")\ndef app(cfg):\n  foo = hydra.utils.instantiate(cfg.myobject)  # None\n')))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||f[d]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);