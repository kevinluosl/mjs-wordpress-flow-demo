montageDefine("5978d0b","ui/base/abstract-text-field",{dependencies:["montage","ui/base/abstract-control","composer/key-composer","collections/dict"],factory:function(e,t){var n=(e("montage").Montage,e("ui/base/abstract-control").AbstractControl),r=e("composer/key-composer").KeyComposer;e("collections/dict");var i=t.AbstractTextField=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractTextField cannot be instantiated.");n.constructor.call(this),this._keyComposer=new r,this._keyComposer.component=this,this._keyComposer.keys="enter",this.addComposer(this._keyComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"}})}},hasTemplate:{value:!1},acceptsActiveTarget:{get:function(){var e=this.callDelegateMethod("shouldBeginEditing",this);return e!==!1}},delegate:{value:null},enabled:{value:!0},_placeholderValue:{value:null},placeholderValue:{set:function(e){this._placeholderValue=e,this.needsDraw=!0},get:function(){return this._placeholderValue}},_value:{value:null},value:{set:function(e){e!==this._value&&(!this.hasFocus||this.callDelegateMethod("shouldAcceptValue",this,e))&&(this._value=e,this.needsDraw=!0)},get:function(){return this._value}},_hasFocus:{value:!1},hasFocus:{get:function(){return this._hasFocus}},_keyComposer:{value:null},handleKeyPress:{value:function(e){this.enabled&&e.keyComposer===this._keyComposer&&this.dispatchActionEvent()}},prepareForActivationEvents:{value:function(){this._keyComposer.addEventListener("keyPress",this,!1)}},enterDocument:{value:function(e){e&&(this.element.addEventListener("input",this,!1),this.element.addEventListener("change",this,!1))}},draw:{value:function(){var e=this.value;this.element.value=null===e||e===void 0?"":"boolean"==typeof e||"object"==typeof e||"number"==typeof e?""+e:e,null!=this.placeholderValue&&this.element.setAttribute("placeholder",this.placeholderValue)}},handleChange:{value:function(){this._updateValueFromDom()}},handleInput:{value:function(){this._updateValueFromDom()}},willBecomeActiveTarget:{value:function(){this._hasFocus=!0,this.callDelegateMethod("didBeginEditing",this)}},surrendersActiveTarget:{value:function(){var e=this.callDelegateMethod("shouldEndEditing",this);return e===!1?!1:(this._hasFocus=!1,this.callDelegateMethod("didEndEditing",this),!0)}},_updateValueFromDom:{value:function(){this._value!==this.element.value&&(this._value=this.element.value,this.dispatchOwnPropertyChange("value",this._value),this.callDelegateMethod("didChange",this))}}})}});