require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"MaterialComponents":[function(require,module,exports){
var Inputlabel_dark, Inputlabel_light, Label, Shadow, SystemIcon, TextField, box_dark, box_light, input_dark, input_light, label_dark, label_light, line_dark, line_dark_hover, line_light, line_light_hover,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

label_light = "rgba(0,0,0,0.87)";

label_dark = "rgba(255,255,255,1)";

line_light = "rgba(0,0,0,0.54)";

line_dark = "rgba(255,255,255,0.7)";

input_light = "rgba(0,0,0,0.54)";

input_dark = "rgba(255,255,255,1)";

Inputlabel_light = box_light = "rgba(0,0,0,0.54)";

Inputlabel_dark = box_dark = "rgba(255,255,255,0.7)";

line_light_hover = "rgba(0,0,0,0.87)";

line_dark_hover = "rgba(255,255,255,1)";

Label = (function(superClass) {
  extend(Label, superClass);

  function Label(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = "'Roboto', sans serif";
    }
    if ((base1 = this.options).fontSize == null) {
      base1.fontSize = 16;
    }
    if ((base2 = this.options).text == null) {
      base2.text = 'Label';
    }
    if ((base3 = this.options).color == null) {
      base3.color = label_light;
    }
    if ((base4 = this.options).fontWeight == null) {
      base4.fontWeight = 400;
    }
    if ((base5 = this.options).letterSpacing == null) {
      base5.letterSpacing = 0;
    }
    if ((base6 = this.options).name == null) {
      base6.name = "label";
    }
    Label.__super__.constructor.call(this, this.options);
  }

  return Label;

})(TextLayer);

Shadow = (function(superClass) {
  extend(Shadow, superClass);

  function Shadow(options) {
    var base;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = "";
    }
    this.umbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.14)",
      name: "umbra"
    });
    this.umbra.states = {
      _12dp: {
        shadowY: 12,
        shadowBlur: 17,
        shadowSpread: 2
      },
      _8dp: {
        shadowY: 4,
        shadowBlur: 15,
        shadowSpread: 0
      },
      _6dp: {
        shadowY: 6,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 2,
        shadowBlur: 4,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.penumbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.12)",
      name: "penumbra"
    });
    this.penumbra.states = {
      _12dp: {
        shadowY: 5,
        shadowBlur: 22,
        shadowSpread: 4
      },
      _8dp: {
        shadowY: 3,
        shadowBlur: 14,
        shadowSpread: 3
      },
      _6dp: {
        shadowY: 1,
        shadowBlur: 18,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 4,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.ambient = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      shadowColor: "rgba(0,0,0,0.20)",
      name: "ambient",
      borderRadius: this.options.borderRadius
    });
    this.ambient.states = {
      _12dp: {
        shadowY: 7,
        shadowBlur: 8,
        shadowSpread: 0
      },
      _8dp: {
        shadowY: 8,
        shadowBlur: 10,
        shadowSpread: 1
      },
      _6dp: {
        shadowY: 3,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 1,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.umbra.animationOptions = {
      time: 0.2
    };
    this.penumbra.animationOptions = {
      time: 0.2
    };
    this.ambient.animationOptions = {
      time: 0.2
    };
    this.umbra.states.switchInstant("_2dp");
    this.penumbra.states.switchInstant("_2dp");
    this.ambient.states.switchInstant("_2dp");
    Shadow.__super__.constructor.call(this, this.options);
    this.umbra.parent = this;
    this.penumbra.parent = this;
    this.ambient.parent = this;
    this.array = [this.umbra, this.penumbra, this.ambient];
  }

  return Shadow;

})(Layer);

SystemIcon = (function(superClass) {
  extend(SystemIcon, superClass);

  function SystemIcon(options) {
    var base, base1, base2, base3, base4;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    if ((base = this.options).fontSize == null) {
      base.fontSize = 24;
    }
    if ((base1 = this.options).icon == null) {
      base1.icon = "android";
    }
    this.options.html = "<i class='material-icons tab'>" + this.options.icon + "</i>";
    if ((base2 = this.options).color == null) {
      base2.color = "#009688";
    }
    if ((base3 = this.options).height == null) {
      base3.height = this.options.fontSize;
    }
    if ((base4 = this.options).width == null) {
      base4.width = this.options.fontSize;
    }
    this.options.backgroundColor = "";
    SystemIcon.__super__.constructor.call(this, this.options);
  }

  SystemIcon.define('fontSize', {
    get: function() {
      return this.options.fontSize;
    },
    set: function(value) {
      this.options.fontSize = value;
      return Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    }
  });

  return SystemIcon;

})(Layer);

exports.color = (function(superClass) {
  extend(color, superClass);

  function color(options) {
    this.options = options != null ? options : {};
    this.options = _.defaults(this.options, color.__super__.constructor.call(this, this.options));
  }

  return color;

})(Layer);

exports.red = "#F44336";

exports.red50 = "#FFEBEE";

exports.red100 = "#FFCDD2";

exports.red200 = "#EF9A9A";

exports.red300 = "#E57373";

exports.red400 = "#EF5350";

exports.red500 = "#F44336";

exports.red600 = "#E53935";

exports.red700 = "#D32F2F";

exports.red800 = "#C62828";

exports.red900 = "#B71C1C";

exports.redA100 = "#FF8A80";

exports.redA200 = "#FF5252";

exports.redA400 = "#FF1744";

exports.redA700 = "#D50000";

exports.pink = "#E91E63";

exports.pink50 = "#FCE4EC";

exports.pink100 = "#F8BBD0";

exports.pink200 = "#F48FB1";

exports.pink300 = "#F06292";

exports.pink400 = "#EC407A";

exports.pink500 = "#E91E63";

exports.pink600 = "#D81B60";

exports.pink700 = "#C2185B";

exports.pink800 = "#AD1457";

exports.pink900 = "#880E4F";

exports.pinkA100 = "#FF80AB";

exports.pinkA200 = "#FF4081";

exports.pinkA400 = "#F50057";

exports.pinkA700 = "#C51162";

exports.purple = "#9C27B0";

exports.purple50 = "#F3E5F5";

exports.purple100 = "#E1BEE7";

exports.purple200 = "#CE93D8";

exports.purple300 = "#BA68C8";

exports.purple400 = "#AB47BC";

exports.purple500 = "#9C27B0";

exports.purple600 = "#8E24AA";

exports.purple700 = "#7B1FA2";

exports.purple800 = "#6A1B9A";

exports.purple900 = "#4A148C";

exports.purpleA100 = "#EA80FC";

exports.purpleA200 = "#E040FB";

exports.purpleA400 = "#D500F9";

exports.purpleA700 = "#AA00FF";

exports.deepPurple = "#673AB7";

exports.deepPurple50 = "#EDE7F6";

exports.deepPurple100 = "#D1C4E9";

exports.deepPurple200 = "#B39DDB";

exports.deepPurple300 = "#9575CD";

exports.deepPurple400 = "#7E57C2";

exports.deepPurple500 = "#673AB7";

exports.deepPurple600 = "#5E35B1";

exports.deepPurple700 = "#512DA8";

exports.deepPurple800 = "#4527A0";

exports.deepPurple900 = "#311B92";

exports.deepPurpleA100 = "#B388FF";

exports.deepPurpleA200 = "#7C4DFF";

exports.deepPurpleA400 = "#651FFF";

exports.deepPurpleA700 = "#6200EA";

exports.indigo = "#3F51B5";

exports.indigo50 = "#E8EAF6";

exports.indigo100 = "#C5CAE9";

exports.indigo200 = "#9FA8DA";

exports.indigo300 = "#7986CB";

exports.indigo400 = "#5C6BC0";

exports.indigo500 = "#3F51B5";

exports.indigo600 = "#3949AB";

exports.indigo700 = "#303F9F";

exports.indigo800 = "#283593";

exports.indigo900 = "#1A237E";

exports.indigoA100 = "#8C9EFF";

exports.indigoA200 = "#536DFE";

exports.indigoA400 = "#3D5AFE";

exports.indigoA700 = "#304FFE";

exports.blue = "#2196F3";

exports.blue50 = "#E3F2FD";

exports.blue100 = "#BBDEFB";

exports.blue200 = "#90CAF9";

exports.blue300 = "#64B5F6";

exports.blue400 = "#42A5F5";

exports.blue500 = "#2196F3";

exports.blue600 = "#1E88E5";

exports.blue700 = "#1976D2";

exports.blue800 = "#1565C0";

exports.blue900 = "#0D47A1";

exports.blueA100 = "#82B1FF";

exports.blueA200 = "#448AFF";

exports.blueA400 = "#2979FF";

exports.blueA700 = "#2962FF";

exports.lightBlue = "#03A9F4";

exports.lightBlue50 = "#E1F5FE";

exports.lightBlue100 = "#B3E5FC";

exports.lightBlue200 = "#81D4FA";

exports.lightBlue300 = "#4FC3F7";

exports.lightBlue400 = "#29B6F6";

exports.lightBlue500 = "#03A9F4";

exports.lightBlue600 = "#039BE5";

exports.lightBlue700 = "#0288D1";

exports.lightBlue800 = "#0277BD";

exports.lightBlue900 = "#01579B";

exports.lightBlueA100 = "#80D8FF";

exports.lightBlueA200 = "#40C4FF";

exports.lightBlueA400 = "#00B0FF";

exports.lightBlueA700 = "#0091EA";

exports.cyan = "#00BCD4";

exports.cyan50 = "#E0F7FA";

exports.cyan100 = "#B2EBF2";

exports.cyan200 = "#80DEEA";

exports.cyan300 = "#4DD0E1";

exports.cyan400 = "#26C6DA";

exports.cyan500 = "#00BCD4";

exports.cyan600 = "#00ACC1";

exports.cyan700 = "#0097A7";

exports.cyan800 = "#00838F";

exports.cyan900 = "#006064";

exports.cyanA100 = "#84FFFF";

exports.cyanA200 = "#18FFFF";

exports.cyanA400 = "#00E5FF";

exports.cyanA700 = "#00B8D4";

exports.teal = "#009688";

exports.teal50 = "#E0F2F1";

exports.teal100 = "#B2DFDB";

exports.teal200 = "#80CBC4";

exports.teal300 = "#4DB6AC";

exports.teal400 = "#26A69A";

exports.teal500 = "#009688";

exports.teal600 = "#00897B";

exports.teal700 = "#00796B";

exports.teal800 = "#00695C";

exports.teal900 = "#004D40";

exports.tealA100 = "#A7FFEB";

exports.tealA200 = "#64FFDA";

exports.tealA400 = "#1DE9B6";

exports.tealA700 = "#00BFA5";

exports.green = "#4CAF50";

exports.green50 = "#E8F5E9";

exports.green100 = "#C8E6C9";

exports.green200 = "#A5D6A7";

exports.green300 = "#81C784";

exports.green400 = "#66BB6A";

exports.green500 = "#4CAF50";

exports.green600 = "#43A047";

exports.green700 = "#388E3C";

exports.green800 = "#2E7D32";

exports.green900 = "#1B5E20";

exports.greenA100 = "#B9F6CA";

exports.greenA200 = "#69F0AE";

exports.greenA400 = "#00E676";

exports.greenA700 = "#00C853";

exports.lightGreen = "#8BC34A";

exports.lightGreen50 = "#F1F8E9";

exports.lightGreen100 = "#DCEDC8";

exports.lightGreen200 = "#C5E1A5";

exports.lightGreen300 = "#AED581";

exports.lightGreen400 = "#9CCC65";

exports.lightGreen500 = "#8BC34A";

exports.lightGreen600 = "#7CB342";

exports.lightGreen700 = "#689F38";

exports.lightGreen800 = "#558B2F";

exports.lightGreen900 = "#33691E";

exports.lightGreenA100 = "#CCFF90";

exports.lightGreenA200 = "#B2FF59";

exports.lightGreenA400 = "#76FF03";

exports.lightGreenA700 = "#64DD17";

exports.lime = "#CDDC39";

exports.lime50 = "#F9FBE7";

exports.lime100 = "#F0F4C3";

exports.lime200 = "#E6EE9C";

exports.lime300 = "#DCE775";

exports.lime400 = "#D4E157";

exports.lime500 = "#CDDC39";

exports.lime600 = "#C0CA33";

exports.lime700 = "#AFB42B";

exports.lime800 = "#9E9D24";

exports.lime900 = "#827717";

exports.limeA100 = "#F4FF81";

exports.limeA200 = "#EEFF41";

exports.limeA400 = "#C6FF00";

exports.limeA700 = "#AEEA00";

exports.yellow = "#FFEB3B";

exports.yellow50 = "#FFFDE7";

exports.yellow100 = "#FFF9C4";

exports.yellow200 = "#FFF59D";

exports.yellow300 = "#FFF176";

exports.yellow400 = "#FFEE58";

exports.yellow500 = "#FFEB3B";

exports.yellow600 = "#FDD835";

exports.yellow700 = "#FBC02D";

exports.yellow800 = "#F9A825";

exports.yellow900 = "#F57F17";

exports.yellowA100 = "#FFFF8D";

exports.yellowA200 = "#FFFF00";

exports.yellowA400 = "#FFEA00";

exports.yellowA700 = "#FFD600";

exports.amber = "#FFC107";

exports.amber50 = "#FFF8E1";

exports.amber100 = "#FFECB3";

exports.amber200 = "#FFE082";

exports.amber300 = "#FFD54F";

exports.amber400 = "#FFCA28";

exports.amber500 = "#FFC107";

exports.amber600 = "#FFB300";

exports.amber700 = "#FFA000";

exports.amber800 = "#FF8F00";

exports.amber900 = "#FF6F00";

exports.amberA100 = "#FFE57F";

exports.amberA200 = "#FFD740";

exports.amberA400 = "#FFC400";

exports.amberA700 = "#FFAB00";

exports.orange = "#FF9800";

exports.orange50 = "#FFF3E0";

exports.orange100 = "#FFE0B2";

exports.orange200 = "#FFCC80";

exports.orange300 = "#FFB74D";

exports.orange400 = "#FFA726";

exports.orange500 = "#FF9800";

exports.orange600 = "#FB8C00";

exports.orange700 = "#F57C00";

exports.orange800 = "#EF6C00";

exports.orange900 = "#E65100";

exports.orangeA100 = "#FFD180";

exports.orangeA200 = "#FFAB40";

exports.orangeA400 = "#FF9100";

exports.orangeA700 = "#FF6D00";

exports.deepOrange = "#FF5722";

exports.deepOrange50 = "#FBE9E7";

exports.deepOrange100 = "#FFCCBC";

exports.deepOrange200 = "#FFAB91";

exports.deepOrange300 = "#FF8A65";

exports.deepOrange400 = "#FF7043";

exports.deepOrange500 = "#FF5722";

exports.deepOrange600 = "#F4511E";

exports.deepOrange700 = "#E64A19";

exports.deepOrange800 = "#D84315";

exports.deepOrange900 = "#BF360C";

exports.deepOrangeA100 = "#FF9E80";

exports.deepOrangeA200 = "#FF6E40";

exports.deepOrangeA400 = "#FF3D00";

exports.deepOrangeA700 = "#DD2C00";

exports.brown = "#795548";

exports.brown50 = "#EFEBE9";

exports.brown100 = "#D7CCC8";

exports.brown200 = "#BCAAA4";

exports.brown300 = "#A1887F";

exports.brown400 = "#8D6E63";

exports.brown500 = "#795548";

exports.brown600 = "#6D4C41";

exports.brown700 = "#5D4037";

exports.brown800 = "#4E342E";

exports.brown900 = "#4E342E";

exports.brownA100 = "";

exports.brownA200 = "";

exports.brownA400 = "";

exports.brownA700 = "";

exports.grey = "#9E9E9E";

exports.grey50 = "#FAFAFA";

exports.grey100 = "#F5F5F5";

exports.grey200 = "#EEEEEE";

exports.grey300 = "#E0E0E0";

exports.grey400 = "#BDBDBD";

exports.grey500 = "#9E9E9E";

exports.grey600 = "#757575";

exports.grey700 = "#616161";

exports.grey800 = "#424242";

exports.grey900 = "#212121";

exports.greyA100 = "";

exports.greyA200 = "";

exports.greyA400 = "";

exports.greyA700 = "";

exports.blueGrey = "#607D8B";

exports.blueGrey50 = "#ECEFF1";

exports.blueGrey100 = "#CFD8DC";

exports.blueGrey200 = "#B0BEC5";

exports.blueGrey300 = "#90A4AE";

exports.blueGrey400 = "#78909C";

exports.blueGrey500 = "#607D8B";

exports.blueGrey600 = "#546E7A";

exports.blueGrey700 = "#455A64";

exports.blueGrey800 = "#37474F";

exports.blueGrey900 = "#263238";

exports.black = "#000";

exports.white = "#fff";

exports.lightPrimary = "rgba(0,0,0,0.87)";

exports.lightSecondary = "rgba(0,0,0,0.54)";

exports.lightDisabled = "rgba(0,0,0,0.38)";

exports.darkPrimary = "rgba(255,255,255,1)";

exports.darkSecondary = "rgba(255,255,255, 0.7)";

exports.darkDisabled = "rgba(255,255,255,0.5)";

exports.universal = "#3367CD";

exports.FlatButton = (function(superClass) {
  extend(FlatButton, superClass);

  function FlatButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Flat Button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: null,
      height: 48,
      borderRadius: 2,
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16,
      name: "Flat button"
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.options.width = this.options.labelText.length * ((this.options.fontSize + 2) / 2) + 16 + 16;
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      clip: true,
      borderRadius: 2,
      opacity: 0.12,
      visible: false,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: null,
      name: "ripple parent"
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: this.options.themeColor,
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: this.options.themeColor,
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    FlatButton.__super__.constructor.call(this, this.options);
    this.bttnBG.parent = this.label.parent = this.rippleBG.parent = this;
    this.bttnBG.y = Align.center;
    this.rippleBG.y = Align.center;
    this.rippleBG.clip = true;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  FlatButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
      }
      if (this.options.disabled === false) {
        return this.label.color = this.options.themeColor;
      }
    }
  });

  FlatButton.prototype.Hover = function() {
    if (this.options.disabled === false) {
      return this.bttnBG.visible = true;
    }
  };

  FlatButton.prototype.HoverOff = function() {
    return this.bttnBG.visible = false;
  };

  FlatButton.prototype.mouseDown = function() {
    return this.bttnBG.brightness = 80;
  };

  FlatButton.prototype.mouseUp = function() {
    return this.bttnBG.brightness = 100;
  };

  FlatButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return FlatButton;

})(Layer);

exports.RaisedButton = (function(superClass) {
  extend(RaisedButton, superClass);

  function RaisedButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Raised button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    this.options.height = 48;
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_BG = "rgba(255,255,255,0.12)";
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_BG = "rgba(0,0,0,0.12)";
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: "",
      color: "",
      borderRadius: 2,
      name: "Raised button",
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      name: "shadows"
    });
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: "#fff",
      clip: true,
      borderRadius: 2,
      opacity: 0,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      clip: true,
      borderRadius: 2,
      name: "ripple parent",
      clip: true,
      backgroundColor: ""
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: "#fff",
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.rippleColor = this.ripple.backgroundColor;
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: "#fff",
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    RaisedButton.__super__.constructor.call(this, this.options);
    this.label.parent = this.rippleBG.parent = this.shadow.parent = this.bttnBG.parent = this;
    this.shadow.y = this.bttnBG.y = this.rippleBG.y = Align.center;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  RaisedButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
        return this.shadow.backgroundColor = this.disabled_BG;
      } else {
        this.shadow.backgroundColor = this.options.themeColor;
        return this.label.color = "#fff";
      }
    }
  });

  RaisedButton.prototype.Hover = function() {
    var item, j, len, ref, results;
    if (this.options.disabled === false) {
      this.bttnBG.opacity = 0.12;
      ref = this.shadow.array;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        results.push(item.states["switch"]("_8dp"));
      }
      return results;
    }
  };

  RaisedButton.prototype.HoverOff = function() {
    var item, j, len, ref, results;
    this.bttnBG.opacity = 0;
    ref = this.shadow.array;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      results.push(item.states["switch"]("_2dp"));
    }
    return results;
  };

  RaisedButton.prototype.mouseDown = function() {
    if (this.options.disabled === false) {
      this.brightness = 80;
      return this.bttnBG.opacity = 0;
    }
  };

  RaisedButton.prototype.mouseUp = function() {
    return this.brightness = 100;
  };

  RaisedButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return RaisedButton;

})(Layer);

exports.FAB = (function(superClass) {
  extend(FAB, superClass);

  function FAB(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, pd;
    this.options = options != null ? options : {};
    if (Utils.isDesktop()) {
      pd = 24;
    } else {
      pd = 16;
    }
    if ((base = this.options).mini == null) {
      base.mini = false;
    }
    if (this.options.mini === true || Screen.width < 460) {
      if ((base1 = this.options).width == null) {
        base1.width = 40;
      }
      if ((base2 = this.options).height == null) {
        base2.height = 40;
      }
    } else {
      if ((base3 = this.options).width == null) {
        base3.width = 56;
      }
      if ((base4 = this.options).height == null) {
        base4.height = 56;
      }
    }
    if ((base5 = this.options).x == null) {
      base5.x = Screen.width - (this.options.width + pd);
    }
    if ((base6 = this.options).y == null) {
      base6.y = Screen.height - (this.options.width + pd);
    }
    this.options.borderRadius = "100%";
    if ((base7 = this.options).themeColor == null) {
      base7.themeColor = "#009688";
    }
    if ((base8 = this.options).backgroundColor == null) {
      base8.backgroundColor = this.options.themeColor;
    }
    if ((base9 = this.options).icon == null) {
      base9.icon = "add";
    }
    this.overlay = new Layer({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      backgroundColor: "rgba(0,0,0,0.12)",
      visible: false,
      name: "overlay"
    });
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      name: "shadow"
    });
    this.shadow.umbra.states.switchInstant("_6dp");
    this.shadow.penumbra.states.switchInstant("_6dp");
    this.shadow.ambient.states.switchInstant("_6dp");
    this.icon = new SystemIcon({
      width: 24,
      height: 24,
      icon: this.options.icon,
      color: "#fff",
      name: "icon"
    });
    FAB.__super__.constructor.call(this, this.options);
    this.icon.parent = this.overlay.parent = this.shadow.parent = this;
    this.icon.center();
    if (Utils.isDesktop()) {
      this.onMouseOver(this.Hover);
      this.onMouseOut(this.HoverOff);
      this.onMouseDown(this.mouseDown);
      this.onMouseUp(this.mouseUp);
    } else {
      this.onTapStart(this.mouseDown);
      this.onTapEnd(this.mouseUp);
    }
  }

  FAB.prototype.Hover = function() {
    this.shadow.umbra.states["switch"]("_12dp");
    this.shadow.penumbra.states["switch"]("_12dp");
    return this.shadow.ambient.states["switch"]("_12dp");
  };

  FAB.prototype.HoverOff = function() {
    this.shadow.umbra.states["switch"]("_6dp");
    this.shadow.penumbra.states["switch"]("_6dp");
    return this.shadow.ambient.states["switch"]("_6dp");
  };

  FAB.prototype.mouseDown = function() {
    this.overlay.visible = true;
    this.shadow.umbra.states.switchInstant("_12dp");
    this.shadow.penumbra.states.switchInstant("_12dp");
    return this.shadow.ambient.states.switchInstant("_12dp");
  };

  FAB.prototype.mouseUp = function() {
    this.overlay.visible = false;
    this.shadow.umbra.states.switchInstant("_6dp");
    this.shadow.penumbra.states.switchInstant("_6dp");
    return this.shadow.ambient.states.switchInstant("_6dp");
  };

  return FAB;

})(Layer);

exports.Checkboxes = (function(superClass) {
  extend(Checkboxes, superClass);

  function Checkboxes(options) {
    var ao, base, base1, base2, base3, base4, base5, base6, base7, box, boxCircle, boxColor, check, checkMask, checkY, checks, choice_label, cont, dp, i, j, ref, ripple, t1, t2, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).name == null) {
      base1.name = "checkboxes";
    }
    if ((base2 = this.options).disableRipple == null) {
      base2.disableRipple = false;
    }
    if (this.options.theme === "dark") {
      if ((base3 = this.options).screenColor == null) {
        base3.screenColor = "#212121";
      }
    } else {
      if ((base4 = this.options).screenColor == null) {
        base4.screenColor = "#fff";
      }
    }
    if ((base5 = this.options).choices == null) {
      base5.choices = ["apples", "bananas", "grapes"];
    }
    if ((base6 = this.options).checkY == null) {
      base6.checkY = -5;
    }
    if (this.themeColor == null) {
      this.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base7 = this.options).labelText == null) {
      base7.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150
    });
    this.label = new Label({
      color: this.labelColor,
      text: this.options.labelText,
      name: "label"
    });
    Checkboxes.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    checkY = this.options.checkY;
    t1 = 0.2;
    t2 = 0.2;
    checks = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        parent: this,
        height: 40,
        y: i * 40 + 24,
        backgroundColor: "",
        x: 16,
        name: "container"
      });
      box = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        clip: true,
        name: this.options.choices[i],
        y: Align.center,
        name: this.options.choices[i]
      });
      box.animationOptions = {
        time: t1
      };
      box.states = {
        selected: {
          borderColor: this.options.themeColor,
          backgroundColor: this.options.themeColor
        },
        deselected: {
          borderColor: this.boxColor,
          backgroundColor: this.boxColor
        }
      };
      box.states.switchInstant("deselected");
      box.backgroundColor = this.options.screenColor;
      boxCircle = new Layer({
        parent: box,
        borderRadius: "100%",
        size: 30,
        scale: 0,
        backgroundColor: this.screenColor,
        x: Align.center(2),
        y: Align.center(2),
        name: "overlay"
      });
      boxCircle.animationOptions = {
        time: t1
      };
      boxCircle.states = {
        selected: {
          scale: 0
        },
        deselected: {
          scale: 1,
          backgroundColor: this.options.screenColor
        }
      };
      checkMask = new Layer({
        width: 0,
        height: 20,
        backgroundColor: "",
        parent: box,
        y: checkY,
        x: 3.5,
        parent: box,
        clip: true,
        name: "check mask"
      });
      checkMask.states.selected = {
        properties: {
          width: 20
        },
        time: t2
      };
      checkMask.states.deselected = {
        properties: {
          width: 0
        },
        time: 0.01
      };
      checkMask.states["switch"]("deselected");
      check = new Layer({
        html: '<svg width="13px" height="10px" viewBox="0 0 13 10"><g id="Components" stroke="none" stroke-width="1" fill="none"  stroke-linejoin="round"><polyline id="Path-2" stroke="#FFFFFF" stroke-width="2" points="1 5.25 4 9 12 1.5"></polyline></g></svg>',
        width: 20,
        height: 20,
        backgroundColor: "",
        parent: checkMask,
        name: this.options.choices[i],
        y: 0,
        name: "check"
      });
      check.style = {
        fontSize: "18px"
      };
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: cont,
          y: Align.center,
          x: -15,
          opacity: 0.3,
          visible: false,
          name: "ripple"
        });
        ripple.states.selected = {
          backgroundColor: this.options.themeColor
        };
        if (this.options.theme === "light") {
          ripple.states.deselected = {
            backgroundColor: "#000"
          };
        }
        if (this.options.theme === "dark") {
          ripple.states.deselected = {
            backgroundColor: "#fff"
          };
        }
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: Align.center(-0.5),
        name: "choice ripple"
      });
      checks.push(box);
      ao = this.options;
      dp = this.options.disableRipple;
      ao.activeSelection = [];
      cont.onClick(function() {
        var k, len, pBox, pBoxCircle, pCheckMask, pRipple, pRippleB, pulsaA;
        ao.activeSelection = [];
        if (dp === false) {
          pRipple = this.children[1];
        }
        pCheckMask = this.children[0].children[1];
        pBox = this.children[0];
        pBoxCircle = this.children[0].children[0];
        pBox.stateCycle("selected", "deselected");
        pBoxCircle.stateCycle("selected", "deselected");
        if (pBox.states.current.name === "selected") {
          if (dp === false) {
            pRipple.states.switchInstant("selected");
          }
          Utils.delay(t1, function() {
            return pCheckMask.states["switch"]("selected");
          });
        } else {
          if (dp === false) {
            pRipple.states.switchInstant("deselected");
          }
          pCheckMask.states["switch"]("deselected");
        }
        for (k = 0, len = checks.length; k < len; k++) {
          box = checks[k];
          if (box.states.current.name === "selected") {
            ao.activeSelection.push(box.name);
          }
        }
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.4;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.8;
          }
          pulsaA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pRippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pulsaA.start();
          pulsaA.onAnimationEnd(function() {});
          return pRippleB.start();
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
    }
  }

  Checkboxes.define('themeColor', {
    get: function() {
      return this.options.themeColor;
    },
    set: function(value) {
      return this.options.themeColor = value;
    }
  });

  Checkboxes.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  Checkboxes.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return Checkboxes;

})(Layer);

