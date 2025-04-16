import{g as Nt,u as De,a as Kt,B as I,E as _,U as qt,T as ze,b as Qt,c as D,n as K,d as ee,M as k,w as V,P as Jt,G as st,f as it,C as Zt,h as $,i as M,v as B,j as te,k as H,l as E,m as ve,o as er,p as A,q as T,s as tr,t as nt,x as rr,y as sr,z as ir,A as ye,D as Te,F as ot,H as L,R as He,I as nr,J as Ee,e as C,K as or}from"./index-Br1gLept.js";const re=Object.create(null),Oe=Object.create(null);function Ce(s,e){let t=Oe[s];return t===void 0&&(re[e]===void 0&&(re[e]=1),Oe[s]=t=re[e]++),t}let j;function ar(){if(!j){j="mediump";const s=Nt();s&&s.getShaderPrecisionFormat&&(j=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision?"highp":"mediump")}return j}function lr(s,e,t){return e?s:t?(s=s.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${s}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${s}
        `}function ur(s,e,t){const r=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(s.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${s}`}else if(r!=="highp"&&s.substring(0,15)==="precision highp")return s.replace("precision highp","precision mediump");return s}function cr(s,e){return e?`#version 300 es
${s}`:s}const dr={},hr={};function fr(s,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const r=t?dr:hr;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,s.indexOf("#define SHADER_NAME")!==-1?s:`${`#define SHADER_NAME ${e}`}
${s}`}function pr(s,e){return e?s.replace("#version 300 es",""):s}const se={stripVersion:pr,ensurePrecision:ur,addProgramDefines:lr,setProgramName:fr,insertVersion:cr},ie=Object.create(null),at=class Se{constructor(e){e={...Se.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:ar()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,n=e.vertex;Object.keys(se).forEach(o=>{const a=r[o];i=se[o](i,a,!0),n=se[o](n,a,!1)}),this.fragment=i,this.vertex=n,this._key=Ce(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return ie[t]||(ie[t]=new Se(e)),ie[t]}};at.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let lt=at;const $e={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function gr(s){return $e[s]??$e.float32}const mr={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function xr({source:s,entryPoint:e}){const t={},r=s.indexOf(`fn ${e}`);if(r!==-1){const i=s.indexOf("->",r);if(i!==-1){const n=s.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(n))!==null;){const l=mr[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:gr(l).stride,offset:0,instance:!1,start:0}}}}return t}function ne(s){var d,f;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,n=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(d=s.match(e))==null?void 0:d.map(h=>({group:parseInt(h.match(t)[1],10),binding:parseInt(h.match(r)[1],10),name:h.match(i)[2],isUniform:h.match(i)[1]==="<uniform>",type:h.match(n)[1]}));if(!u)return{groups:[],structs:[]};const c=((f=s.match(o))==null?void 0:f.map(h=>{const g=h.match(l)[1],p=h.match(a).reduce((m,x)=>{const[v,b]=x.split(":");return m[v.trim()]=b.trim(),m},{});return p?{name:g,members:p}:null}).filter(({name:h})=>u.some(g=>g.type===h)))??[];return{groups:u,structs:c}}var W=(s=>(s[s.VERTEX=1]="VERTEX",s[s.FRAGMENT=2]="FRAGMENT",s[s.COMPUTE=4]="COMPUTE",s))(W||{});function _r({groups:s}){const e=[];for(let t=0;t<s.length;t++){const r=s[t];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:W.VERTEX|W.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:W.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:W.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function br({groups:s}){const e=[];for(let t=0;t<s.length;t++){const r=s[t];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function vr(s,e){const t=new Set,r=new Set,i=[...s.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),n=[...s.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:n}}const oe=Object.create(null);class Q{constructor(e){var a,l;this._layoutKey=0;const{fragment:t,vertex:r,layout:i,gpuLayout:n,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){const u=ne(t.source);this.structsAndGroups=u}else{const u=ne(r.source),c=ne(t.source);this.structsAndGroups=vr(u,c)}this.layout=i??br(this.structsAndGroups),this.gpuLayout=n??_r(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=Ce(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=xr(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return oe[t]||(oe[t]=new Q(e)),oe[t]}}const ut=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],yr=ut.reduce((s,e)=>(s[e]=!0,s),{});function Tr(s,e){switch(s){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const ct=class dt{constructor(e,t){this._touched=0,this.uid=De("uniform"),this._resourceType="uniformGroup",this._resourceId=De("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...dt.defaultOptions,...t},this.uniformStructures=e;const r={};for(const i in e){const n=e[i];if(n.name=i,n.size=n.size??1,!yr[n.type])throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${ut.join(", ")}`);n.value??(n.value=Tr(n.type,n.size)),r[i]=n.value}this.uniforms=r,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=Ce(Object.keys(r).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};ct.defaultOptions={ubo:!1,isStatic:!1};let z=ct;var O=(s=>(s[s.WEBGL=1]="WEBGL",s[s.WEBGPU=2]="WEBGPU",s[s.BOTH=3]="BOTH",s))(O||{});class J extends Kt{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:n,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=r,o===void 0&&(o=0,t&&(o|=O.WEBGPU),r&&(o|=O.WEBGL)),this.compatibleRenderers=o;const l={};if(!n&&!i&&(n={}),n&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&a)for(const u in a)for(const c in a[u]){const d=a[u][c];l[d]={group:u,binding:c,name:d}}else if(t&&i&&!a){const u=t.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(n){i={},a={},t&&t.structsAndGroups.groups.forEach(d=>{a[d.group]=a[d.group]||{},a[d.group][d.binding]=d.name,l[d.name]=d});let u=0;for(const c in n)l[c]||(i[99]||(i[99]=new I,this._ownedBindGroups.push(i[99])),l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++);for(const c in n){const d=c;let f=n[c];!f.source&&!f._resourceType&&(f=new z(f));const h=l[d];h&&(i[h.group]||(i[h.group]=new I,this._ownedBindGroups.push(i[h.group])),i[h.group].setResource(f,h.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(e,t,r){var i,n;(i=this._uniformBindMap)[t]||(i[t]={}),(n=this._uniformBindMap[t])[r]||(n[r]=e),this.groups[t]||(this.groups[t]=new I,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const r={};for(const i in t){const n=t[i];Object.defineProperty(r,n.name,{get(){return e[n.group].getResource(n.binding)},set(o){e[n.group].setResource(o,n.binding)}})}return r}destroy(e=!1){var t,r;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:r,...i}=e;let n,o;return t&&(n=Q.from(t)),r&&(o=lt.from(r)),new J({gpuProgram:n,glProgram:o,...i})}}const Sr={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},ae=0,le=1,ue=2,ce=3,de=4,he=5,we=class ht{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<ae)}set blend(e){!!(this.data&1<<ae)!==e&&(this.data^=1<<ae)}get offsets(){return!!(this.data&1<<le)}set offsets(e){!!(this.data&1<<le)!==e&&(this.data^=1<<le)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<ue)}set culling(e){!!(this.data&1<<ue)!==e&&(this.data^=1<<ue)}get depthTest(){return!!(this.data&1<<ce)}set depthTest(e){!!(this.data&1<<ce)!==e&&(this.data^=1<<ce)}get depthMask(){return!!(this.data&1<<he)}set depthMask(e){!!(this.data&1<<he)!==e&&(this.data^=1<<he)}get clockwiseFrontFace(){return!!(this.data&1<<de)}set clockwiseFrontFace(e){!!(this.data&1<<de)!==e&&(this.data^=1<<de)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Sr[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new ht;return e.depthTest=!1,e.blend=!0,e}};we.default2d=we.for2d();let ft=we;class pt{static init(e){Object.defineProperty(this,"resizeTo",{set(t){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=t,t&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let t,r;if(this._resizeTo===globalThis.window)t=globalThis.innerWidth,r=globalThis.innerHeight;else{const{clientWidth:i,clientHeight:n}=this._resizeTo;t=i,r=n}this.renderer.resize(t,r),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}pt.extension=_.Application;class gt{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,qt.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?ze.shared:new ze,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}gt.extension=_.Application;let wr=0;class Cr{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new Qt({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new D({source:i,label:`texturePool_${wr++}`})}getOptimalTexture(e,t,r=1,i){let n=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6);n=K(n),o=K(o);const a=(n<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(n,o,i)),l.source._resolution=r,l.source.width=n/r,l.source.height=o/r,l.source.pixelWidth=n,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const r=this._texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const R=new Cr;class mt{constructor(e){this._renderer=e}push(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}}mt.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"filter"};const Pr=new k;function Mr(s,e){return e.clear(),xt(s,e),e.isValid||e.set(0,0,0,0),s.renderGroup?e.applyMatrix(s.renderGroup.localTransform):e.applyMatrix(s.parentRenderGroup.worldTransform),e}function xt(s,e){if(s.localDisplayStatus!==7||!s.measurable)return;const t=!!s.effects.length;let r=e;if((s.renderGroup||t)&&(r=ee.get().clear()),s.boundsArea)e.addRect(s.boundsArea,s.worldTransform);else{if(s.renderPipeId){const n=s.bounds;r.addFrame(n.minX,n.minY,n.maxX,n.maxY,s.groupTransform)}const i=s.children;for(let n=0;n<i.length;n++)xt(i[n],r)}if(t){let i=!1;for(let n=0;n<s.effects.length;n++)s.effects[n].addBounds&&(i||(i=!0,r.applyMatrix(s.parentRenderGroup.worldTransform)),s.effects[n].addBounds(r,!0));i&&(r.applyMatrix(s.parentRenderGroup.worldTransform.copyTo(Pr).invert()),e.addBounds(r,s.relativeGroupTransform)),e.addBounds(r),ee.return(r)}else s.renderGroup&&(e.addBounds(r,s.relativeGroupTransform),ee.return(r))}function Br(s,e){e.clear();const t=e.matrix;for(let r=0;r<s.length;r++){const i=s[r];i.globalDisplayStatus<7||(e.matrix=i.worldTransform,i.addBounds(e))}return e.matrix=t,e}const Ur=new st({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),location:0,format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class _t{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new z({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new I({}),this.renderer=e}get activeBackTexture(){var e;return(e=this._activeFilterData)==null?void 0:e.backTexture}push(e){var h;const t=this.renderer,r=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());const i=this._filterStack[this._filterStackIndex];if(this._filterStackIndex++,r.length===0){i.skip=!0;return}const n=i.bounds;e.renderables?Br(e.renderables,n):e.filterEffect.filterArea?(n.clear(),n.addRect(e.filterEffect.filterArea),n.applyMatrix(e.container.worldTransform)):Mr(e.container,n);const o=t.renderTarget.renderTarget.colorTexture.source;let a=1/0,l=0,u=!0,c=!1,d=!1;for(let g=0;g<r.length;g++){const p=r[g];if(a=Math.min(a,p.resolution==="inherit"?o._resolution:p.resolution),l+=p.padding,p.antialias==="off"?u=!1:p.antialias==="inherit"&&u&&(u=o.antialias),!!!(p.compatibleRenderers&t.type)){d=!1;break}if(p.blendRequired&&!(((h=t.backBuffer)==null?void 0:h.useBackBuffer)??!0)){V("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),d=!1;break}d=p.enabled||d,c=c||p.blendRequired}if(!d){i.skip=!0;return}const f=t.renderTarget.rootViewPort;if(n.scale(a).fitBounds(0,f.width,0,f.height).scale(1/a).pad(l).ceil(),!n.isPositive){i.skip=!0;return}i.skip=!1,i.bounds=n,i.blendRequired=c,i.container=e.container,i.filterEffect=e.filterEffect,i.previousRenderSurface=t.renderTarget.renderSurface,i.inputTexture=R.getOptimalTexture(n.width,n.height,a,u),t.renderTarget.bind(i.inputTexture,!0),t.globalUniforms.push({offset:n})}pop(){const e=this.renderer;this._filterStackIndex--;const t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;const r=t.inputTexture,i=t.bounds;let n=D.EMPTY;if(e.renderTarget.finishRenderPass(),t.blendRequired){const a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null,l=e.renderTarget.getRenderTarget(t.previousRenderSurface);n=this.getBackTexture(l,i,a)}t.backTexture=n;const o=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(r.source.style,2),this._globalFilterBindGroup.setResource(n.source,3),e.globalUniforms.pop(),o.length===1)o[0].apply(this,r,t.previousRenderSurface,!1),R.returnTexture(r);else{let a=t.inputTexture,l=R.getOptimalTexture(i.width,i.height,a.source._resolution,!1),u=0;for(u=0;u<o.length-1;++u){o[u].apply(this,a,l,!0);const d=a;a=l,l=d}o[u].apply(this,a,t.previousRenderSurface,!1),R.returnTexture(a),R.returnTexture(l)}t.blendRequired&&R.returnTexture(n)}getBackTexture(e,t,r){const i=e.colorTexture.source._resolution,n=R.getOptimalTexture(t.width,t.height,i,!1);let o=t.minX,a=t.minY;r&&(o-=r.minX,a-=r.minY),o=Math.floor(o*i),a=Math.floor(a*i);const l=Math.ceil(t.width*i),u=Math.ceil(t.height*i);return this.renderer.renderTarget.copyToTexture(e,n,{x:o,y:a},{width:l,height:u},{x:0,y:0}),n}applyFilter(e,t,r,i){const n=this.renderer,o=this._filterStack[this._filterStackIndex],a=o.bounds,l=Jt.shared,c=o.previousRenderSurface===r;let d=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution,f=this._filterStackIndex-1;for(;f>0&&this._filterStack[f].skip;)--f;f>0&&(d=this._filterStack[f].inputTexture.source._resolution);const h=this._filterGlobalUniforms,g=h.uniforms,p=g.uOutputFrame,m=g.uInputSize,x=g.uInputPixel,v=g.uInputClamp,b=g.uGlobalFrame,S=g.uOutputTexture;if(c){let U=this._filterStackIndex;for(;U>0;){U--;const P=this._filterStack[this._filterStackIndex-1];if(!P.skip){l.x=P.bounds.minX,l.y=P.bounds.minY;break}}p[0]=a.minX-l.x,p[1]=a.minY-l.y}else p[0]=0,p[1]=0;p[2]=t.frame.width,p[3]=t.frame.height,m[0]=t.source.width,m[1]=t.source.height,m[2]=1/m[0],m[3]=1/m[1],x[0]=t.source.pixelWidth,x[1]=t.source.pixelHeight,x[2]=1/x[0],x[3]=1/x[1],v[0]=.5*x[2],v[1]=.5*x[3],v[2]=t.frame.width*m[2]-.5*x[2],v[3]=t.frame.height*m[3]-.5*x[3];const y=this.renderer.renderTarget.rootRenderTarget.colorTexture;b[0]=l.x*d,b[1]=l.y*d,b[2]=y.source.width*d,b[3]=y.source.height*d;const G=this.renderer.renderTarget.getRenderTarget(r);if(n.renderTarget.bind(r,!!i),r instanceof D?(S[0]=r.frame.width,S[1]=r.frame.height):(S[0]=G.width,S[1]=G.height),S[2]=G.isRoot?-1:1,h.update(),n.renderPipes.uniformBatch){const U=n.renderPipes.uniformBatch.getUboResource(h);this._globalFilterBindGroup.setResource(U,0)}else this._globalFilterBindGroup.setResource(h,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),e.groups[0]=this._globalFilterBindGroup,n.encoder.draw({geometry:Ur,shader:e,state:e._state,topology:"triangle-list"}),n.type===O.WEBGL&&n.renderTarget.finishRenderPass()}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new it,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){const r=this._activeFilterData,i=e.set(r.inputTexture._source.width,0,0,r.inputTexture._source.height,r.bounds.minX,r.bounds.minY),n=t.worldTransform.copyTo(k.shared);return n.invert(),i.prepend(n),i.scale(1/t.texture.frame.width,1/t.texture.frame.height),i.translate(t.anchor.x,t.anchor.y),i}}_t.extension={type:[_.WebGLSystem,_.WebGPUSystem],name:"filter"};class q extends Zt{constructor(e){e instanceof $&&(e={context:e});const{context:t,roundPixels:r,...i}=e||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,t?this._context=t:this._context=this._ownedContext=new $,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(e){e!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=e,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new q(this._context.clone()):(this._ownedContext=null,new q(this._context))}lineStyle(e,t,r){M(B,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return e&&(i.width=e),t&&(i.color=t),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(e,t){M(B,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return e&&(r.color=e),t&&(r.alpha=t),this.context.fillStyle=r,this}endFill(){M(B,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==$.defaultStrokeStyle.width||e.color!==$.defaultStrokeStyle.color||e.alpha!==$.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return M(B,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return M(B,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return M(B,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return M(B,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return M(B,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return M(B,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}const bt=class vt extends st{constructor(...e){let t=e[0]??{};t instanceof Float32Array&&(M(B,"use new MeshGeometry({ positions, uvs, indices }) instead"),t={positions:t,uvs:e[1],indices:e[2]}),t={...vt.defaultOptions,...t};const r=t.positions||new Float32Array([0,0,1,0,1,1,0,1]),i=t.uvs||new Float32Array([0,0,1,0,1,1,0,1]),n=t.indices||new Uint32Array([0,1,2,0,2,3]),o=t.shrinkBuffersToFit,a=new te({data:r,label:"attribute-mesh-positions",shrinkToFit:o,usage:H.VERTEX|H.COPY_DST}),l=new te({data:i,label:"attribute-mesh-uvs",shrinkToFit:o,usage:H.VERTEX|H.COPY_DST}),u=new te({data:n,label:"index-mesh-buffer",shrinkToFit:o,usage:H.INDEX|H.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:t.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};bt.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Pe=bt;function Rr(s){const e=s._stroke,t=s._fill,i=[`div { ${[`color: ${E.shared.setValue(t.color).toHex()}`,`font-size: ${s.fontSize}px`,`font-family: ${s.fontFamily}`,`font-weight: ${s.fontWeight}`,`font-style: ${s.fontStyle}`,`font-variant: ${s.fontVariant}`,`letter-spacing: ${s.letterSpacing}px`,`text-align: ${s.align}`,`padding: ${s.padding}px`,`white-space: ${s.whiteSpace==="pre"&&s.wordWrap?"pre-wrap":s.whiteSpace}`,...s.lineHeight?[`line-height: ${s.lineHeight}px`]:[],...s.wordWrap?[`word-wrap: ${s.breakWords?"break-all":"break-word"}`,`max-width: ${s.wordWrapWidth}px`]:[],...e?[Tt(e)]:[],...s.dropShadow?[yt(s.dropShadow)]:[],...s.cssOverrides].join(";")} }`];return Gr(s.tagStyles,i),i.join(" ")}function yt(s){const e=E.shared.setValue(s.color).setAlpha(s.alpha).toHexa(),t=Math.round(Math.cos(s.angle)*s.distance),r=Math.round(Math.sin(s.angle)*s.distance),i=`${t}px ${r}px`;return s.blur>0?`text-shadow: ${i} ${s.blur}px ${e}`:`text-shadow: ${i} ${e}`}function Tt(s){return[`-webkit-text-stroke-width: ${s.width}px`,`-webkit-text-stroke-color: ${E.shared.setValue(s.color).toHex()}`,`text-stroke-width: ${s.width}px`,`text-stroke-color: ${E.shared.setValue(s.color).toHex()}`,"paint-order: stroke"].join(";")}const We={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"},Ie={fill:s=>`color: ${E.shared.setValue(s).toHex()}`,breakWords:s=>`word-wrap: ${s?"break-all":"break-word"}`,stroke:Tt,dropShadow:yt};function Gr(s,e){for(const t in s){const r=s[t],i=[];for(const n in r)Ie[n]?i.push(Ie[n](r[n])):We[n]&&i.push(We[n].replace("{{VALUE}}",r[n]));e.push(`${t} { ${i.join(";")} }`)}}class Me extends ve{constructor(e={}){super(e),this._cssOverrides=[],this.cssOverrides??(this.cssOverrides=e.cssOverrides),this.tagStyles=e.tagStyles??{}}set cssOverrides(e){this._cssOverrides=e instanceof Array?e:[e],this.update()}get cssOverrides(){return this._cssOverrides}_generateKey(){return this._styleKey=er(this)+this._cssOverrides.join("-"),this._styleKey}update(){this._cssStyle=null,super.update()}clone(){return new Me({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow?{...this.dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides})}get cssStyle(){return this._cssStyle||(this._cssStyle=Rr(this)),this._cssStyle}addOverride(...e){const t=e.filter(r=>!this.cssOverrides.includes(r));t.length>0&&(this.cssOverrides.push(...t),this.update())}removeOverride(...e){const t=e.filter(r=>this.cssOverrides.includes(r));t.length>0&&(this.cssOverrides=this.cssOverrides.filter(r=>!t.includes(r)),this.update())}set fill(e){typeof e!="string"&&typeof e!="number"&&V("[HTMLTextStyle] only color fill is not supported by HTMLText"),super.fill=e}set stroke(e){e&&typeof e!="string"&&typeof e!="number"&&V("[HTMLTextStyle] only color stroke is not supported by HTMLText"),super.stroke=e}}const Le="http://www.w3.org/2000/svg",Ve="http://www.w3.org/1999/xhtml";class St{constructor(){this.svgRoot=document.createElementNS(Le,"svg"),this.foreignObject=document.createElementNS(Le,"foreignObject"),this.domElement=document.createElementNS(Ve,"div"),this.styleElement=document.createElementNS(Ve,"style"),this.image=new Image;const{foreignObject:e,svgRoot:t,styleElement:r,domElement:i}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(r),e.appendChild(i)}}let je;function Fr(s,e,t,r){r=r||je||(je=new St);const{domElement:i,styleElement:n,svgRoot:o}=r;i.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${s}</div>`,i.setAttribute("style","transform-origin: top left; display: inline-block"),t&&(n.textContent=t),document.body.appendChild(o);const a=i.getBoundingClientRect();o.remove();const l=A.measureFont(e.fontStyle).descent,u=e.padding*2;return{width:a.width-u,height:a.height+l-u}}function Ye(s,e,t){if(s)for(const r in s){const i=r.toLocaleLowerCase(),n=e[i];if(n){let o=s[r];r==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&n.push(`//----${t}----//`),n.push(o)}else V(`${r} placement hook does not exist in shader`)}}const kr=/\{\{(.*?)\}\}/g;function Xe(s){var r;const e={};return(((r=s.match(kr))==null?void 0:r.map(i=>i.replace(/[{()}]/g,"")))??[]).forEach(i=>{e[i]=[]}),e}function Ne(s,e){let t;const r=/@in\s+([^;]+);/g;for(;(t=r.exec(s))!==null;)e.push(t[1])}function Ke(s,e,t=!1){const r=[];Ne(e,r),s.forEach(a=>{a.header&&Ne(a.header,r)});const i=r;t&&i.sort();const n=i.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=e.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${n}
`),o}function qe(s,e){let t;const r=/@out\s+([^;]+);/g;for(;(t=r.exec(s))!==null;)e.push(t[1])}function Ar(s){const t=/\b(\w+)\s*:/g.exec(s);return t?t[1]:""}function Dr(s){const e=/@.*?\s+/g;return s.replace(e,"")}function zr(s,e){const t=[];qe(e,t),s.forEach(l=>{l.header&&qe(l.header,t)});let r=0;const i=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${r++}) ${l}`).join(`,
`),n=t.sort().map(l=>`       var ${Dr(l)};`).join(`
`),o=`return VSOutput(
                ${t.sort().map(l=>` ${Ar(l)}`).join(`,
`)});`;let a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${n}
`),a=a.replace("{{return}}",`
${o}
`),a}function Qe(s,e){let t=s;for(const r in e){const i=e[r];i.join(`
`).length?t=t.replace(`{{${r}}}`,`//-----${r} START-----//
${i.join(`
`)}
//----${r} FINISH----//`):t=t.replace(`{{${r}}}`,"")}return t}const F=Object.create(null),fe=new Map;let Hr=0;function Er({template:s,bits:e}){const t=wt(s,e);if(F[t])return F[t];const{vertex:r,fragment:i}=$r(s,e);return F[t]=Ct(r,i,e),F[t]}function Or({template:s,bits:e}){const t=wt(s,e);return F[t]||(F[t]=Ct(s.vertex,s.fragment,e)),F[t]}function $r(s,e){const t=e.map(o=>o.vertex).filter(o=>!!o),r=e.map(o=>o.fragment).filter(o=>!!o);let i=Ke(t,s.vertex,!0);i=zr(t,i);const n=Ke(r,s.fragment,!0);return{vertex:i,fragment:n}}function wt(s,e){return e.map(t=>(fe.has(t)||fe.set(t,Hr++),fe.get(t))).sort((t,r)=>t-r).join("-")+s.vertex+s.fragment}function Ct(s,e,t){const r=Xe(s),i=Xe(e);return t.forEach(n=>{Ye(n.vertex,r,n.name),Ye(n.fragment,i,n.name)}),{vertex:Qe(s,r),fragment:Qe(e,i)}}const Wr=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Ir=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,Lr=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Vr=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`,jr={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Yr={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Pt({bits:s,name:e}){const t=Er({template:{fragment:Ir,vertex:Wr},bits:[jr,...s]});return Q.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function Mt({bits:s,name:e}){return new lt({name:e,...Or({template:{vertex:Lr,fragment:Vr},bits:[Yr,...s]})})}const Xr={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Nr={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},pe={};function Kr(s){const e=[];if(s===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let r=0;r<s;r++)e.push(`@group(1) @binding(${t++}) var textureSource${r+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${r+1}: sampler;`)}return e.join(`
`)}function qr(s){const e=[];if(s===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<s;t++)t===s-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function Qr(s){return pe[s]||(pe[s]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Kr(s)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${qr(s)}
            `}}),pe[s]}const ge={};function Jr(s){const e=[];for(let t=0;t<s;t++)t>0&&e.push("else"),t<s-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function Zr(s){return ge[s]||(ge[s]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${s}];

            `,main:`

                ${Jr(s)}
            `}}),ge[s]}const Bt={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ut={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Je={};function es(s){let e=Je[s];if(e)return e;const t=new Int32Array(s);for(let r=0;r<s;r++)t[r]=r;return e=Je[s]=new z({uTextures:{value:t,type:"i32",size:s}},{isStatic:!0}),e}const N={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}};({...N,vertex:{...N.vertex,header:N.vertex.header.replace("group(1)","group(2)")}});const ts={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class Rt{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(e,t,r,i){const n=this.renderable,o=this.texture,a=n.groupTransform,l=a.a,u=a.b,c=a.c,d=a.d,f=a.tx,h=a.ty,g=this.bounds,p=g.maxX,m=g.minX,x=g.maxY,v=g.minY,b=o.uvs,S=n.groupColorAlpha,y=i<<16|this.roundPixels&65535;e[r+0]=l*m+c*v+f,e[r+1]=d*v+u*m+h,e[r+2]=b.x0,e[r+3]=b.y0,t[r+4]=S,t[r+5]=y,e[r+6]=l*p+c*v+f,e[r+7]=d*v+u*p+h,e[r+8]=b.x1,e[r+9]=b.y1,t[r+10]=S,t[r+11]=y,e[r+12]=l*p+c*x+f,e[r+13]=d*x+u*p+h,e[r+14]=b.x2,e[r+15]=b.y2,t[r+16]=S,t[r+17]=y,e[r+18]=l*m+c*x+f,e[r+19]=d*x+u*m+h,e[r+20]=b.x3,e[r+21]=b.y3,t[r+22]=S,t[r+23]=y}packIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}function Be(s,e,t){const r=(s>>24&255)/255;e[t++]=(s&255)/255*r,e[t++]=(s>>8&255)/255*r,e[t++]=(s>>16&255)/255*r,e[t++]=r}class Gt{constructor(e,t){this.state=ft.for2d(),this._graphicsBatchesHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){const t=e.context,r=!!this._graphicsBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(t);return!!(i.isBatchable||r!==i.isBatchable)}addRenderable(e,t){const r=this.renderer.graphicsContext.updateGpuContext(e.context);e._didGraphicsUpdate&&(e._didGraphicsUpdate=!1,this._rebuild(e)),r.isBatchable?this._addToBatcher(e):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){const t=this._graphicsBatchesHash[e.uid];if(t)for(let r=0;r<t.length;r++){const i=t[r];i.batcher.updateElement(i)}}destroyRenderable(e){this._graphicsBatchesHash[e.uid]&&this._removeBatchForRenderable(e.uid)}execute(e){if(!e.isRenderable)return;const t=this.renderer,r=e.context;if(!t.graphicsContext.getGpuContext(r).batches.length)return;const n=r.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;const o=n.resources.localUniforms.uniforms;o.uTransformMatrix=e.groupTransform,o.uRound=t._roundPixels|e._roundPixels,Be(e.groupColorAlpha,o.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){const t=!!this._graphicsBatchesHash[e.uid],r=this.renderer.graphicsContext.updateGpuContext(e.context);t&&this._removeBatchForRenderable(e.uid),r.isBatchable&&this._initBatchesForRenderable(e),e.batched=r.isBatchable}_addToBatcher(e){const t=this.renderer.renderPipes.batch,r=this._getBatchesForRenderable(e);for(let i=0;i<r.length;i++){const n=r[i];t.addToBatch(n)}}_getBatchesForRenderable(e){return this._graphicsBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){const t=e.context,r=this.renderer.graphicsContext.getGpuContext(t),i=this.renderer._roundPixels|e._roundPixels,n=r.batches.map(o=>{const a=T.get(tr);return o.copyTo(a),a.renderable=e,a.roundPixels=i,a});return this._graphicsBatchesHash[e.uid]===void 0&&e.on("destroyed",()=>{this.destroyRenderable(e)}),this._graphicsBatchesHash[e.uid]=n,n}_removeBatchForRenderable(e){this._graphicsBatchesHash[e].forEach(t=>{T.return(t)}),this._graphicsBatchesHash[e]=null}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(const e in this._graphicsBatchesHash)this._removeBatchForRenderable(e);this._graphicsBatchesHash=null}}Gt.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"graphics"};const Ft=class kt extends Pe{constructor(...e){super({});let t=e[0]??{};typeof t=="number"&&(M(B,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),t={width:t,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(t)}build(e){e={...kt.defaultOptions,...e},this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;const t=this.verticesX*this.verticesY,r=[],i=[],n=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,u=this.height/a;for(let d=0;d<t;d++){const f=d%this.verticesX,h=d/this.verticesX|0;r.push(f*l,h*u),i.push(f/o,h/a)}const c=o*a;for(let d=0;d<c;d++){const f=d%o,h=d/o|0,g=h*this.verticesX+f,p=h*this.verticesX+f+1,m=(h+1)*this.verticesX+f,x=(h+1)*this.verticesX+f+1;n.push(g,p,m,p,x,m)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint32Array(n),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};Ft.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let rs=Ft;class Ue{constructor(){this.batcher=null,this.batch=null,this.roundPixels=0,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get blendMode(){return this.mesh.groupBlendMode}reset(){this.mesh=null,this.texture=null,this.batcher=null,this.batch=null}packIndex(e,t,r){const i=this.geometry.indices;for(let n=0;n<i.length;n++)e[t++]=i[n]+r}packAttributes(e,t,r,i){const n=this.mesh,o=this.geometry,a=n.groupTransform,l=i<<16|this.roundPixels&65535,u=a.a,c=a.b,d=a.c,f=a.d,h=a.tx,g=a.ty,p=o.positions,m=o.getBuffer("aUV"),x=m.data;let v=x;const b=this.texture.textureMatrix;b.isSimple||(v=this._transformedUvs,(this._textureMatrixUpdateId!==b._updateID||this._uvUpdateId!==m._updateID)&&((!v||v.length<x.length)&&(v=this._transformedUvs=new Float32Array(x.length)),this._textureMatrixUpdateId=b._updateID,this._uvUpdateId=m._updateID,b.multiplyUvs(x,v)));const S=n.groupColorAlpha;for(let y=0;y<p.length;y+=2){const G=p[y],U=p[y+1];e[r]=u*G+d*U+h,e[r+1]=c*G+f*U+g,e[r+2]=v[y],e[r+3]=v[y+1],t[r+4]=S,t[r+5]=l,r+=6}}get vertexSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class At{constructor(e,t){this.localUniforms=new z({uTransformMatrix:{value:new k,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new I({0:this.localUniforms}),this._meshDataHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){const t=this._getMeshData(e),r=t.batched,i=e.batched;if(t.batched=i,r!==i)return!0;if(i){const n=e._geometry;if(n.indices.length!==t.indexSize||n.positions.length!==t.vertexSize)return t.indexSize=n.indices.length,t.vertexSize=n.positions.length,!0;const o=this._getBatchableMesh(e),a=e.texture;if(o.texture._source!==a._source&&o.texture._source!==a._source)return!o.batcher.checkAndUpdateTexture(o,a)}return!1}addRenderable(e,t){const r=this.renderer.renderPipes.batch,{batched:i}=this._getMeshData(e);if(i){const n=this._getBatchableMesh(e);n.texture=e._texture,n.geometry=e._geometry,r.addToBatch(n)}else r.break(t),t.add(e)}updateRenderable(e){if(e.batched){const t=this._gpuBatchableMeshHash[e.uid];t.texture=e._texture,t.geometry=e._geometry,t.batcher.updateElement(t)}}destroyRenderable(e){this._meshDataHash[e.uid]=null;const t=this._gpuBatchableMeshHash[e.uid];t&&(T.return(t),this._gpuBatchableMeshHash[e.uid]=null)}execute(e){if(!e.isRenderable)return;e.state.blendMode=nt(e.groupBlendMode,e.texture._source);const t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),Be(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){return this._meshDataHash[e.uid]||this._initMeshData(e)}_initMeshData(e){var t,r;return this._meshDataHash[e.uid]={batched:e.batched,indexSize:(t=e._geometry.indices)==null?void 0:t.length,vertexSize:(r=e._geometry.positions)==null?void 0:r.length},e.on("destroyed",()=>{this.destroyRenderable(e)}),this._meshDataHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){const t=T.get(Ue);return t.mesh=e,t.texture=e._texture,t.roundPixels=this.renderer._roundPixels|e._roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t.mesh=e,t}destroy(){for(const e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&T.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._meshDataHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}At.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"mesh"};const Dt=class zt extends rs{constructor(e={}){e={...zt.defaultOptions,...e},super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const e=this.positions,t=this._leftWidth+this._rightWidth,r=this.width>t?1:this.width/t,i=this._topHeight+this._bottomHeight,n=this.height>i?1:this.height/i,o=Math.min(r,n);e[9]=e[11]=e[13]=e[15]=this._topHeight*o,e[17]=e[19]=e[21]=e[23]=this.height-this._bottomHeight*o,e[25]=e[27]=e[29]=e[31]=this.height,e[2]=e[10]=e[18]=e[26]=this._leftWidth*o,e[4]=e[12]=e[20]=e[28]=this.width-this._rightWidth*o,e[6]=e[14]=e[22]=e[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const e=this.uvs;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1;const t=1/this._originalWidth,r=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=t*this._leftWidth,e[9]=e[11]=e[13]=e[15]=r*this._topHeight,e[4]=e[12]=e[20]=e[28]=1-t*this._rightWidth,e[17]=e[19]=e[21]=e[23]=1-r*this._bottomHeight,this.getBuffer("aUV").update()}};Dt.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let ss=Dt;class Ht{constructor(e){this._gpuSpriteHash=Object.create(null),this._renderer=e}addRenderable(e,t){const r=this._getGpuSprite(e);e._didSpriteUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e._didSpriteUpdate&&this._updateBatchableSprite(e,t),t.batcher.updateElement(t)}validateRenderable(e){const t=e._texture,r=this._getGpuSprite(e);return r.texture._source!==t._source?!r.batcher.checkAndUpdateTexture(r,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];T.return(t),this._gpuSpriteHash[e.uid]=null}_updateBatchableSprite(e,t){e._didSpriteUpdate=!1,t.geometry.update(e),t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=new Ue;return t.geometry=new ss,t.mesh=e,t.texture=e._texture,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(const e in this._gpuSpriteHash)this._gpuSpriteHash[e].geometry.destroy();this._gpuSpriteHash=null,this._renderer=null}}Ht.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"nineSliceSprite"};const is={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},ns={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `}};let me,xe;class os extends J{constructor(){me??(me=Pt({name:"tiling-sprite-shader",bits:[N,is,Bt]})),xe??(xe=Mt({name:"tiling-sprite-shader",bits:[ts,ns,Ut]}));const e=new z({uMapCoord:{value:new k,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new k,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:xe,gpuProgram:me,resources:{localUniforms:new z({uTransformMatrix:{value:new k,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:D.EMPTY.source,uSampler:D.EMPTY.source.style}})}updateUniforms(e,t,r,i,n,o){const a=this.resources.tilingUniforms,l=o.width,u=o.height,c=o.textureMatrix,d=a.uniforms.uTextureTransform;d.set(r.a*l/e,r.b*l/t,r.c*u/e,r.d*u/t,r.tx/e,r.ty/t),d.invert(),a.uniforms.uMapCoord=c.mapCoord,a.uniforms.uClampFrame=c.uClampFrame,a.uniforms.uClampOffset=c.uClampOffset,a.uniforms.uTextureTransform=d,a.uniforms.uSizeAnchor[0]=e,a.uniforms.uSizeAnchor[1]=t,a.uniforms.uSizeAnchor[2]=i,a.uniforms.uSizeAnchor[3]=n,o&&(this.resources.uTexture=o.source,this.resources.uSampler=o.source.style)}}class as extends Pe{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}function ls(s,e){const t=s.anchor.x,r=s.anchor.y;e[0]=-t*s.width,e[1]=-r*s.height,e[2]=(1-t)*s.width,e[3]=-r*s.height,e[4]=(1-t)*s.width,e[5]=(1-r)*s.height,e[6]=-t*s.width,e[7]=(1-r)*s.height}function us(s,e,t,r){let i=0;const n=s.length/e,o=r.a,a=r.b,l=r.c,u=r.d,c=r.tx,d=r.ty;for(t*=e;i<n;){const f=s[t],h=s[t+1];s[t]=o*f+l*h+c,s[t+1]=a*f+u*h+d,t+=e,i++}}function cs(s,e){const t=s.texture,r=t.frame.width,i=t.frame.height;let n=0,o=0;s._applyAnchorToTexture&&(n=s.anchor.x,o=s.anchor.y),e[0]=e[6]=-n,e[2]=e[4]=1-n,e[1]=e[3]=-o,e[5]=e[7]=1-o;const a=k.shared;a.copyFrom(s._tileTransform.matrix),a.tx/=s.width,a.ty/=s.height,a.invert(),a.scale(s.width/r,s.height/i),us(e,2,0,a)}const Y=new as;class Et{constructor(e){this._state=ft.default2d,this._tilingSpriteDataHash=Object.create(null),this._renderer=e}validateRenderable(e){const t=this._getTilingSpriteData(e),r=t.canBatch;this._updateCanBatch(e);const i=t.canBatch;if(i&&i===r){const{batchableMesh:n}=t;if(n&&n.texture._source!==e.texture._source)return!n.batcher.checkAndUpdateTexture(n,e.texture)}return r!==i}addRenderable(e,t){const r=this._renderer.renderPipes.batch;this._updateCanBatch(e);const i=this._getTilingSpriteData(e),{geometry:n,canBatch:o}=i;if(o){i.batchableMesh||(i.batchableMesh=new Ue);const a=i.batchableMesh;e._didTilingSpriteUpdate&&(e._didTilingSpriteUpdate=!1,this._updateBatchableMesh(e),a.geometry=n,a.mesh=e,a.texture=e._texture),a.roundPixels=this._renderer._roundPixels|e._roundPixels,r.addToBatch(a)}else r.break(t),i.shader||(i.shader=new os),this.updateRenderable(e),t.add(e)}execute(e){const{shader:t}=this._tilingSpriteDataHash[e.uid];t.groups[0]=this._renderer.globalUniforms.bindGroup;const r=t.resources.localUniforms.uniforms;r.uTransformMatrix=e.groupTransform,r.uRound=this._renderer._roundPixels|e._roundPixels,Be(e.groupColorAlpha,r.uColor,0),this._state.blendMode=nt(e.groupBlendMode,e.texture._source),this._renderer.encoder.draw({geometry:Y,shader:t,state:this._state})}updateRenderable(e){const t=this._getTilingSpriteData(e),{canBatch:r}=t;if(r){const{batchableMesh:i}=t;e._didTilingSpriteUpdate&&this._updateBatchableMesh(e),i.batcher.updateElement(i)}else if(e._didTilingSpriteUpdate){const{shader:i}=t;i.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}e._didTilingSpriteUpdate=!1}destroyRenderable(e){var r;const t=this._getTilingSpriteData(e);t.batchableMesh=null,(r=t.shader)==null||r.destroy(),this._tilingSpriteDataHash[e.uid]=null}_getTilingSpriteData(e){return this._tilingSpriteDataHash[e.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){const t=new Pe({indices:Y.indices,positions:Y.positions.slice(),uvs:Y.uvs.slice()});return this._tilingSpriteDataHash[e.uid]={canBatch:!0,renderable:e,geometry:t},e.on("destroyed",()=>{this.destroyRenderable(e)}),this._tilingSpriteDataHash[e.uid]}_updateBatchableMesh(e){const t=this._getTilingSpriteData(e),{geometry:r}=t,i=e.texture.source.style;i.addressMode!=="repeat"&&(i.addressMode="repeat",i.update()),cs(e,r.uvs),ls(e,r.positions)}destroy(){for(const e in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[e].renderable);this._tilingSpriteDataHash=null,this._renderer=null}_updateCanBatch(e){const t=this._getTilingSpriteData(e),r=e.texture;let i=!0;return this._renderer.type===O.WEBGL&&(i=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=r.textureMatrix.isSimple&&(i||r.source.isPowerOfTwo),t.canBatch}}Et.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"tilingSprite"};const ds={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        `}},hs={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:` 
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}},fs={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;
             
            }
        `}},ps={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);  
              
                return coverage;
            }
        `}};let _e,be;class gs extends J{constructor(){const e=new z({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new k,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=rr();_e??(_e=Pt({name:"sdf-shader",bits:[Xr,Qr(t),ds,fs,Bt]})),be??(be=Mt({name:"sdf-shader",bits:[Nr,Zr(t),hs,ps,Ut]})),super({glProgram:be,gpuProgram:_e,resources:{localUniforms:e,batchSamplers:es(t)}})}}class Ot{constructor(e){this._gpuBitmapText={},this._renderer=e}validateRenderable(e){const t=this._getGpuBitmapText(e);return e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,t)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){const r=this._getGpuBitmapText(e);Ze(e,r),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,r)),this._renderer.renderPipes.graphics.addRenderable(r,t),r.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){const t=this._gpuBitmapText[e].context;t.customShader&&(T.return(t.customShader),t.customShader=null),T.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){const t=this._getGpuBitmapText(e);Ze(e,t),this._renderer.renderPipes.graphics.updateRenderable(t),t.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){const{context:r}=t,i=sr.getFont(e.text,e._style);r.clear(),i.distanceField.type!=="none"&&(r.customShader||(r.customShader=T.get(gs)));const n=Array.from(e.text),o=e._style;let a=i.baseLineOffset;const l=ir(n,o,i);let u=0;const c=o.padding,d=l.scale;let f=l.width,h=l.height+l.offsetY;o._stroke&&(f+=o._stroke.width/d,h+=o._stroke.width/d),r.translate(-e._anchor._x*f-c,-e._anchor._y*h-c).scale(d,d);const g=i.applyFillAsTint?o._fill.color:16777215;for(let p=0;p<l.lines.length;p++){const m=l.lines[p];for(let x=0;x<m.charPositions.length;x++){const v=n[u++],b=i.chars[v];b!=null&&b.texture&&r.texture(b.texture,g||"black",Math.round(m.charPositions[x]+b.xOffset),Math.round(a+b.yOffset))}a+=i.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this.initGpuText(e)}initGpuText(e){const t=T.get(q);return this._gpuBitmapText[e.uid]=t,this._updateContext(e,t),e.on("destroyed",()=>{this.destroyRenderable(e)}),this._gpuBitmapText[e.uid]}_updateDistanceField(e){const t=this._getGpuBitmapText(e).context,r=e._style.fontFamily,i=ye.get(`${r}-bitmap`),{a:n,b:o,c:a,d:l}=e.groupTransform,u=Math.sqrt(n*n+o*o),c=Math.sqrt(a*a+l*l),d=(Math.abs(u)+Math.abs(c))/2,f=i.baseRenderedFontSize/e._style.fontSize,h=d*i.distanceField.range*(1/f);t.customShader.resources.localUniforms.uniforms.uDistance=h}destroy(){for(const e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._renderer=null}}Ot.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"bitmapText"};function Ze(s,e){e.groupTransform=s.groupTransform,e.groupColorAlpha=s.groupColorAlpha,e.groupColor=s.groupColor,e.groupBlendMode=s.groupBlendMode,e.globalDisplayStatus=s.globalDisplayStatus,e.groupTransform=s.groupTransform,e.localDisplayStatus=s.localDisplayStatus,e.groupAlpha=s.groupAlpha,e._roundPixels=s._roundPixels}class $t{constructor(e){this._gpuText=Object.create(null),this._renderer=e,this._renderer.runners.resolutionChange.add(this)}resolutionChange(){for(const e in this._gpuText){const r=this._gpuText[e].batchableSprite.renderable;r._autoResolution&&(r._resolution=this._renderer.resolution,r.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),r=e._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==r}addRenderable(e,t){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i)}updateRenderable(e){const r=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),r.batcher.updateElement(r)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),T.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),r=this._getGpuText(e),i=r.batchableSprite;r.currentKey!==t&&this._updateGpuText(e).catch(o=>{console.error(o)}),e._didTextUpdate=!1;const n=e._style.padding;Te(i.bounds,e._anchor,i.texture,n)}async _updateGpuText(e){e._didTextUpdate=!1;const t=this._getGpuText(e);if(t.generatingTexture)return;const r=e._getKey();this._renderer.htmlText.decreaseReferenceCount(t.currentKey),t.generatingTexture=!0,t.currentKey=r;const i=e.resolution??this._renderer.resolution,n=await this._renderer.htmlText.getManagedTexture(e.text,i,e._style,e._getKey()),o=t.batchableSprite;o.texture=t.texture=n,t.generatingTexture=!1,t.textureNeedsUploading=!0,e.onViewUpdate();const a=e._style.padding;Te(o.bounds,e._anchor,o.texture,a)}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:D.EMPTY,currentKey:"--",batchableSprite:T.get(Rt),textureNeedsUploading:!1,generatingTexture:!1},r=t.batchableSprite;return r.renderable=e,r.texture=D.EMPTY,r.bounds={minX:0,maxX:1,minY:0,maxY:0},r.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._gpuText[e.uid]=t,e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}$t.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"htmlText"};function ms(){const{userAgent:s}=ot.get().getNavigator();return/^((?!chrome|android).)*safari/i.test(s)}const xs=new it;function Wt(s,e,t,r){const i=xs;i.minX=0,i.minY=0,i.maxX=s.width/r|0,i.maxY=s.height/r|0;const n=R.getOptimalTexture(i.width,i.height,r,!1);return n.source.uploadMethodId="image",n.source.resource=s,n.source.alphaMode="premultiply-alpha-on-upload",n.frame.width=e/r,n.frame.height=t/r,n.source.emit("update",n.source),n.updateUvs(),n}function _s(s,e){const t=e.fontFamily,r=[],i={},n=/font-family:([^;"\s]+)/g,o=s.match(n);function a(l){i[l]||(r.push(l),i[l]=!0)}if(Array.isArray(t))for(let l=0;l<t.length;l++)a(t[l]);else a(t);o&&o.forEach(l=>{const u=l.split(":")[1].trim();a(u)});for(const l in e.tagStyles){const u=e.tagStyles[l].fontFamily;a(u)}return r}async function bs(s){const t=await(await ot.get().fetch(s)).blob(),r=new FileReader;return await new Promise((n,o)=>{r.onloadend=()=>n(r.result),r.onerror=o,r.readAsDataURL(t)})}async function et(s,e){const t=await bs(e);return`@font-face {
        font-family: "${s.fontFamily}";
        src: url('${t}');
        font-weight: ${s.fontWeight};
        font-style: ${s.fontStyle};
    }`}const X=new Map;async function vs(s,e,t){const r=s.filter(i=>ye.has(`${i}-and-url`)).map((i,n)=>{if(!X.has(i)){const{url:o}=ye.get(`${i}-and-url`);n===0?X.set(i,et({fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:i},o)):X.set(i,et({fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:i},o))}return X.get(i)});return(await Promise.all(r)).join(`
`)}function ys(s,e,t,r,i){const{domElement:n,styleElement:o,svgRoot:a}=i;n.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${s}</div>`,n.setAttribute("style",`transform: scale(${t});transform-origin: top left; display: inline-block`),o.textContent=r;const{width:l,height:u}=i.image;return a.setAttribute("width",l.toString()),a.setAttribute("height",u.toString()),new XMLSerializer().serializeToString(a)}function Ts(s,e){const t=L.getOptimalCanvasAndContext(s.width,s.height,e),{context:r}=t;return r.clearRect(0,0,s.width,s.height),r.drawImage(s,0,0),L.returnCanvasAndContext(t),t.canvas}function Ss(s,e,t){return new Promise(async r=>{t&&await new Promise(i=>setTimeout(i,100)),s.onload=()=>{r()},s.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,s.crossOrigin="anonymous"})}class Re{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===O.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,r,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].promise;const n=this._buildTexturePromise(e,t,r).then(o=>(this._activeTextures[i].texture=o,o));return this._activeTextures[i]={texture:null,promise:n,usageCount:1},n}async _buildTexturePromise(e,t,r){const i=T.get(St),n=_s(e,r),o=await vs(n,r,Me.defaultTextStyle),a=Fr(e,r,o,i),l=Math.ceil(Math.ceil(Math.max(1,a.width)+r.padding*2)*t),u=Math.ceil(Math.ceil(Math.max(1,a.height)+r.padding*2)*t),c=i.image,d=2;c.width=(l|0)+d,c.height=(u|0)+d;const f=ys(e,r,t,o,i);await Ss(c,f,ms()&&n.length>0);let h=c;this._createCanvas&&(h=Ts(c,t));const g=Wt(h,c.width-d,c.height-d,t);return this._createCanvas&&this._renderer.texture.initSource(g.source),T.return(i),g}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t):t.promise.then(r=>{t.texture=r,this._cleanUp(t)}).catch(()=>{V("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){R.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}}Re.extension={type:[_.WebGLSystem,_.WebGPUSystem,_.CanvasSystem],name:"htmlText"};Re.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};class It{constructor(e){this._gpuText=Object.create(null),this._renderer=e,this._renderer.runners.resolutionChange.add(this)}resolutionChange(){for(const e in this._gpuText){const r=this._gpuText[e].batchableSprite.renderable;r._autoResolution&&(r._resolution=this._renderer.resolution,r.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),r=e._getKey();if(t.currentKey!==r){const{width:i,height:n}=this._renderer.canvasText.getTextureSize(e.text,e.resolution,e._style);return!(this._renderer.canvasText.getReferenceCount(t.currentKey)===1&&i===t.texture._source.width&&n===t.texture._source.height)}return!1}addRenderable(e,t){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i)}updateRenderable(e){const r=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),r.batcher.updateElement(r)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),T.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),r=this._getGpuText(e),i=r.batchableSprite;r.currentKey!==t&&this._updateGpuText(e),e._didTextUpdate=!1;const n=e._style.padding;Te(i.bounds,e._anchor,i.texture,n)}_updateGpuText(e){const t=this._getGpuText(e),r=t.batchableSprite;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),t.texture=r.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e._getKey(),r.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:null,currentKey:"--",batchableSprite:T.get(Rt)};return t.batchableSprite.renderable=e,t.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0},t.batchableSprite.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuText[e.uid]=t,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._updateText(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}It.extension={type:[_.WebGLPipes,_.WebGPUPipes,_.CanvasPipes],name:"text"};function tt(s,e,t){for(let r=0,i=4*t*e;r<e;++r,i+=4)if(s[i+3]!==0)return!1;return!0}function rt(s,e,t,r,i){const n=4*e;for(let o=r,a=r*n+4*t;o<=i;++o,a+=n)if(s[a+3]!==0)return!1;return!0}function ws(s,e=1){const{width:t,height:r}=s,i=s.getContext("2d",{willReadFrequently:!0});if(i===null)throw new TypeError("Failed to get canvas 2D context");const o=i.getImageData(0,0,t,r).data;let a=0,l=0,u=t-1,c=r-1;for(;l<r&&tt(o,t,l);)++l;if(l===r)return He.EMPTY;for(;tt(o,t,c);)--c;for(;rt(o,t,a,l,c);)++a;for(;rt(o,t,u,l,c);)--u;return++u,++c,new He(a/e,l/e,(u-a)/e,(c-l)/e)}class Lt{constructor(e){this._activeTextures={},this._renderer=e}getTextureSize(e,t,r){const i=A.measureText(e||" ",r);let n=Math.ceil(Math.ceil(Math.max(1,i.width)+r.padding*2)*t),o=Math.ceil(Math.ceil(Math.max(1,i.height)+r.padding*2)*t);return n=Math.ceil(n-1e-6),o=Math.ceil(o-1e-6),n=K(n),o=K(o),{width:n,height:o}}getTexture(e,t,r,i){typeof e=="string"&&(M("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:r,resolution:t}),e.style instanceof ve||(e.style=new ve(e.style));const{texture:n,canvasAndContext:o}=this.createTextureAndCanvas(e);return this._renderer.texture.initSource(n._source),L.returnCanvasAndContext(o),n}createTextureAndCanvas(e){const{text:t,style:r}=e,i=e.resolution??this._renderer.resolution,n=A.measureText(t||" ",r),o=Math.ceil(Math.ceil(Math.max(1,n.width)+r.padding*2)*i),a=Math.ceil(Math.ceil(Math.max(1,n.height)+r.padding*2)*i),l=L.getOptimalCanvasAndContext(o,a),{canvas:u}=l;this.renderTextToCanvas(t,r,i,l);const c=Wt(u,o,a,i);if(r.trim){const d=ws(u,i);c.frame.copyFrom(d),c.updateUvs()}return{texture:c,canvasAndContext:l}}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;const t=e._getKey();if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;const{texture:r,canvasAndContext:i}=this.createTextureAndCanvas(e);return this._activeTextures[t]={canvasAndContext:i,texture:r,usageCount:1},r}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];if(t.usageCount--,t.usageCount===0){L.returnCanvasAndContext(t.canvasAndContext),R.returnTexture(t.texture);const r=t.texture.source;r.resource=null,r.uploadMethodId="unknown",r.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,r,i){var b,S,y,G,U;const{canvas:n,context:o}=i,a=nr(t),l=A.measureText(e||" ",t),u=l.lines,c=l.lineHeight,d=l.lineWidths,f=l.maxLineWidth,h=l.fontProperties,g=n.height;o.resetTransform(),o.scale(r,r);const p=t.padding*2;if(o.clearRect(0,0,l.width+4+p,l.height+4+p),(b=t._stroke)!=null&&b.width){const P=t._stroke;o.lineWidth=P.width,o.miterLimit=P.miterLimit,o.lineJoin=P.join,o.lineCap=P.cap}o.font=a;let m,x;const v=t.dropShadow?2:1;for(let P=0;P<v;++P){const Ge=t.dropShadow&&P===0,Z=Ge?Math.ceil(Math.max(1,g)+t.padding*2):0,Vt=Z*r;if(Ge){o.fillStyle="black",o.strokeStyle="black";const w=t.dropShadow,jt=w.color,Yt=w.alpha;o.shadowColor=E.shared.setValue(jt).setAlpha(Yt).toRgbaString();const Xt=w.blur*r,Ae=w.distance*r;o.shadowBlur=Xt,o.shadowOffsetX=Math.cos(w.angle)*Ae,o.shadowOffsetY=Math.sin(w.angle)*Ae+Vt}else o.globalAlpha=((S=t._fill)==null?void 0:S.alpha)??1,o.fillStyle=t._fill?Ee(t._fill,o):null,(y=t._stroke)!=null&&y.width&&(o.strokeStyle=Ee(t._stroke,o)),o.shadowColor="black";let Fe=(c-h.fontSize)/2;c-h.fontSize<0&&(Fe=0);const ke=((G=t._stroke)==null?void 0:G.width)??0;for(let w=0;w<u.length;w++)m=ke/2,x=ke/2+w*c+h.ascent+Fe,t.align==="right"?m+=f-d[w]:t.align==="center"&&(m+=(f-d[w])/2),(U=t._stroke)!=null&&U.width&&this._drawLetterSpacing(u[w],t,i,m+t.padding,x+t.padding-Z,!0),t._fill!==void 0&&this._drawLetterSpacing(u[w],t,i,m+t.padding,x+t.padding-Z)}}_drawLetterSpacing(e,t,r,i,n,o=!1){const{context:a}=r,l=t.letterSpacing;let u=!1;if(A.experimentalLetterSpacingSupported&&(A.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,u=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||u){o?a.strokeText(e,i,n):a.fillText(e,i,n);return}let c=i;const d=A.graphemeSegmenter(e);let f=a.measureText(e).width,h=0;for(let g=0;g<d.length;++g){const p=d[g];o?a.strokeText(p,c,n):a.fillText(p,c,n);let m="";for(let x=g+1;x<d.length;++x)m+=d[x];h=a.measureText(m).width,c+=f-h+l,f=h}}destroy(){this._activeTextures=null}}Lt.extension={type:[_.WebGLSystem,_.WebGPUSystem,_.CanvasSystem],name:"canvasText"};C.add(pt);C.add(gt);C.add(Gt);C.add(or);C.add(At);C.add(Lt);C.add(It);C.add(Ot);C.add(Re);C.add($t);C.add(Et);C.add(Ht);C.add(_t);C.add(mt);
