import{ar as A,as as F,r as C,c as I,at as w,d as O,u as $,au as z,h as j,w as J,a as p,b as e,e as h,f as B,T as R,a2 as x,F as q,i as K,t as m,av as Q,g as W,o as _,n as X,V as Y,k as Z,p as ee,q as te,l as se,m as oe,aw as ne,_ as ae}from"./index-dd15576e.js";import{e as M,u as P}from"./notebook-a19a0919.js";import{M as re}from"./github-markdown-bfbba723.js";import{E as V}from"./el-overlay-b147bec6.js";const D={GET:"/notes/trash",DELETE:"/notes/:noteId/confirm",REVERT:"/notes/:noteId/revert"},g={getAll(){return new Promise((r,l)=>{A(D.GET,"GET").then(d=>{const c=d;c.data=c.data.sort((t,y)=>t.updatedAt<y.updatedAt?1:-1),c.data.forEach(t=>{t.friendlyUpdatedAt=M(t.updatedAt),t.friendlyCreateAt=M(t.createdAt)}),r(c)}).catch(d=>{l(d)})})},deleteNote({noteId:r}){return A(D.DELETE.replace(":noteId",r.toString()),"DELETE")},revertNote({noteId:r}){return A(D.REVERT.replace(":noteId",r.toString()),"PATCH")}},le=F("trash",()=>{const r=P(),l=C([]),d=C(null),c=I(()=>l.value),t=I(()=>{if(c.value.length!==0)return d.value?c.value.find(s=>s.id===d.value):c.value[0]}),y=I(()=>{const s=r.notebooks.find(i=>i.id===t.value.notebookId);return s===void 0?"":s.title});function a({noteId:s}={}){d.value=s}function N(){return g.getAll().then(s=>{l.value=s.data})}function E({noteId:s}){return g.deleteNote({noteId:s}).then(i=>{const v=c.value.find(o=>o.id===s);l.value=l.value.filter(o=>o.id!==s),r.notebooks.find(o=>o.id===v.notebookId).noteCounts-=1,w.success(i.msg)})}function S({noteList:s}={noteList:c.value}){let i=[];for(const v of s)i.push(g.deleteNote({noteId:v.id}));return Promise.all(i).then(v=>{for(const o of s)r.notebooks.find(u=>u.id===o.notebookId).noteCounts-=1,l.value=l.value.filter(u=>u.id!==o.id);w.success(v[0].msg)})}function b({noteId:s}){return g.revertNote({noteId:s}).then(i=>{l.value=l.value.filter(v=>v.id!==s),w.success(i.msg)})}return{trashNotes:c,currentTrashNote:t,belongTo:y,setCurrentNote:a,getTrashNotes:N,deleteTrashNote:E,revertTrashNote:b,deleteAllTrashNote:S}}),L=r=>(ee("data-v-65d9d516"),r=r(),te(),r),ce={class:"layout"},de={class:"trash-sidebar"},ie={class:"trash-head"},ue=L(()=>e("span",null,"回收站",-1)),he={key:0,class:"note-deleteAll"},ve=L(()=>e("div",{class:"menu"},[e("span",null,"更新时间"),e("span",null,"标题")],-1)),pe={class:"notes"},_e={class:"note-date"},fe=["onClick","checked"],Ne={class:"note-title"},Te=L(()=>e("i",{class:"iconfont icon-trash"},null,-1)),ke=[Te],me={class:"trash-detail"},ye={key:0,class:"trash-empty"},ge={key:1,class:"trash-empty"},Ie={class:"trash-bar"},Ce={class:"belongTo"},Ee={class:"note-title"},Se=["innerHTML"],be=O({__name:"TrashDetail",setup(r){const l=Q(),d=W(),c=$(),t=le(),y=P(),{currentTrashNote:a,trashNotes:N,belongTo:E}=z(t),S=I(()=>new re().render(a.value.content));j(()=>{c.checkLogin(),y.getNotebooks(),t.getTrashNotes().then(()=>t.setCurrentNote({noteId:parseInt(l.query.noteId)})).then(()=>{var n;d.replace({path:"/trash",query:{noteId:(n=a.value)==null?void 0:n.id}})})}),J(()=>{t.setCurrentNote({noteId:parseInt(l.query.noteId)})});const b=()=>{V.confirm("删除后不可恢复","确定删除吗？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>t.deleteTrashNote({noteId:a.value.id})).then(()=>t.setCurrentNote()).then(()=>{var n;d.replace({path:"/trash",query:{noteId:(n=a.value)==null?void 0:n.id}})}).catch(n=>{})},s=()=>{t.revertTrashNote({noteId:a.value.id}).then(()=>t.setCurrentNote()).then(()=>{var n;d.replace({path:"/trash",query:{noteId:(n=a.value)==null?void 0:n.id}})})},i=({noteList:n}={noteList:N.value},T)=>{V.confirm("删除后不可恢复","全部删除吗？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>t.deleteAllTrashNote({noteList:n})).then(()=>t.setCurrentNote()).then(()=>{var k;T&&T(),d.replace({path:"/trash",query:{noteId:(k=a.value)==null?void 0:k.id}})}).catch(k=>{})},v=()=>i(),o=C(!1),u=C([]),U=()=>{o.value=!o.value,u.value=[]},G=n=>{const T=u.value.indexOf(n);T<0?u.value.push(n):u.value.splice(T,1)},H=()=>{i({noteList:u.value},()=>{o.value=!1,u.value=[]})};return(n,T)=>{const k=se("router-link");return _(),p("div",ce,[e("div",de,[e("div",ie,[ue,h(N).length>0?(_(),p("div",he,[B(e("span",{onClick:v},"全删",512),[[R,!o.value]]),B(e("span",null," / ",512),[[R,!o.value]]),e("span",{onClick:U},"选择")])):x("",!0)]),ve,e("ul",pe,[(_(!0),p(q,null,K(h(N),f=>(_(),p("li",{key:f.id,class:X({active:h(a)&&f.id===h(a).id})},[Y(k,{to:`/trash?noteId=${f.id}`},{default:Z(()=>[e("span",_e,[o.value?(_(),p("input",{key:0,type:"checkbox",name:"trashNote",onClick:oe(Ae=>G(f),["stop"]),checked:u.value.indexOf(f)>=0},null,8,fe)):x("",!0),ne(" "+m(f.friendlyUpdatedAt),1)]),e("span",Ne,m(f.title),1)]),_:2},1032,["to"])],2))),128))]),o.value?(_(),p("div",{key:0,class:"selected-note",onClick:H},ke)):x("",!0)]),e("div",me,[h(N).length===0?(_(),p("div",ye,"暂无回收笔记")):h(a)===void 0?(_(),p("div",ge,"请选择笔记")):(_(),p(q,{key:2},[e("div",Ie,[e("span",null,"创建日期："+m(h(a).friendlyCreateAt),1),e("span",null,"更新日期："+m(h(a).friendlyUpdatedAt),1),e("span",Ce,"所属笔记本："+m(h(E)),1),e("span",{class:"actions"},[e("span",{onClick:s},"恢复"),e("span",{onClick:b},"彻底删除")])]),e("div",Ee,m(h(a).title),1),e("div",{class:"note-editor markdown-body",innerHTML:h(S)},null,8,Se)],64))])])}}});const Be=ae(be,[["__scopeId","data-v-65d9d516"]]);export{Be as default};