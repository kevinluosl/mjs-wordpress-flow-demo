montageDefine("5978d0b","core/meta/object-property",{dependencies:["montage","core/exception","core/meta/blueprint","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage,r=e("core/exception").Exception;e("core/meta/blueprint").Blueprint;var i=e("core/meta/blueprint").Binder,a=e("core/logger").logger("object-property");t.ObjectProperty=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},init:{serializable:!1,enumerable:!1,value:function(){return this}},apply:{value:function(e,t){if(!e.hasOwnProperty("blueprint")){var r;r=n.getInfoForObject(e),null!=r&&r.isInstance===!1&&(t===void 0?t=i.manager.blueprintForPrototype(r.objectName,r.moduleId):(t.prototypeName!==r.objectName||t.moduleId!==r.moduleId)&&(t=null),this.applyWithBlueprint(e,t))}}},applyWithBlueprint:{value:function(e,t){null!=t&&(this.addProperties(e,t),null!==t.parent&&this.apply(Object.getPrototypeOf(e),t))}},addProperties:{value:function(e,t){for(var r,i=0;r=t.propertyBlueprints[i++];)r.isDerived?this.addDerivedProperty(e,r):r.isAssociation?this.addAssociation(e,r):this.addProperty(e,r);n.defineProperty(e,"_blueprint",{serializable:!1,enumerable:!1,value:t}),n.defineProperty(e,"blueprint",{enumerable:!1,serializable:!1,get:function(){return this._blueprint}}),n.defineProperty(e,"blueprintGet",{serializable:!1,enumerable:!1,value:this.blueprintGet}),n.defineProperty(e,"blueprintSet",{serializable:!1,enumerable:!1,value:this.blueprintSet})}},addProperty:{value:function(e,t){this.addPropertyStorage(e,t),this.addPropertyDefinition(e,t),this.addPropertyStoredValue(e,t)}},addPropertyStorage:{value:function(e,t){var r="_"+t.name,i=null;e.hasOwnProperty(r)?a.isError&&a.error("We have an issue here. The developer should not override the storage value for "+r+"."):(i=t.isToMany?{value:[],enumerable:!1,serializable:!0,distinct:!0}:{value:null,enumerable:!1,serializable:!0},n.defineProperty(e,r,i))}},addPropertyDefinition:{value:function(e,t){var r=t.name,i=null;e.hasOwnProperty(r)?a.isDebug&&a.debug("The developer has already created the property "+r+" method do nothing."):(i={get:function(){return this.blueprintGet(r)},enumerable:!0,serializable:!1},t.readOnly||(i.set=function(e){return this.blueprintSet(r,e)}),n.defineProperty(e,r,i))}},blueprintGet:{value:function(e){var t=this.blueprint.propertyBlueprintForName(e),n="_"+t.name;return this[n]},enumerable:!1,serializable:!1},blueprintSet:{value:function(e,t){var n=this.blueprint.propertyBlueprintForName(e),i="_"+n.name;if(null==t&&n.denyDelete)throw(new r).initWithMessageTargetAndMethod("Deny Delete",this,n.name);this[i]=t},enumerable:!1,serializable:!1},addPropertyStoredValue:{value:function(e,t){var r=t.name+"$Storage",i=null;e.hasOwnProperty(r)?a.isError&&a.error("We have an issue here. The developer should not override the stored value for "+r+"."):(i=t.isToMany?{value:[],enumerable:!1,serializable:!1,distinct:!0}:{value:null,enumerable:!1,serializable:!1},n.defineProperty(e,r,i))}},addAssociation:{value:function(e,t){this.addPropertyStorage(e,t),this.addAssociationDefinition(e,t),this.addPropertyStoredValue(e,t)}},addAssociationDefinition:{value:function(e,t){t.isToMany?this.addToManyAssociationDefinition(e,t):this.addToOneAssociationDefinition(e,t)}},addToOneAssociationDefinition:{value:function(e,t){var r=t.name.toCapitalized(),i="addTo"+r;e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="removeFrom"+r,e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="clear"+r,e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}})}},addToManyAssociationDefinition:{value:function(e,t){var r=t.name.toCapitalized(),i="addTo"+r;e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="removeFrom"+r,e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="clear"+r,e.hasOwnProperty(i)?a.isError&&a.error("We have an issue here. The developer should not override the method "+i+"."):n.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}})}},addDerivedProperty:{value:function(){}}})}});