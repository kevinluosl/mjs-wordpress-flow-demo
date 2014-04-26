montageDefine("5978d0b","core/application",{dependencies:["core/core","core/target","window-loader/montage-window","core/dom","core/template"],factory:function(e,t){var n,i=(e("core/core").Montage,e("core/target").Target),s=e("window-loader/montage-window").MontageWindow;e("core/dom"),t.Application=i.specialize({eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){for(var e=this;e.parentApplication;)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){null==this.parentApplication?-1!==["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(null==this.parentApplication){if(!this._windows){var e=new s;e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=new s;e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,t=this.windowsSortOrder;if("z-order"==t)return e[0];if("reverse-z-order"==t)return e[e.length-1];for(var n in e)if(e[n].focused)return e[n]}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(e,t,n){var i,a,o=this,r=new s,l={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},u={module:e,name:t,parent:window,callback:function(e,t){var n;i=e.document.application,r.window=e,r.application=i,r.component=t,i.window=r,o.attachedWindows.push(r),n=o.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?o.windows.unshift(r):o.windows.push(r),a=document.createEvent("CustomEvent"),a.initCustomEvent("load",!0,!0,null),r.dispatchEvent(a)}};if(this!==this.mainApplication||this._multipleWindow||this.window,"object"==typeof n){var h,c,d="",m="";for(h in n)n.hasOwnProperty(h)&&(l[h]=n[h])}var p=["name"];for(h in l)-1==p.indexOf(h)&&(c=l[h],"boolean"==typeof c?c=c?"yes":"no":(c+="",c.match(/[ ,"]/)&&(c='"'+c.replace(/"/g,'\\"')+'"')),m+=d+h+"="+c,d=",");return window.require.loadPackage({name:"montage"}).then(function(e){var t=window.open(e.location+"window-loader/index.html","_blank",m);t.loadInfo=u}).done(),r}},attachWindow:{value:function(e){var t,n=e.application.parentApplication;return n!==this&&(n&&n.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),t=this.mainApplication.windowsSortOrder,"z-order"==t||"reverse-open-order"==t?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var t,n,i=this.windows;return void 0===e&&(e=this.window),n=e.application.parentApplication,n==this?(t=this.attachedWindows.indexOf(e),-1!==t&&this.attachedWindows.splice(t,1),t=i.indexOf(e),-1!==t&&i.splice(t,1),e.application.parentApplication=null):n&&n.detachWindow(e),e}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(n,i){var s,a=this;t.application=a,e.async("ui/component").then(function(t){return s=t.__root__,s.element=document,e("core/template").instantiateDocument(window.document,n).then(function(){a.callDelegateMethod("willFinishLoading",a),s.needsDraw=!0,i&&i(a)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return"alert"===e||"confirm"===e||"notify"===e}},_createPopupSlot:{value:function(e){var t=document.createElement("div");document.body.appendChild(t),t.style.zIndex=e,t.style.position="absolute";var i=new n;return i.element=t,i.attachToParentComponent(),i}},getPopupSlot:{value:function(t,i,s){var a=this;e.async("ui/slot.reel/slot").then(function(e){n=n||e.Slot,t=t||"custom";var o,r,l=a._isSystemPopup(t);if(a.popupSlots=a.popupSlots||{},l)switch(t){case"alert":o=9004;break;case"confirm":o=9003;break;case"notify":o=9002}else a._zIndex=a._zIndex?a._zIndex+1:7e3,o=a._zIndex;r=a.popupSlots[t],r||(r=a.popupSlots[t]=a._createPopupSlot(o)),l||(r.element.style.zIndex=o),r.content=i,s.call(this,r)}).done()}},returnPopupSlot:{value:function(e){var t=this;if(t.popupSlots&&t.popupSlots[e]){var n=t.popupSlots[e];n.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var t=Object.keys(this.popupSlots);if(t&&t.length>0){var n,i=0,s=t.length;for(i=0;s>i;i++)n=this.popupSlots[t[i]],n&&null!==n.content&&e.push(n)}}return e}}})}});