exports.RadioButtons = (function(superClass) {
  extend(RadioButtons, superClass);

  function RadioButtons(options) {
    var base, base1, base2, base3, base4, bb, boxColor, check, checks, choice_label, circle, circles, cont, dp, helper, i, j, l, oc, ref, ripple, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).disableRipple == null) {
      base1.disableRipple = false;
    }
    if ((base2 = this.options).choices == null) {
      base2.choices = ["apples", "bananas", "grapes"];
    }
    if ((base3 = this.options).themeColor == null) {
      base3.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    if ((base4 = this.options).labelText == null) {
      base4.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150,
      name: "RadioButtons"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    RadioButtons.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    l = this.options.choices;
    checks = [];
    circles = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        height: 40,
        y: 40 * i + 24,
        backgroundColor: "",
        parent: this,
        name: this.options.choices[i],
        x: 16
      });
      circle = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: "100%",
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        y: Align.center,
        name: "circle"
      });
      circle.animationOptions = {
        time: 0.001
      };
      circle.states = {
        selected: {
          borderColor: themeColor
        },
        deselected: {
          borderColor: this.boxColor
        }
      };
      circles.push(circle);
      circle.states["switch"]("deselected");
      if (i === this.options.activeSelection) {
        circle.states.switchInstant("selected");
      }
      check = new Layer({
        width: 10,
        height: 10,
        backgroundColor: this.options.themeColor,
        borderRadius: circle.borderRadius,
        parent: circle,
        x: 5,
        y: 5,
        name: i
      });
      check.animationOptions = {
        time: 0.17
      };
      check.states = {
        selected: {
          scale: 1
        },
        deselected: {
          scale: 0
        }
      };
      check.states.switchInstant("deselected");
      checks.push(check);
      if (i === this.options.activeSelection) {
        check.states.switchInstant("selected");
      }
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: circle,
          y: Align.center(2),
          x: Align.center(2),
          opacity: 0.12,
          visible: false,
          backgroundColor: this.options.themeColor,
          name: "ripple"
        });
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: -0.5,
        y: Align.center,
        name: "choice label"
      });
      helper = new Layer({
        backgroundColor: "",
        height: 5,
        parent: cont,
        width: i,
        name: "helper"
      });
      this.activeSelection = null;
      bb = this.activeSelection;
      dp = this.options.disableRipple;
      oc = this.themeColor;
      cont.onClick(function() {
        var RippleA, RippleB, k, len, len1, m, pCheck, pCircle, pRipple;
        pRipple = this.children[0].children[1];
        pCheck = this.children[0].children[0];
        pCircle = this.children[0];
        for (k = 0, len = checks.length; k < len; k++) {
          check = checks[k];
          if (check.name === pCheck.name) {
            pCheck.states["switch"]("selected");
          } else {
            check.states["switch"]("deselected");
          }
        }
        for (m = 0, len1 = circles.length; m < len1; m++) {
          circle = circles[m];
          circle.states["switch"]("deselected");
        }
        pCircle.states.switchInstant("selected");
        bb = this.name;
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.2;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.3;
          }
          RippleA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleA.start();
          return RippleA.onAnimationEnd(function() {
            return RippleB.start();
          });
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
      this.onClick(function() {
        return this.options.activeSelection = bb;
      });
    }
  }

  RadioButtons.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  RadioButtons.define('theme', {
    get: function() {
      return this.options.theme;
    },
    set: function(value) {
      return this.options.theme = value;
    }
  });

  return RadioButtons;

})(Layer);

exports.Switch = (function(superClass) {
  extend(Switch, superClass);

  function Switch(options) {
    var base, base1, base2, base3, base4, ripple, rippleAni, shadow, state, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).disableRipple == null) {
      base.disableRipple = false;
    }
    if ((base1 = this.options).activeOnStart == null) {
      base1.activeOnStart = false;
    }
    if ((base2 = this.options).active == null) {
      base2.active = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.thumbColor = this.options.themeColor;
    this.trackColor = this.options.themeColor;
    this.thumb_light_off = "#FAFAFA";
    this.thumb_dark_off = "#bdbdbd";
    this.track_light_off = "rgba(0,0,0,0.38)";
    this.track_dark_off = "rgba(255,255,255,0.3)";
    this.ripple_dark_off = "rgba(255,255,255, 1)";
    this.ripple_light_off = "rgba(0,0,0, 1)";
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.thumbOff = this.thumb_dark_off;
      this.trackOff = this.track_dark_off;
      this.rippleOff = this.ripple_dark_off;
    } else {
      this.labelColor = label_light;
      this.thumbOff = this.thumb_light_off;
      this.trackOff = this.track_light_off;
      this.rippleOff = this.ripple_light_off;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    _.defaults(this.options, {
      backgroundColor: "",
      height: 48,
      width: 150
    });
    this.track = new Layer({
      width: 40,
      height: 15,
      borderRadius: 15,
      name: "track"
    });
    this.track.animationOptions = {
      time: 0.2
    };
    this.track.states = {
      on: {
        backgroundColor: this.options.themeColor,
        opacity: 0.5
      },
      off: {
        backgroundColor: this.trackOff,
        opacity: 0.38
      }
    };
    delete this.track.states["default"];
    this.track.states.switchInstant("off");
    this.ripple = new Layer({
      size: 50,
      scale: 1,
      borderRadius: 50,
      opacity: 0.2,
      visible: false,
      name: "ripple",
      backgroundColor: this.options.themeColor
    });
    this.thumb = new Layer({
      size: 19,
      borderRadius: 100,
      name: "thumb",
      backgroundColor: this.thumbOff
    });
    this.thumb.animationOptions = {
      time: 0.3
    };
    this.thumb.states = {
      on: {
        x: 21,
        backgroundColor: this.options.themeColor
      },
      off: {
        x: 0,
        backgroundColor: this.thumbOff
      }
    };
    delete this.thumb.states["default"];
    this.thumb.states.switchInstant("off");
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    Switch.__super__.constructor.call(this, this.options);
    this.track.parent = this;
    this.track.y = Align.center;
    this.thumb.parent = this;
    this.thumb.y = Align.center;
    this.label.parent = this;
    this.label.x = 55;
    this.label.y = Align.center;
    if (this.options.disableRipple === false) {
      this.ripple.parent = this.thumb;
      this.ripple.x = -15;
      this.ripple.y = -15;
      ripple = this.ripple;
    }
    shadow = new Shadow({
      parent: this.thumb,
      borderRadius: 100,
      width: this.thumb.width,
      height: this.thumb.width,
      name: "shadow"
    });
    if (this.options.activeOnStart === true) {
      this.thumb.states.switchInstant("on");
      this.track.states.switchInstant("on");
      this.active = true;
    }
    rippleAni = function() {
      var pulsaA, rippleB;
      ripple.visible = true;
      ripple.scale = 0.4;
      pulsaA = new Animation({
        layer: ripple,
        properties: {
          scale: 0.8
        },
        time: 0.15,
        curve: Bezier.linear
      });
      rippleB = new Animation({
        layer: ripple,
        properties: {
          scale: 1,
          opacity: 0
        },
        time: 0.15,
        curve: Bezier.linear
      });
      pulsaA.start();
      return pulsaA.onAnimationEnd(function() {
        return rippleB.start();
      });
    };
    state = null;
    this.onClick(function() {
      var posX;
      this.track.stateCycle();
      this.thumb.stateCycle();
      if (this.options.disableRipple === false) {
        if (this.thumb.states.current.name === "on") {
          this.ripple.backgroundColor = this.options.themeColor;
          this.ripple.opacity = 0.4;
          posX = 20;
          rippleAni();
          this.options.active = true;
        } else {
          posX = 0;
          this.ripple.backgroundColor = this.rippleOff;
          this.ripple.opacity = 0.2;
          rippleAni();
          this.options.active = false;
        }
      }
      if (this.thumb.states.current.name === "on") {
        return this.options.active = true;
      } else {
        return this.options.active = false;
      }
    });
  }

  Switch.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      return this.options.active = value;
    }
  });

  return Switch;

})(Layer);

TextField = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH;

  extend(TextField, superClass);

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextField.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextField(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base2, base3, base4, base5, base6, base7, base8, base9, boxColor, inputStyle, key, ref, theme, themeColor, val;
    this.options = options != null ? options : {};
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((base = this.options).name == null) {
      base.name = "Basic text field";
    }
    this.options.borderRadius = 0;
    if ((base1 = this.options).placeHolderFocus == null) {
      base1.placeHolderFocus = null;
    }
    this.options.placeHolderColor = "";
    if ((base2 = this.options).placeHolder == null) {
      base2.placeHolder = "";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = "rgba(255,255,255,0.7)";
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.options.backgroundColor = "rgba(0,0,0,0.01)";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = "rgba(0,0,0,0.42)";
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.options.backgroundColor = "rgba(255,255,255,0.01)";
    }
    boxColor = this.boxColor;
    this.options.color = this.inputColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if (Utils.isMobile()) {
      if ((base5 = this.options).fontSize == null) {
        base5.fontSize = 16 * 2;
      }
      if ((base6 = this.options).lineHeight == null) {
        base6.lineHeight = 24 * 2;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    } else {
      if ((base7 = this.options).fontSize == null) {
        base7.fontSize = 16;
      }
      if ((base8 = this.options).lineHeight == null) {
        base8.lineHeight = 24;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    }
    if ((base9 = this.options).labelSize == null) {
      base9.labelSize = 16;
    }
    if ((base10 = this.options).fontFamily == null) {
      base10.fontFamily = "'Roboto', sans serif";
    }
    if ((base11 = this.options).fontWeight == null) {
      base11.fontWeight = 400;
    }
    if ((base12 = this.options).letterSpacing == null) {
      base12.letterSpacing = 0;
    }
    if ((base13 = this.options).helperText == null) {
      base13.helperText = "Helper text";
    }
    if ((base14 = this.options).labelText == null) {
      base14.labelText = "Label";
    }
    if ((base15 = this.options).helperTextVisble == null) {
      base15.helperTextVisble = false;
    }
    _.defaults(this.options, {
      width: 200
    });
    this.line = new Layer({
      width: this.options.width,
      height: 1,
      clip: true,
      name: "line",
      backgroundColor: this.lineColor
    });
    this.lineRipple = new Layer({
      backgroundColor: this.options.themeColor,
      width: 0,
      height: 2,
      name: "ripple"
    });
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label"
    });
    this.helperText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.labelColor,
      name: "helper Text",
      visible: this.options.helperTextVisble
    });
    this.inputParent = new Layer({
      backgroundColor: this.options.backgroundColor,
      width: this.options.width,
      height: 28,
      name: "input parent"
    });
    TextField.__super__.constructor.call(this, this.options);
    this.helperText.parent = this.line.parent = this.inputParent.parent = this;
    this.helperText.y = 50;
    this.label.parent = this;
    this.label.y = 20;
    this.lineRipple.parent = this.line;
    this.lineRipple.x = Align.center;
    this.line.y = 44;
    this.inputParent.y = 10;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Blur, function(value, layer) {
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      this.helperText.color = this.labelColor;
      this.line.backgroundColor = this.lineColor;
      this.options.color = this.inputColor;
      this.label.color = this.labelColor;
      if (this.isEmpty) {
        return this.label.animate({
          properties: {
            fontSize: 16,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.input = document.createElement("input");
    this.input.type = this.options.type;
    if (this.options.value != null) {
      this.input.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.pattern != null) {
      this.input.pattern = this.options.pattern;
    }
    if (this.options.maxLength != null) {
      this.input.setAttribute("maxLength", this.options.maxLength);
    }
    this.input.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.input.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.input.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this.inputParent._element.appendChild(this.input);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    inputStyle = {
      font: this.options.fontWeight + " " + this.options.fontSize + "px/" + this.options.lineHeight + " " + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "80px",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      padding: "0",
      "-webkit-appearance": "none"
    };
    for (key in inputStyle) {
      val = inputStyle[key];
      this.input.style[key] = val;
    }
    if (this.options.color != null) {
      this.input.style.color = this.options.color;
    }
    this.input.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.input.value, _this);
      };
    })(this);
    this.input.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.input.oninput = (function(_this) {
      return function() {
        var ref1;
        _this.isEmpty = !(((ref1 = _this.input.value) != null ? ref1.length : void 0) > 0);
        return _this.emit(Events.Input, _this.input.value, _this);
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.input.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.on("keydown", function(event) {
      if (event.keyCode === 13) {
        this.line.height = 1;
        this.lineRipple.width = 0;
        this.lineRipple.x = Align.center;
        this.helperText.color = this.labelColor;
        this.line.backgroundColor = this.lineColor;
        this.options.color = this.inputColor;
        this.label.color = this.labelColor;
        if (this.isEmpty) {
          return this.label.animate({
            properties: {
              fontSize: 16,
              y: 20,
              color: this.labelColor
            },
            time: 0.2
          });
        }
      }
    });
  }

  TextField.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextField.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextField.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextField.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 0,
        color: this.options.themeColor,
        opacity: this.labelFocusOpacity
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    return this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
  };

  TextField.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  return TextField;

})(Layer);

exports.TextField_Basic = (function(superClass) {
  extend(TextField_Basic, superClass);

  function TextField_Basic(options) {
    this.options = options != null ? options : {};
    TextField_Basic.__super__.constructor.call(this, this.options);
  }

  return TextField_Basic;

})(TextField);

exports.TextField_Validation = (function(superClass) {
  extend(TextField_Validation, superClass);

  function TextField_Validation(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, eyeOff, eyeOn, input;
    this.options = options != null ? options : {};
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "password field";
    }
    if ((base1 = this.options).type == null) {
      base1.type = "password";
    }
    if ((base2 = this.options).pattern == null) {
      base2.pattern = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
    }
    if ((base3 = this.options).eyeVisible == null) {
      base3.eyeVisible = true;
    }
    this.options.color = this.inputColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
    } else {
      this.labelColor = Inputlabel_light;
    }
    this.red = "#FF1744";
    if ((base4 = this.options).helperText == null) {
      base4.helperText = "helperText";
    }
    if ((base5 = this.options).labelText == null) {
      base5.labelText = "Password";
    }
    if ((base6 = this.options).helperTextVisible == null) {
      base6.helperTextVisible = false;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      width: 200
    });
    if (this.options.pattern === "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$") {
      if ((base7 = this.options).helperText == null) {
        base7.helperText = "UpperCase, LowerCase and Number";
      }
    } else if (this.options.pattern === "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$") {
      if ((base8 = this.options).helperText == null) {
        base8.helperText = "Must contain 8 characters, 1 uppercase, 1 lowercase, and 1 number/special character";
      }
    } else {
      if ((base9 = this.options).helperText == null) {
        base9.helperText = "helperText";
      }
    }
    this.errorText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.red,
      name: "helper Text",
      visible: false
    });
    this.eyeContianer = new Layer({
      width: 22,
      height: 22,
      backgroundColor: "",
      visible: this.options.eyeVisible,
      name: "eyeContianer"
    });
    this.eyeOn = new Layer({
      width: 22,
      height: 16,
      backgroundColor: "",
      visible: false,
      name: "eyeOne",
      html: '<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1"><g class="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M8.91205938,5.8907 C9.50605938,5.2977 10.2090594,4.9997 11.0210594,4.9997 C11.8340594,4.9997 12.5370594,5.2977 13.1310594,5.8907 C13.7240594,6.4847 14.0210594,7.1877 14.0210594,7.9997 C14.0210594,8.8127 13.7240594,9.5157 13.1310594,10.1097 C12.5370594,10.7027 11.8340594,10.9997 11.0210594,10.9997 C10.2090594,10.9997 9.50605938,10.7027 8.91205938,10.1097 C8.31805938,9.5157 8.02105938,8.8127 8.02105938,7.9997 C8.02105938,7.1877 8.31805938,6.4847 8.91205938,5.8907 M7.48205938,11.5387 C8.46705938,12.5237 9.64605938,13.0157 11.0210594,13.0157 C12.3960594,13.0157 13.5760594,12.5237 14.5600594,11.5387 C15.5450594,10.5547 16.0370594,9.3757 16.0370594,7.9997 C16.0370594,6.6247 15.5450594,5.4457 14.5600594,4.4607 C13.5760594,3.4767 12.3960594,2.9847 11.0210594,2.9847 C9.64605938,2.9847 8.46705938,3.4767 7.48205938,4.4607 C6.49805938,5.4457 6.00605938,6.6247 6.00605938,7.9997 C6.00605938,9.3757 6.49805938,10.5547 7.48205938,11.5387 M4.31805938,2.5627 C6.31805938,1.1877 8.55305938,0.4997 11.0210594,0.4997 C13.4900594,0.4997 15.7240594,1.1877 17.7250594,2.5627 C19.7250594,3.9377 21.1620594,5.7497 22.0370594,7.9997 C21.1620594,10.2497 19.7250594,12.0627 17.7250594,13.4377 C15.7240594,14.8127 13.4900594,15.4997 11.0210594,15.4997 C8.55305938,15.4997 6.31805938,14.8127 4.31805938,13.4377 C2.31805938,12.0627 0.881059375,10.2497 0.006059375,7.9997 C0.881059375,5.7497 2.31805938,3.9377 4.31805938,2.5627" id="Fill-1" fill="' + this.labelColor + '"></path></g></svg>'
    });
    this.eyeOff = new Layer({
      width: 23,
      height: 19,
      backgroundColor: "",
      visible: true,
      name: "eyeOff",
      html: '<svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" ><g class="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.0331594,6 L11.1741594,6 C11.9861594,6 12.6891594,6.297 13.2831594,6.891 C13.8771594,7.484 14.1741594,8.188 14.1741594,9 L14.1741594,9.188 L11.0331594,6 Z M11.1741594,3.984 C10.5491594,3.984 9.93915937,4.109 9.34615937,4.359 L7.18915937,2.203 C8.40815937,1.734 9.73615937,1.5 11.1741594,1.5 C13.6421594,1.5 15.8691594,2.187 17.8531594,3.562 C19.8381594,4.938 21.2671594,6.75 22.1421594,9 C21.3921594,10.844 20.2521594,12.422 18.7201594,13.734 L15.8141594,10.828 C16.0641594,10.235 16.1891594,9.625 16.1891594,9 C16.1891594,7.625 15.6971594,6.445 14.7131594,5.461 C13.7281594,4.477 12.5491594,3.984 11.1741594,3.984 L11.1741594,3.984 Z M6.72115937,6.797 C6.34615937,7.547 6.15815937,8.281 6.15815937,9 C6.15815937,10.375 6.65015937,11.555 7.63515937,12.539 C8.61915937,13.523 9.79915937,14.016 11.1741594,14.016 C11.8921594,14.016 12.6271594,13.828 13.3771594,13.453 L11.8301594,11.906 C11.5801594,11.969 11.3611594,12 11.1741594,12 C10.3611594,12 9.65815937,11.703 9.06415937,11.109 C8.47015937,10.516 8.17415937,9.813 8.17415937,9 C8.17415937,8.813 8.20515937,8.594 8.26715937,8.344 L6.72115937,6.797 Z M1.18915937,1.266 L2.45515937,0 L20.1741594,17.719 L18.9081594,18.984 C18.7521594,18.828 18.2601594,18.344 17.4311594,17.531 C16.6031594,16.719 15.9701594,16.094 15.5331594,15.656 C14.1891594,16.219 12.7361594,16.5 11.1741594,16.5 C8.70515937,16.5 6.47115937,15.813 4.47115937,14.438 C2.47015937,13.062 1.03315937,11.25 0.158159375,9 C0.939159375,7.062 2.18915937,5.407 3.90815937,4.031 C3.53315937,3.656 3.01015937,3.125 2.33815937,2.437 C1.66615937,1.75 1.28315937,1.359 1.18915937,1.266 L1.18915937,1.266 Z" id="Fill-3" fill="' + this.labelColor + '"></path></g></svg>'
    });
    TextField_Validation.__super__.constructor.call(this, this.options);
    this.eyeContianer.parent = this;
    this.eyeOn.parent = this.eyeOff.parent = this.eyeContianer;
    this.eyeContianer.x = this.width - 22;
    this.eyeContianer.y = 13;
    this.eyeOn.y = 0;
    this.errorText.parent = this;
    this.errorText.y = this.helperText.y;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    eyeOff = this.eyeOff;
    eyeOn = this.eyeOn;
    this.eyeContianer.onClick(function() {
      if (eyeOff.visible === true) {
        eyeOff.visible = false;
        eyeOn.visible = true;
        return input.type = "text";
      } else {
        input.type = "password";
        eyeOff.visible = true;
        return eyeOn.visible = false;
      }
    });
    this.on(Events.Blur, function(value, layer) {
      var errorWobble1, errorWobble2, errorWobble5;
      this.label.color = this.labelColor;
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      if (this.isEmpty) {
        this.label.animate({
          properties: {
            fontSize: this.options.labelSize,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else if (this.isValid) {
        this.line.backgroundColor = this.lineColor;
        this.label.color = this.labelColor;
        this.helperText.color = this.labelColor;
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else {
        this.line.backgroundColor = this.red;
        this.label.color = this.red;
        this.errorText.visible = true;
        errorWobble1 = new Animation({
          layer: this.label,
          properties: {
            x: 5
          },
          time: 0.05
        });
        errorWobble2 = new Animation({
          layer: this.label,
          properties: {
            x: -5
          },
          time: 0.05
        });
        errorWobble5 = new Animation({
          layer: this.label,
          properties: {
            x: 0
          },
          time: 0.025
        });
        errorWobble1.start();
        errorWobble1.onAnimationEnd(function() {
          return errorWobble2.start();
        });
        errorWobble2.onAnimationEnd(function() {
          return errorWobble5.start();
        });
        return this.helperText.visible = false;
      }
    });
    this.input.oninput = (function(_this) {
      return function() {
        var ref;
        _this.isEmpty = !(((ref = _this.input.value) != null ? ref.length : void 0) > 0);
        _this.emit(Events.Input, _this.input.value, _this);
        return _this.checkValidity();
      };
    })(this);
    input = this.input;
  }

  TextField_Validation.prototype.checkValidity = function() {
    var ref, validity;
    if (!this.shouldCheckValidity) {
      return;
    }
    if (this.options.pattern != null) {
      validity = this.input.checkValidity();
      this.isEmpty = !(((ref = this.input.value) != null ? ref.length : void 0) > 0);
      if (this.isValid !== validity || this.isEmpty) {
        if (this.isEmpty || !validity) {
          this.isValid = false;
          this.emit(Events.Invalid, this.input.value, this);
        } else {
          this.isValid = true;
          this.emit(Events.Valid, this.input.value, this);
        }
      }
    }
    if (this.checkMatch()) {
      this.isValid = true;
      return this.emit(Events.Match, this.input.value, this);
    }
  };

  TextField_Validation.prototype.checkMatch = function() {
    var j, len, match, ref;
    if (this.options.match == null) {
      return false;
    }
    if (Array.isArray(this.options.match)) {
      ref = this.options.match;
      for (j = 0, len = ref.length; j < len; j++) {
        match = ref[j];
        if (this.input.value.indexOf(match) > -1) {
          return true;
        }
      }
    } else {
      if (this.input.value.indexOf(this.options.match) > -1) {
        return true;
      }
    }
    return false;
  };

  TextField_Validation.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: -6,
        color: this.options.themeColor
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
    this.line.backgroundColor = this.lineColor;
    this.label.color = this.themeColor;
    this.helperText.color = this.labelColor;
    this.errorText.visible = false;
    if (this.options.helperTextVisible === true) {
      return this.helperText.visible = true;
    }
  };

  TextField_Validation.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Validation.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Validation.prototype.eyeClick = function() {
    return this.eye.stateCycle("visible", "visibleOff");
  };

  return TextField_Validation;

})(TextField);

exports.TextArea = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH, PATTERN_NUMBER, _reflowSiblings, _resizeParent;

  extend(TextArea, superClass);

  PATTERN_NUMBER = "[0-9]*";

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextArea.define("value", {
    get: function() {
      return this.textarea.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextArea(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base16, base17, base18, base19, base2, base20, base21, base22, base3, base4, base5, base6, base7, base8, base9, key, ref, ref1, theme, themeColor, val;
    this.options = options != null ? options : {};
    this._update = bind(this._update, this);
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "Text area";
    }
    this.options.backgroundColor = "rgba(255,255,255,0.01)";
    if ((base1 = this.options).height == null) {
      base1.height = 180;
    }
    if ((base2 = this.options).type == null) {
      base2.type = "text";
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 400;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    if ((base5 = this.options).indent == null) {
      base5.indent = 0;
    }
    if ((base6 = this.options).placeHolderFocus == null) {
      base6.placeHolderFocus = null;
    }
    if ((base7 = this.options).placeHolderColor == null) {
      base7.placeHolderColor = null;
    }
    if ((base8 = this.options).width == null) {
      base8.width = 300;
    }
    if ((base9 = this.options).themeColor == null) {
      base9.themeColor = "#009688";
    }
    if ((base10 = this.options).labelText == null) {
      base10.labelText = "Type something...";
    }
    if ((base11 = this.options).theme == null) {
      base11.theme = "light";
    }
    theme = this.options.theme;
    if ((base12 = this.options).themeColor == null) {
      base12.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.red = "#FF1744";
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.lineColor = line_dark;
      this.options.color = "#fff";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = line_light;
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.lineColor = line_light;
      this.options.color = "rgba(0,0,0,0.87)";
    }
    this.options.color = this.inputColor;
    if (Utils.isMobile()) {
      if ((base13 = this.options).fontSize == null) {
        base13.fontSize = 16 * 2;
      }
      if ((base14 = this.options).lineHeight == null) {
        base14.lineHeight = 24 * 2;
      }
      this.options.style = {
        "padding": "56px 32px 32px 32px"
      };
    } else {
      if ((base15 = this.options).fontSize == null) {
        base15.fontSize = 16;
      }
      if ((base16 = this.options).lineHeight == null) {
        base16.lineHeight = 24;
      }
      this.options.style = {
        "padding": "28px 16px 16px 16px"
      };
    }
    if ((base17 = this.options).labelSize == null) {
      base17.labelSize = 16;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base18 = this.options).fontFamily == null) {
      base18.fontFamily = "'Roboto', sans serif";
    }
    if ((base19 = this.options).fontWeight == null) {
      base19.fontWeight = 400;
    }
    if ((base20 = this.options).letterSpacing == null) {
      base20.letterSpacing = 0;
    }
    if ((base21 = this.options).limitOn == null) {
      base21.limitOn = true;
    }
    if (this.options.limitOn === false) {
      this.options.characterLimit = 1000;
    } else {
      if ((base22 = this.options).characterLimit == null) {
        base22.characterLimit = 500;
      }
    }
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label",
      name: "label"
    });
    this.limit = new Layer({
      html: "0 / " + this.options.characterLimit,
      backgroundColor: "",
      width: 100,
      height: 12,
      visible: false,
      name: "limit"
    });
    this.limit.style = {
      color: this.labelColor,
      fontFamily: this.options.fontFamily,
      fontSize: "12px",
      lineHeight: "12px",
      textAlign: "right",
      letterSpacing: this.options.letterSpacing
    };
    this.errorText = new Label({
      fontSize: 12,
      color: this.red,
      name: "error text",
      visible: false,
      text: "Exeeds text limit."
    });
    this.border = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderWidth: 1,
      borderColor: this.lineColor,
      borderRadius: 2,
      name: "border"
    });
    TextArea.__super__.constructor.call(this, this.options);
    this.label.parent = this.border.parent = this;
    this.limit.parent = this;
    this.errorText.parent = this;
    this.label.y = 20;
    this.label.x = 16;
    this.limit.x = this.width - 100;
    this.limit.y = this.height + 8;
    this.errorText.y = this.height + 8;
    this.onClick(this.clicked);
    this.on(Events.Blur, function(value, layer) {
      return this.blurred();
    });
    this.on(Events.Focus, function(value, layer) {
      return this.focus();
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Input, function(value, layer) {
      this.limit.html = this.value.length + " / " + this.options.characterLimit;
      if (this.value.length > this.options.characterLimit) {
        this.errorText.visible = true;
        this.limit.color = this.red;
        this.border.borderColor = this.red;
        return this.label.color = this.red;
      } else {
        this.errorText.visible = false;
        this.limit.color = this.labelColor;
        this.border.borderColor = this.options.themeColor;
        return this.label.color = this.options.themeColor;
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.textarea = document.createElement("textarea");
    if (this.options.value != null) {
      this.textarea.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.maxLength != null) {
      this.textarea.setAttribute("maxLength", this.options.maxLength);
    }
    this.textarea.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.textarea.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.textarea.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this._element.appendChild(this.textarea);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    this._textAreaStyle = {
      fontSize: this.options.fontSize + "px",
      lineHeight: this.options.lineHeight + "px",
      fontWeight: "" + this.options.fontWeight,
      fontFamily: "" + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      overflow: "hidden",
      resize: "none",
      "-webkit-appearance": "none"
    };
    ref1 = this._textAreaStyle;
    for (key in ref1) {
      val = ref1[key];
      this.textarea.style[key] = val;
    }
    if (this.options.color != null) {
      this.textarea.style.color = this.options.color;
    }
    this.textarea.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.textarea.value, _this);
      };
    })(this);
    this.textarea.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.textarea.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.textarea.value, _this);
      };
    })(this);
    this._textAreaStyleonblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.textarea.oninput = (function(_this) {
      return function() {
        var ref2;
        _this.isEmpty = !(((ref2 = _this.textarea.value) != null ? ref2.length : void 0) > 0);
        _this.emit(Events.Input, _this.textarea.value, _this);
        return _this.checkValidity();
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.textarea.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.textarea.onkeydown = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.onkeyup = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.change = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
  }

  _resizeParent = function(layer, parentMinHeight, bottomPadding) {
    var allChildrenMaxYs, j, layerParent, len, max, ref, tallestChildMaxY;
    layerParent = layer.parent;
    allChildrenMaxYs = [];
    ref = layerParent.children;
    for (j = 0, len = ref.length; j < len; j++) {
      max = ref[j];
      allChildrenMaxYs.push(max.maxY);
    }
    tallestChildMaxY = Math.max.apply(null, allChildrenMaxYs);
    return layerParent.height = Math.max(tallestChildMaxY + bottomPadding, parentMinHeight);
  };

  _reflowSiblings = function(layer, layerMaxY) {
    var a, j, layerList, ref, ref1, results, yDiff;
    layerList = layer.parent.children;
    results = [];
    for (a = j = ref = layerList.indexOf(layer) + 1, ref1 = layerList.length; ref <= ref1 ? j < ref1 : j > ref1; a = ref <= ref1 ? ++j : --j) {
      yDiff = layerList[a].y - layerMaxY;
      results.push(layerList[a].y = layer.maxY + yDiff);
    }
    return results;
  };

  TextArea.prototype._update = function() {
    return setTimeout((function(_this) {
      return function() {
        var _trueValue, calcHeight, layerMaxY;
        layerMaxY = _this.maxY;
        _trueValue = _this.textarea.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n/g, "<br/>&nbsp;");
        if (_trueValue.trim() === "") {
          _trueValue = "a";
        }
        calcHeight = Utils.round(Utils.textSize(_trueValue, _this._textAreaStyle, {
          width: _this.width
        }).height, 0);
        _this.height = Math.max(calcHeight, _this.options.minHeight);
        if (_this.options.reflowSiblings === true) {
          _reflowSiblings(_this, layerMaxY);
        }
        if (_this.options.resizeParent === true) {
          return _resizeParent(_this, _this.parentOgHeight, _this.options.parentBottomPadding);
        }
      };
    })(this));
  };

  TextArea.prototype.checkValidity = function() {
    if (!this.shouldCheckValidity) {

    }
  };

  TextArea.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextArea.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextArea.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextArea.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 8,
        color: this.options.themeColor,
        x: 16
      },
      time: 0.2
    });
    this.border.borderColor = this.options.themeColor;
    return this.border.borderWidth = 2;
  };

  TextArea.prototype.error = function() {
    return this.borderColor = this.red;
  };

  TextArea.prototype.focus = function() {
    this.label.fontSize = 12;
    this.borderColor = this.options.themeColor;
    this.border.borderWidth = 2;
    return this.label.color = this.labelColor;
  };

  TextArea.prototype.hoverOn = function() {
    this.border.borderWidth = 2;
    return this.options.borderColor = this.lineHoverColor;
  };

  TextArea.prototype.hoverOff = function() {
    this.border.borderWidth = 1;
    return this.borderColor = this.lineColor;
  };

  TextArea.prototype.blurred = function(value, layer) {
    this.label.color = this.labelColor;
    this.border.borderColor = this.lineColor;
    if (this.isEmpty) {
      this.label.animate({
        properties: {
          fontSize: 16,
          y: 20,
          x: 16,
          color: this.labelColor
        },
        time: 0.2
      });
      this.border.borderColor = this.labelColor;
    }
    if (this.value.length > this.options.characterLimit) {
      this.errorText.visible = true;
      this.limit.color = this.red;
      this.border.borderColor = this.red;
      this.label.color = this.red;
    }
    return this.border.borderWidth = 1;
  };

  return TextArea;

})(Layer);

