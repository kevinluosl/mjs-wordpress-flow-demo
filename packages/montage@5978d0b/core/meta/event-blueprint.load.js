montageDefine("5978d0b","core/meta/event-blueprint",{dependencies:["montage","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage;e("core/logger").logger("blueprint");var r={name:"default",detailKeys:[],detailValueTypes:[],helpKey:""};t.EventBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")(),this._detailKeys=[]}},initWithNameAndBlueprint:{value:function(e,t){return this._name=null!==e?e:r.name,this._owner=t,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this._owner,"reference"),this.detailKeys.length>0&&this._setPropertyWithDefaults(e,"detailKeys",this.detailKeys),this._setPropertyWithDefaults(e,"helpKey",this.helpKey)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this.detailKeys=this._getPropertyWithDefaults(e,"detailKeys"),this.helpKey=this._getPropertyWithDefaults(e,"helpKey")}},_setPropertyWithDefaults:{value:function(e,t,n){n!=r[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:r[t]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},_detailKeys:{value:null},detailKeys:{get:function(){return this._detailKeys},set:function(e){Array.isArray(e)&&(this._detailKeys=e)}},helpKey:{value:r.helpKey},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});