exports.TextField_Dropdown = (function(superClass) {
  extend(TextField_Dropdown, superClass);

  function TextField_Dropdown(options) {
    var activeSelection, as, base, base1, base2, base3, base4, base5, base6, choice, choice_label, container, container_ScrollArea, i, item, j, k, label, labelColor, len, placeHolder, ref, ref1, shadow, slider, themeColor;
    this.options = options != null ? options : {};
    if (this.options.theme === "dark") {
      if ((base = this.options).screenColor == null) {
        base.screenColor = "#000";
      }
    }
    if ((base1 = this.options).choices == null) {
      base1.choices = ["apple", "banana", "blueberry", "cantaloupe", "cherry", "coconut", "fig", "grape", "grapefruit", "guava", "kiwifruit", "lemon", "lime", "lychee", "mango", "melon", "orange", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "watermelon"];
    }
    if ((base2 = this.options).labelText == null) {
      base2.labelText = "Select a fruit";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).visibleItems == null) {
      base4.visibleItems = 4;
    }
    if ((base5 = this.options).activeSelection == null) {
      base5.activeSelection = null;
    }
    if ((base6 = this.options).themeColor == null) {
      base6.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = line_dark_hover;
      this.inputColor = input_dark;
    } else {
      this.labelColor = label_light;
      this.lineColor = line_light;
      this.lineHoverColor = line_light_hover;
      this.inputColor = input_light;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: 50,
      color: "#E91E63",
      width: 150,
      name: "DropDown"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label",
      fontSize: 12,
      visible: false
    });
    this.placeHolder = new Label({
      text: this.options.labelText,
      color: this.inputColor,
      y: 20,
      name: "label"
    });
    this.arrow = new Layer({
      html: '<svg version="1.1"><g class="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="' + this.lineColor + '" points="0.660133877 0 9.17482706 0 4.91748047 5"></polygon></g></svg>',
      size: 24,
      backgroundColor: "",
      color: "#555",
      width: 10,
      height: 5,
      name: "Arrow"
    });
    this.line = new Layer({
      height: 1,
      width: this.options.width,
      y: 49,
      backgroundColor: this.lineColor,
      name: "line"
    });
    this.container = new Layer({
      width: this.options.width,
      borderRadius: 2,
      backgroundColor: "#fff",
      height: this.options.visibleItems * 50 + 20,
      clip: true,
      name: "container"
    });
    TextField_Dropdown.__super__.constructor.call(this, this.options);
    this.container.states = {
      open: {
        height: this.options.visibleItems * 50 + 20,
        y: 0
      },
      closed: {
        height: 0,
        y: 50
      }
    };
    this.container.states.switchInstant("closed");
    this.container.animationOptions = {
      time: 0.5
    };
    this.label.parent = this;
    this.placeHolder.parent = this;
    this.container.parent = this.arrow.parent = this.line.parent = this;
    this.arrow.y = Align.center(2);
    this.arrow.x = this.options.width - 24;
    this.container.y = 50;
    placeHolder = this.placeHolder;
    label = this.label;
    container = this.container;
    activeSelection = this.activeSelection;
    labelColor = this.labelColor;
    shadow = new Shadow({
      parent: this,
      height: this.options.visibleItems * 50 + 20,
      width: this.width,
      borderRadius: this.container.borderRadius,
      y: 0,
      name: "shadows"
    });
    ref = shadow.array;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      item.states.open = {
        y: 0,
        height: this.options.visibleItems * 50 + 20
      };
      item.states.closed = {
        height: 0,
        y: 50
      };
      item.animationOptions = {
        time: 0.5
      };
      item.states.switchInstant("_2dp");
      item.states.switchInstant("closed");
    }
    container_ScrollArea = new ScrollComponent({
      parent: this.container,
      width: this.container.width,
      backgroundColor: "",
      height: this.options.visibleItems * 50 + 20,
      name: "scrollArea"
    });
    container_ScrollArea.content.draggable.overdrag = false;
    container_ScrollArea.content.draggable.bounce = false;
    container_ScrollArea.mouseWheelEnabled = true;
    slider = new SliderComponent({
      width: 5,
      height: container_ScrollArea.height - 30,
      y: 15,
      borderRadius: 0,
      parent: container_ScrollArea,
      x: container_ScrollArea.width - 5,
      backgroundColor: "",
      min: 0,
      max: (this.options.choices.length * 50) - 200,
      value: -15,
      name: slider
    });
    slider.fill.backgroundColor = "";
    slider.knob.backgroundColor = "BDBDBD";
    slider.knob.shadowY = 0;
    slider.knob.shadowSpread = 0;
    slider.knob.shadowBlur = 0;
    slider.knob.borderRadius = 1;
    slider.knob.width = 5;
    slider.knob.height = 30;
    slider.on("change:value", function() {
      return container_ScrollArea.content.y = -this.value;
    });
    container_ScrollArea.onMove(function() {
      return slider.value = container_ScrollArea.scrollY;
    });
    as = null;
    for (i = k = 0, ref1 = this.options.choices.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      choice = new Layer({
        parent: container_ScrollArea.content,
        width: container_ScrollArea.width,
        height: 50,
        y: 50 * i + 10,
        backgroundColor: "",
        name: "choice"
      });
      choice_label = new Label({
        text: this.options.choices[i],
        parent: choice,
        x: 20,
        y: Align.center,
        name: this.options.choices[i] + "label",
        color: label_light
      });
      choice.onMouseOver(function() {
        return this.backgroundColor = "#eee";
      });
      choice.onMouseOut(function() {
        return this.backgroundColor = "#fff";
      });
      choice.onClick(function() {
        var len1, m, ref2, results;
        as = this.children[0].text;
        placeHolder.text = this.children[0].text;
        placeHolder.color = labelColor;
        container.states["switch"]("closed");
        label.visible = true;
        ref2 = shadow.array;
        results = [];
        for (m = 0, len1 = ref2.length; m < len1; m++) {
          item = ref2[m];
          results.push(item.states["switch"]("closed"));
        }
        return results;
      });
    }
    container = this.container;
    this.onClick(function() {
      var len1, m, ref2;
      ref2 = shadow.array;
      for (m = 0, len1 = ref2.length; m < len1; m++) {
        item = ref2[m];
        item.states["switch"]("open");
      }
      container.states["switch"]("open");
      return this.activeSelection = as;
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
  }

  TextField_Dropdown.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Dropdown.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Dropdown.define('color', {
    get: function() {
      return this.options.color;
    },
    set: function(value) {
      return this.options.color = value;
    }
  });

  TextField_Dropdown.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  TextField_Dropdown.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return TextField_Dropdown;

})(Layer);

exports.AppBar = (function(superClass) {
  extend(AppBar, superClass);

  function AppBar(options) {
    var at, base, base1, base10, base11, base12, base13, base2, base3, base4, base5, base6, base7, base8, base9, isMob, menuIcon, setTime, shadow, statusBar, statusBarTime, statusIcons;
    this.options = options != null ? options : {};
    if ((base = this.options).width == null) {
      base.width = Screen.width;
    }
    if ((base1 = this.options).labelText == null) {
      base1.labelText = "Form";
    }
    if ((base2 = this.options).fontSize == null) {
      base2.fontSize = 22;
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 500;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    this.options.labelColor = "#fff";
    if ((base5 = this.options).themeColor == null) {
      base5.themeColor = "#009688";
    }
    if ((base6 = this.options).backgroundColor == null) {
      base6.backgroundColor = this.options.themeColor;
    }
    if ((base7 = this.options).mobile == null) {
      base7.mobile = false;
    }
    if ((base8 = this.options).menuIconVisble == null) {
      base8.menuIconVisble = true;
    }
    if ((base9 = this.options).name == null) {
      base9.name = "app bar";
    }
    if ((base10 = this.options).statusIconsY == null) {
      base10.statusIconsY = Align.center(-8);
    }
    if ((base11 = this.options).menuIconY == null) {
      base11.menuIconY = Align.center();
    }
    this.appCont = new Layer({
      height: 56,
      width: this.options.width,
      backgroundColor: "",
      name: "app bar contianer"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar = new Layer({
        width: this.options.width,
        height: 24,
        backgroundColor: "rgba(0,0,0,0.30)",
        name: "status bar"
      });
      if ((base12 = this.options).height == null) {
        base12.height = 80;
      }
      this.appCont.y = 24;
    } else {
      if ((base13 = this.options).height == null) {
        base13.height = 56;
      }
    }
    this.menuIcon = new Layer({
      size: 48,
      backgroundColor: "",
      visible: this.options.menuIconVisble,
      name: "menu icon"
    });
    this.title = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      color: this.options.labelColor,
      fontWeight: this.options.fontWeight,
      name: "title"
    });
    AppBar.__super__.constructor.call(this, this.options);
    shadow = new Shadow({
      width: this.width,
      height: this.height,
      name: "shadows"
    });
    shadow.parent = this;
    this.title.parent = this;
    this.title.y = Align.center();
    this.title.x = 16;
    this.appCont.parent = this;
    this.menuIcon.parent = this.title.parent = this.appCont;
    this.menuIcon.x = 16;
    this.menuIcon.y = this.options.menuIconY;
    if (this.menuIcon.visible === true) {
      this.title.x = 48 + 16 + 16;
    }
    menuIcon = new Layer({
      html: '<svg width="18px" height="12px" viewBox="0 0 18 12"><g class="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0,2 L18,2 L18,0 L0,0 L0,2 Z M0,6.97 L18,6.97 L18,5 L0,5 L0,6.97 Z M0,12 L18,12 L18,10 L0,10 L0,12 Z" fill="#fff"></path></g></svg>',
      width: 18,
      height: 12,
      parent: this.menuIcon,
      x: Align.center(),
      y: Align.center(),
      backgroundColor: "",
      name: "icon"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar.parent = this;
      this.title.y = Align.center(10);
      statusBarTime = new TextLayer({
        fontSize: 13,
        parent: this.statusBar,
        y: Align.center,
        x: this.width - 55,
        color: "#fff",
        fontFamily: "'Roboto', sans serif",
        textAlign: "right",
        name: "status bar time"
      });
      setTime = function() {
        var date, hour, minute, zone;
        date = new Date;
        minute = date.getMinutes();
        hour = date.getHours();
        zone = "AM";
        if (hour < 10) {
          hour = '0' + hour;
        }
        if (hour > 12) {
          hour = hour - 12;
          zone = "PM";
        } else {
          zone = "AM";
        }
        if (minute < 10) {
          minute = '0' + minute;
        }
        statusBarTime.text = hour + ":" + minute + " " + zone;
        return Utils.delay(30, function() {
          return setTime();
        });
      };
      setTime();
      statusIcons = new Layer({
        name: "status icons",
        parent: this.statusBar,
        html: '<svg width="53px" height="16px"><g><path d="M34.6093216,0.60903749 L34.6093216,15.1074592 L20.1108999,15.1074592 L34.6093216,0.60903749 Z M15.294614,7.04747475 L15.3280105,7.08087121 L9.16854076,14.7039773 L3.00907106,7.08087121 L3.04246752,7.04747475 L0.729399342,4.18844697 C3.47371752,2.26016414 6.28773268,1.29602273 9.16854076,1.29602273 C12.0508009,1.29602273 14.863364,2.26016414 17.6091342,4.18844697 L15.294614,7.04747475 Z M51.2229421,2.14400069 C51.574133,2.14400069 51.8764952,2.26795043 52.1243947,2.51772794 C52.3741722,2.76750545 52.5,3.06798967 52.5,3.42105863 L52.5,13.8142529 C52.5,14.1654438 52.3741722,14.4602939 52.1243947,14.6950472 C51.8764952,14.9298005 51.574133,15.0462382 51.2229421,15.0462382 L44.3568776,15.0462382 C44.0038086,15.0462382 43.7033244,14.9298005 43.4535469,14.6950472 C43.2037694,14.4602939 43.0798196,14.1654438 43.0798196,13.8142529 L43.0798196,3.42105863 C43.0798196,3.06798967 43.2037694,2.76750545 43.4535469,2.51772794 C43.7033244,2.26795043 44.0038086,2.14400069 44.3568776,2.14400069 L45.8968592,2.14400069 L45.8968592,0.296022727 L49.6829604,0.296022727 L49.6829604,2.14400069 L51.2229421,2.14400069 Z" fill="#fff"></path></g></svg>',
        backgroundColor: "",
        width: 53,
        height: 16,
        y: this.options.statusIconsY,
        x: this.width - statusBarTime.width - 70
      });
      this.title.y = Align.center;
    }
    at = this;
    statusBar = this.statusBar;
    isMob = this.options.mobile;
    window.onresize = function() {
      at.width = Screen.width;
      shadow.umbra.width = Screen.width;
      shadow.ambient.width = Screen.width;
      shadow.penumbra.width = Screen.width;
      if (Utils.isMobile() || isMob === true) {
        statusBar.width = Screen.width;
        statusBarTime.x = Screen.width - 55;
        return statusIcons.x = Screen.width - statusBarTime.width - 68;
      }
    };
  }

  return AppBar;

})(Layer);


},{}],"input":[function(require,module,exports){
var _inputStyle, calculatePixelRatio, growthRatio, imageHeight,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.keyboardLayer = new Layer({
  x: 0,
  y: Screen.height,
  width: Screen.width,
  height: 432,
  html: "<img style='width: 100%;' src='modules/keyboard.png'/>"
});

growthRatio = Screen.width / 732;

imageHeight = growthRatio * 432;

_inputStyle = Object.assign({}, Framer.LayerStyle, calculatePixelRatio = function(layer, value) {
  return (value * layer.context.pixelMultiplier) + "px";
}, {
  fontSize: function(layer) {
    return calculatePixelRatio(layer, layer._properties.fontSize);
  },
  lineHeight: function(layer) {
    return layer._properties.lineHeight + "em";
  },
  padding: function(layer) {
    var padding, paddingValue, paddingValues, pixelMultiplier;
    pixelMultiplier = layer.context.pixelMultiplier;
    padding = [];
    paddingValue = layer._properties.padding;
    if (Number.isInteger(paddingValue)) {
      return calculatePixelRatio(layer, paddingValue);
    }
    paddingValues = layer._properties.padding.split(" ");
    switch (paddingValues.length) {
      case 4:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[2]);
        padding.left = parseFloat(paddingValues[3]);
        break;
      case 3:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[2]);
        padding.left = parseFloat(paddingValues[1]);
        break;
      case 2:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[0]);
        padding.left = parseFloat(paddingValues[1]);
        break;
      default:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[0]);
        padding.bottom = parseFloat(paddingValues[0]);
        padding.left = parseFloat(paddingValues[0]);
    }
    return (padding.top * pixelMultiplier) + "px " + (padding.right * pixelMultiplier) + "px " + (padding.bottom * pixelMultiplier) + "px " + (padding.left * pixelMultiplier) + "px";
  }
});

exports.keyboardLayer.states = {
  shown: {
    y: Screen.height - imageHeight
  }
};

exports.keyboardLayer.states.animationOptions = {
  curve: "spring(500,50,15)"
};

exports.Input = (function(superClass) {
  extend(Input, superClass);

  Input.define("style", {
    get: function() {
      return this.input.style;
    },
    set: function(value) {
      return _.extend(this.input.style, value);
    }
  });

  Input.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(value) {
      return this.input.value = value;
    }
  });

  function Input(options) {
    if (options == null) {
      options = {};
    }
    this.enable = bind(this.enable, this);
    if (options.setup == null) {
      options.setup = false;
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.clip == null) {
      options.clip = false;
    }
    if (options.height == null) {
      options.height = 60;
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = options.setup ? "rgba(255, 60, 47, .5)" : "rgba(255, 255, 255, .01)";
    }
    if (options.fontSize == null) {
      options.fontSize = 30;
    }
    if (options.lineHeight == null) {
      options.lineHeight = 1;
    }
    if (options.padding == null) {
      options.padding = 10;
    }
    if (options.text == null) {
      options.text = "";
    }
    if (options.placeholder == null) {
      options.placeholder = "";
    }
    if (options.virtualKeyboard == null) {
      options.virtualKeyboard = Utils.isMobile() ? false : true;
    }
    if (options.type == null) {
      options.type = "text";
    }
    if (options.goButton == null) {
      options.goButton = false;
    }
    if (options.autoCorrect == null) {
      options.autoCorrect = "on";
    }
    if (options.autoComplete == null) {
      options.autoComplete = "on";
    }
    if (options.autoCapitalize == null) {
      options.autoCapitalize = "on";
    }
    if (options.spellCheck == null) {
      options.spellCheck = "on";
    }
    if (options.autofocus == null) {
      options.autofocus = false;
    }
    if (options.textColor == null) {
      options.textColor = "#000";
    }
    if (options.fontFamily == null) {
      options.fontFamily = "-apple-system";
    }
    if (options.fontWeight == null) {
      options.fontWeight = "500";
    }
    if (options.submit == null) {
      options.submit = false;
    }
    if (options.tabIndex == null) {
      options.tabIndex = 0;
    }
    if (options.textarea == null) {
      options.textarea = false;
    }
    if (options.disabled == null) {
      options.disabled = false;
    }
    Input.__super__.constructor.call(this, options);
    this._properties.fontSize = options.fontSize;
    this._properties.lineHeight = options.lineHeight;
    this._properties.padding = options.padding;
    if (options.placeholderColor != null) {
      this.placeholderColor = options.placeholderColor;
    }
    this.input = document.createElement(options.textarea ? 'textarea' : 'input');
    this.input.id = "input-" + (_.now());
    this.input.style.width = _inputStyle["width"](this);
    this.input.style.height = _inputStyle["height"](this);
    this.input.style.fontSize = _inputStyle["fontSize"](this);
    this.input.style.lineHeight = _inputStyle["lineHeight"](this);
    this.input.style.outline = "none";
    this.input.style.border = "none";
    this.input.style.backgroundColor = options.backgroundColor;
    this.input.style.padding = _inputStyle["padding"](this);
    this.input.style.fontFamily = options.fontFamily;
    this.input.style.color = options.textColor;
    this.input.style.fontWeight = options.fontWeight;
    this.input.value = options.text;
    this.input.type = options.type;
    this.input.placeholder = options.placeholder;
    this.input.setAttribute("tabindex", options.tabindex);
    this.input.setAttribute("autocorrect", options.autoCorrect);
    this.input.setAttribute("autocomplete", options.autoComplete);
    this.input.setAttribute("autocapitalize", options.autoCapitalize);
    if (options.disabled === true) {
      this.input.setAttribute("disabled", true);
    }
    if (options.autofocus === true) {
      this.input.setAttribute("autofocus", true);
    }
    this.input.setAttribute("spellcheck", options.spellCheck);
    this.form = document.createElement("form");
    if ((options.goButton && !options.submit) || !options.submit) {
      this.form.action = "#";
      this.form.addEventListener("submit", function(event) {
        return event.preventDefault();
      });
    }
    this.form.appendChild(this.input);
    this._element.appendChild(this.form);
    this.backgroundColor = "transparent";
    if (this.placeholderColor) {
      this.updatePlaceholderColor(options.placeholderColor);
    }
    if (!Utils.isMobile() && options.virtualKeyboard === true) {
      this.input.addEventListener("focus", function() {
        exports.keyboardLayer.bringToFront();
        return exports.keyboardLayer.stateCycle();
      });
      this.input.addEventListener("blur", function() {
        return exports.keyboardLayer.animate("default");
      });
    }
  }

  Input.prototype.updatePlaceholderColor = function(color) {
    var css;
    this.placeholderColor = color;
    if (this.pageStyle != null) {
      document.head.removeChild(this.pageStyle);
    }
    this.pageStyle = document.createElement("style");
    this.pageStyle.type = "text/css";
    css = "#" + this.input.id + "::-webkit-input-placeholder { color: " + this.placeholderColor + "; }";
    this.pageStyle.appendChild(document.createTextNode(css));
    return document.head.appendChild(this.pageStyle);
  };

  Input.prototype.focus = function() {
    return this.input.focus();
  };

  Input.prototype.unfocus = function() {
    return this.input.blur();
  };

  Input.prototype.onFocus = function(cb) {
    return this.input.addEventListener("focus", function() {
      return cb.apply(this);
    });
  };

  Input.prototype.onBlur = function(cb) {
    return this.input.addEventListener("blur", function() {
      return cb.apply(this);
    });
  };

  Input.prototype.onUnfocus = Input.onBlur;

  Input.prototype.disable = function() {
    return this.input.setAttribute("disabled", true);
  };

  Input.prototype.enable = function() {
    return this.input.removeAttribute("disabled", true);
  };

  return Input;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vbW9kdWxlcy9pbnB1dC5jb2ZmZWUiLCIuLi9tb2R1bGVzL01hdGVyaWFsQ29tcG9uZW50cy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmtleWJvYXJkTGF5ZXIgPSBuZXcgTGF5ZXJcblx0eDowLCB5OlNjcmVlbi5oZWlnaHQsIHdpZHRoOlNjcmVlbi53aWR0aCwgaGVpZ2h0OjQzMlxuXHRodG1sOlwiPGltZyBzdHlsZT0nd2lkdGg6IDEwMCU7JyBzcmM9J21vZHVsZXMva2V5Ym9hcmQucG5nJy8+XCJcblxuI3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuZ3Jvd3RoUmF0aW8gPSBTY3JlZW4ud2lkdGggLyA3MzJcbmltYWdlSGVpZ2h0ID0gZ3Jvd3RoUmF0aW8gKiA0MzJcblxuIyBFeHRlbmRzIHRoZSBMYXllclN0eWxlIGNsYXNzIHdoaWNoIGRvZXMgdGhlIHBpeGVsIHJhdGlvIGNhbGN1bGF0aW9ucyBpbiBmcmFtZXJcbl9pbnB1dFN0eWxlID1cblx0T2JqZWN0LmFzc2lnbih7fSwgRnJhbWVyLkxheWVyU3R5bGUsXG5cdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyA9IChsYXllciwgdmFsdWUpIC0+XG5cdFx0XHQodmFsdWUgKiBsYXllci5jb250ZXh0LnBpeGVsTXVsdGlwbGllcikgKyBcInB4XCJcblxuXHRcdGZvbnRTaXplOiAobGF5ZXIpIC0+XG5cdFx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBsYXllci5fcHJvcGVydGllcy5mb250U2l6ZSlcblxuXHRcdGxpbmVIZWlnaHQ6IChsYXllcikgLT5cblx0XHRcdChsYXllci5fcHJvcGVydGllcy5saW5lSGVpZ2h0KSArIFwiZW1cIlxuXG5cdFx0cGFkZGluZzogKGxheWVyKSAtPlxuXHRcdFx0eyBwaXhlbE11bHRpcGxpZXIgfSA9IGxheWVyLmNvbnRleHRcblx0XHRcdHBhZGRpbmcgPSBbXVxuXHRcdFx0cGFkZGluZ1ZhbHVlID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZ1xuXG5cdFx0XHQjIENoZWNrIGlmIHdlIGhhdmUgYSBzaW5nbGUgbnVtYmVyIGFzIGludGVnZXJcblx0XHRcdGlmIE51bWJlci5pc0ludGVnZXIocGFkZGluZ1ZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgcGFkZGluZ1ZhbHVlKVxuXG5cdFx0XHQjIElmIHdlIGhhdmUgbXVsdGlwbGUgdmFsdWVzIHRoZXkgY29tZSBhcyBzdHJpbmcgKGUuZy4gXCIxIDIgMyA0XCIpXG5cdFx0XHRwYWRkaW5nVmFsdWVzID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZy5zcGxpdChcIiBcIilcblxuXHRcdFx0c3dpdGNoIHBhZGRpbmdWYWx1ZXMubGVuZ3RoXG5cdFx0XHRcdHdoZW4gNFxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKVxuXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblxuXHRcdFx0IyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuXHRcdFx0XCIje3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4XCJcblx0KVxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzID1cblx0c2hvd246XG5cdFx0eTogU2NyZWVuLmhlaWdodCAtIGltYWdlSGVpZ2h0XG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdGN1cnZlOiBcInNwcmluZyg1MDAsNTAsMTUpXCJcblxuY2xhc3MgZXhwb3J0cy5JbnB1dCBleHRlbmRzIExheWVyXG5cdEBkZWZpbmUgXCJzdHlsZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRfLmV4dGVuZCBAaW5wdXQuc3R5bGUsIHZhbHVlXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQudmFsdWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBpbnB1dC52YWx1ZSA9IHZhbHVlXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucy5zZXR1cCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5jbGlwID89IGZhbHNlXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gNjBcblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJyZ2JhKDI1NSwgNjAsIDQ3LCAuNSlcIiBlbHNlIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuMDEpXCIgIyBcInRyYW5zcGFyZW50XCIgc2VlbXMgdG8gY2F1c2UgYSBidWcgaW4gbGF0ZXN0IHNhZmFyaSB2ZXJzaW9uXG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAzMFxuXHRcdG9wdGlvbnMubGluZUhlaWdodCA/PSAxXG5cdFx0b3B0aW9ucy5wYWRkaW5nID89IDEwXG5cdFx0b3B0aW9ucy50ZXh0ID89IFwiXCJcblx0XHRvcHRpb25zLnBsYWNlaG9sZGVyID89IFwiXCJcblx0XHRvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA/PSBpZiBVdGlscy5pc01vYmlsZSgpIHRoZW4gZmFsc2UgZWxzZSB0cnVlXG5cdFx0b3B0aW9ucy50eXBlID89IFwidGV4dFwiXG5cdFx0b3B0aW9ucy5nb0J1dHRvbiA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0NvcnJlY3QgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ29tcGxldGUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLnNwZWxsQ2hlY2sgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvZm9jdXMgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRleHRDb2xvciA/PSBcIiMwMDBcIlxuXHRcdG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIi1hcHBsZS1zeXN0ZW1cIlxuXHRcdG9wdGlvbnMuZm9udFdlaWdodCA/PSBcIjUwMFwiXG5cdFx0b3B0aW9ucy5zdWJtaXQgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRhYkluZGV4ID89IDBcblx0XHRvcHRpb25zLnRleHRhcmVhID89IGZhbHNlXG5cdFx0b3B0aW9ucy5kaXNhYmxlZCA/PSBmYWxzZVxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG5cdFx0QF9wcm9wZXJ0aWVzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBfcHJvcGVydGllcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0XG5cdFx0QF9wcm9wZXJ0aWVzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdcblxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcj9cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlmIG9wdGlvbnMudGV4dGFyZWEgdGhlbiAndGV4dGFyZWEnIGVsc2UgJ2lucHV0J1xuXHRcdEBpbnB1dC5pZCA9IFwiaW5wdXQtI3tfLm5vdygpfVwiXG5cblx0XHQjIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0QGlucHV0LnN0eWxlLndpZHRoID0gX2lucHV0U3R5bGVbXCJ3aWR0aFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5oZWlnaHQgPSBfaW5wdXRTdHlsZVtcImhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IF9pbnB1dFN0eWxlW1wiZm9udFNpemVcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUubGluZUhlaWdodCA9IF9pbnB1dFN0eWxlW1wibGluZUhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAaW5wdXQuc3R5bGUucGFkZGluZyA9IF9pbnB1dFN0eWxlW1wicGFkZGluZ1wiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gb3B0aW9ucy50ZXh0Q29sb3Jcblx0XHRAaW5wdXQuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodFxuXG5cdFx0QGlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0XG5cdFx0QGlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGVcblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXhcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvcnJlY3RcIiwgb3B0aW9ucy5hdXRvQ29ycmVjdFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29tcGxldGVcIiwgb3B0aW9ucy5hdXRvQ29tcGxldGVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZVxuXHRcdGlmIG9wdGlvbnMuZGlzYWJsZWQgPT0gdHJ1ZVxuXHRcdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImRpc2FibGVkXCIsIHRydWVcblx0XHRpZiBvcHRpb25zLmF1dG9mb2N1cyA9PSB0cnVlXG5cdFx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2ZvY3VzXCIsIHRydWVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2tcblx0XHRAZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJmb3JtXCJcblxuXHRcdGlmIChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0XG5cdFx0XHRAZm9ybS5hY3Rpb24gPSBcIiNcIlxuXHRcdFx0QGZvcm0uYWRkRXZlbnRMaXN0ZW5lciBcInN1Ym1pdFwiLCAoZXZlbnQpIC0+XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdEBmb3JtLmFwcGVuZENoaWxkIEBpbnB1dFxuXHRcdEBfZWxlbWVudC5hcHBlbmRDaGlsZCBAZm9ybVxuXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdEB1cGRhdGVQbGFjZWhvbGRlckNvbG9yIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciBpZiBAcGxhY2Vob2xkZXJDb2xvclxuXG5cdFx0I29ubHkgc2hvdyBob25vciB2aXJ0dWFsIGtleWJvYXJkIG9wdGlvbiB3aGVuIG5vdCBvbiBtb2JpbGUsXG5cdFx0I290aGVyd2lzZSBpZ25vcmVcblx0XHRpZiAhVXRpbHMuaXNNb2JpbGUoKSAmJiBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCBpcyB0cnVlXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG5cblx0dXBkYXRlUGxhY2Vob2xkZXJDb2xvcjogKGNvbG9yKSAtPlxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gY29sb3Jcblx0XHRpZiBAcGFnZVN0eWxlP1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCBAcGFnZVN0eWxlXG5cdFx0QHBhZ2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzdHlsZVwiXG5cdFx0QHBhZ2VTdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiXG5cdFx0Y3NzID0gXCIjI3tAaW5wdXQuaWR9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QHBsYWNlaG9sZGVyQ29sb3J9OyB9XCJcblx0XHRAcGFnZVN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIGNzcylcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkIEBwYWdlU3R5bGVcblxuXHRmb2N1czogKCkgLT5cblx0XHRAaW5wdXQuZm9jdXMoKVxuXG5cdHVuZm9jdXM6ICgpIC0+XG5cdFx0QGlucHV0LmJsdXIoKVxuXG5cdG9uRm9jdXM6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuXG5cdG9uQmx1cjogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcblxuXHRvblVuZm9jdXM6IHRoaXMub25CbHVyXG5cdFxuXHRkaXNhYmxlOiAoKSAtPlxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJkaXNhYmxlZFwiLCB0cnVlXG5cblx0ZW5hYmxlOiAoKSA9PlxuXHRcdEBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUgXCJkaXNhYmxlZFwiLCB0cnVlXG5cdFxuIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgTWF0ZXJpYWxDb21wb25lbnRzIHZlcnNpb24gMVxuIyBNYWRlIGJ5IFRlc3MgR2FkZCBodHRwczovL21lZGl1bS5jb20vQHRlc3NnYWRkXG4jIEVkaXRlZCBieSBNb3JnYW4gQnJvYWNoYSBzdHJpY3RseSBmb3IgdXNlIGluIHRoaXMgcHJvamVjdC5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbiMgVGhpcyB2ZXJzaW9uIGNvbnRhaW5zXG4jIDAuIGdsb2JhbCBlbGVtZW50c1xuIyAxLiBDb2xvclxuIyAyLiBGbGF0QnV0dG9uXG4jIDMuIFJhaXNlZEJ1dHRvblxuIyA0LiBGQUJcbiMgNS4gQ2hlY2tib3hlc1xuIyA2LiBSYWRpbyBCdXR0b25zXG4jIDcuIFN3aXRjaFxuIyA4LiBUZXh0RmllbGQgKFRleHQgZmllbGRzIGZyYW5rZW5zdGllbmQgZnJvbSBKb3JkYW4gUm9iZXJ0IERvYnNvbidzIElucHV0RmllbGQpXG4jIDkuIFRleHRGaWVsZF9WYWxpZGF0aW9uIChUZXh0IGZpZWxkcyBmcmFua2Vuc3RpZW5kIGZyb20gSm9yZGFuIFJvYmVydCBEb2Jzb24ncyBJbnB1dEZpZWxkKVxuIyAxMC4gVGV4dEFyZWEgKGZyYW5rZW5zdGllbmQgZnJvbSBKb3JkYW4gUm9iZXJ0IERvYnNvbidzIElucHV0RmllbGQgYW5kIEJsYWluZSBCaWxsaW5nc2xleSdzIEF1dG9ncm93KVxuIyAxMS4gVGV4dEZpZWxkX0Ryb3Bkb3duXG4jIDEyLiBBcHBCYXJcblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMC4gR2xvYmFsIEVsZW1lbnRzICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMtLS0tLS0tLS1jb2xvcnNcbmxhYmVsX2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcbmxhYmVsX2RhcmsgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxubGluZV9saWdodCA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5saW5lX2RhcmsgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC43KVwiXG5pbnB1dF9saWdodCA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5pbnB1dF9kYXJrID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbklucHV0bGFiZWxfbGlnaHQgPSBib3hfbGlnaHQgPSBcInJnYmEoMCwwLDAsMC41NClcIlxuSW5wdXRsYWJlbF9kYXJrID0gYm94X2RhcmsgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC43KVwiXG5saW5lX2xpZ2h0X2hvdmVyID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcbmxpbmVfZGFya19ob3ZlciA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cblxuIy0tLS0tLS0tLXRleHRsYXllci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIExhYmVsIGV4dGVuZHMgVGV4dExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2XG5cdFx0QG9wdGlvbnMudGV4dCA/PSAnTGFiZWwnXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gbGFiZWxfbGlnaHRcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDQwMFxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLm5hbWUgPz0gXCJsYWJlbFwiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cblxuIy0tLS0tLS0tLXNoYWRvdy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgU2hhZG93IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBcIlwiXG5cblx0XHRAdW1icmEgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4xNClcIlxuXHRcdFx0bmFtZTogXCJ1bWJyYVwiXG5cblx0XHRAdW1icmEuc3RhdGVzID1cblx0XHRcdF8xMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAxMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxN1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDJcblx0XHRcdF84ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDRcblx0XHRcdFx0c2hhZG93Qmx1cjogMTVcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfNmRwOlxuXHRcdFx0XHRzaGFkb3dZOiA2XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDEwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzRkcDpcblx0XHRcdFx0c2hhZG93WTogMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiA0XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzJkcDpcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzFkcDpcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzBkcDpcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXG5cdFx0QHBlbnVtYnJhID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMTIpXCJcblx0XHRcdG5hbWU6IFwicGVudW1icmFcIlxuXG5cdFx0QHBlbnVtYnJhLnN0YXRlcyA9XG5cdFx0XHRfMTJkcDpcblx0XHRcdFx0c2hhZG93WTogNVxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyMlxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDRcblx0XHRcdF84ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdFx0c2hhZG93Qmx1cjogMTRcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAzXG5cdFx0XHRfNmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAxXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDE4XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzRkcDpcblx0XHRcdFx0c2hhZG93WTogNFxuXHRcdFx0XHRzaGFkb3dCbHVyOiA1XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzJkcDpcblx0XHRcdFx0c2hhZG93WTogMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzFkcDpcblx0XHRcdFx0c2hhZG93WTogMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzBkcDpcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXG5cdFx0QGFtYmllbnQ9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMjApXCJcblx0XHRcdG5hbWU6IFwiYW1iaWVudFwiXG5cdFx0XHRib3JkZXJSYWRpdXMgOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblxuXHRcdEBhbWJpZW50LnN0YXRlcyA9XG5cdFx0XHRfMTJkcDpcblx0XHRcdFx0c2hhZG93WTogN1xuXHRcdFx0XHRzaGFkb3dCbHVyOiA4XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzhkcDpcblx0XHRcdFx0c2hhZG93WTogOFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDFcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdFx0c2hhZG93Qmx1cjogNVxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF80ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogMTBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAxXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDNcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMWRwOlxuXHRcdFx0XHRzaGFkb3dZOiAxXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDNcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMGRwOlxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cblx0XHRAdW1icmEuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuMlxuXHRcdEBwZW51bWJyYS5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4yXG5cdFx0QGFtYmllbnQuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuMlxuXG5cdFx0QHVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cdFx0QHBlbnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cdFx0QGFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAdW1icmEucGFyZW50ID0gQFxuXHRcdEBwZW51bWJyYS5wYXJlbnQgPSBAXG5cdFx0QGFtYmllbnQucGFyZW50ID0gQFxuXG5cdFx0QGFycmF5ID0gW0B1bWJyYSwgQHBlbnVtYnJhLCBAYW1iaWVudF1cblxuXG5cbiMtLS0tLS0tLUljb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBTeXN0ZW1JY29uIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IEBpbXBvcnQgdXJsKGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jb2RlLmdldG1kbC5pby8xLjAuNi9tYXRlcmlhbC5pbmRpZ28tcGluay5taW4uY3NzKTsgLm1hdGVyaWFsLWljb25zLnRhYnt9JylcblxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDI0XG5cblxuXHRcdEBvcHRpb25zLmljb24gPz0gXCJhbmRyb2lkXCJcblx0XHRAb3B0aW9ucy5odG1sID0gXCI8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMgdGFiJz5cIiArIEBvcHRpb25zLmljb24gKyBcIjwvaT5cIlxuXHRcdEBvcHRpb25zLmNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID89IEBvcHRpb25zLmZvbnRTaXplXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gQG9wdGlvbnMuZm9udFNpemVcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdEBkZWZpbmUgJ2ZvbnRTaXplJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPSB2YWx1ZVxuXG5cdFx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpOyBAaW1wb3J0IHVybChodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY29kZS5nZXRtZGwuaW8vMS4wLjYvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzcyk7IC5tYXRlcmlhbC1pY29ucy50YWJ7fScpXG5cblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAxLiBDb2xvciAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLmNvbG9yIGV4dGVuZHMgTGF5ZXJcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgICAgICBAb3B0aW9ucyA9IF8uZGVmYXVsdHMgQG9wdGlvbnMsXG4gICAgICAgIHN1cGVyIEBvcHRpb25zXG5cbiNyZWRzLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGV4cG9ydHMucmVkID0gXCIjRjQ0MzM2XCJcblx0XHRleHBvcnRzLnJlZDUwID0gXCIjRkZFQkVFXCJcblx0XHRleHBvcnRzLnJlZDEwMCA9IFwiI0ZGQ0REMlwiXG5cdFx0ZXhwb3J0cy5yZWQyMDAgPSBcIiNFRjlBOUFcIlxuXHRcdGV4cG9ydHMucmVkMzAwID0gXCIjRTU3MzczXCJcblx0XHRleHBvcnRzLnJlZDQwMCA9IFwiI0VGNTM1MFwiXG5cdFx0ZXhwb3J0cy5yZWQ1MDAgPSBcIiNGNDQzMzZcIlxuXHRcdGV4cG9ydHMucmVkNjAwID0gXCIjRTUzOTM1XCJcblx0XHRleHBvcnRzLnJlZDcwMCA9IFwiI0QzMkYyRlwiXG5cdFx0ZXhwb3J0cy5yZWQ4MDAgPSBcIiNDNjI4MjhcIlxuXHRcdGV4cG9ydHMucmVkOTAwID0gXCIjQjcxQzFDXCJcblx0XHRleHBvcnRzLnJlZEExMDAgPSBcIiNGRjhBODBcIlxuXHRcdGV4cG9ydHMucmVkQTIwMCA9IFwiI0ZGNTI1MlwiXG5cdFx0ZXhwb3J0cy5yZWRBNDAwID0gXCIjRkYxNzQ0XCJcblx0XHRleHBvcnRzLnJlZEE3MDAgPSBcIiNENTAwMDBcIlxuXG4jcGluay0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5waW5rID0gXCIjRTkxRTYzXCJcblx0XHRleHBvcnRzLnBpbms1MCA9IFwiI0ZDRTRFQ1wiXG5cdFx0ZXhwb3J0cy5waW5rMTAwID0gXCIjRjhCQkQwXCJcblx0XHRleHBvcnRzLnBpbmsyMDAgPSBcIiNGNDhGQjFcIlxuXHRcdGV4cG9ydHMucGluazMwMCA9IFwiI0YwNjI5MlwiXG5cdFx0ZXhwb3J0cy5waW5rNDAwID0gXCIjRUM0MDdBXCJcblx0XHRleHBvcnRzLnBpbms1MDAgPSBcIiNFOTFFNjNcIlxuXHRcdGV4cG9ydHMucGluazYwMCA9IFwiI0Q4MUI2MFwiXG5cdFx0ZXhwb3J0cy5waW5rNzAwID0gXCIjQzIxODVCXCJcblx0XHRleHBvcnRzLnBpbms4MDAgPSBcIiNBRDE0NTdcIlxuXHRcdGV4cG9ydHMucGluazkwMCA9IFwiIzg4MEU0RlwiXG5cdFx0ZXhwb3J0cy5waW5rQTEwMCA9IFwiI0ZGODBBQlwiXG5cdFx0ZXhwb3J0cy5waW5rQTIwMCA9IFwiI0ZGNDA4MVwiXG5cdFx0ZXhwb3J0cy5waW5rQTQwMCA9IFwiI0Y1MDA1N1wiXG5cdFx0ZXhwb3J0cy5waW5rQTcwMCA9IFwiI0M1MTE2MlwiXG5cblxuI3B1cnBsZS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5wdXJwbGUgPSBcIiM5QzI3QjBcIlxuXHRcdGV4cG9ydHMucHVycGxlNTAgPSBcIiNGM0U1RjVcIlxuXHRcdGV4cG9ydHMucHVycGxlMTAwID0gXCIjRTFCRUU3XCJcblx0XHRleHBvcnRzLnB1cnBsZTIwMCA9IFwiI0NFOTNEOFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGUzMDAgPSBcIiNCQTY4QzhcIlxuXHRcdGV4cG9ydHMucHVycGxlNDAwID0gXCIjQUI0N0JDXCJcblx0XHRleHBvcnRzLnB1cnBsZTUwMCA9IFwiIzlDMjdCMFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU2MDAgPSBcIiM4RTI0QUFcIlxuXHRcdGV4cG9ydHMucHVycGxlNzAwID0gXCIjN0IxRkEyXCJcblx0XHRleHBvcnRzLnB1cnBsZTgwMCA9IFwiIzZBMUI5QVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU5MDAgPSBcIiM0QTE0OENcIlxuXHRcdGV4cG9ydHMucHVycGxlQTEwMCA9IFwiI0VBODBGQ1wiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBMjAwID0gXCIjRTA0MEZCXCJcblx0XHRleHBvcnRzLnB1cnBsZUE0MDAgPSBcIiNENTAwRjlcIlxuXHRcdGV4cG9ydHMucHVycGxlQTcwMCA9IFwiI0FBMDBGRlwiXG5cbiNEZWVwIHB1cnBsZS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlID0gXCIjNjczQUI3XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU1MCA9IFwiI0VERTdGNlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlMTAwID0gXCIjRDFDNEU5XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGUyMDAgPSBcIiNCMzlEREJcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTMwMCA9IFwiIzk1NzVDRFwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNDAwID0gXCIjN0U1N0MyXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU1MDAgPSBcIiM2NzNBQjdcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTYwMCA9IFwiIzVFMzVCMVwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNzAwID0gXCIjNTEyREE4XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU4MDAgPSBcIiM0NTI3QTBcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTkwMCA9IFwiIzMxMUI5MlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTEwMCA9IFwiI0IzODhGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTIwMCA9IFwiIzdDNERGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTQwMCA9IFwiIzY1MUZGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTcwMCA9IFwiIzYyMDBFQVwiXG4jaW5kaWdvLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmluZGlnbyA9IFwiIzNGNTFCNVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ281MCA9IFwiI0U4RUFGNlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ28xMDAgPSBcIiNDNUNBRTlcIlxuXHRcdGV4cG9ydHMuaW5kaWdvMjAwID0gXCIjOUZBOERBXCJcblx0XHRleHBvcnRzLmluZGlnbzMwMCA9IFwiIzc5ODZDQlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ280MDAgPSBcIiM1QzZCQzBcIlxuXHRcdGV4cG9ydHMuaW5kaWdvNTAwID0gXCIjM0Y1MUI1XCJcblx0XHRleHBvcnRzLmluZGlnbzYwMCA9IFwiIzM5NDlBQlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ283MDAgPSBcIiMzMDNGOUZcIlxuXHRcdGV4cG9ydHMuaW5kaWdvODAwID0gXCIjMjgzNTkzXCJcblx0XHRleHBvcnRzLmluZGlnbzkwMCA9IFwiIzFBMjM3RVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BMTAwID0gXCIjOEM5RUZGXCJcblx0XHRleHBvcnRzLmluZGlnb0EyMDAgPSBcIiM1MzZERkVcIlxuXHRcdGV4cG9ydHMuaW5kaWdvQTQwMCA9IFwiIzNENUFGRVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BNzAwID0gXCIjMzA0RkZFXCJcbiNibHVlLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmJsdWUgPSBcIiMyMTk2RjNcIlxuXHRcdGV4cG9ydHMuYmx1ZTUwID0gXCIjRTNGMkZEXCJcblx0XHRleHBvcnRzLmJsdWUxMDAgPSBcIiNCQkRFRkJcIlxuXHRcdGV4cG9ydHMuYmx1ZTIwMCA9IFwiIzkwQ0FGOVwiXG5cdFx0ZXhwb3J0cy5ibHVlMzAwID0gXCIjNjRCNUY2XCJcblx0XHRleHBvcnRzLmJsdWU0MDAgPSBcIiM0MkE1RjVcIlxuXHRcdGV4cG9ydHMuYmx1ZTUwMCA9IFwiIzIxOTZGM1wiXG5cdFx0ZXhwb3J0cy5ibHVlNjAwID0gXCIjMUU4OEU1XCJcblx0XHRleHBvcnRzLmJsdWU3MDAgPSBcIiMxOTc2RDJcIlxuXHRcdGV4cG9ydHMuYmx1ZTgwMCA9IFwiIzE1NjVDMFwiXG5cdFx0ZXhwb3J0cy5ibHVlOTAwID0gXCIjMEQ0N0ExXCJcblx0XHRleHBvcnRzLmJsdWVBMTAwID0gXCIjODJCMUZGXCJcblx0XHRleHBvcnRzLmJsdWVBMjAwID0gXCIjNDQ4QUZGXCJcblx0XHRleHBvcnRzLmJsdWVBNDAwID0gXCIjMjk3OUZGXCJcblx0XHRleHBvcnRzLmJsdWVBNzAwID0gXCIjMjk2MkZGXCJcbiNsaWdodCBibHVlLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUgPSBcIiMwM0E5RjRcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNTAgPSBcIiNFMUY1RkVcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlMTAwID0gXCIjQjNFNUZDXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTIwMCA9IFwiIzgxRDRGQVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUzMDAgPSBcIiM0RkMzRjdcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNDAwID0gXCIjMjlCNkY2XCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTUwMCA9IFwiIzAzQTlGNFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU2MDAgPSBcIiMwMzlCRTVcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNzAwID0gXCIjMDI4OEQxXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTgwMCA9IFwiIzAyNzdCRFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU5MDAgPSBcIiMwMTU3OUJcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTEwMCA9IFwiIzgwRDhGRlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBMjAwID0gXCIjNDBDNEZGXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZUE0MDAgPSBcIiMwMEIwRkZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTcwMCA9IFwiIzAwOTFFQVwiXG4jY3lhbi0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmN5YW4gPSBcIiMwMEJDRDRcIlxuXHRcdGV4cG9ydHMuY3lhbjUwID0gXCIjRTBGN0ZBXCJcblx0XHRleHBvcnRzLmN5YW4xMDAgPSBcIiNCMkVCRjJcIlxuXHRcdGV4cG9ydHMuY3lhbjIwMCA9IFwiIzgwREVFQVwiXG5cdFx0ZXhwb3J0cy5jeWFuMzAwID0gXCIjNEREMEUxXCJcblx0XHRleHBvcnRzLmN5YW40MDAgPSBcIiMyNkM2REFcIlxuXHRcdGV4cG9ydHMuY3lhbjUwMCA9IFwiIzAwQkNENFwiXG5cdFx0ZXhwb3J0cy5jeWFuNjAwID0gXCIjMDBBQ0MxXCJcblx0XHRleHBvcnRzLmN5YW43MDAgPSBcIiMwMDk3QTdcIlxuXHRcdGV4cG9ydHMuY3lhbjgwMCA9IFwiIzAwODM4RlwiXG5cdFx0ZXhwb3J0cy5jeWFuOTAwID0gXCIjMDA2MDY0XCJcblx0XHRleHBvcnRzLmN5YW5BMTAwID0gXCIjODRGRkZGXCJcblx0XHRleHBvcnRzLmN5YW5BMjAwID0gXCIjMThGRkZGXCJcblx0XHRleHBvcnRzLmN5YW5BNDAwID0gXCIjMDBFNUZGXCJcblx0XHRleHBvcnRzLmN5YW5BNzAwID0gXCIjMDBCOEQ0XCJcbiN0ZWFsLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMudGVhbCA9IFwiIzAwOTY4OFwiXG5cdFx0ZXhwb3J0cy50ZWFsNTAgPSBcIiNFMEYyRjFcIlxuXHRcdGV4cG9ydHMudGVhbDEwMCA9IFwiI0IyREZEQlwiXG5cdFx0ZXhwb3J0cy50ZWFsMjAwID0gXCIjODBDQkM0XCJcblx0XHRleHBvcnRzLnRlYWwzMDAgPSBcIiM0REI2QUNcIlxuXHRcdGV4cG9ydHMudGVhbDQwMCA9IFwiIzI2QTY5QVwiXG5cdFx0ZXhwb3J0cy50ZWFsNTAwID0gXCIjMDA5Njg4XCJcblx0XHRleHBvcnRzLnRlYWw2MDAgPSBcIiMwMDg5N0JcIlxuXHRcdGV4cG9ydHMudGVhbDcwMCA9IFwiIzAwNzk2QlwiXG5cdFx0ZXhwb3J0cy50ZWFsODAwID0gXCIjMDA2OTVDXCJcblx0XHRleHBvcnRzLnRlYWw5MDAgPSBcIiMwMDRENDBcIlxuXHRcdGV4cG9ydHMudGVhbEExMDAgPSBcIiNBN0ZGRUJcIlxuXHRcdGV4cG9ydHMudGVhbEEyMDAgPSBcIiM2NEZGREFcIlxuXHRcdGV4cG9ydHMudGVhbEE0MDAgPSBcIiMxREU5QjZcIlxuXHRcdGV4cG9ydHMudGVhbEE3MDAgPSBcIiMwMEJGQTVcIlxuI2dyZWVuLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5ncmVlbiA9IFwiIzRDQUY1MFwiXG5cdFx0ZXhwb3J0cy5ncmVlbjUwID0gXCIjRThGNUU5XCJcblx0XHRleHBvcnRzLmdyZWVuMTAwID0gXCIjQzhFNkM5XCJcblx0XHRleHBvcnRzLmdyZWVuMjAwID0gXCIjQTVENkE3XCJcblx0XHRleHBvcnRzLmdyZWVuMzAwID0gXCIjODFDNzg0XCJcblx0XHRleHBvcnRzLmdyZWVuNDAwID0gXCIjNjZCQjZBXCJcblx0XHRleHBvcnRzLmdyZWVuNTAwID0gXCIjNENBRjUwXCJcblx0XHRleHBvcnRzLmdyZWVuNjAwID0gXCIjNDNBMDQ3XCJcblx0XHRleHBvcnRzLmdyZWVuNzAwID0gXCIjMzg4RTNDXCJcblx0XHRleHBvcnRzLmdyZWVuODAwID0gXCIjMkU3RDMyXCJcblx0XHRleHBvcnRzLmdyZWVuOTAwID0gXCIjMUI1RTIwXCJcblx0XHRleHBvcnRzLmdyZWVuQTEwMCA9IFwiI0I5RjZDQVwiXG5cdFx0ZXhwb3J0cy5ncmVlbkEyMDAgPSBcIiM2OUYwQUVcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BNDAwID0gXCIjMDBFNjc2XCJcblx0XHRleHBvcnRzLmdyZWVuQTcwMCA9IFwiIzAwQzg1M1wiXG4jbGlnaHQgZ3JlZW4tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4gPSBcIiM4QkMzNEFcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjUwID0gXCIjRjFGOEU5XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4xMDAgPSBcIiNEQ0VEQzhcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjIwMCA9IFwiI0M1RTFBNVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuMzAwID0gXCIjQUVENTgxXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW40MDAgPSBcIiM5Q0NDNjVcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjUwMCA9IFwiIzhCQzM0QVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNjAwID0gXCIjN0NCMzQyXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW43MDAgPSBcIiM2ODlGMzhcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjgwMCA9IFwiIzU1OEIyRlwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuOTAwID0gXCIjMzM2OTFFXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BMTAwID0gXCIjQ0NGRjkwXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BMjAwID0gXCIjQjJGRjU5XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BNDAwID0gXCIjNzZGRjAzXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BNzAwID0gXCIjNjRERDE3XCJcbiNsaW1lLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpbWUgPSBcIiNDRERDMzlcIlxuXHRcdGV4cG9ydHMubGltZTUwID0gXCIjRjlGQkU3XCJcblx0XHRleHBvcnRzLmxpbWUxMDAgPSBcIiNGMEY0QzNcIlxuXHRcdGV4cG9ydHMubGltZTIwMCA9IFwiI0U2RUU5Q1wiXG5cdFx0ZXhwb3J0cy5saW1lMzAwID0gXCIjRENFNzc1XCJcblx0XHRleHBvcnRzLmxpbWU0MDAgPSBcIiNENEUxNTdcIlxuXHRcdGV4cG9ydHMubGltZTUwMCA9IFwiI0NEREMzOVwiXG5cdFx0ZXhwb3J0cy5saW1lNjAwID0gXCIjQzBDQTMzXCJcblx0XHRleHBvcnRzLmxpbWU3MDAgPSBcIiNBRkI0MkJcIlxuXHRcdGV4cG9ydHMubGltZTgwMCA9IFwiIzlFOUQyNFwiXG5cdFx0ZXhwb3J0cy5saW1lOTAwID0gXCIjODI3NzE3XCJcblx0XHRleHBvcnRzLmxpbWVBMTAwID0gXCIjRjRGRjgxXCJcblx0XHRleHBvcnRzLmxpbWVBMjAwID0gXCIjRUVGRjQxXCJcblx0XHRleHBvcnRzLmxpbWVBNDAwID0gXCIjQzZGRjAwXCJcblx0XHRleHBvcnRzLmxpbWVBNzAwID0gXCIjQUVFQTAwXCJcbiN5ZWxsb3ctLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMueWVsbG93ID0gXCIjRkZFQjNCXCJcblx0XHRleHBvcnRzLnllbGxvdzUwID0gXCIjRkZGREU3XCJcblx0XHRleHBvcnRzLnllbGxvdzEwMCA9IFwiI0ZGRjlDNFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3cyMDAgPSBcIiNGRkY1OURcIlxuXHRcdGV4cG9ydHMueWVsbG93MzAwID0gXCIjRkZGMTc2XCJcblx0XHRleHBvcnRzLnllbGxvdzQwMCA9IFwiI0ZGRUU1OFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c1MDAgPSBcIiNGRkVCM0JcIlxuXHRcdGV4cG9ydHMueWVsbG93NjAwID0gXCIjRkREODM1XCJcblx0XHRleHBvcnRzLnllbGxvdzcwMCA9IFwiI0ZCQzAyRFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c4MDAgPSBcIiNGOUE4MjVcIlxuXHRcdGV4cG9ydHMueWVsbG93OTAwID0gXCIjRjU3RjE3XCJcblx0XHRleHBvcnRzLnllbGxvd0ExMDAgPSBcIiNGRkZGOERcIlxuXHRcdGV4cG9ydHMueWVsbG93QTIwMCA9IFwiI0ZGRkYwMFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3dBNDAwID0gXCIjRkZFQTAwXCJcblx0XHRleHBvcnRzLnllbGxvd0E3MDAgPSBcIiNGRkQ2MDBcIlxuI2FtYmVyLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5hbWJlciA9IFwiI0ZGQzEwN1wiXG5cdFx0ZXhwb3J0cy5hbWJlcjUwID0gXCIjRkZGOEUxXCJcblx0XHRleHBvcnRzLmFtYmVyMTAwID0gXCIjRkZFQ0IzXCJcblx0XHRleHBvcnRzLmFtYmVyMjAwID0gXCIjRkZFMDgyXCJcblx0XHRleHBvcnRzLmFtYmVyMzAwID0gXCIjRkZENTRGXCJcblx0XHRleHBvcnRzLmFtYmVyNDAwID0gXCIjRkZDQTI4XCJcblx0XHRleHBvcnRzLmFtYmVyNTAwID0gXCIjRkZDMTA3XCJcblx0XHRleHBvcnRzLmFtYmVyNjAwID0gXCIjRkZCMzAwXCJcblx0XHRleHBvcnRzLmFtYmVyNzAwID0gXCIjRkZBMDAwXCJcblx0XHRleHBvcnRzLmFtYmVyODAwID0gXCIjRkY4RjAwXCJcblx0XHRleHBvcnRzLmFtYmVyOTAwID0gXCIjRkY2RjAwXCJcblx0XHRleHBvcnRzLmFtYmVyQTEwMCA9IFwiI0ZGRTU3RlwiXG5cdFx0ZXhwb3J0cy5hbWJlckEyMDAgPSBcIiNGRkQ3NDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBNDAwID0gXCIjRkZDNDAwXCJcblx0XHRleHBvcnRzLmFtYmVyQTcwMCA9IFwiI0ZGQUIwMFwiXG4jb3JhbmdlLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5vcmFuZ2UgPSBcIiNGRjk4MDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlNTAgPSBcIiNGRkYzRTBcIlxuXHRcdGV4cG9ydHMub3JhbmdlMTAwID0gXCIjRkZFMEIyXCJcblx0XHRleHBvcnRzLm9yYW5nZTIwMCA9IFwiI0ZGQ0M4MFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2UzMDAgPSBcIiNGRkI3NERcIlxuXHRcdGV4cG9ydHMub3JhbmdlNDAwID0gXCIjRkZBNzI2XCJcblx0XHRleHBvcnRzLm9yYW5nZTUwMCA9IFwiI0ZGOTgwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U2MDAgPSBcIiNGQjhDMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlNzAwID0gXCIjRjU3QzAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTgwMCA9IFwiI0VGNkMwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U5MDAgPSBcIiNFNjUxMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTEwMCA9IFwiI0ZGRDE4MFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBMjAwID0gXCIjRkZBQjQwXCJcblx0XHRleHBvcnRzLm9yYW5nZUE0MDAgPSBcIiNGRjkxMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTcwMCA9IFwiI0ZGNkQwMFwiXG4jZGVlcCBvcmFuZ2UtLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlID0gXCIjRkY1NzIyXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U1MCA9IFwiI0ZCRTlFN1wiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlMTAwID0gXCIjRkZDQ0JDXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UyMDAgPSBcIiNGRkFCOTFcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTMwMCA9IFwiI0ZGOEE2NVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNDAwID0gXCIjRkY3MDQzXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U1MDAgPSBcIiNGRjU3MjJcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTYwMCA9IFwiI0Y0NTExRVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNzAwID0gXCIjRTY0QTE5XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U4MDAgPSBcIiNEODQzMTVcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTkwMCA9IFwiI0JGMzYwQ1wiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTEwMCA9IFwiI0ZGOUU4MFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTIwMCA9IFwiI0ZGNkU0MFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTQwMCA9IFwiI0ZGM0QwMFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTcwMCA9IFwiI0REMkMwMFwiXG4jYnJvd24tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5icm93biA9IFwiIzc5NTU0OFwiXG5cdFx0ZXhwb3J0cy5icm93bjUwID0gXCIjRUZFQkU5XCJcblx0XHRleHBvcnRzLmJyb3duMTAwID0gXCIjRDdDQ0M4XCJcblx0XHRleHBvcnRzLmJyb3duMjAwID0gXCIjQkNBQUE0XCJcblx0XHRleHBvcnRzLmJyb3duMzAwID0gXCIjQTE4ODdGXCJcblx0XHRleHBvcnRzLmJyb3duNDAwID0gXCIjOEQ2RTYzXCJcblx0XHRleHBvcnRzLmJyb3duNTAwID0gXCIjNzk1NTQ4XCJcblx0XHRleHBvcnRzLmJyb3duNjAwID0gXCIjNkQ0QzQxXCJcblx0XHRleHBvcnRzLmJyb3duNzAwID0gXCIjNUQ0MDM3XCJcblx0XHRleHBvcnRzLmJyb3duODAwID0gXCIjNEUzNDJFXCJcblx0XHRleHBvcnRzLmJyb3duOTAwID0gXCIjNEUzNDJFXCJcblx0XHRleHBvcnRzLmJyb3duQTEwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTIwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTQwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTcwMCA9IFwiXCJcbiNncmV5LS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmdyZXkgPSBcIiM5RTlFOUVcIlxuXHRcdGV4cG9ydHMuZ3JleTUwID0gXCIjRkFGQUZBXCJcblx0XHRleHBvcnRzLmdyZXkxMDAgPSBcIiNGNUY1RjVcIlxuXHRcdGV4cG9ydHMuZ3JleTIwMCA9IFwiI0VFRUVFRVwiXG5cdFx0ZXhwb3J0cy5ncmV5MzAwID0gXCIjRTBFMEUwXCJcblx0XHRleHBvcnRzLmdyZXk0MDAgPSBcIiNCREJEQkRcIlxuXHRcdGV4cG9ydHMuZ3JleTUwMCA9IFwiIzlFOUU5RVwiXG5cdFx0ZXhwb3J0cy5ncmV5NjAwID0gXCIjNzU3NTc1XCJcblx0XHRleHBvcnRzLmdyZXk3MDAgPSBcIiM2MTYxNjFcIlxuXHRcdGV4cG9ydHMuZ3JleTgwMCA9IFwiIzQyNDI0MlwiXG5cdFx0ZXhwb3J0cy5ncmV5OTAwID0gXCIjMjEyMTIxXCJcblx0XHRleHBvcnRzLmdyZXlBMTAwID0gXCJcIlxuXHRcdGV4cG9ydHMuZ3JleUEyMDAgPSBcIlwiXG5cdFx0ZXhwb3J0cy5ncmV5QTQwMCA9IFwiXCJcblx0XHRleHBvcnRzLmdyZXlBNzAwID0gXCJcIlxuI2JsdWUgZ3JleS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmx1ZUdyZXkgPSBcIiM2MDdEOEJcIlxuXHRcdGV4cG9ydHMuYmx1ZUdyZXk1MCA9IFwiI0VDRUZGMVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTEwMCA9IFwiI0NGRDhEQ1wiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTIwMCA9IFwiI0IwQkVDNVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTMwMCA9IFwiIzkwQTRBRVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTQwMCA9IFwiIzc4OTA5Q1wiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTUwMCA9IFwiIzYwN0Q4QlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTYwMCA9IFwiIzU0NkU3QVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTcwMCA9IFwiIzQ1NUE2NFwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTgwMCA9IFwiIzM3NDc0RlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTkwMCA9IFwiIzI2MzIzOFwiXG5cbiNibGFjayBhbmQgd2hpdGUtLS0tLS0tLS1cblx0XHRleHBvcnRzLmJsYWNrID0gXCIjMDAwXCJcblx0XHRleHBvcnRzLndoaXRlID0gXCIjZmZmXCJcblxuI2xhYmVscyAtIGxpZ2h0IC0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5saWdodFByaW1hcnkgPSBcInJnYmEoMCwwLDAsMC44NylcIlxuXHRcdGV4cG9ydHMubGlnaHRTZWNvbmRhcnkgPSBcInJnYmEoMCwwLDAsMC41NClcIlxuXHRcdGV4cG9ydHMubGlnaHREaXNhYmxlZCA9IFwicmdiYSgwLDAsMCwwLjM4KVwiXG5cbiNsYWJlbHMgLSBEYXJrIC0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5kYXJrUHJpbWFyeSA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0ZXhwb3J0cy5kYXJrU2Vjb25kYXJ5ID0gXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjcpXCJcblx0XHRleHBvcnRzLmRhcmtEaXNhYmxlZCA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcblxuI3VuaXZlcnNhbCBjb2xvciAtLS0tLS1cblx0XHRleHBvcnRzLnVuaXZlcnNhbCA9IFwiIzMzNjdDRFwiXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAyLiBGbGF0QnV0dG9uICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkZsYXRCdXR0b24gZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gRGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJGbGF0IEJ1dHRvblwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmRpc2FibGVkID89IGZhbHNlXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0QG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA2MDBcblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNFxuXG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0QGRpc2FibGVkX2xhYmVsQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjYpXCJcblxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IG51bGxcblx0XHRcdGhlaWdodDogNDhcblx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpIC8gMikgKyAxNiArIDE2XG5cdFx0XHRuYW1lOiBcIkZsYXQgYnV0dG9uXCJcblxuXG5cdFx0aWYgQG9wdGlvbnMud2lkdGggPCA4OFxuXHRcdFx0QG9wdGlvbnMud2lkdGggPSA4OFxuXG5cdFx0aWYgQG9wdGlvbnMuZGVuc2UgaXMgdHJ1ZVxuXHRcdFx0QG9wdGlvbnMud2lkdGggPSBAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDIpIC8gMikgKyAxNiArIDE2XG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzJcblx0XHRlbHNlXG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzZcblxuIy0tLS0tLSBob3ZlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBidHRuQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0b3BhY2l0eTogMC4xMlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdG5hbWU6IFwib3ZlcmxheVwiXG5cbiMtLS0tLS0tIHJpcHBsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAcmlwcGxlQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdG5hbWU6IFwicmlwcGxlIHBhcmVudFwiXG5cblxuXHRcdEByaXBwbGUgPSBuZXcgIExheWVyXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRzaXplOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRzY2FsZTogMC4zXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cbiMtLS0tLS0tIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0IDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdHRleHRUcmFuc2Zvcm06IFwiVXBwZXJjYXNlXCJcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5mb250V2VpZ2h0XG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAYnR0bkJHLnBhcmVudCA9IEBsYWJlbC5wYXJlbnQgPSBAcmlwcGxlQkcucGFyZW50ID0gQFxuXHRcdEBidHRuQkcueSA9IEFsaWduLmNlbnRlclxuXHRcdEByaXBwbGVCRy55ID0gQWxpZ24uY2VudGVyXG5cblx0XHRAcmlwcGxlQkcuY2xpcCA9IHRydWVcblxuXHRcdEByaXBwbGUucGFyZW50ID0gQHJpcHBsZUJHXG5cdFx0QHJpcHBsZS54ID0gQWxpZ24uY2VudGVyXG5cdFx0QHJpcHBsZS55ID1cdEFsaWduLmNlbnRlclxuXG5cdFx0QGxhYmVsLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlcigxKVxuXG5cdFx0aWYgQGRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUuZGVzdHJveSgpXG5cbiMtLS0tLS0tLSBFdmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QC5vbkNsaWNrIEBjbGlja2VkXG5cdFx0QC5vbk1vdXNlT3ZlciBASG92ZXJcblx0XHRALm9uTW91c2VPdXQgQEhvdmVyT2ZmXG5cdFx0QC5vbk1vdXNlRG93biBAbW91c2VEb3duXG5cdFx0QC5vbk1vdXNlVXAgQG1vdXNlVXBcblxuIy0tLS0tLS0tIGdldHRlcnMgJiBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdkaXNhYmxlZCcsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWRcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmRpc2FibGVkID0gdmFsdWVcblxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAZGlzYWJsZWRfbGFiZWxDb2xvclxuXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cblxuXG4jLS0tLS0tLS0tIEV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0SG92ZXI6ID0+XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2Vcblx0XHRcdEBidHRuQkcudmlzaWJsZSA9IHRydWVcblxuXHRIb3Zlck9mZjogPT5cblx0XHRAYnR0bkJHLnZpc2libGUgPSBmYWxzZVxuXG5cdG1vdXNlRG93bjogLT5cblx0XHRAYnR0bkJHLmJyaWdodG5lc3MgPSA4MFxuXHRtb3VzZVVwOiAtPlxuXHRcdEBidHRuQkcuYnJpZ2h0bmVzcyA9IDEwMFxuXG5cdGNsaWNrZWQ6IChldikgLT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLmRpcmVjdGlvblJpcHBsZSBpcyB0cnVlXG5cdFx0XHRcdFx0QHJpcHBsZS5taWRYID0gZXYub2Zmc2V0WFxuXHRcdFx0XHRcdEByaXBwbGUubWlkWSA9IGV2Lm9mZnNldFlcblx0XHRcdFx0XHRAcmlwcGxlLnNpemUgPSAoQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqIDguNSArIDE2ICsgMTYpICogMS41XG5cblx0XHRcdFx0QHJpcHBsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAcmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdEByaXBwbGUub3BhY2l0eSA9IDAuM1xuXG5cdFx0XHRcdHJpcHBsZUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0bGF5ZXI6XHRAcmlwcGxlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHNjYWxlOiAwLjhcblx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblxuXHRcdFx0XHRyaXBwbGVCICA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOlx0QHJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblxuXHRcdFx0XHRyaXBwbGVBLnN0YXJ0KClcblxuXHRcdFx0XHRyaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0cmlwcGxlQi5zdGFydCgpXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMy4gUmFpc2VkQnV0dG9uICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5SYWlzZWRCdXR0b24gZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gRGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJSYWlzZWQgYnV0dG9uXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuZGlzYWJsZWQgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHRAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA9IDQ4XG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNjAwXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTRcblxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIHRydWVcblx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRcdEBkaXNhYmxlZF9CRyA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjEyKVwiXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAZGlzYWJsZWRfQkcgPSBcInJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdFx0XHRAZGlzYWJsZWRfbGFiZWxDb2xvciA9IFwicmdiYSgwLDAsMCwwLjI2KVwiXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0Y29sb3I6IFwiXCJcblx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdG5hbWU6IFwiUmFpc2VkIGJ1dHRvblwiXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqICgoQG9wdGlvbnMuZm9udFNpemUgKyAzKSAvIDIpICsgMTYgKyAxNlxuXG5cdFx0aWYgQG9wdGlvbnMud2lkdGggPCA4OFxuXHRcdFx0QG9wdGlvbnMud2lkdGggPSA4OFxuXG5cdFx0aWYgQG9wdGlvbnMuZGVuc2UgaXMgdHJ1ZVxuXHRcdFx0QGJ1dHRvbkhlaWdodCA9IDMyXG5cdFx0ZWxzZVxuXHRcdFx0QGJ1dHRvbkhlaWdodCA9IDM2XG5cbiMtLS0tLS0tU2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAc2hhZG93ID0gbmV3IFNoYWRvd1xuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRuYW1lOiBcInNoYWRvd3NcIlxuXG5cblxuIy0tLS0tLS1ob3ZlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGJ0dG5CRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuIy0tLS0tLS1yaXBwbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAcmlwcGxlQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdG5hbWU6IFwicmlwcGxlIHBhcmVudFwiXG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblxuXG5cdFx0QHJpcHBsZSA9IG5ldyAgTGF5ZXJcblx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAlXCJcblx0XHRcdHNpemU6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRzY2FsZTowLjNcblx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuXHRcdEByaXBwbGVDb2xvciA9IEByaXBwbGUuYmFja2dyb3VuZENvbG9yXG5cbiMtLS0tLS0tbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0IDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdHRleHRUcmFuc2Zvcm06IFwiVXBwZXJjYXNlXCJcblx0XHRcdGNvbG9yOiBcIiNmZmZcIlxuXHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMuZm9udFdlaWdodFxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1xuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0tc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAbGFiZWwucGFyZW50ID0gQHJpcHBsZUJHLnBhcmVudCA9IEBzaGFkb3cucGFyZW50ID0gQGJ0dG5CRy5wYXJlbnQgPSAgIEBcblxuXHRcdEBzaGFkb3cueSA9IEBidHRuQkcueSA9IEByaXBwbGVCRy55ID0gQWxpZ24uY2VudGVyXG5cblx0XHRAcmlwcGxlLnBhcmVudCA9IEByaXBwbGVCR1xuXHRcdEByaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdEByaXBwbGUueSA9XHRBbGlnbi5jZW50ZXJcblxuXHRcdEBsYWJlbC54ID0gQWxpZ24uY2VudGVyXG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXIoMSlcblxuXHRcdGlmIEBkaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRAcmlwcGxlLmRlc3Ryb3koKVxuXG4jLS0tLS0tLS0tRXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRALm9uQ2xpY2sgQGNsaWNrZWRcblx0XHRALm9uTW91c2VPdmVyIEBIb3ZlclxuXHRcdEAub25Nb3VzZU91dCBASG92ZXJPZmZcblx0XHRALm9uTW91c2VEb3duIEBtb3VzZURvd25cblx0XHRALm9uTW91c2VVcCBAbW91c2VVcFxuXG4jLS0tLS0tLS0tZ2V0dGVycyAmIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdkaXNhYmxlZCcsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWRcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmRpc2FibGVkID0gdmFsdWVcblxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAZGlzYWJsZWRfbGFiZWxDb2xvclxuXHRcdFx0XHRAc2hhZG93LmJhY2tncm91bmRDb2xvciA9IEBkaXNhYmxlZF9CR1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc2hhZG93LmJhY2tncm91bmRDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gXCIjZmZmXCJcblxuIy0tLS0tLS0tLUV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRIb3ZlcjogPT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0QGJ0dG5CRy5vcGFjaXR5ID0gMC4xMlxuXHRcdFx0Zm9yIGl0ZW0gaW4gQHNoYWRvdy5hcnJheVxuXHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2ggXCJfOGRwXCJcblx0SG92ZXJPZmY6ID0+XG5cdFx0QGJ0dG5CRy5vcGFjaXR5ID0gMFxuXHRcdGZvciBpdGVtIGluIEBzaGFkb3cuYXJyYXlcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcIl8yZHBcIlxuXG5cdG1vdXNlRG93bjogLT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0QGJyaWdodG5lc3MgPSA4MFxuXHRcdFx0QGJ0dG5CRy5vcGFjaXR5ID0gMFxuXHRtb3VzZVVwOiAtPlxuXHRcdEBicmlnaHRuZXNzID0gMTAwXG5cblx0Y2xpY2tlZDogKGV2KSAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlIGlzIHRydWVcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFggPSBldi5vZmZzZXRYXG5cdFx0XHRcdFx0QHJpcHBsZS5taWRZID0gZXYub2Zmc2V0WVxuXHRcdFx0XHRcdEByaXBwbGUuc2l6ZSA9IChAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogOC41ICsgMTYgKyAxNikgKiAxLjVcblxuXHRcdFx0XHRAcmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdEByaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0QHJpcHBsZS5vcGFjaXR5ID0gMC4zXG5cblx0XHRcdFx0cmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdHJpcHBsZUIgID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0bGF5ZXI6XHRAcmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdHJpcHBsZUEuc3RhcnQoKVxuXG5cdFx0XHRcdHJpcHBsZUEub25BbmltYXRpb25FbmQgLT5cblx0XHRcdFx0XHRyaXBwbGVCLnN0YXJ0KClcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA0LiBGQUIgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkZBQiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gRGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0cGQgPSAyNFxuXHRcdGVsc2UgcGQgPSAxNlxuXG5cdFx0QG9wdGlvbnMubWluaSA/PSBmYWxzZVxuXG5cdFx0aWYgQG9wdGlvbnMubWluaSBpcyB0cnVlIG9yIFNjcmVlbi53aWR0aCA8IDQ2MFxuXHRcdFx0QG9wdGlvbnMud2lkdGggPz0gNDBcblx0XHRcdEBvcHRpb25zLmhlaWdodCA/PSA0MFxuXHRcdGVsc2Vcblx0XHRcdEBvcHRpb25zLndpZHRoID89IDU2XG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gNTZcblxuXHRcdEBvcHRpb25zLnggPz0gU2NyZWVuLndpZHRoIC0gKEBvcHRpb25zLndpZHRoICsgcGQpXG5cdFx0QG9wdGlvbnMueSA/PSBTY3JlZW4uaGVpZ2h0IC0gKEBvcHRpb25zLndpZHRoICsgcGQpXG5cblx0XHRAb3B0aW9ucy5ib3JkZXJSYWRpdXMgPSBcIjEwMCVcIlxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBvcHRpb25zLmljb24gPz0gXCJhZGRcIlxuXG4jLS0tLS0tIG92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvdmVybGF5ID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRib3JkZXJSYWRpdXM6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdG5hbWU6IFwib3ZlcmxheVwiXG5cbiMtLS0tLS0gc2hhZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAc2hhZG93ID0gbmV3IFNoYWRvd1xuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdG5hbWU6IFwic2hhZG93XCJcblxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfNmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cbiMtLS0tLS0gaWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGljb24gPSBuZXcgU3lzdGVtSWNvblxuXHRcdFx0d2lkdGg6IDI0XG5cdFx0XHRoZWlnaHQ6IDI0XG5cdFx0XHRpY29uOiBAb3B0aW9ucy5pY29uXG5cdFx0XHRjb2xvcjogXCIjZmZmXCJcblx0XHRcdG5hbWU6IFwiaWNvblwiXG5cbiMtLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAaWNvbi5wYXJlbnQgPSBAb3ZlcmxheS5wYXJlbnQgPSBAc2hhZG93LnBhcmVudCA9ICBAXG5cdFx0QGljb24uY2VudGVyKClcblxuIy0tLS0tLSBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRALm9uTW91c2VPdmVyIEBIb3ZlclxuXHRcdFx0QC5vbk1vdXNlT3V0IEBIb3Zlck9mZlxuXHRcdFx0QG9uTW91c2VEb3duIEBtb3VzZURvd25cblx0XHRcdEBvbk1vdXNlVXAgQG1vdXNlVXBcblx0XHRlbHNlXG5cdFx0XHRAb25UYXBTdGFydCBAbW91c2VEb3duXG5cdFx0XHRAb25UYXBFbmQgQG1vdXNlVXBcblxuIy0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0SG92ZXI6IC0+XG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoIFwiXzEyZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaCBcIl8xMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaCBcIl8xMmRwXCJcblxuXHRIb3Zlck9mZjogLT5cblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfNmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfNmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaCBcIl82ZHBcIlxuXG5cdG1vdXNlRG93bjogLT5cblx0XHRAb3ZlcmxheS52aXNpYmxlID0gdHJ1ZVxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMTJkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8xMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMTJkcFwiXG5cblx0bW91c2VVcDogLT5cblx0XHRAb3ZlcmxheS52aXNpYmxlID0gZmFsc2Vcblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXHRcdEBzaGFkb3cuYW1iaWVudC5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDUuIENoZWNrYm94ZXMgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkNoZWNrYm94ZXMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHR0aGVtZSA9IEBvcHRpb25zLnRoZW1lXG5cdFx0QG9wdGlvbnMubmFtZSA/PSBcImNoZWNrYm94ZXNcIlxuXG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBvcHRpb25zLnNjcmVlbkNvbG9yID89IFwiIzIxMjEyMVwiXG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMuc2NyZWVuQ29sb3IgPz0gXCIjZmZmXCJcblxuXHRcdCNsYWJlbCBjaG9pY2VzXG5cdFx0QG9wdGlvbnMuY2hvaWNlcyA/PSBbXCJhcHBsZXNcIiwgXCJiYW5hbmFzXCIsIFwiZ3JhcGVzXCJdXG5cblx0XHRAb3B0aW9ucy5jaGVja1kgPz0gLTVcblxuIy0tLS0tLSBjb2xvcnNcblx0XHRAdGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAdGhlbWVDb2xvclxuXG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfZGFya1xuXHRcdFx0QGJveENvbG9yID0gbGluZV9kYXJrXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QGJveENvbG9yID0gbGluZV9saWdodFxuXHRcdGJveENvbG9yID0gQGJveENvbG9yXG5cblx0XHQjdGV4dCBzdHlsaW5nXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiU2VsZWN0IGZydWl0XCJcblxuXHRcdCNEZWZhdWx0IHByb3BlcnRpZXNcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5jaG9pY2VzLmxlbmd0aCAqIDM2ICsgMzJcblx0XHRcdHdpZHRoIDogMTUwXG5cbiMtLS0tLS0gUXVlc3Rpb24gIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblxuXHRcdGNoZWNrWSA9IEBvcHRpb25zLmNoZWNrWVxuXG4jLS0tLS0tIHRpbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR0MSA9IDAuMlxuXHRcdHQyID0gMC4yXG5cbiMtLS0tLS0gbG9vcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRjaGVja3MgPSBbXVxuXG5cdFx0Zm9yIGkgaW4gWzAuLi5Ab3B0aW9ucy5jaG9pY2VzLmxlbmd0aF1cblxuIy0tLS0tLSBjaGVja2JveCBjb250YWluZXJcblx0XHRcdGNvbnQgPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OkBcblx0XHRcdFx0aGVpZ2h0OiA0MFxuXHRcdFx0XHR5OiBpICogNDAgKyAyNFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0eDogMTZcblx0XHRcdFx0bmFtZTogXCJjb250YWluZXJcIlxuXG4jLS0tLS0tIGJveCBzZXR0aW5nc1xuXHRcdFx0Ym94ID0gbmV3IExheWVyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdFx0c2l6ZSA6IDIwXG5cdFx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlckNvbG9yIDogQGJveENvbG9yXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRcdG5hbWU6IEBvcHRpb25zLmNob2ljZXNbaV1cblx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdG5hbWU6IEBvcHRpb25zLmNob2ljZXNbaV1cblxuXHRcdFx0Ym94LmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdFx0XHR0aW1lOiB0MVxuXG5cdFx0XHRib3guc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogQGJveENvbG9yXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAYm94Q29sb3JcblxuXHRcdFx0Ym94LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRib3guYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMuc2NyZWVuQ29sb3JcblxuIy0tLS0tLSBib3ggQ2lyY2xlIHNldHRpbmdzXG4jLS0tLS0tIFRoaXMgY3JlYXRlIHRoZSBjaXJjbGUgYW5pbWF0aW9uIHdpdGhpbiB0aGUgYm94XG5cdFx0XHRib3hDaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBib3hcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMCVcIlxuXHRcdFx0XHRzaXplOiAzMFxuXHRcdFx0XHRzY2FsZTogMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBzY3JlZW5Db2xvclxuXHRcdFx0XHR4OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyKDIpXG5cdFx0XHRcdG5hbWU6IFwib3ZlcmxheVwiXG5cblx0XHRcdGJveENpcmNsZS5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdFx0dGltZTogdDFcblxuXHRcdFx0Ym94Q2lyY2xlLnN0YXRlcyA9XG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdHNjYWxlOiAwXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnNjcmVlbkNvbG9yXG5cbiMtLS0tLS0gY2hlY2sgbWFzayBzZXR0aW5nc1xuIy0tLS0tLSBUaGlzIGNyZWF0ZSBkcmF3aW5nIGluIGVmZmVjdCBmb3IgdGhlIGNoZWNrXG5cdFx0XHRjaGVja01hc2sgPSBuZXcgTGF5ZXJcblx0XHRcdFx0d2lkdGg6IDBcblx0XHRcdFx0aGVpZ2h0OiAyMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBib3hcblx0XHRcdFx0eTogY2hlY2tZXG5cdFx0XHRcdHg6IDMuNVxuXHRcdFx0XHRwYXJlbnQ6IGJveFxuXHRcdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRcdG5hbWU6IFwiY2hlY2sgbWFza1wiXG5cblx0XHRcdGNoZWNrTWFzay5zdGF0ZXMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHdpZHRoOjIwXG5cdFx0XHRcdHRpbWU6IHQyXG5cblx0XHRcdGNoZWNrTWFzay5zdGF0ZXMuZGVzZWxlY3RlZCA9XG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0d2lkdGg6IDBcblx0XHRcdFx0dGltZTogMC4wMVxuXG5cdFx0XHRjaGVja01hc2suc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXG4jLS0tLS0tIGNoZWNrIHNldHRpbmdzXG5cdFx0XHRjaGVjayA9IG5ldyBMYXllclxuXHRcdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjEzcHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCAxMyAxMFwiPjxnIGlkPVwiQ29tcG9uZW50c1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cG9seWxpbmUgaWQ9XCJQYXRoLTJcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHBvaW50cz1cIjEgNS4yNSA0IDkgMTIgMS41XCI+PC9wb2x5bGluZT48L2c+PC9zdmc+J1xuXHRcdFx0XHR3aWR0aDogMjBcblx0XHRcdFx0aGVpZ2h0OiAyMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBjaGVja01hc2tcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdG5hbWU6IFwiY2hlY2tcIlxuXG5cdFx0XHRjaGVjay5zdHlsZSA9XG5cdFx0XHRcdGZvbnRTaXplOiBcIjE4cHhcIlxuXG4jLS0tLS0tIFJpcHBsZSBzZXR0aW5nc1xuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXG5cdFx0XHRcdHJpcHBsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRcdHNpemU6IDUwXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMHB4XCJcblx0XHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0XHR4OiAtMTVcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjNcblx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuXHRcdFx0XHRyaXBwbGUuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwibGlnaHRcIlxuXHRcdFx0XHRcdHJpcHBsZS5zdGF0ZXMuZGVzZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0XHRyaXBwbGUuc3RhdGVzLmRlc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXG4jLS0tLS0tIGNob2lzZSBsYWJsZXMgc2V0dGluZ3Ncblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR4OiAzMFxuXHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyKC0wLjUpXG5cdFx0XHRcdG5hbWU6IFwiY2hvaWNlIHJpcHBsZVwiXG5cbiMtLS0tLS0gcG9wdWxhdGluZyBjaGVja3MgYXJyYXlcblx0XHRcdGNoZWNrcy5wdXNoKGJveClcblxuIy0tLS0tLSBjcmVhdGluZyBuZXcgYXJyYXkgdG8gc2VlIHdoYXQgY2hlY2tzIGFyZSBzZWxlY3RlZFxuXHRcdFx0YW8gPSBAb3B0aW9uc1xuXHRcdFx0ZHAgPSBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlXG5cdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24gPSBbXVxuXG4jLS0tLS0tIGV2ZW50IG9uIENsaWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Y29udC5vbkNsaWNrIC0+XG5cbiMtLS0tLS0gZXZlbnQgc2V0dXBcblx0XHRcdFx0YW8uYWN0aXZlU2VsZWN0aW9uID0gW10gI2VtcHR5IGFycmF5XG5cblx0XHRcdFx0aWYgZHAgaXMgZmFsc2Vcblx0XHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2tNYXNrID0gIHRoaXMuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV1cblx0XHRcdFx0cEJveCA9IHRoaXMuY2hpbGRyZW5bMF1cblx0XHRcdFx0cEJveENpcmNsZSA9ICB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cbiMtLS0tLS0gYm94IGFuZCBjaGVjayBhbmltYXRpb25cblx0XHRcdFx0cEJveC5zdGF0ZUN5Y2xlKFwic2VsZWN0ZWRcIiwgXCJkZXNlbGVjdGVkXCIpXG5cdFx0XHRcdHBCb3hDaXJjbGUuc3RhdGVDeWNsZShcInNlbGVjdGVkXCIsIFwiZGVzZWxlY3RlZFwiKVxuXG5cdFx0XHRcdGlmIHBCb3guc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdFx0cFJpcHBsZS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRVdGlscy5kZWxheSB0MSwgLT5cblx0XHRcdFx0XHRcdHBDaGVja01hc2suc3RhdGVzLnN3aXRjaCBcInNlbGVjdGVkXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0XHRwUmlwcGxlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0cENoZWNrTWFzay5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cblx0XHRcdFx0IyBwb3B1bGF0ZXMgYXJyYXkgdG8gc2VlIHNlbGVjdGVkIGl0ZW1zXG5cdFx0XHRcdGZvciBib3ggaW4gY2hlY2tzXG5cdFx0XHRcdFx0aWYgYm94LnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJzZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24ucHVzaChib3gubmFtZSlcblxuIy0tLS0tXHRwUmlwcGxlIGFuaW1hdGlvblxuXHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdHBSaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRwUmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC40XG5cblx0XHRcdFx0XHRpZlx0cFJpcHBsZS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC44XG5cblx0XHRcdFx0XHRwdWxzYUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjpcdHBSaXBwbGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdHNjYWxlOiAwLjhcblx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdFx0XHRwUmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0bGF5ZXI6XHRwUmlwcGxlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblxuXHRcdFx0XHRcdFx0cHVsc2FBLnN0YXJ0KClcblxuXHRcdFx0XHRcdFx0cHVsc2FBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRwUmlwcGxlQi5zdGFydCgpXG5cbiMtLS0tLS0gZXZlbnQgaG92ZXJcblx0XHRcdGNvbnQub25Nb3VzZU92ZXIgLT5cblx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IHRoZW1lQ29sb3JcblxuXHRcdFx0Y29udC5vbk1vdXNlT3V0IC0+XG5cdFx0XHRcdGlmIHRoaXMuY2hpbGRyZW5bMF0uc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdHRoaXMuY2hpbGRyZW5bMF0uYm9yZGVyQ29sb3IgPSBib3hDb2xvclxuXG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdEBkZWZpbmUgJ3RoZW1lQ29sb3InLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2Nob2ljZXMnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmNob2ljZXNcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmNob2ljZXMgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2FjdGl2ZVNlbGVjdGlvbicsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDYuIFJhZGlvQnV0dG9ucyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5SYWRpb0J1dHRvbnMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXG5cdFx0I2xhYmVsIGNob2ljZXNcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlc1wiLCBcImJhbmFuYXNcIiwgXCJncmFwZXNcIl1cblxuIy0tLS0tLS0gY29sb3JzXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0XG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSAgXCJTZWxlY3QgZnJ1aXRcIlxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGggKiAzNiArIDMyXG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0bmFtZTogXCJSYWRpb0J1dHRvbnNcIlxuXG4jLS0tLS0tIFF1ZXN0aW9uIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gU3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblxuXHRcdGwgPSBAb3B0aW9ucy5jaG9pY2VzXG5cbiMtLS0tLS0gbG9vcCBhbmQgYXJyYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRjaGVja3MgPSBbXVxuXHRcdGNpcmNsZXMgPSBbXVxuXG5cdFx0Zm9yIGkgaW4gWzAuLi5Ab3B0aW9ucy5jaG9pY2VzLmxlbmd0aF1cblxuXHRcdFx0Y29udCA9IG5ldyBMYXllclxuXHRcdFx0XHRoZWlnaHQ6IDQwXG5cdFx0XHRcdHk6IDQwICogaSArIDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR4OiAxNlxuXG4jLS0tLS0tIGNpcmNsZVxuXG5cdFx0XHRjaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRzaXplIDogMjBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzIDogXCIxMDAlXCJcblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRuYW1lOiBcImNpcmNsZVwiXG5cblx0XHRcdGNpcmNsZS5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdFx0dGltZTogMC4wMDFcblxuXHRcdFx0Y2lyY2xlLnN0YXRlcyA9XG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZUNvbG9yXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IEBib3hDb2xvclxuXG5cdFx0XHRjaXJjbGVzLnB1c2goY2lyY2xlKVxuXHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblxuXHRcdFx0aWYgaSBpcyBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXG4jLS0tLS0tIGNoZWNrXG5cblx0XHRcdGNoZWNrID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiAxMFxuXHRcdFx0XHRoZWlnaHQ6IDEwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGNpcmNsZS5ib3JkZXJSYWRpdXNcblx0XHRcdFx0cGFyZW50OiBjaXJjbGVcblx0XHRcdFx0eDogNVxuXHRcdFx0XHR5OiA1XG5cdFx0XHRcdG5hbWU6IGlcblxuXHRcdFx0Y2hlY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRcdHRpbWU6IDAuMTdcblxuXHRcdFx0Y2hlY2suc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRzY2FsZTogMFxuXG5cdFx0XHRjaGVjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcImRlc2VsZWN0ZWRcIlxuXG5cdFx0XHRjaGVja3MucHVzaChjaGVjaylcblxuXHRcdFx0aWYgaSBpcyBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRcdFx0Y2hlY2suc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJzZWxlY3RlZFwiXG5cbiMtLS0tLS0gcmlwcGxlIHNldHRpbmdzXG5cblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2VcblxuXHRcdFx0XHRyaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRzaXplOiA1MFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDBweFwiXG5cdFx0XHRcdFx0cGFyZW50OiBjaXJjbGVcblx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0XHR4OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjEyXG5cdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cbiMtLS0tLS0gY2hvaWNlXG5cblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR4OiAzMFxuXHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0eTogLTAuNVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogXCJjaG9pY2UgbGFiZWxcIlxuXG4jLS0tLS0tIGhlbHBlclxuXG5cdFx0XHRoZWxwZXIgPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdGhlaWdodDogNVxuXHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0d2lkdGg6IGlcblx0XHRcdFx0bmFtZTogXCJoZWxwZXJcIlxuXG4jLS0tLS0tIGV2ZW50XG5cblx0XHRcdEBhY3RpdmVTZWxlY3Rpb24gPSBudWxsXG5cdFx0XHRiYiA9IEBhY3RpdmVTZWxlY3Rpb25cblx0XHRcdGRwID0gQG9wdGlvbnMuZGlzYWJsZVJpcHBsZVxuXHRcdFx0b2MgPSBAdGhlbWVDb2xvclxuXG5cdFx0XHRjb250Lm9uQ2xpY2sgLT5cblxuXHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblswXS5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2sgPSB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRcdHBDaXJjbGUgPSB0aGlzLmNoaWxkcmVuWzBdXG5cblx0XHRcdFx0Zm9yIGNoZWNrIGluIGNoZWNrc1xuXHRcdFx0XHRcdGlmIGNoZWNrLm5hbWUgaXMgcENoZWNrLm5hbWVcblx0XHRcdFx0XHRcdHBDaGVjay5zdGF0ZXMuc3dpdGNoIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGNoZWNrLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblx0XHRcdFx0Zm9yIGNpcmNsZSBpbiBjaXJjbGVzXG5cdFx0XHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblxuXHRcdFx0XHRwQ2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXG5cdFx0XHRcdGJiID0gdGhpcy5uYW1lXG5cbiMtLS0tLS0gcmlwcGxlIGFuaW1hdGlvblxuXG5cdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0cFJpcHBsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdHBSaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0XHRwUmlwcGxlLm9wYWNpdHkgPSAwLjJcblxuXHRcdFx0XHRcdGlmIHBSaXBwbGUuc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdHBSaXBwbGUub3BhY2l0eSA9IDAuM1xuXG5cdFx0XHRcdFx0UmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdFx0UmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdFx0UmlwcGxlQS5zdGFydCgpXG5cblx0XHRcdFx0XHRSaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRSaXBwbGVCLnN0YXJ0KClcblxuIy0tLS0tLSBldmVudCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0Y29udC5vbk1vdXNlT3ZlciAtPlxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuWzBdLmJvcmRlckNvbG9yID0gdGhlbWVDb2xvclxuXG5cdFx0XHRjb250Lm9uTW91c2VPdXQgLT5cblx0XHRcdFx0aWYgdGhpcy5jaGlsZHJlblswXS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IGJveENvbG9yXG5cblx0XHRcdEBvbkNsaWNrIC0+XG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvbiA9IGJiXG5cbiMtLS0tLS0gZ2V0dGVyIGFuZCBzZXR0ZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnYWN0aXZlU2VsZWN0aW9uJyxcblx0XHRnZXQ6IC0+IEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvblxuXHRcdHNldDogKHZhbHVlKSAtPiBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ3RoZW1lJyxcblx0XHRnZXQ6IC0+IEBvcHRpb25zLnRoZW1lXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBvcHRpb25zLnRoZW1lID0gdmFsdWVcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA3LiBTd2l0Y2ggICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5Td2l0Y2ggZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gQ3VzdG9tZSBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuYWN0aXZlT25TdGFydCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmFjdGl2ZSA/PSBmYWxzZVxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG4jLS0tLS0tIGNvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYkNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0cmFja0NvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYl9saWdodF9vZmYgPSBcIiNGQUZBRkFcIlxuXHRcdEB0aHVtYl9kYXJrX29mZiA9IFwiI2JkYmRiZFwiXG5cdFx0QHRyYWNrX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwwLjM4KVwiXG5cdFx0QHRyYWNrX2Rhcmtfb2ZmID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdEByaXBwbGVfZGFya19vZmYgPSBcInJnYmEoMjU1LDI1NSwyNTUsIDEpXCJcblx0XHRAcmlwcGxlX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwgMSlcIlxuXG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfZGFya1xuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2Rhcmtfb2ZmXG5cdFx0XHRAdHJhY2tPZmYgPSBAdHJhY2tfZGFya19vZmZcblx0XHRcdEByaXBwbGVPZmYgPSBAcmlwcGxlX2Rhcmtfb2ZmXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2xpZ2h0X29mZlxuXHRcdFx0QHRyYWNrT2ZmID0gQHRyYWNrX2xpZ2h0X29mZlxuXHRcdFx0QHJpcHBsZU9mZiA9IEByaXBwbGVfbGlnaHRfb2ZmXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiA0OFxuXHRcdFx0d2lkdGggOiAxNTBcblxuIy0tLS0tLSB0cmFjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEB0cmFjayA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDQwXG5cdFx0XHRoZWlnaHQ6IDE1XG5cdFx0XHRib3JkZXJSYWRpdXM6IDE1XG5cdFx0XHRuYW1lOiBcInRyYWNrXCJcblx0XHRAdHJhY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEB0cmFjay5zdGF0ZXMgPVxuXHRcdFx0b246XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdG9mZjpcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdHJhY2tPZmZcblx0XHRcdFx0b3BhY2l0eTogMC4zOFxuXG5cdFx0ZGVsZXRlIEB0cmFjay5zdGF0ZXMuZGVmYXVsdFxuXHRcdEB0cmFjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIm9mZlwiXG5cbiMtLS0tLS0gcmlwcGxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDUwXG5cdFx0XHRzY2FsZTogMVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiA1MFxuXHRcdFx0b3BhY2l0eTogMC4yXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cbiMtLS0tLS0gdGh1bWIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHRodW1iID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiAxOVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdG5hbWU6IFwidGh1bWJcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdGh1bWJPZmZcblx0XHRAdGh1bWIuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjNcblxuXHRcdEB0aHVtYi5zdGF0ZXMgPVxuXHRcdFx0b246XG5cdFx0XHRcdHg6IDIxXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0b2ZmOlxuXHRcdFx0XHR4OiAwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHRodW1iT2ZmXG5cblx0XHRkZWxldGUgQHRodW1iLnN0YXRlcy5kZWZhdWx0XG5cdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib2ZmXCJcblxuIy0tLS0tLSBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QHRyYWNrLnBhcmVudCA9IEBcblx0XHRAdHJhY2sueSA9IEFsaWduLmNlbnRlclxuXG5cdFx0QHRodW1iLnBhcmVudCA9IEBcblx0XHRAdGh1bWIueSA9IEFsaWduLmNlbnRlclxuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAbGFiZWwueCA9IDU1XG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXJcblxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUucGFyZW50ID0gQHRodW1iXG5cdFx0XHRAcmlwcGxlLnggPSAtIDE1XG5cdFx0XHRAcmlwcGxlLnkgPSAtIDE1XG5cdFx0XHRyaXBwbGUgPSBAcmlwcGxlXG5cbiMtLS0tLS0gc2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHRwYXJlbnQ6IEB0aHVtYlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdHdpZHRoOiBAdGh1bWIud2lkdGhcblx0XHRcdGhlaWdodDogQHRodW1iLndpZHRoXG5cdFx0XHRuYW1lOiBcInNoYWRvd1wiXG5cbiMtLS0tLS0gYWN0aXZlT25TdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIEBvcHRpb25zLmFjdGl2ZU9uU3RhcnQgaXMgdHJ1ZVxuXHRcdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QHRyYWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QGFjdGl2ZSA9IHRydWVcblxuIy0tLS0tLSByaXBwbGUgYW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cmlwcGxlQW5pID0gLT5cblxuXHRcdFx0cmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRyaXBwbGUuc2NhbGUgPSAwLjRcblxuXHRcdFx0cHVsc2FBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRsYXllcjogcmlwcGxlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdHJpcHBsZUIgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdGxheWVyOiByaXBwbGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0cHVsc2FBLnN0YXJ0KClcblxuXHRcdFx0cHVsc2FBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG4jLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN0YXRlID0gbnVsbFxuXG5cdFx0QG9uQ2xpY2sgLT5cblxuXHRcdFx0QHRyYWNrLnN0YXRlQ3ljbGUoKVxuXHRcdFx0QHRodW1iLnN0YXRlQ3ljbGUoKVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRcdGlmIEB0aHVtYi5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwib25cIlxuXHRcdFx0XHRcdEByaXBwbGUuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdEByaXBwbGUub3BhY2l0eSA9IDAuNFxuXHRcdFx0XHRcdHBvc1ggPSAyMFxuXHRcdFx0XHRcdHJpcHBsZUFuaSgpXG5cdFx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cG9zWCA9IDBcblx0XHRcdFx0XHRAcmlwcGxlLmJhY2tncm91bmRDb2xvciA9IEByaXBwbGVPZmZcblx0XHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjJcblx0XHRcdFx0XHRyaXBwbGVBbmkoKVxuXHRcdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IGZhbHNlXG5cblxuXHRcdFx0aWYgQHRodW1iLnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJvblwiXG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gZmFsc2VcblxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnYWN0aXZlJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHZhbHVlXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgOC4gVGV4dEZpZWxkICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIFRleHRGaWVsZCBleHRlbmRzIExheWVyXG5cblx0SU5QVVRfSElERV9QU1VFRE9fVUkgID0gXCJ7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgZGlzcGxheTogbm9uZTsgfVwiXG5cdElOUFVUX1NFTEVDVE9SX05VTUJFUiA9IFwiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIlxuXHRJTlBVVF9TRUxFQ1RPUl9TRUFSQ0ggPSBcImlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvblwiXG5cblx0RXZlbnRzLklucHV0ICAgPSBcIklucHV0RmllbGQuT25JbnB1dFwiXG5cdEV2ZW50cy5Gb2N1cyAgID0gXCJJbnB1dEZpZWxkLk9uRm9jdXNcIlxuXHRFdmVudHMuQmx1ciAgICA9IFwiSW5wdXRGaWVsZC5PbkJsdXJcIlxuXHRFdmVudHMuVmFsaWQgICA9IFwiSW5wdXRGaWVsZC5PblZhbGlkXCJcblx0RXZlbnRzLkludmFsaWQgPSBcIklucHV0RmllbGQuT25JbnZhbGlkXCJcblx0RXZlbnRzLk1hdGNoICAgPSBcIklucHV0RmllbGQuT25NYXRjaFwiXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QGlucHV0LnZhbHVlXG5cblx0XHRzZXQ6ICh2KSAtPlxuXHRcdFx0cmV0dXJuIHVubGVzcyB2XG5cdFx0XHRpZiBAaW5wdXRcblx0XHRcdFx0QGNoYW5nZUlucHV0VmFsdWUgdlxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlzTnVtYmVyID0gZmFsc2Vcblx0XHRAaXNTZWFyY2ggPSBmYWxzZVxuXG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJCYXNpYyB0ZXh0IGZpZWxkXCJcblxuXHRcdEBvcHRpb25zLmJvcmRlclJhZGl1cyAgICAgPSAwXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyA/PSBudWxsXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvciA9IFwiXCJcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlciA/PSAgXCJcIlxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0I2NvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQHRoZW1lQ29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0XHRAbGluZUNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIlxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDFcblx0XHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMCwwLDAsMC4wMSlcIlxuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9saWdodFxuXHRcdFx0QGxpbmVDb2xvciA9IFwicmdiYSgwLDAsMCwwLjQyKVwiXG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBcInJnYmEoMCwwLDAsMC44NylcIlxuXHRcdFx0QGxhYmVsRm9jdXNPcGFjaXR5ID0gMC44N1xuXHRcdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yICA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjAxKVwiXG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3JcblxuXG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKClcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2ICogMlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjQgKiAyXG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID0gXCIje0BvcHRpb25zLmxpbmVIZWlnaHR9cHhcIiBpZiBAb3B0aW9ucy5saW5lSGVpZ2h0P1xuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID0gNzBcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjRcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBcIiN7QG9wdGlvbnMubGluZUhlaWdodH1weFwiIGlmIEBvcHRpb25zLmxpbmVIZWlnaHQ/XG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPSA3MFxuXG5cdFx0QG9wdGlvbnMubGFiZWxTaXplID89MTZcblxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblxuXHRcdCN0ZXh0IGh0bWxcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiSGVscGVyIHRleHRcIlxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIkxhYmVsXCJcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0VmlzYmxlID89IGZhbHNlXG5cblx0XHQjRGVmYXVsdCBwcm9wZXJ0aWVzXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdHdpZHRoIDogMjAwXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGluZSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdG5hbWU6IFwibGluZVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBsaW5lQ29sb3JcblxuXHRcdEBsaW5lUmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdHdpZHRoOiAwXG5cdFx0XHRoZWlnaHQ6IDJcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMubGFiZWxTaXplXG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG5cdFx0QGhlbHBlclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImhlbHBlciBUZXh0XCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmhlbHBlclRleHRWaXNibGVcblxuXHRcdEBpbnB1dFBhcmVudCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiAyOFxuXHRcdFx0bmFtZTogXCJpbnB1dCBwYXJlbnRcIlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBoZWxwZXJUZXh0LnBhcmVudCA9IEBsaW5lLnBhcmVudCA9IEBpbnB1dFBhcmVudC5wYXJlbnQgPSAgQFxuXHRcdEBoZWxwZXJUZXh0LnkgPSA1MFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnkgPSAyMFxuXHRcdEBsaW5lUmlwcGxlLnBhcmVudCA9IEBsaW5lXG5cdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsaW5lLnkgPSA0NFxuXHRcdEBpbnB1dFBhcmVudC55ID0gMTBcblxuIy0tLS0tLS0gZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QG9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRAb25Nb3VzZU91dCBAaG92ZXJPZmZcblxuXHRcdEAub24gRXZlbnRzLkJsdXIsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3Jcblx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cblx0XHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHRcdHk6IDIwXG5cdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHR0aW1lOiAwLjJcblxuIy0tLS0tLSBBZGp1c3QgYSBmZXcgdGhpbmdzIGZvciB2YXJpb3VzIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cblx0XHRAaHRtbCArPSBzd2l0Y2hcblx0XHRcdHdoZW4gQGlzTnVtYmVyIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfTlVNQkVSfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0d2hlbiBAaXNTZWFyY2ggdGhlbiBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+I3tJTlBVVF9TRUxFQ1RPUl9TRUFSQ0h9I3tJTlBVVF9ISURFX1BTVUVET19VSX08L3N0eWxlPlwiXG5cdFx0XHRlbHNlIFwiXCJcblxuXHRcdGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3I/XG5cdFx0XHRAaHRtbCArPSBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOnBsYWNlaG9sZGVyLXNob3duIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH08L3N0eWxlPlwiXG5cbiMtLS0tLS0gY3JlYXRpbmcgJiBzdHlsaW5nIHRoZSBpbnB1dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXG5cdFx0QGlucHV0LnR5cGUgICAgICAgID0gQG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC52YWx1ZSAgICAgICA9IEBvcHRpb25zLnZhbHVlICAgICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMudmFsdWU/XG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXIgICAgICAgICAgICBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRAaW5wdXQucGF0dGVybiAgICAgPSBAb3B0aW9ucy5wYXR0ZXJuICAgICAgICAgICAgICAgIGlmIEBvcHRpb25zLnBhdHRlcm4/XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZShcIm1heExlbmd0aFwiLCBAb3B0aW9ucy5tYXhMZW5ndGgpIGlmIEBvcHRpb25zLm1heExlbmd0aD9cblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgKGlmIEBvcHRpb25zLmF1dG9DYXBpdGFsaXplIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsICAgKGlmIEBvcHRpb25zLmF1dG9Db21wbGV0ZSAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgICAgKGlmIEBvcHRpb25zLmF1dG9Db3JyZWN0ICAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblxuXHRcdEBpbnB1dFBhcmVudC5fZWxlbWVudC5hcHBlbmRDaGlsZCBAaW5wdXRcblxuXHRcdCMgU2V0dXAgVmFsdWVzXG5cdFx0QGlzRW1wdHkgICAgICAgICAgID0gIShAb3B0aW9ucy52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBAb3B0aW9ucy5jb2xvclxuXG5cdFx0IyBTZXR1cCBJbnB1dCBTdHlsZVxuXHRcdGlucHV0U3R5bGUgPVxuXHRcdFx0Zm9udDogXCIje0BvcHRpb25zLmZvbnRXZWlnaHR9ICN7QG9wdGlvbnMuZm9udFNpemV9cHgvI3tAb3B0aW9ucy5saW5lSGVpZ2h0fSAje0BvcHRpb25zLmZvbnRGYW1pbHl9XCJcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiXG5cdFx0XHR0ZXh0SW5kZW50OiBcIiN7QG9wdGlvbnMuaW5kZW50fXB4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRoZWlnaHQ6IFwiODBweFwiXG5cdFx0XHR3aWR0aDogIFwiMTAwJVwiXG5cdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdFx0cGFkZGluZzogXCIwXCJcblx0XHRcdFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZVwiXG5cblx0XHRAaW5wdXQuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIGlucHV0U3R5bGVcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAb3B0aW9ucy5jb2xvciBpZiBAb3B0aW9ucy5jb2xvcj9cblxuXG5cdFx0QGlucHV0Lm9uZm9jdXMgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXM/XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBlbWl0KEV2ZW50cy5Gb2N1cywgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QGlucHV0Lm9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQGlucHV0LnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRAaW5wdXQub25pbnB1dCA9ID0+XG5cdFx0XHRAaXNFbXB0eSA9ICEoIEBpbnB1dC52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dCwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QG9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4gQGlucHV0LmZvY3VzKClcblx0XHRAb24gXCJjaGFuZ2U6Y29sb3JcIiwgIC0+IEBjaGFuZ2VJbnB1dFRleHRDb2xvcigpXG5cblx0XHRAb24gXCJrZXlkb3duXCIsIChldmVudCkgLT5cblx0XHRcdGlmIGV2ZW50LmtleUNvZGUgaXMgMTNcblx0XHRcdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdFx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXG5cdFx0XHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjJcblxuIy0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGNsZWFyOiAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IFwiXCJcblx0XHRAaXNWYWxpZCA9IG51bGxcblx0XHRAaXNFbXB0eSA9IHRydWVcblxuXHRjaGFuZ2VJbnB1dFRleHRDb2xvcjogLT5cblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAY29sb3IudG9IZXhTdHJpbmcoKVxuXG5cdGNoYW5nZUlucHV0VmFsdWU6ICh2KSAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IHZcblx0XHRAaW5wdXQub25pbnB1dCgpXG5cblx0Y2xpY2tlZDogLT5cblx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0b3BhY2l0eTogQGxhYmVsRm9jdXNPcGFjaXR5XG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEBsaW5lLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGhlaWdodDogMlxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZVJpcHBsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0eDogMFxuXHRcdFx0dGltZTogMC4yXG5cblx0aG92ZXJPbjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAyXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVIb3ZlckNvbG9yXG5cblx0aG92ZXJPZmY6IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3JcblxuXG5cblxuXG5cblxuXG5cblxuY2xhc3MgZXhwb3J0cy5UZXh0RmllbGRfQmFzaWMgZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA5LiBUZXh0RmllbGRfVmFsaWRhdGlvbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuVGV4dEZpZWxkX1ZhbGlkYXRpb24gZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCMgTWFrZSBzdXJlIHdlIHNldCB0aGUgQ2hlY2tpbmcgRmxhZ1xuXHRcdEBzaG91bGRDaGVja1ZhbGlkaXR5ID0gdHJ1ZSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyBvciBAb3B0aW9ucy5tYXRjaD9cblxuXHRcdCMgRnJhbWVyIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMubmFtZSAgICAgICAgICAgICA/PSBcInBhc3N3b3JkIGZpZWxkXCJcblxuXHRcdEBvcHRpb25zLnR5cGUgPz0gXCJwYXNzd29yZFwiXG5cdFx0QG9wdGlvbnMucGF0dGVybiA/PSBcIig/PV4uezgsfSQpKCg/PS4qXFxkKXwoPz0uKlxcVyspKSg/IVsuXFxuXSkoPz0uKltBLVpdKSg/PS4qW2Etel0pLiokXCJcblx0XHRAb3B0aW9ucy5leWVWaXNpYmxlID89IHRydWVcblxuXHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cblx0XHQjdGV4dCBodG1sXG5cdFx0QG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcImhlbHBlclRleHRcIlxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIlBhc3N3b3JkXCJcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0VmlzaWJsZSA/PSBmYWxzZVxuXG5cdFx0I0RlZmF1bHQgcHJvcGVydGllc1xuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHR3aWR0aCA6IDIwMFxuXG5cdFx0aWYgQG9wdGlvbnMucGF0dGVybiBpcyBcIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcblx0XHRcdEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJVcHBlckNhc2UsIExvd2VyQ2FzZSBhbmQgTnVtYmVyXCJcblx0XHRlbHNlIGlmIEBvcHRpb25zLnBhdHRlcm4gaXMgXCIoPz1eLns4LH0kKSgoPz0uKlxcZCl8KD89LipcXFcrKSkoPyFbLlxcbl0pKD89LipbQS1aXSkoPz0uKlthLXpdKS4qJFwiXG5cdFx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiTXVzdCBjb250YWluIDggY2hhcmFjdGVycywgMSB1cHBlcmNhc2UsIDEgbG93ZXJjYXNlLCBhbmQgMSBudW1iZXIvc3BlY2lhbCBjaGFyYWN0ZXJcIlxuXHRcdGVsc2UgQG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcImhlbHBlclRleHRcIlxuXG4jLS0tLS0tLSBFbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBlcnJvclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEByZWRcblx0XHRcdG5hbWU6IFwiaGVscGVyIFRleHRcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2VcblxuXHRcdEBleWVDb250aWFuZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAyMlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5leWVWaXNpYmxlXG5cdFx0XHRuYW1lOiBcImV5ZUNvbnRpYW5lclwiXG5cblx0XHRAZXllT24gPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAxNlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJleWVPbmVcIlxuXHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCIwIDAgMjIgMTZcIiB2ZXJzaW9uPVwiMS4xXCI+PGcgY2xhc3M9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cGF0aCBkPVwiTTguOTEyMDU5MzgsNS44OTA3IEM5LjUwNjA1OTM4LDUuMjk3NyAxMC4yMDkwNTk0LDQuOTk5NyAxMS4wMjEwNTk0LDQuOTk5NyBDMTEuODM0MDU5NCw0Ljk5OTcgMTIuNTM3MDU5NCw1LjI5NzcgMTMuMTMxMDU5NCw1Ljg5MDcgQzEzLjcyNDA1OTQsNi40ODQ3IDE0LjAyMTA1OTQsNy4xODc3IDE0LjAyMTA1OTQsNy45OTk3IEMxNC4wMjEwNTk0LDguODEyNyAxMy43MjQwNTk0LDkuNTE1NyAxMy4xMzEwNTk0LDEwLjEwOTcgQzEyLjUzNzA1OTQsMTAuNzAyNyAxMS44MzQwNTk0LDEwLjk5OTcgMTEuMDIxMDU5NCwxMC45OTk3IEMxMC4yMDkwNTk0LDEwLjk5OTcgOS41MDYwNTkzOCwxMC43MDI3IDguOTEyMDU5MzgsMTAuMTA5NyBDOC4zMTgwNTkzOCw5LjUxNTcgOC4wMjEwNTkzOCw4LjgxMjcgOC4wMjEwNTkzOCw3Ljk5OTcgQzguMDIxMDU5MzgsNy4xODc3IDguMzE4MDU5MzgsNi40ODQ3IDguOTEyMDU5MzgsNS44OTA3IE03LjQ4MjA1OTM4LDExLjUzODcgQzguNDY3MDU5MzgsMTIuNTIzNyA5LjY0NjA1OTM4LDEzLjAxNTcgMTEuMDIxMDU5NCwxMy4wMTU3IEMxMi4zOTYwNTk0LDEzLjAxNTcgMTMuNTc2MDU5NCwxMi41MjM3IDE0LjU2MDA1OTQsMTEuNTM4NyBDMTUuNTQ1MDU5NCwxMC41NTQ3IDE2LjAzNzA1OTQsOS4zNzU3IDE2LjAzNzA1OTQsNy45OTk3IEMxNi4wMzcwNTk0LDYuNjI0NyAxNS41NDUwNTk0LDUuNDQ1NyAxNC41NjAwNTk0LDQuNDYwNyBDMTMuNTc2MDU5NCwzLjQ3NjcgMTIuMzk2MDU5NCwyLjk4NDcgMTEuMDIxMDU5NCwyLjk4NDcgQzkuNjQ2MDU5MzgsMi45ODQ3IDguNDY3MDU5MzgsMy40NzY3IDcuNDgyMDU5MzgsNC40NjA3IEM2LjQ5ODA1OTM4LDUuNDQ1NyA2LjAwNjA1OTM4LDYuNjI0NyA2LjAwNjA1OTM4LDcuOTk5NyBDNi4wMDYwNTkzOCw5LjM3NTcgNi40OTgwNTkzOCwxMC41NTQ3IDcuNDgyMDU5MzgsMTEuNTM4NyBNNC4zMTgwNTkzOCwyLjU2MjcgQzYuMzE4MDU5MzgsMS4xODc3IDguNTUzMDU5MzgsMC40OTk3IDExLjAyMTA1OTQsMC40OTk3IEMxMy40OTAwNTk0LDAuNDk5NyAxNS43MjQwNTk0LDEuMTg3NyAxNy43MjUwNTk0LDIuNTYyNyBDMTkuNzI1MDU5NCwzLjkzNzcgMjEuMTYyMDU5NCw1Ljc0OTcgMjIuMDM3MDU5NCw3Ljk5OTcgQzIxLjE2MjA1OTQsMTAuMjQ5NyAxOS43MjUwNTk0LDEyLjA2MjcgMTcuNzI1MDU5NCwxMy40Mzc3IEMxNS43MjQwNTk0LDE0LjgxMjcgMTMuNDkwMDU5NCwxNS40OTk3IDExLjAyMTA1OTQsMTUuNDk5NyBDOC41NTMwNTkzOCwxNS40OTk3IDYuMzE4MDU5MzgsMTQuODEyNyA0LjMxODA1OTM4LDEzLjQzNzcgQzIuMzE4MDU5MzgsMTIuMDYyNyAwLjg4MTA1OTM3NSwxMC4yNDk3IDAuMDA2MDU5Mzc1LDcuOTk5NyBDMC44ODEwNTkzNzUsNS43NDk3IDIuMzE4MDU5MzgsMy45Mzc3IDQuMzE4MDU5MzgsMi41NjI3XCIgaWQ9XCJGaWxsLTFcIiBmaWxsPVwiJyArIEBsYWJlbENvbG9yICsgJ1wiPjwvcGF0aD48L2c+PC9zdmc+J1xuXG5cdFx0QGV5ZU9mZiA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDIzXG5cdFx0XHRoZWlnaHQ6IDE5XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHZpc2libGU6IHRydWVcblx0XHRcdG5hbWU6IFwiZXllT2ZmXCJcblx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMjNweFwiIGhlaWdodD1cIjE5cHhcIiB2aWV3Qm94PVwiMCAwIDIzIDE5XCIgdmVyc2lvbj1cIjEuMVwiID48ZyBjbGFzcz1cIlBhZ2UtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0xMS4wMzMxNTk0LDYgTDExLjE3NDE1OTQsNiBDMTEuOTg2MTU5NCw2IDEyLjY4OTE1OTQsNi4yOTcgMTMuMjgzMTU5NCw2Ljg5MSBDMTMuODc3MTU5NCw3LjQ4NCAxNC4xNzQxNTk0LDguMTg4IDE0LjE3NDE1OTQsOSBMMTQuMTc0MTU5NCw5LjE4OCBMMTEuMDMzMTU5NCw2IFogTTExLjE3NDE1OTQsMy45ODQgQzEwLjU0OTE1OTQsMy45ODQgOS45MzkxNTkzNyw0LjEwOSA5LjM0NjE1OTM3LDQuMzU5IEw3LjE4OTE1OTM3LDIuMjAzIEM4LjQwODE1OTM3LDEuNzM0IDkuNzM2MTU5MzcsMS41IDExLjE3NDE1OTQsMS41IEMxMy42NDIxNTk0LDEuNSAxNS44NjkxNTk0LDIuMTg3IDE3Ljg1MzE1OTQsMy41NjIgQzE5LjgzODE1OTQsNC45MzggMjEuMjY3MTU5NCw2Ljc1IDIyLjE0MjE1OTQsOSBDMjEuMzkyMTU5NCwxMC44NDQgMjAuMjUyMTU5NCwxMi40MjIgMTguNzIwMTU5NCwxMy43MzQgTDE1LjgxNDE1OTQsMTAuODI4IEMxNi4wNjQxNTk0LDEwLjIzNSAxNi4xODkxNTk0LDkuNjI1IDE2LjE4OTE1OTQsOSBDMTYuMTg5MTU5NCw3LjYyNSAxNS42OTcxNTk0LDYuNDQ1IDE0LjcxMzE1OTQsNS40NjEgQzEzLjcyODE1OTQsNC40NzcgMTIuNTQ5MTU5NCwzLjk4NCAxMS4xNzQxNTk0LDMuOTg0IEwxMS4xNzQxNTk0LDMuOTg0IFogTTYuNzIxMTU5MzcsNi43OTcgQzYuMzQ2MTU5MzcsNy41NDcgNi4xNTgxNTkzNyw4LjI4MSA2LjE1ODE1OTM3LDkgQzYuMTU4MTU5MzcsMTAuMzc1IDYuNjUwMTU5MzcsMTEuNTU1IDcuNjM1MTU5MzcsMTIuNTM5IEM4LjYxOTE1OTM3LDEzLjUyMyA5Ljc5OTE1OTM3LDE0LjAxNiAxMS4xNzQxNTk0LDE0LjAxNiBDMTEuODkyMTU5NCwxNC4wMTYgMTIuNjI3MTU5NCwxMy44MjggMTMuMzc3MTU5NCwxMy40NTMgTDExLjgzMDE1OTQsMTEuOTA2IEMxMS41ODAxNTk0LDExLjk2OSAxMS4zNjExNTk0LDEyIDExLjE3NDE1OTQsMTIgQzEwLjM2MTE1OTQsMTIgOS42NTgxNTkzNywxMS43MDMgOS4wNjQxNTkzNywxMS4xMDkgQzguNDcwMTU5MzcsMTAuNTE2IDguMTc0MTU5MzcsOS44MTMgOC4xNzQxNTkzNyw5IEM4LjE3NDE1OTM3LDguODEzIDguMjA1MTU5MzcsOC41OTQgOC4yNjcxNTkzNyw4LjM0NCBMNi43MjExNTkzNyw2Ljc5NyBaIE0xLjE4OTE1OTM3LDEuMjY2IEwyLjQ1NTE1OTM3LDAgTDIwLjE3NDE1OTQsMTcuNzE5IEwxOC45MDgxNTk0LDE4Ljk4NCBDMTguNzUyMTU5NCwxOC44MjggMTguMjYwMTU5NCwxOC4zNDQgMTcuNDMxMTU5NCwxNy41MzEgQzE2LjYwMzE1OTQsMTYuNzE5IDE1Ljk3MDE1OTQsMTYuMDk0IDE1LjUzMzE1OTQsMTUuNjU2IEMxNC4xODkxNTk0LDE2LjIxOSAxMi43MzYxNTk0LDE2LjUgMTEuMTc0MTU5NCwxNi41IEM4LjcwNTE1OTM3LDE2LjUgNi40NzExNTkzNywxNS44MTMgNC40NzExNTkzNywxNC40MzggQzIuNDcwMTU5MzcsMTMuMDYyIDEuMDMzMTU5MzcsMTEuMjUgMC4xNTgxNTkzNzUsOSBDMC45MzkxNTkzNzUsNy4wNjIgMi4xODkxNTkzNyw1LjQwNyAzLjkwODE1OTM3LDQuMDMxIEMzLjUzMzE1OTM3LDMuNjU2IDMuMDEwMTU5MzcsMy4xMjUgMi4zMzgxNTkzNywyLjQzNyBDMS42NjYxNTkzNywxLjc1IDEuMjgzMTU5MzcsMS4zNTkgMS4xODkxNTkzNywxLjI2NiBMMS4xODkxNTkzNywxLjI2NiBaXCIgaWQ9XCJGaWxsLTNcIiBmaWxsPVwiJyArIEBsYWJlbENvbG9yICsgJ1wiPjwvcGF0aD48L2c+PC9zdmc+J1xuXG4jLS0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAZXllQ29udGlhbmVyLnBhcmVudCA9IEBcblx0XHRAZXllT24ucGFyZW50ID0gQGV5ZU9mZi5wYXJlbnQgPSBAZXllQ29udGlhbmVyXG5cdFx0QGV5ZUNvbnRpYW5lci54ID0gQC53aWR0aCAtIDIyXG5cdFx0QGV5ZUNvbnRpYW5lci55ID0gMTNcblx0XHRAZXllT24ueSA9IDBcblx0XHRAZXJyb3JUZXh0LnBhcmVudCA9IEBcblx0XHRAZXJyb3JUZXh0LnkgPSBAaGVscGVyVGV4dC55XG5cbiMtLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QG9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRAb25Nb3VzZU91dCBAaG92ZXJPZmZcblxuXHRcdGV5ZU9mZiA9IEBleWVPZmZcblx0XHRleWVPbiA9IEBleWVPblxuXG5cdFx0QGV5ZUNvbnRpYW5lci5vbkNsaWNrIC0+XG5cdFx0XHRpZiBleWVPZmYudmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRcdGV5ZU9mZi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0ZXllT24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0aW5wdXQudHlwZSA9IFwidGV4dFwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCJcblx0XHRcdFx0ZXllT2ZmLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGV5ZU9uLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0QC5vbiBFdmVudHMuQmx1ciwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblxuXHRcdFx0aWYgQC5pc0VtcHR5XG5cdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5sYWJlbFNpemVcblx0XHRcdFx0XHRcdHk6IDIwXG5cdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWVcblx0XHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0ZWxzZSBpZiBAaXNWYWxpZFxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWVcblx0XHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAcmVkXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEByZWRcblxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGVycm9yV29iYmxlMSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IDVcblx0XHRcdFx0XHR0aW1lOiAwLjA1XG5cdFx0XHRcdGVycm9yV29iYmxlMiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IC0gNVxuXHRcdFx0XHRcdHRpbWU6IDAuMDVcblx0XHRcdFx0ZXJyb3JXb2JibGU1ID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOiBAbGFiZWxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdHRpbWU6IDAuMDI1XG5cdFx0XHRcdGVycm9yV29iYmxlMS5zdGFydCgpXG5cdFx0XHRcdGVycm9yV29iYmxlMS5vbkFuaW1hdGlvbkVuZCAtPiBlcnJvcldvYmJsZTIuc3RhcnQoKVxuXHRcdFx0XHRlcnJvcldvYmJsZTIub25BbmltYXRpb25FbmQgLT4gZXJyb3JXb2JibGU1LnN0YXJ0KClcblx0XHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IGZhbHNlXG5cbiMtLS0tLS0gQWRqdXN0IGEgZmV3IHRoaW5ncyBmb3IgdmFyaW91cyB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlucHV0Lm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblxuXHRcdGlucHV0ID0gQGlucHV0XG5cblx0Y2hlY2tWYWxpZGl0eTogLT5cblx0XHRyZXR1cm4gdW5sZXNzIEBzaG91bGRDaGVja1ZhbGlkaXR5XG5cblx0XHRpZiBAb3B0aW9ucy5wYXR0ZXJuP1xuXHRcdFx0dmFsaWRpdHkgPSBAaW5wdXQuY2hlY2tWYWxpZGl0eSgpXG5cdFx0XHRAaXNFbXB0eSA9ICEoIEBpbnB1dC52YWx1ZT8ubGVuZ3RoID4gMClcblxuXHRcdFx0aWYgQGlzVmFsaWQgaXNudCB2YWxpZGl0eSBvciBAaXNFbXB0eVxuXHRcdFx0XHRpZiBAaXNFbXB0eSBvciAhdmFsaWRpdHlcblx0XHRcdFx0XHRAaXNWYWxpZCA9IGZhbHNlXG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLkludmFsaWQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBpc1ZhbGlkID0gdHJ1ZVxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WYWxpZCwgICBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRpZiBAY2hlY2tNYXRjaCgpXG5cdFx0XHRAaXNWYWxpZCA9IHRydWVcblx0XHRcdEBlbWl0KEV2ZW50cy5NYXRjaCwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdGNoZWNrTWF0Y2g6IC0+XG5cdFx0cmV0dXJuIGZhbHNlIHVubGVzcyBAb3B0aW9ucy5tYXRjaD9cblx0XHRpZiBBcnJheS5pc0FycmF5KEBvcHRpb25zLm1hdGNoKVxuXHRcdFx0Zm9yIG1hdGNoIGluIEBvcHRpb25zLm1hdGNoXG5cdFx0XHRcdHJldHVybiB0cnVlIGlmIEBpbnB1dC52YWx1ZS5pbmRleE9mKG1hdGNoKSA+IC0xXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgQGlucHV0LnZhbHVlLmluZGV4T2YoQG9wdGlvbnMubWF0Y2gpID4gLTFcblx0XHRyZXR1cm4gZmFsc2VcblxuIy0tLSBldmVudCBmdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRjbGlja2VkOiAtPlxuXHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdFx0eTogLSA2XG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEBsaW5lLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGhlaWdodDogMlxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZVJpcHBsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0eDogMFxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0QGxhYmVsLmNvbG9yID0gQHRoZW1lQ29sb3Jcblx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5oZWxwZXJUZXh0VmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXG5cdGhvdmVyT246IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMlxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDFcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cblx0ZXllQ2xpY2s6IC0+XG5cdFx0QGV5ZS5zdGF0ZUN5Y2xlKFwidmlzaWJsZVwiLCBcInZpc2libGVPZmZcIilcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEwLiBUZXh0QXJlYSAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlRleHRBcmVhIGV4dGVuZHMgTGF5ZXJcblxuXHRQQVRURVJOX05VTUJFUiA9IFwiWzAtOV0qXCJcblxuXHRJTlBVVF9ISURFX1BTVUVET19VSSAgPSBcInsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBkaXNwbGF5OiBub25lOyB9XCJcblx0SU5QVVRfU0VMRUNUT1JfTlVNQkVSID0gXCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXG5cdElOUFVUX1NFTEVDVE9SX1NFQVJDSCA9IFwiaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uXCJcblxuXHRFdmVudHMuSW5wdXQgICA9IFwiSW5wdXRGaWVsZC5PbklucHV0XCJcblx0RXZlbnRzLkZvY3VzICAgPSBcIklucHV0RmllbGQuT25Gb2N1c1wiXG5cdEV2ZW50cy5CbHVyICAgID0gXCJJbnB1dEZpZWxkLk9uQmx1clwiXG5cdEV2ZW50cy5WYWxpZCAgID0gXCJJbnB1dEZpZWxkLk9uVmFsaWRcIlxuXHRFdmVudHMuSW52YWxpZCA9IFwiSW5wdXRGaWVsZC5PbkludmFsaWRcIlxuXHRFdmVudHMuTWF0Y2ggICA9IFwiSW5wdXRGaWVsZC5Pbk1hdGNoXCJcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAdGV4dGFyZWEudmFsdWVcblxuXHRcdHNldDogKHYpIC0+XG5cdFx0XHRyZXR1cm4gdW5sZXNzIHZcblx0XHRcdGlmIEBpbnB1dFxuXHRcdFx0XHRAY2hhbmdlSW5wdXRWYWx1ZSB2XG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlzTnVtYmVyID0gZmFsc2Vcblx0XHRAaXNTZWFyY2ggPSBmYWxzZVxuXG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cblx0XHQjIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIENoZWNraW5nIEZsYWdcblx0XHRAc2hvdWxkQ2hlY2tWYWxpZGl0eSA9IHRydWUgaWYgQG9wdGlvbnMucGF0dGVybj8gb3IgQG9wdGlvbnMubWF0Y2g/XG5cblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJUZXh0IGFyZWFcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4wMSlcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA/PSAxODBcblxuXHRcdCMgQ3VzdG9tIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMudHlwZSAgICAgICAgICAgICA/PSBcInRleHRcIlxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgICAgICAgPz0gNDAwXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSAgICAgICA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5pbmRlbnQgICAgICAgICAgID89IDBcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzID89IG51bGxcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yID89IG51bGxcblx0XHRAb3B0aW9ucy53aWR0aCA/PSAzMDBcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiVHlwZSBzb21ldGhpbmcuLi5cIlxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0I2NvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBJbnB1dGxhYmVsX2Rhcmtcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfZGFya1xuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfZGFya1xuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDFcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2Rhcmtcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gXCIjZmZmXCJcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9ICBJbnB1dGxhYmVsX2xpZ2h0XG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2xpZ2h0XG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9saWdodFxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDAuODdcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5cblx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cblx0XHRpZiBVdGlscy5pc01vYmlsZSgpXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNiAqIDJcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0ICogMlxuXHRcdFx0QG9wdGlvbnMuc3R5bGUgPVxuXHRcdFx0XHRcInBhZGRpbmdcIiA6IFwiNTZweCAzMnB4IDMycHggMzJweFwiXG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTZcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0XG5cdFx0XHRAb3B0aW9ucy5zdHlsZSA9XG5cdFx0XHRcdFwicGFkZGluZ1wiIDogXCIyOHB4IDE2cHggMTZweCAxNnB4XCJcblxuXHRcdEBvcHRpb25zLmxhYmVsU2l6ZSA/PSAxNlxuXG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRAb3B0aW9ucy5saW1pdE9uID89IHRydWVcblxuXHRcdGlmIEBvcHRpb25zLmxpbWl0T24gaXMgZmFsc2Vcblx0XHRcdEBvcHRpb25zLmNoYXJhY3RlckxpbWl0ID0gMTAwMFxuXHRcdGVsc2UgQG9wdGlvbnMuY2hhcmFjdGVyTGltaXQgPz0gNTAwXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmxhYmVsU2l6ZVxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG5cdFx0QGxpbWl0ID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiBcIjAgLyBcIiArIEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHdpZHRoOiAxMDBcblx0XHRcdGhlaWdodDogMTJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRuYW1lOiBcImxpbWl0XCJcblx0XHRAbGltaXQuc3R5bGUgPVxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdGxpbmVIZWlnaHQ6IFwiMTJweFwiXG5cdFx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1xuXG5cdFx0QGVycm9yVGV4dCA9IG5ldyBMYWJlbFxuXHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRjb2xvcjogQHJlZFxuXHRcdFx0bmFtZTogXCJlcnJvciB0ZXh0XCJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHR0ZXh0OiBcIkV4ZWVkcyB0ZXh0IGxpbWl0LlwiXG5cblx0XHRAYm9yZGVyID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHRib3JkZXJDb2xvcjogQGxpbmVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRuYW1lOiBcImJvcmRlclwiXG5cbiMtLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAbGFiZWwucGFyZW50ID0gQGJvcmRlci5wYXJlbnQgPSBAXG5cdFx0QGxpbWl0LnBhcmVudCA9IEBcblx0XHRAZXJyb3JUZXh0LnBhcmVudCA9IEBcblx0XHRAbGFiZWwueSA9IDIwXG5cdFx0QGxhYmVsLnggPSAxNlxuXHRcdEBsaW1pdC54ID0gQHdpZHRoIC0gMTAwXG5cdFx0QGxpbWl0LnkgPSBAaGVpZ2h0ICsgOFxuXHRcdEBlcnJvclRleHQueSA9IEBoZWlnaHQgKyA4XG5cbiMtLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb25DbGljayBAY2xpY2tlZFxuXG5cdFx0QC5vbiBFdmVudHMuQmx1ciwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBibHVycmVkKClcblxuXHRcdEAub24gRXZlbnRzLkZvY3VzLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGZvY3VzKClcblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRALm9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRALm9uTW91c2VPdXQgQGhvdmVyT2ZmXG5cblx0XHRALm9uIEV2ZW50cy5JbnB1dCwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBsaW1pdC5odG1sID0gQHZhbHVlLmxlbmd0aCArIFwiIC8gXCIgKyBAb3B0aW9ucy5jaGFyYWN0ZXJMaW1pdFxuXHRcdFx0aWYgQHZhbHVlLmxlbmd0aCA+IEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QGxpbWl0LmNvbG9yID0gQHJlZFxuXHRcdFx0XHRAYm9yZGVyLmJvcmRlckNvbG9yID0gQHJlZFxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAcmVkXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdEBsaW1pdC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3JcblxuIy0tLS0tLS0gQWRqdXN0IGEgZmV3IHRoaW5ncyBmb3IgdmFyaW91cyB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3dpdGNoIEBvcHRpb25zLnR5cGVcblx0XHRcdHdoZW4gXCJzZWFyY2hcIiB0aGVuIEBpc1NlYXJjaCA9IHRydWVcblx0XHRcdHdoZW4gXCJudW1iZXJcIiB0aGVuIEBpc051bWJlciA9IHRydWVcblx0XHRcdHdoZW4gXCJudW1iZXJzLW9ubHlcIiwgXCJudW1iZXItb25seVwiXG5cdFx0XHRcdEBpc051bWJlciA9IHRydWVcblx0XHRcdFx0QG9wdGlvbnMudHlwZSAgICA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gXCJudW1iZXJcIiAgICAgICAgICBlbHNlIFwidGV4dFwiXG5cdFx0XHRcdEBvcHRpb25zLnBhdHRlcm4gPSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyB0aGVuIEBvcHRpb25zLnBhdHRlcm4gZWxzZSBQQVRURVJOX05VTUJFUlxuXG5cdFx0QGh0bWwgKz0gc3dpdGNoXG5cdFx0XHR3aGVuIEBpc051bWJlciB0aGVuIFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz4je0lOUFVUX1NFTEVDVE9SX05VTUJFUn0je0lOUFVUX0hJREVfUFNVRURPX1VJfTwvc3R5bGU+XCJcblx0XHRcdHdoZW4gQGlzU2VhcmNoIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfU0VBUkNIfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0ZWxzZSBcIlwiXG5cblx0XHRpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yP1xuXHRcdFx0QGh0bWwgKz0gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDpwbGFjZWhvbGRlci1zaG93biB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9PC9zdHlsZT5cIlxuXG4jLS0tLS0tLSBjcmVhdGUgaW5wdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcInRleHRhcmVhXCJcblxuXHRcdEB0ZXh0YXJlYS52YWx1ZSAgICAgICA9IEBvcHRpb25zLnZhbHVlICAgICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMudmFsdWU/XG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXIgICAgICAgICAgICBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRAdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwibWF4TGVuZ3RoXCIsIEBvcHRpb25zLm1heExlbmd0aCkgaWYgQG9wdGlvbnMubWF4TGVuZ3RoP1xuXHRcdEB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLCAoaWYgQG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgICAoaWYgQG9wdGlvbnMuYXV0b0NvbXBsZXRlICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCAgICAoaWYgQG9wdGlvbnMuYXV0b0NvcnJlY3QgICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXG5cdFx0QF9lbGVtZW50LmFwcGVuZENoaWxkIEB0ZXh0YXJlYVxuXG5cdFx0IyBTZXR1cCBWYWx1ZXNcblx0XHRAaXNFbXB0eSAgICAgICAgICAgPSAhKEBvcHRpb25zLnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdEBvcmlnaW5hbFRleHRDb2xvciA9IEBvcHRpb25zLmNvbG9yXG5cblx0XHQjIFNldHVwIElucHV0IFN0eWxlXG5cblx0XHRAX3RleHRBcmVhU3R5bGUgPVxuXHRcdFx0Zm9udFNpemU6IFwiI3tAb3B0aW9ucy5mb250U2l6ZX1weFwiXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIiN7QG9wdGlvbnMubGluZUhlaWdodH1weFwiXG5cdFx0XHRmb250V2VpZ2h0OiBcIiN7QG9wdGlvbnMuZm9udFdlaWdodH1cIlxuXHRcdFx0Zm9udEZhbWlseTogXCIje0BvcHRpb25zLmZvbnRGYW1pbHl9XCJcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiXG5cdFx0XHR0ZXh0SW5kZW50OiBcIiN7QG9wdGlvbnMuaW5kZW50fXB4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXG5cdFx0XHR3aWR0aDogIFwiMTAwJVwiXG5cdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCJcblx0XHRcdHJlc2l6ZTogXCJub25lXCJcblx0XHRcdFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZVwiXG5cblx0XHRAdGV4dGFyZWEuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIEBfdGV4dEFyZWFTdHlsZVxuXHRcdEB0ZXh0YXJlYS5zdHlsZS5jb2xvciA9IEBvcHRpb25zLmNvbG9yIGlmIEBvcHRpb25zLmNvbG9yP1xuXG5cdFx0QHRleHRhcmVhLm9uZm9jdXMgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXM/XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBlbWl0KEV2ZW50cy5Gb2N1cywgQHRleHRhcmVhLnZhbHVlLCBAKVxuXG5cdFx0QHRleHRhcmVhLm9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQHRleHRhcmVhLnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAdGV4dGFyZWEudmFsdWUsIEApXG5cblx0XHRAX3RleHRBcmVhU3R5bGVvbmJsdXIgID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0dW5sZXNzIEBpbnB1dC5wbGFjZWhvbGRlciBpcyBAb3B0aW9ucy5wbGFjZUhvbGRlciBvciAhQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyXG5cdFx0XHRAZW1pdChFdmVudHMuQmx1ciwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QHRleHRhcmVhLm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAdGV4dGFyZWEudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEB0ZXh0YXJlYS52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblxuXHRcdEBvbiBFdmVudHMuVG91Y2hFbmQsIC0+IEB0ZXh0YXJlYS5mb2N1cygpXG5cdFx0QG9uIFwiY2hhbmdlOmNvbG9yXCIsICAtPiBAY2hhbmdlSW5wdXRUZXh0Q29sb3IoKVxuXG5cdFx0I1VwZGF0ZSB0aGUgaGVpZ2h0IHdoZW5ldmVyIGFueXRoaW5nIGNoYW5nZXMuXG5cdFx0QHRleHRhcmVhLm9ua2V5ZG93biA9ID0+IEBfdXBkYXRlKClcblx0XHRAdGV4dGFyZWEub25rZXl1cCA9ID0+IEBfdXBkYXRlKClcblx0XHRAdGV4dGFyZWEuY2hhbmdlID0gPT4gQF91cGRhdGUoKVxuXHRfcmVzaXplUGFyZW50ID0gKGxheWVyLCBwYXJlbnRNaW5IZWlnaHQsIGJvdHRvbVBhZGRpbmcpIC0+XG5cdFx0IyBWYXJpYWJsZSBmb3IgcGFyZW50XG5cdFx0bGF5ZXJQYXJlbnQgPSBsYXllci5wYXJlbnRcblxuXHRcdCMgQXJyYXkgdG8gc3RvcmUgYWxsIGNoaWxkcmVuJ3MgbWF4WXNcblx0XHRhbGxDaGlsZHJlbk1heFlzID0gW11cblxuXHRcdCMgUHVzaCBlYWNoIG1heFkgdG8gYW4gYXJyYXlcblx0XHRmb3IgbWF4IGluIGxheWVyUGFyZW50LmNoaWxkcmVuXG5cdFx0XHRhbGxDaGlsZHJlbk1heFlzLnB1c2gobWF4Lm1heFkpXG5cblx0XHQjIEZpbmQgdGhlIGJvdHRvbS1tb3N0IG1heFkgdmFsdWVcblx0XHR0YWxsZXN0Q2hpbGRNYXhZID0gTWF0aC5tYXguYXBwbHkobnVsbCwgYWxsQ2hpbGRyZW5NYXhZcylcblxuXHRcdCMgU3RvcmUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGF0IGFuZCB0aGUgcGFyZW50IGxheWVyXG5cdFx0bGF5ZXJQYXJlbnQuaGVpZ2h0ID0gTWF0aC5tYXgodGFsbGVzdENoaWxkTWF4WSArIGJvdHRvbVBhZGRpbmcsIHBhcmVudE1pbkhlaWdodClcblxuXHRcdCMgVE9ETyAtIE1haW50YWluIHRoZSBib3R0b20gcGFkZGluZyBvZiB0aGUgcGFyZW50LlxuXG5cdCMgUmVmbG93IGFsbCB0aGUgc2libGluZ3MgdW5kZXIgdGhlIHRleHQgbGF5ZXJcblx0X3JlZmxvd1NpYmxpbmdzID0gKGxheWVyLCBsYXllck1heFkpIC0+XG5cdFx0bGF5ZXJMaXN0ID0gbGF5ZXIucGFyZW50LmNoaWxkcmVuXG5cdFx0Zm9yIGEgaW4gW2xheWVyTGlzdC5pbmRleE9mKGxheWVyKSsxLi4ubGF5ZXJMaXN0Lmxlbmd0aF1cblx0XHRcdHlEaWZmID0gbGF5ZXJMaXN0W2FdLnkgLSBsYXllck1heFlcblx0XHRcdGxheWVyTGlzdFthXS55ID0gbGF5ZXIubWF4WSArIHlEaWZmXG5cdFx0IyBUT0RPIC0gcmVkbyB0aGlzIHdpdGhvdXQgdGhlIGFzc3VtcHRpb24gdGhhdCBhbGwgc2libGluZ3MgYWZ0ZXIgdGhlIGxheWVyIGFyZSBiZWxvdyBpdC5cblxuXHQjIFVwZGF0ZSBoZWlnaHQgZnVuY3Rpb25cblx0X3VwZGF0ZTogPT5cblx0XHRzZXRUaW1lb3V0ID0+XG5cdFx0XHRsYXllck1heFkgPSBALm1heFlcblx0XHRcdCMgQWRkIGJhY2sgYW55IGxpbmUgYnJlYWtzIHRoYXQgdGhlIHZhbHVlIG1ldGhvZCBnZXRzIHJpZGUgb2Zcblx0XHRcdF90cnVlVmFsdWUgPSBAdGV4dGFyZWEudmFsdWUucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+Jm5ic3A7XCIpO1xuXG5cdFx0XHQjIElmIGl0J3MgZW1wdHksIG1ha2Ugc3VyZSB0aGVyZSdzIGEgbGV0dGVyIGluIHRoZXJlIHRvIGNhbGN1bGF0ZSAqc29tZXRoaW5nKlxuXHRcdFx0aWYgX3RydWVWYWx1ZS50cmltKCkgPT0gXCJcIiB0aGVuIF90cnVlVmFsdWUgPSBcImFcIlxuXG5cdFx0XHQjIENhbGN1bGF0ZSB0aGUgaGVpZ2h0ISEhXG5cdFx0XHRjYWxjSGVpZ2h0ID0gVXRpbHMucm91bmQoVXRpbHMudGV4dFNpemUoX3RydWVWYWx1ZSwgQF90ZXh0QXJlYVN0eWxlLCB7d2lkdGg6IEAud2lkdGh9KS5oZWlnaHQsIDApXG5cblx0XHRcdCMgU2V0IHRoZSBoZWlnaHQgdG8gZWl0aGVyIHRoZSBjYWxjdWxhdGVkIGhlaWdodCwgb3IgdGhlIG1pbkhlaWdodCwgd2hpY2hldmVyIGlzIGdyZWF0ZXIuXG5cdFx0XHRALmhlaWdodCA9IE1hdGgubWF4KGNhbGNIZWlnaHQsIEBvcHRpb25zLm1pbkhlaWdodClcblx0XHRcdGlmIEBvcHRpb25zLnJlZmxvd1NpYmxpbmdzID09IHRydWUgdGhlbiBfcmVmbG93U2libGluZ3MoQCwgbGF5ZXJNYXhZKVxuXHRcdFx0aWYgQG9wdGlvbnMucmVzaXplUGFyZW50ID09IHRydWUgdGhlbiBfcmVzaXplUGFyZW50KEAsIEBwYXJlbnRPZ0hlaWdodCwgQG9wdGlvbnMucGFyZW50Qm90dG9tUGFkZGluZylcblxuIy0tLS0tLS0gZXZlbnQgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRjaGVja1ZhbGlkaXR5OiAtPlxuXHRcdHJldHVybiB1bmxlc3MgQHNob3VsZENoZWNrVmFsaWRpdHlcblxuXHRjbGVhcjogLT5cblx0XHRAaW5wdXQudmFsdWUgPSBcIlwiXG5cdFx0QGlzVmFsaWQgPSBudWxsXG5cdFx0QGlzRW1wdHkgPSB0cnVlXG5cblx0Y2hhbmdlSW5wdXRUZXh0Q29sb3I6IC0+XG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gQGNvbG9yLnRvSGV4U3RyaW5nKClcblxuXHRjaGFuZ2VJbnB1dFZhbHVlOiAodikgLT5cblx0XHRAaW5wdXQudmFsdWUgPSB2XG5cdFx0QGlucHV0Lm9uaW5wdXQoKVxuXG5cdGNsaWNrZWQ6IC0+XG5cdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0XHR5OiA4XG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdHg6IDE2XG5cdFx0XHR0aW1lOiAwLjJcblx0XHRAYm9yZGVyLmJvcmRlckNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cblx0ZXJyb3I6IC0+XG5cdFx0QGJvcmRlckNvbG9yID0gQHJlZFxuXG5cdGZvY3VzOiAtPlxuXHRcdEBsYWJlbC5mb250U2l6ZSA9IDEyXG5cdFx0QGJvcmRlckNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cdFx0QGxhYmVsLmNvbG9yID0gQGxhYmVsQ29sb3JcblxuXHRob3Zlck9uOiAtPlxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cdFx0QG9wdGlvbnMuYm9yZGVyQ29sb3IgPSBAbGluZUhvdmVyQ29sb3JcblxuXHRob3Zlck9mZjogLT5cblx0XHRAYm9yZGVyLmJvcmRlcldpZHRoID0gMVxuXHRcdEBib3JkZXJDb2xvciA9IEBsaW5lQ29sb3JcblxuXHRibHVycmVkOiAodmFsdWUsIGxheWVyKVx0LT5cblx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAbGluZUNvbG9yXG5cblx0XHRpZiBALmlzRW1wdHlcblx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0Zm9udFNpemU6IDE2XG5cdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHR4OiAxNlxuXHRcdFx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAbGFiZWxDb2xvclxuXG5cdFx0aWYgQHZhbHVlLmxlbmd0aCA+IEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRAbGltaXQuY29sb3IgPSBAcmVkXG5cdFx0XHRAYm9yZGVyLmJvcmRlckNvbG9yID0gQHJlZFxuXHRcdFx0QGxhYmVsLmNvbG9yID0gQHJlZFxuXG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDFcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDExLiBUZXh0RmllbGRfRHJvcGRvd24gICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlRleHRGaWVsZF9Ecm9wZG93biBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAb3B0aW9ucy5zY3JlZW5Db2xvciA/PSBcIiMwMDBcIlxuXG5cdFx0QG9wdGlvbnMuY2hvaWNlcyA/PSBbXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImJsdWViZXJyeVwiLFwiY2FudGFsb3VwZVwiLCBcImNoZXJyeVwiLFwiY29jb251dFwiLCBcImZpZ1wiLCBcImdyYXBlXCIsXCJncmFwZWZydWl0XCIsXCJndWF2YVwiLCBcImtpd2lmcnVpdFwiLCBcImxlbW9uXCIsXCJsaW1lXCIsIFwibHljaGVlXCIsIFwibWFuZ29cIiwgXCJtZWxvblwiLCBcIm9yYW5nZVwiLFwicGFwYXlhXCIsIFwicGFzc2lvbmZydWl0XCIsIFwicGVhY2hcIiwgXCJwZWFyXCIsXCJwaW5lYXBwbGVcIiwgXCJwbHVtXCIsXCJwb21lZ3JhbmF0ZVwiLCBcInJhc3BiZXJyeVwiLCBcInN0cmF3YmVycnlcIiwgXCJ3YXRlcm1lbG9uXCJdXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiU2VsZWN0IGEgZnJ1aXRcIlxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdEBvcHRpb25zLnZpc2libGVJdGVtcyA/PSA0XG5cdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID89IG51bGxcblxuXHRcdCNjb2xvcnNcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0dGhlbWVDb2xvciA9IEB0aGVtZUNvbG9yXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9kYXJrXG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBsaW5lX2RhcmtfaG92ZXJcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfbGlnaHRcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBsaW5lX2xpZ2h0X2hvdmVyXG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2xpZ2h0XG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiA1MFxuXHRcdFx0Y29sb3I6IFwiI0U5MUU2M1wiXG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0bmFtZTogXCJEcm9wRG93blwiXG5cbiMtLS0tLS0gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cblx0XHRAcGxhY2VIb2xkZXIgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBpbnB1dENvbG9yXG5cdFx0XHR5OiAyMFxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gYXJyb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBhcnJvdyA9IG5ldyBMYXllclxuXHRcdFx0aHRtbDogJzxzdmcgdmVyc2lvbj1cIjEuMVwiPjxnIGNsYXNzPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cG9seWdvbiBmaWxsPVwiJyArIEBsaW5lQ29sb3IgKyAnXCIgcG9pbnRzPVwiMC42NjAxMzM4NzcgMCA5LjE3NDgyNzA2IDAgNC45MTc0ODA0NyA1XCI+PC9wb2x5Z29uPjwvZz48L3N2Zz4nXG5cdFx0XHRzaXplOiAyNFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRjb2xvcjogXCIjNTU1XCJcblx0XHRcdHdpZHRoOjEwXG5cdFx0XHRoZWlnaHQ6IDVcblx0XHRcdG5hbWU6XCJBcnJvd1wiXG5cbiMtLS0tLS0gbGluZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsaW5lID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0eTogNDlcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGxpbmVDb2xvclxuXHRcdFx0bmFtZTogXCJsaW5lXCJcblxuIy0tLS0tLSBjb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBjb250YWluZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdG5hbWU6IFwiY29udGFpbmVyXCJcblxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAY29udGFpbmVyLnN0YXRlcyA9XG5cdFx0XHRvcGVuOlxuXHRcdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdFx0eTogMFxuXHRcdFx0Y2xvc2VkOlxuXHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0eTogNTBcblx0XHRAY29udGFpbmVyLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiY2xvc2VkXCJcblx0XHRAY29udGFpbmVyLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjVcblxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QHBsYWNlSG9sZGVyLnBhcmVudCA9IEBcblx0XHRAY29udGFpbmVyLnBhcmVudCA9IEBhcnJvdy5wYXJlbnQgPSBAbGluZS5wYXJlbnQgPSAgQFxuXG5cdFx0QGFycm93LnkgPSBBbGlnbi5jZW50ZXIoMilcblx0XHRAYXJyb3cueCA9IEBvcHRpb25zLndpZHRoIC0gMjRcblx0XHRAY29udGFpbmVyLnkgPSA1MFxuXG5cdFx0cGxhY2VIb2xkZXIgPSBAcGxhY2VIb2xkZXJcblx0XHRsYWJlbCA9IEBsYWJlbFxuXHRcdGNvbnRhaW5lciA9IEBjb250YWluZXJcblx0XHRhY3RpdmVTZWxlY3Rpb24gPSBAYWN0aXZlU2VsZWN0aW9uXG5cdFx0bGFiZWxDb2xvciA9IEBsYWJlbENvbG9yXG5cbiMtLS0tLS0gc2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAY29udGFpbmVyLmJvcmRlclJhZGl1c1xuXHRcdFx0eTogMFxuXHRcdFx0bmFtZTogXCJzaGFkb3dzXCJcblxuXHRcdGZvciBpdGVtIGluIHNoYWRvdy5hcnJheVxuXHRcdFx0aXRlbS5zdGF0ZXMub3BlbiA9XG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHRpdGVtLnN0YXRlcy5jbG9zZWQgPVxuXHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0eTogNTBcblxuXHRcdFx0aXRlbS5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC41XG5cblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJjbG9zZWRcIlxuXG4jLS0tLS0tIHNjcm9sbCBhcmVhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0Y29udGFpbmVyX1Njcm9sbEFyZWEgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG5cdFx0XHRwYXJlbnQ6IEBjb250YWluZXJcblx0XHRcdHdpZHRoOiBAY29udGFpbmVyLndpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0bmFtZTogXCJzY3JvbGxBcmVhXCJcblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50LmRyYWdnYWJsZS5vdmVyZHJhZyA9IGZhbHNlXG5cdFx0Y29udGFpbmVyX1Njcm9sbEFyZWEuY29udGVudC5kcmFnZ2FibGUuYm91bmNlID0gZmFsc2Vcblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5tb3VzZVdoZWVsRW5hYmxlZCA9IHRydWVcblxuIy0tLS0tLSBzbGlkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzbGlkZXIgPSBuZXcgU2xpZGVyQ29tcG9uZW50XG5cdFx0XHR3aWR0aDogNVxuXHRcdFx0aGVpZ2h0OiBjb250YWluZXJfU2Nyb2xsQXJlYS5oZWlnaHQgLSAzMFxuXHRcdFx0eTogMTVcblx0XHRcdGJvcmRlclJhZGl1czogMFxuXHRcdFx0cGFyZW50OiBjb250YWluZXJfU2Nyb2xsQXJlYVxuXHRcdFx0eDogY29udGFpbmVyX1Njcm9sbEFyZWEud2lkdGggLSA1XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdG1pbjogMFxuXHRcdFx0bWF4OiAoQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGggKiA1MCkgLSAyMDBcblx0XHRcdHZhbHVlOiAtMTVcblx0XHRcdG5hbWU6IHNsaWRlclxuXHRcdHNsaWRlci5maWxsLmJhY2tncm91bmRDb2xvciA9IFwiXCJcblxuXHRcdHNsaWRlci5rbm9iLmJhY2tncm91bmRDb2xvciA9IFwiQkRCREJEXCJcblx0XHRzbGlkZXIua25vYi5zaGFkb3dZID0gMFxuXHRcdHNsaWRlci5rbm9iLnNoYWRvd1NwcmVhZCA9IDBcblx0XHRzbGlkZXIua25vYi5zaGFkb3dCbHVyID0gMFxuXHRcdHNsaWRlci5rbm9iLmJvcmRlclJhZGl1cyA9IDFcblx0XHRzbGlkZXIua25vYi53aWR0aCA9IDVcblx0XHRzbGlkZXIua25vYi5oZWlnaHQgPSAzMFxuXG5cdFx0c2xpZGVyLm9uIFwiY2hhbmdlOnZhbHVlXCIsIC0+XG5cdFx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50LnkgPSAtIHRoaXMudmFsdWVcblxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLm9uTW92ZSAtPlxuXHRcdFx0c2xpZGVyLnZhbHVlID0gY29udGFpbmVyX1Njcm9sbEFyZWEuc2Nyb2xsWVxuXG4jLS0tLS0tIGNob2ljZSBsb29wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0YXMgPSBudWxsXG5cblx0XHRmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmNob2ljZXMubGVuZ3RoXVxuXHRcdFx0Y2hvaWNlID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogY29udGFpbmVyX1Njcm9sbEFyZWEuY29udGVudFxuXHRcdFx0XHR3aWR0aDogY29udGFpbmVyX1Njcm9sbEFyZWEud2lkdGhcblx0XHRcdFx0aGVpZ2h0OiA1MFxuXHRcdFx0XHR5OiA1MCAqIGkgKyAxMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0bmFtZTogXCJjaG9pY2VcIlxuXG5cdFx0XHRjaG9pY2VfbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHRwYXJlbnQ6IGNob2ljZVxuXHRcdFx0XHR4OiAyMFxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXSArIFwibGFiZWxcIlxuXHRcdFx0XHRjb2xvcjogbGFiZWxfbGlnaHRcblxuXHRcdFx0Y2hvaWNlLm9uTW91c2VPdmVyIC0+XG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gXCIjZWVlXCJcblxuXHRcdFx0Y2hvaWNlLm9uTW91c2VPdXQgLT5cblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIlxuXG5cdFx0XHRjaG9pY2Uub25DbGljayAtPlxuXHRcdFx0XHRhcyA9IHRoaXMuY2hpbGRyZW5bMF0udGV4dFxuXHRcdFx0XHRwbGFjZUhvbGRlci50ZXh0ID0gdGhpcy5jaGlsZHJlblswXS50ZXh0XG5cdFx0XHRcdHBsYWNlSG9sZGVyLmNvbG9yID0gbGFiZWxDb2xvclxuXHRcdFx0XHRjb250YWluZXIuc3RhdGVzLnN3aXRjaCBcImNsb3NlZFwiXG5cdFx0XHRcdGxhYmVsLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGZvciBpdGVtIGluIHNoYWRvdy5hcnJheVxuXHRcdFx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcImNsb3NlZFwiXG5cblx0XHRjb250YWluZXIgPSBAY29udGFpbmVyXG5cbiMtLS0tLS0gZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG9uQ2xpY2sgLT5cblx0XHRcdGZvciBpdGVtIGluIHNoYWRvdy5hcnJheVxuXHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2ggXCJvcGVuXCJcblx0XHRcdGNvbnRhaW5lci5zdGF0ZXMuc3dpdGNoIFwib3BlblwiXG5cdFx0XHRAYWN0aXZlU2VsZWN0aW9uID0gYXNcblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRAb25Nb3VzZU92ZXIgQGhvdmVyT25cblx0XHRcdEBvbk1vdXNlT3V0IEBob3Zlck9mZlxuXG4jLS0tLS0tZXZlbnQgZnVuY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0aG92ZXJPbjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAyXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVIb3ZlckNvbG9yXG5cblx0aG92ZXJPZmY6IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3JcblxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnY29sb3InLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmNvbG9yXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IHZhbHVlXG5cblx0QGRlZmluZSAnY2hvaWNlcycsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuY2hvaWNlc1xuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0XHRAb3B0aW9ucy5jaG9pY2VzID0gdmFsdWVcblxuXHRAZGVmaW5lICdhY3RpdmVTZWxlY3Rpb24nLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvblxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID0gdmFsdWVcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAxMi4gQXBwQmFyICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5BcHBCYXIgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiRm9ybVwiXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMjJcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDUwMFxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMubGFiZWxDb2xvciA9IFwiI2ZmZlwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QG9wdGlvbnMubW9iaWxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMubWVudUljb25WaXNibGUgPz0gdHJ1ZVxuXHRcdEBvcHRpb25zLm5hbWUgPz0gXCJhcHAgYmFyXCJcblx0XHRAb3B0aW9ucy5zdGF0dXNJY29uc1kgPz0gQWxpZ24uY2VudGVyKC04KVxuXHRcdEBvcHRpb25zLm1lbnVJY29uWSA/PSBBbGlnbi5jZW50ZXIoKVxuXG4jLS0tLS0tIGVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBhcHBDb250ID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6IDU2XG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0bmFtZTogXCJhcHAgYmFyIGNvbnRpYW5lclwiXG5cblx0XHRpZiBVdGlscy5pc01vYmlsZSgpIG9yIEBvcHRpb25zLm1vYmlsZSBpcyB0cnVlXG5cdFx0XHRAc3RhdHVzQmFyID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6IDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMzApXCJcblx0XHRcdFx0bmFtZTogXCJzdGF0dXMgYmFyXCJcblx0XHRcdEBvcHRpb25zLmhlaWdodCA/PSA4MFxuXHRcdFx0QGFwcENvbnQueSA9IDI0XG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDU2XG5cblx0XHRAbWVudUljb24gPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDQ4XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLm1lbnVJY29uVmlzYmxlXG5cdFx0XHRuYW1lOiBcIm1lbnUgaWNvblwiXG5cblx0XHRAdGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmxhYmVsQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLmZvbnRXZWlnaHRcblx0XHRcdG5hbWU6IFwidGl0bGVcIlxuXG4jLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdG5hbWU6IFwic2hhZG93c1wiXG5cblx0XHRzaGFkb3cucGFyZW50ICA9IEBcblx0XHRAdGl0bGUucGFyZW50ID0gQFxuXHRcdEB0aXRsZS55ID0gQWxpZ24uY2VudGVyKClcblx0XHRAdGl0bGUueCA9IDE2XG5cdFx0QGFwcENvbnQucGFyZW50ID0gQFxuXHRcdEBtZW51SWNvbi5wYXJlbnQgPSBAdGl0bGUucGFyZW50ID0gQGFwcENvbnRcblx0XHRAbWVudUljb24ueCA9IDE2XG5cdFx0QG1lbnVJY29uLnkgPSBAb3B0aW9ucy5tZW51SWNvbllcblxuXHRcdGlmICBAbWVudUljb24udmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRAdGl0bGUueCA9IDQ4ICsgMTYgKyAxNlxuXG4jLS0tLS0tIG1lbnUgaWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXHRcdG1lbnVJY29uID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgMCAxOCAxMlwiPjxnIGNsYXNzPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTAsMiBMMTgsMiBMMTgsMCBMMCwwIEwwLDIgWiBNMCw2Ljk3IEwxOCw2Ljk3IEwxOCw1IEwwLDUgTDAsNi45NyBaIE0wLDEyIEwxOCwxMiBMMTgsMTAgTDAsMTAgTDAsMTIgWlwiIGZpbGw9XCIjZmZmXCI+PC9wYXRoPjwvZz48L3N2Zz4nXG5cdFx0XHR3aWR0aDogMThcblx0XHRcdGhlaWdodDogMTJcblx0XHRcdHBhcmVudDogQG1lbnVJY29uXG5cdFx0XHR4OiBBbGlnbi5jZW50ZXIoKVxuXHRcdFx0eTogQWxpZ24uY2VudGVyKClcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0bmFtZTogXCJpY29uXCJcblxuIy0tLS0tLSBzdGF0dXMgYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKCkgb3IgQG9wdGlvbnMubW9iaWxlIGlzIHRydWVcblx0XHRcdEBzdGF0dXNCYXIucGFyZW50ID0gQFxuXHRcdFx0QHRpdGxlLnkgPSAgQWxpZ24uY2VudGVyKDEwKVxuXG5cdFx0XHRzdGF0dXNCYXJUaW1lID0gbmV3IFRleHRMYXllclxuXHRcdFx0XHRmb250U2l6ZTogMTNcblx0XHRcdFx0cGFyZW50OiBAc3RhdHVzQmFyXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHR4OiBAd2lkdGggLSA1NVxuXHRcdFx0XHRjb2xvciA6IFwiI2ZmZlwiXG5cdFx0XHRcdGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdFx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRcdFx0XHRuYW1lOiBcInN0YXR1cyBiYXIgdGltZVwiXG5cblx0XHRcdHNldFRpbWUgPSAoKSAtPlxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGVcblx0XHRcdFx0bWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcblx0XHRcdFx0aG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuXG5cdFx0XHRcdHpvbmUgPSBcIkFNXCJcblxuXHRcdFx0XHRpZiBob3VyIDwgMTBcblx0XHRcdFx0XHRob3VyID0gJzAnICsgaG91clxuXG5cdFx0XHRcdGlmIGhvdXIgPiAxMlxuXHRcdFx0XHRcdGhvdXIgPSBob3VyIC0gMTJcblx0XHRcdFx0XHR6b25lID0gXCJQTVwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR6b25lID0gXCJBTVwiXG5cblx0XHRcdFx0aWYgbWludXRlIDwgMTBcblx0XHRcdFx0XHRtaW51dGUgPSAnMCcgKyBtaW51dGVcblxuXHRcdFx0XHRzdGF0dXNCYXJUaW1lLnRleHQgPSBcIiN7aG91cn06I3ttaW51dGV9ICN7em9uZX1cIlxuXG5cdFx0XHRcdFV0aWxzLmRlbGF5IDMwLCAtPlxuXHRcdFx0XHRcdHNldFRpbWUoKVxuXG5cdFx0XHRzZXRUaW1lKClcblxuXHRcdFx0c3RhdHVzSWNvbnMgPSBuZXcgTGF5ZXJcblx0XHRcdFx0bmFtZTogXCJzdGF0dXMgaWNvbnNcIlxuXHRcdFx0XHRwYXJlbnQ6IEBzdGF0dXNCYXJcblx0XHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCI1M3B4XCIgaGVpZ2h0PVwiMTZweFwiPjxnPjxwYXRoIGQ9XCJNMzQuNjA5MzIxNiwwLjYwOTAzNzQ5IEwzNC42MDkzMjE2LDE1LjEwNzQ1OTIgTDIwLjExMDg5OTksMTUuMTA3NDU5MiBMMzQuNjA5MzIxNiwwLjYwOTAzNzQ5IFogTTE1LjI5NDYxNCw3LjA0NzQ3NDc1IEwxNS4zMjgwMTA1LDcuMDgwODcxMjEgTDkuMTY4NTQwNzYsMTQuNzAzOTc3MyBMMy4wMDkwNzEwNiw3LjA4MDg3MTIxIEwzLjA0MjQ2NzUyLDcuMDQ3NDc0NzUgTDAuNzI5Mzk5MzQyLDQuMTg4NDQ2OTcgQzMuNDczNzE3NTIsMi4yNjAxNjQxNCA2LjI4NzczMjY4LDEuMjk2MDIyNzMgOS4xNjg1NDA3NiwxLjI5NjAyMjczIEMxMi4wNTA4MDA5LDEuMjk2MDIyNzMgMTQuODYzMzY0LDIuMjYwMTY0MTQgMTcuNjA5MTM0Miw0LjE4ODQ0Njk3IEwxNS4yOTQ2MTQsNy4wNDc0NzQ3NSBaIE01MS4yMjI5NDIxLDIuMTQ0MDAwNjkgQzUxLjU3NDEzMywyLjE0NDAwMDY5IDUxLjg3NjQ5NTIsMi4yNjc5NTA0MyA1Mi4xMjQzOTQ3LDIuNTE3NzI3OTQgQzUyLjM3NDE3MjIsMi43Njc1MDU0NSA1Mi41LDMuMDY3OTg5NjcgNTIuNSwzLjQyMTA1ODYzIEw1Mi41LDEzLjgxNDI1MjkgQzUyLjUsMTQuMTY1NDQzOCA1Mi4zNzQxNzIyLDE0LjQ2MDI5MzkgNTIuMTI0Mzk0NywxNC42OTUwNDcyIEM1MS44NzY0OTUyLDE0LjkyOTgwMDUgNTEuNTc0MTMzLDE1LjA0NjIzODIgNTEuMjIyOTQyMSwxNS4wNDYyMzgyIEw0NC4zNTY4Nzc2LDE1LjA0NjIzODIgQzQ0LjAwMzgwODYsMTUuMDQ2MjM4MiA0My43MDMzMjQ0LDE0LjkyOTgwMDUgNDMuNDUzNTQ2OSwxNC42OTUwNDcyIEM0My4yMDM3Njk0LDE0LjQ2MDI5MzkgNDMuMDc5ODE5NiwxNC4xNjU0NDM4IDQzLjA3OTgxOTYsMTMuODE0MjUyOSBMNDMuMDc5ODE5NiwzLjQyMTA1ODYzIEM0My4wNzk4MTk2LDMuMDY3OTg5NjcgNDMuMjAzNzY5NCwyLjc2NzUwNTQ1IDQzLjQ1MzU0NjksMi41MTc3Mjc5NCBDNDMuNzAzMzI0NCwyLjI2Nzk1MDQzIDQ0LjAwMzgwODYsMi4xNDQwMDA2OSA0NC4zNTY4Nzc2LDIuMTQ0MDAwNjkgTDQ1Ljg5Njg1OTIsMi4xNDQwMDA2OSBMNDUuODk2ODU5MiwwLjI5NjAyMjcyNyBMNDkuNjgyOTYwNCwwLjI5NjAyMjcyNyBMNDkuNjgyOTYwNCwyLjE0NDAwMDY5IEw1MS4yMjI5NDIxLDIuMTQ0MDAwNjkgWlwiIGZpbGw9XCIjZmZmXCI+PC9wYXRoPjwvZz48L3N2Zz4nXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHR3aWR0aDogNTNcblx0XHRcdFx0aGVpZ2h0OiAxNlxuXHRcdFx0XHR5OiBAb3B0aW9ucy5zdGF0dXNJY29uc1lcblx0XHRcdFx0eDogQHdpZHRoIC0gc3RhdHVzQmFyVGltZS53aWR0aCAtIDcwXG5cblx0XHRcdEB0aXRsZS55ID0gQWxpZ24uY2VudGVyXG5cbiMtLS0tLS0gb24gcmVzaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGF0ID0gQFxuXHRcdHN0YXR1c0JhciA9IEBzdGF0dXNCYXJcblx0XHRpc01vYiA9IEBvcHRpb25zLm1vYmlsZVxuXG5cdFx0d2luZG93Lm9ucmVzaXplID0gLT5cblx0XHRcdGF0LndpZHRoID0gU2NyZWVuLndpZHRoXG5cdFx0XHRzaGFkb3cudW1icmEud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdHNoYWRvdy5hbWJpZW50LndpZHRoID0gU2NyZWVuLndpZHRoXG5cdFx0XHRzaGFkb3cucGVudW1icmEud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdGlmIFV0aWxzLmlzTW9iaWxlKCkgb3IgaXNNb2IgaXMgdHJ1ZVxuXHRcdFx0XHRzdGF0dXNCYXIud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdFx0c3RhdHVzQmFyVGltZS54ID0gU2NyZWVuLndpZHRoIC0gNTVcblx0XHRcdFx0c3RhdHVzSWNvbnMueCA9IFNjcmVlbi53aWR0aCAtIHN0YXR1c0JhclRpbWUud2lkdGggLSA2OFxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFHQUE7QUQwQkEsSUFBQSx3TUFBQTtFQUFBOzs7O0FBQUEsV0FBQSxHQUFjOztBQUNkLFVBQUEsR0FBYTs7QUFDYixVQUFBLEdBQWE7O0FBQ2IsU0FBQSxHQUFZOztBQUNaLFdBQUEsR0FBYzs7QUFDZCxVQUFBLEdBQWE7O0FBQ2IsZ0JBQUEsR0FBbUIsU0FBQSxHQUFZOztBQUMvQixlQUFBLEdBQWtCLFFBQUEsR0FBVzs7QUFDN0IsZ0JBQUEsR0FBbUI7O0FBQ25CLGVBQUEsR0FBa0I7O0FBSVo7OztFQUNRLGVBQUMsT0FBRDtBQUVaLFFBQUE7SUFGYSxJQUFDLENBQUEsNEJBQUQsVUFBUztJQUV0QixLQUFLLENBQUMsU0FBTixDQUFnQiw4REFBaEI7O1VBRVEsQ0FBQyxhQUFjOzs7V0FD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
