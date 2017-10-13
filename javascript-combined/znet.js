var ZnetUI=function(){"use strict";var t={utility:{zui_parseOptions:function(t,e){if(e&&"object"==typeof e){var o;for(o in e)t[o]=e[o]}return t},zui_handleCallback:function(t){t&&"function"==typeof t&&t()},zui_handleScroll:function(t){window.addEventListener("scroll",function(){t()},{passive:!0})}}};return t}();ZnetUI=function(t){"use strict";return t.curtain=function(t,e,o){var i={};e=this.utility.zui_parseOptions(i,e);for(var n=document.getElementsByClassName(t),s=0;s<n.length;s++)n[s].style.opacity=1,n[s].style.visibility="visible";this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.fontWatch=function(t,e,o){function i(t,e,o){this.fontName='"'+t+'"',this.options=e,this.callback=o,this.$dummyElement=document.createElement("span"),this.initialSize=null,this.init(),this.waitForDummyElementToExist(0)}var n={dummyFont:'"Comic Sans MS", cursive, sans-serif',dummyString:"Here Is A SubStantial $string!",dummyFontSize:"100px",maxChecks:100};e=this.utility.zui_parseOptions(n,e),i.prototype.init=function(){this.$dummyElement.id="font-watch-dummy",this.$dummyElement.style.position="fixed",this.$dummyElement.style.top="-99999px",this.$dummyElement.style.left="-99999px",this.$dummyElement.style.whiteSpace="nowrap",this.$dummyElement.style.fontSize=this.options.dummyFontSize,this.$dummyElement.style.fontFamily=this.options.dummyFont,this.$dummyElement.innerHTML=this.options.dummyString,this.emergencyBailoutID,document.body.appendChild(this.$dummyElement),this.emergencyBailout()},i.prototype.waitForDummyElementToExist=function(t){window.setTimeout(this.dummyElementWatcher.bind(this,t),1)},i.prototype.dummyElementWatcher=function(t){this.initialSize=this.getDummyElementWidth(),this.initialSize?(this.swapInWatchedFont(),this.waitForFontToApply(0)):t<this.options.maxChecks?this.waitForDummyElementToExist(++t):this.callback()},i.prototype.getDummyElementWidth=function(){return this.$dummyElement.clientWidth},i.prototype.swapInWatchedFont=function(){this.$dummyElement.style.fontFamily=this.fontName+", "+this.options.dummyFont},i.prototype.waitForFontToApply=function(t){window.setTimeout(this.fontSwapped.bind(this,t),1)},i.prototype.fontSwapped=function(t){console.log("cycleNumber: "+t);this.getDummyElementWidth();this.fontSizeChanged()?(this.removeDummyElement(),this.cancelEmergencyBailout(),this.callback()):t>=this.options.maxChecks?(console.log("font watcher timed out"),this.removeDummyElement(),this.cancelEmergencyBailout(),this.callback()):this.waitForFontToApply(++t)},i.prototype.emergencyBailout=function(){this.emergencyBailoutID=window.setTimeout(function(){console.log("bailing out"),this.callback()}.bind(this),1e3)},i.prototype.cancelEmergencyBailout=function(){window.clearTimeout(this.emergencyBailoutID)},i.prototype.removeDummyElement=function(){this.$dummyElement.parentNode.removeChild(this.$dummyElement)},i.prototype.fontSizeChanged=function(){return this.currentSize=this.getDummyElementWidth(),this.currentSize!==this.initialSize},new i(t,e,o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.footnotes=function(t,e,o){function i(t,e,o){this.options=e,this.utility=o,this.init()}function n(t,e){this.footnoteNumber=parseInt(t),this.options=e,this.$desktopFootnote=document.getElementById("footnote_"+t),this.$upperFootnoteLink=document.getElementById("footLink--upper_"+t),this.$story=document.getElementById("story"),this.previousFootnoteBottom,this.setup()}function s(t,e){this.footnoteNumber=t,this.options=e,this.Init()}var l={resizeDebounce:500,mobileFootnoteClosedClass:"mobile-footnote-closed",mobileFootnoteWatchedClass:"mobile-footnote-watched",mobileFootnoteMaxHeight:300,mobileFootnoteModeClass:"mobile-footnote-mode",desktopFootnoteModeClass:"footnote-mode-class"};e=this.utility.zui_parseOptions(l,e),i.prototype.init=function(){this.mobileFootnotes=[],this.desktopFootnotes=[],this.$story=document.getElementById("story"),this.hasFootnotes()&&(this.setScreenMode(),this.handleResize())},i.prototype.handleResize=function(){var t;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){this.setScreenMode()}.bind(this),this.options.resizeDebounce)}.bind(this))},i.prototype.setScreenMode=function(){this.screenWiderThanBreakpoint("md")?(this.setContainerCssDesktop(),0===this.desktopFootnotes.length?this.buildDesktopFootnotes():this.handleDesktopResize(),this.$story.classList.remove(this.options.mobileFootnoteModeClass),this.$story.classList.add(this.options.desktopFootnoteModeClass)):(this.hideDesktopFootnotes(),0===this.mobileFootnotes.length?(this.buildMobileFootnotes(),this.handleMobileFootnoteClicks()):this.handleMobileResize(),this.$story.classList.add(this.options.mobileFootnoteModeClass),this.$story.classList.remove(this.options.desktopFootnoteModeClass))},i.prototype.setContainerCssDesktop=function(){for(var t=window.document.getElementsByClassName("story-container"),e=0;e<t.length;e++)t[e].classList.remove("container-small"),t[e].classList.add("container-medium"),t[e].classList.add("flex")},i.prototype.removeAllMobileFootnotes=function(){for(var t=document.getElementsByClassName("mobile-footnote");t.length>0;)t[0].parentElement.removeChild(t[0])},i.prototype.handleMobileResize=function(){for(var t=0;t<this.mobileFootnotes.length;t++)this.mobileFootnotes[t].reposition()},i.prototype.handleDesktopResize=function(){for(var t=0;t<this.desktopFootnotes.length;t++)this.desktopFootnotes[t].position()},i.prototype.hideDesktopFootnotes=function(){document.getElementById("footnote-collection").style.display="none"},i.prototype.hasFootnotes=function(){return window.document.getElementsByClassName("footnote").length>0},i.prototype.buildDesktopFootnotes=function(){for(var t,e=document.getElementsByClassName("footLink--upper"),o=0;o<e.length;o++)t=e[o].dataset.footnoteNumber,this.desktopFootnotes.push(new n(t,this.options))},i.prototype.buildMobileFootnotes=function(){for(var t,e=document.getElementsByClassName("footLink--upper"),o=0;o<e.length;o++)t=e[o].dataset.footnoteNumber,this.mobileFootnotes.push(new s(t,this.options))},i.prototype.getElementPosisitionInStory=function(t){var e=t.getBoundingClientRect().bottom,o=t.getBoundingClientRect().left,i=this.$story.getBoundingClientRect().top,n=parseInt(window.getComputedStyle(this.$story).marginTop),s=Math.abs(e-i)+n-7;return{bottom:s,left:o}},i.prototype.anotherFootnoteOpenOnThisRow=function(t){for(var e=this.mobileFootnotes[t].upperFootnoteLinkPosition.bottom,o=0;o<this.mobileFootnotes.length;o++)if(o!==t&&!this.mobileFootnotes[o].$mobileFootnote.classList.contains(this.options.mobileFootnoteClosedClass)){var i=this.mobileFootnotes[o].upperFootnoteLinkPosition.bottom;if(i<e+10&&i>e-10)return!0}return!1},i.prototype.handleMobileFootnoteClicks=function(){for(var t,e=0;e<this.mobileFootnotes.length;e++)t=this.mobileFootnotes[e],function(t,e){t.mobileFootnotes[e].$upperFootnoteLink.addEventListener("click",function(o){if(t.inMobileMode())if(o.preventDefault(),t.mobileFootnotes[e].isOpen())t.mobileFootnotes[e].closeMobileFootnote();else{t.anotherFootnoteOpenOnThisRow(e)?t.mobileFootnotes[e].openMobileFootnoteWithoutAnimation():t.mobileFootnotes[e].openMobileFootnote();for(var i=0;i<t.mobileFootnotes.length;i++)t.mobileFootnotes[i].isOpen()&&e!==i&&(t.anotherFootnoteOpenOnThisRow(i)?t.mobileFootnotes[i].closeMobileFootnoteWithoutAnimation():t.mobileFootnotes[i].closeMobileFootnote())}})}(this,e)},i.prototype.inMobileMode=function(){return!!this.$story.classList.contains(this.options.mobileFootnoteModeClass)},i.prototype.inDesktopMode=function(){return!!this.$story.classList.contains(this.options.desktopFootnoteModeClass)},i.prototype.screenWiderThanBreakpoint=function(t){var e=320,o=480,i=768,n=992,s=this.getMagicCSSWidth();return"lg"===t&&s>=n||("md"===t&&s>=i||("sm"===t&&s>=o||"xs"===t&&s>=e))},i.prototype.getMagicCSSWidth=function(){var t=document.getElementsByTagName("style")[0],e=window.getComputedStyle(t,null).getPropertyValue("width");return parseInt(e)},n.prototype.setup=function(t){this.setFootnoteCssDesktop(),this.position(t)},n.prototype.position=function(t){var e=this.getPreviousFootnoteBottomPosition();this.getFootnoteHeight(this.$desktopFootnote);this.$upperFootnoteLink.parentElement.offsetTop>e?this.$desktopFootnote.style.top=this.$upperFootnoteLink.parentElement.offsetTop+"px":this.$desktopFootnote.style.top=e+20+"px"},n.prototype.getPreviousFootnoteBottomPosition=function(){var t,e,o;if(this.footnoteNumber>1){var i=this.footnoteNumber-1;return t=document.getElementById("footnote_"+i),e=t.offsetTop,o=this.getFootnoteHeight(t),e+o}return 0},n.prototype.getFootnoteTop=function(t){var e=this.getUpperFootnoteOffset(t),o=this.getStoryOffset(),i=this.getStoryMargin();return Math.abs(e-o)+i-7},n.prototype.getUpperFootnoteOffset=function(){return this.$upperFootnoteLink.getBoundingClientRect().top},n.prototype.getStoryOffset=function(){return this.$story.getBoundingClientRect().top},n.prototype.getStoryMargin=function(){return parseInt(window.getComputedStyle(this.$story).marginTop)},n.prototype.getFootnoteHeight=function(t){return t.getBoundingClientRect().height},n.prototype.breakdown=function(){for(var t=window.document.getElementsByClassName("story-container"),e=0;e<t.length;e++)t[e].classList.add("container-small"),t[e].classList.remove("container-medium"),t[e].classList.remove("flex");var o=window.document.getElementsByClassName("footnote");for(e=0;e<o.lenth;e++)o[e].classList.remove("desktop-footnote")},n.prototype.inDesktopMode=function(){return!!this.$story.classList.contains(this.options.desktopFootnoteModeClass)},n.prototype.setFootnoteCssDesktop=function(){for(var t=window.document.getElementsByClassName("footnote"),e=0;e<t.length;e++)t[e].classList.add("desktop-footnote")},s.prototype.Init=function(){this.$story=document.getElementById("story"),this.$footnote=window.document.getElementById("footnote_"+this.footnoteNumber),this.$upperFootnoteLink=window.document.getElementById("footLink--upper_"+this.footnoteNumber),this.upperFootnoteLinkPosition=this.getElementPosisitionInStory(this.$upperFootnoteLink.parentNode),this.$mobileFootnote,this.boundToggleScrollIndicator=this.toggleScrollIndicator.bind(this),this.$scrollDownIndicator,this.$mobileFootnoteContent,this.buildMobileFootnote(),this.footnoteHeight,this.releaseTheSniffer(),this.initializeCSS()},s.prototype.getElementPosisitionInStory=function(t){var e=t.getBoundingClientRect().bottom,o=t.getBoundingClientRect().left,i=this.$story.getBoundingClientRect().top,n=parseInt(window.getComputedStyle(this.$story).marginTop),s=Math.abs(e-i)+n-7;return{bottom:s,left:o}},s.prototype.buildMobileFootnote=function(){this.$mobileFootnote=this.buildCompleteElement("span",{elementId:"mobile-footnote_"+this.footnoteNumber,elementClasses:["mobile-footnote"]});var t=this.buildCompleteElement("span",{elementClasses:"wrapper"}),e=this.buildCompleteElement("span",{elementId:"mobile-footnote-content-"+this.footnoteNumber,elementClasses:["content"],elementContent:"<sup>[ "+this.footnoteNumber+" ]</sup> "+this.$footnote.getElementsByClassName("footnoteContent")[0].innerHTML}),o=this.buildCompleteElement("span",{elementId:"mobile-footnote-pointer-"+this.footnoteNumber,elementClasses:["pointer"]}),i=this.buildCompleteElement("span",{elementId:"scroll-down-indicator-"+this.footnoteNumber,elementClasses:["scrolldown-indicator","icon-down-open"]}),n=this.buildCompleteElement("span",{elementClasses:["close-button","icon-cancel-1"]});this.$mobileFootnote.appendChild(o),t.appendChild(e),t.appendChild(n),t.appendChild(i),this.$mobileFootnote.appendChild(t),n.addEventListener("click",function(){this.closeMobileFootnote()}.bind(this)),this.$scrollDownIndicator=i,this.$mobileFootnoteContent=e},s.prototype.positionPointer=function(){var t=document.getElementById("mobile-footnote-pointer-"+this.footnoteNumber);t.style.left=this.upperFootnoteLinkPosition.left+"px"},s.prototype.buildCompleteElement=function(t,e){var o=window.document.createElement(t);if(e.elementId&&(o.id=e.elementId),e.elementClasses)if("string"==typeof e.elementClasses)o.classList.add(e.elementClasses);else if(e.elementClasses.constructor===Array)for(var i=0;i<e.elementClasses.length;i++)o.classList.add(e.elementClasses[i]);return e.elementContent&&(o.innerHTML=e.elementContent),o},s.prototype.appendNodesToParagraph=function(t,e){for(var o=0;o<t.length;o++)e.appendChild(t[o])},s.prototype.sortSniffableNodes=function(t){for(var e=t.firstChild,o=this.$upperFootnoteLink.parentNode,i=[],n=[];e&&e!==o;)i.push(e),e=e.nextSibling;for(;e;)n.push(e),e=e.nextSibling;return{nodesThatNeedNoSniffing:i,nodesThatNeedSniffing:n}},s.prototype.attemptMobileFootnoteInsertionInTextNode=function(t,e){var o,i=t.textContent.trim().split(" "),n=document.createTextNode(""),s=document.createTextNode(""),l=document.createElement("span");for(e.appendChild(n);i.length>0;){o=i.shift(),l.textContent=" "+o,e.appendChild(l);var r=this.getElementPosisitionInStory(l);if(l.parentElement.removeChild(l),r.bottom>this.upperFootnoteLinkPosition.bottom+10)return e.appendChild(this.$mobileFootnote),e.appendChild(s),s.textContent=" "+o,i.length>0&&(s.textContent=s.textContent+" "+i.join(" ")),e.appendChild(s),!0;n.textContent=n.textContent+" "+o}return!1},s.prototype.attemptMobileFootnoteInsertionAfterElement=function(t,e){e.appendChild(t);var o=this.getElementPosisitionInStory(t);return o.bottom>this.upperFootnoteLinkPosition.bottom+10&&(e.insertBefore(this.$mobileFootnote,t),!0)},s.prototype.releaseTheSniffer=function(){if(this.footnoteNumber===this.footnoteNumber){var t,e=this.$upperFootnoteLink.parentNode.parentNode,o=this.sortSniffableNodes(e),i=document.createElement("p"),n=!1;for(this.appendNodesToParagraph(o.nodesThatNeedNoSniffing,i),e.parentElement.insertBefore(i,e.nextSibling),e.parentElement.removeChild(e);o.nodesThatNeedSniffing.length>0;){if(n){this.appendNodesToParagraph(o.nodesThatNeedSniffing,i);break}t=o.nodesThatNeedSniffing.shift(),3===t.nodeType?n=this.attemptMobileFootnoteInsertionInTextNode(t,i):1===t.nodeType&&(n=this.attemptMobileFootnoteInsertionAfterElement(t,i))}n===!1&&i.appendChild(this.$mobileFootnote)}},s.prototype.initializeCSS=function(){this.footnoteHeight=this.$mobileFootnote.offsetHeight,this.$mobileFootnote.classList.add(this.options.mobileFootnoteClosedClass),this.$mobileFootnote.classList.add(this.options.mobileFootnoteWatchedClass),this.closeMobileFootnote()},s.prototype.closeMobileFootnote=function(){this.$mobileFootnote.style.maxHeight="0px",this.$mobileFootnote.classList.add(this.options.mobileFootnoteClosedClass),this.removeFootnoteScrollListener()},s.prototype.closeMobileFootnoteWithoutAnimation=function(){this.$mobileFootnote.classList.add("mobile-footnote-no-transition"),this.closeMobileFootnote(),window.setTimeout(function(){this.$mobileFootnote.classList.remove("mobile-footnote-no-transition")}.bind(this),.25)},s.prototype.openMobileFootnote=function(){this.positionPointer(),this.footnoteHeight<this.options.mobileFootnoteMaxHeight?(this.$mobileFootnoteContent.parentElement.classList.remove("mobile-footnote-scroll"),this.$mobileFootnoteContent.parentElement.classList.add("mobile-footnote-noscroll"),this.$mobileFootnote.style.maxHeight=this.footnoteHeight+"px"):(this.$mobileFootnoteContent.parentElement.classList.remove("mobile-footnote-noscroll"),this.$mobileFootnoteContent.parentElement.classList.add("mobile-footnote-scroll"),this.$mobileFootnoteContent.parentElement.scrollTop=0,this.$mobileFootnote.style.maxHeight=this.options.mobileFootnoteMaxHeight+"px",this.toggleScrollIndicator()),this.setFootnoteScrollListener(),this.$mobileFootnote.classList.remove(this.options.mobileFootnoteClosedClass)},s.prototype.openMobileFootnoteWithoutAnimation=function(){this.$mobileFootnote.classList.add("mobile-footnote-no-transition"),this.openMobileFootnote(),window.setTimeout(function(){this.$mobileFootnote.classList.remove("mobile-footnote-no-transition")}.bind(this),.25)},s.prototype.isOpen=function(){return!this.$mobileFootnote.classList.contains(this.options.mobileFootnoteClosedClass)},s.prototype.reposition=function(){this.upperFootnoteLinkPosition=this.getElementPosisitionInStory(this.$upperFootnoteLink.parentNode);var t=this.$mobileFootnote.parentElement;this.$mobileFootnote.remove(),t.normalize(),this.releaseTheSniffer()},s.prototype.setFootnoteScrollListener=function(){this.$mobileFootnote.addEventListener("scroll",this.boundToggleScrollIndicator,!1),this.$mobileFootnote.addEventListener("touchmove",this.boundToggleScrollIndicator,!1)},s.prototype.removeFootnoteScrollListener=function(){this.$mobileFootnote.removeEventListener("scroll",this.boundToggleScrollIndicator,!1),this.$mobileFootnote.removeEventListener("touchmove",this.boundToggleScrollIndicator,!1)},s.prototype.toggleScrollIndicator=function(){var t=this.$mobileFootnote.firstElementChild.nextElementSibling.scrollTop,e=this.$mobileFootnote.getBoundingClientRect().height,o=this.$mobileFootnote.firstElementChild.nextElementSibling.scrollHeight,i=o-t;i>=e+20?this.addScrollIndicator():this.removeScrollIndicator()},s.prototype.addScrollIndicator=function(){this.$scrollDownIndicator.style.display="inherit"},s.prototype.removeScrollIndicator=function(){this.$scrollDownIndicator.style.display="none"},s.prototype.footnoteScrolls=function(){var t=this.$mobileFootnote.scrollHeight,e=this.$mobileFootnote.clientHeight;return t>e},new i(t,e,this.utility),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.lazyLoadCSS=function(t,e,o){function i(t){t<e.maxChecks&&window.setTimeout(function(){var n=window.getComputedStyle(s,null).getPropertyValue(e.canaryCSSProperty);n!==l?o():i(++t)},1)}var n={canaryCSSElement:"body",canaryCSSProperty:"max-width",maxChecks:1e4};this.callback=o,e=this.utility.zui_parseOptions(n,e);var s=document.getElementById(e.canaryCSSElement);s||(s=document.getElementsByTagName(e.canaryCSSElement)[0]);var l,r=document.createElement("link");r.href=t,r.rel="stylesheet",r.type="text/css",r.media="all",r.onload=function(){"function"==typeof o&&s&&(l="none",i(0))},document.getElementsByTagName("head")[0].appendChild(r)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.lazyLoadImages=function(t,e,o){function i(t,e){this.lazyClass=t,this.lazyImages=[],this.options=e,this.init()}function n(t){this.$lazyImageElement=t,this.init()}var s={buffer:1e3};e=this.utility.zui_parseOptions(s,e),i.prototype.init=function(){this.getLazyImages(),this.lazyImageCount,this.boundCheckLazyImagePositions=this.fetchLazyImagesInView.bind(this),this.boundHandleResize=this.handleResize.bind(this),this.watchScroll(),this.watchForResize(),this.fetchLazyImagesInView()},i.prototype.getLazyImages=function(){for(var t=document.getElementsByClassName(this.lazyClass),e=0;e<t.length;e++)this.lazyImages.push(new n(t[e]));this.lazyImageCount=this.lazyImages.length},i.prototype.watchScroll=function(){window.addEventListener("scroll",this.boundCheckLazyImagePositions)},i.prototype.ignoreScroll=function(){window.removeEventListener("scroll",this.boundCheckLazyImagePositions)},i.prototype.fetchLazyImagesInView=function(){for(var t,e=window.pageYOffset-this.options.buffer,o=window.pageYOffset+window.innerHeight+this.options.buffer,i=0;i<this.lazyImages.length;i++)this.lazyImages[i].imageLoaded||(t=this.lazyImages[i].lazyImageYPosition,e<t&&t<o&&(this.lazyImages[i].loadImage(),this.lazyImageCount--));0===this.lazyImageCount&&this.ignoreScroll()},i.prototype.resetLazyImagePositions=function(){for(var t=0;t<this.lazyImages.length;t++)this.lazyImages[t].setImageYPosition()},i.prototype.handleResize=function(){var t;clearTimeout(t),t=setTimeout(function(){this.resetLazyImagePositions(),this.fetchLazyImagesInView()}.bind(this),500)},i.prototype.watchForResize=function(){window.addEventListener("resize",this.boundHandleResize)},n.prototype.init=function(){this.setImageYPosition(),this.lazyImagePath=this.$lazyImageElement.dataset.background,this.imageLoaded=!1,this.lazyImageYPosition},n.prototype.setImageYPosition=function(){var t=this.$lazyImageElement.getBoundingClientRect().top,e=window.pageYOffset||document.documentElement.scrollTop;this.lazyImageYPosition=e+t},n.prototype.loadImage=function(){this.imageLoaded=!0;var t=new Image;t.src=this.lazyImagePath,t.onload=function(){this.$lazyImageElement.style.backgroundImage="url("+this.lazyImagePath+")",this.$lazyImageElement.style.visibility="visible"}.bind(this)},new i(t,e),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.nav=function(t,e,o){function i(t,e,o){this.utility=o,this.options=e,this.$navBarElement=window.document.getElementById(t),this.setCoverPageHome(),this.setTabNav(),this.toggleNavbar(),this.handleScroll()}var n={minScrollDown:window.innerHeight};e=this.utility.zui_parseOptions(n,e),i.prototype.setTabNav=function(){this.options.tabNav&&(this.$tabNav=window.document.getElementById(this.options.tabNav),this.handleTabNavFocus())},i.prototype.setCoverPageHome=function(){this.options.coverPageHome&&(this.$coverPageHome=window.document.getElementById(this.options.coverPageHome))},i.prototype.toggleNavbar=function(){pageYOffset>this.options.minScrollDown?(this.$coverPageHome&&this.hideCoverPageHome(),this.showNav()):(this.hideNav(),this.$coverPageHome&&this.showCoverPageHome())},i.prototype.hideCoverPageHome=function(){this.$coverPageHome.classList.remove("nav-show"),this.$coverPageHome.classList.add("nav-hide")},i.prototype.showCoverPageHome=function(){this.$coverPageHome.classList.remove("nav-hide"),this.$coverPageHome.classList.add("nav-show")},i.prototype.showNav=function(){this.$navBarElement.classList.remove("nav-hide"),this.$navBarElement.classList.add("nav-show")},i.prototype.hideNav=function(){this.$navBarElement.classList.remove("nav-show"),this.$navBarElement.classList.add("nav-hide")},i.prototype.handleScroll=function(){var t=this;window.addEventListener("scroll",function(){t.toggleNavbar()},{passive:!0})},i.prototype.handleTabNavFocus=function(){var t=this;this.$tabNav.style.display="inline",this.$tabNav.addEventListener("focus",function(){t.$tabNav.style.clip="initial"}),this.$tabNav.addEventListener("blur",function(){t.$tabNav.style.clip="rect(0 0 0 0)"})},new i(t,e,this.utility),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.search=function(t,e){function o(t,e){this.options=t,this.callback=e,this.init(),this.setup()}var i={imageURL:""};t=this.utility.zui_parseOptions(i,t),o.prototype.init=function(){this.searchConfig={fields:{title:{boost:1},content:{boost:1},excerpt:{boost:1}},bool:"OR"},this.searchString=this.getSearchString(),this.storyIdx=new elasticlunr.Index,this.blogIdx=new elasticlunr.Index,this.storySearchResults=[],this.blogSearchResults=[],this.previousSearchString="",this.$storyResults=document.getElementById("story-results"),this.$blogResults=document.getElementById("blog-results"),this.$formInput=document.getElementById("search-input"),this.$noResults=document.getElementById("no-results"),this.$clearButton=document.getElementById("clear-button"),this.oldSearchString="",this.newSearchString=""},o.prototype.getSearchString=function(){var t=window.location.href,e=new URL(t);return e.searchParams.get("s")},o.prototype.setup=function(){var t=this;this.setClearButton(),null!==this.searchString?this.fetchJSON("../lunr-elastic-search-stories.json",function(e){t.storyIdx=elasticlunr.Index.load(JSON.parse(e)),t.fetchJSON("../lunr-elastic-search-blog.json",function(e){t.blogIdx=elasticlunr.Index.load(JSON.parse(e)),t.doSearch(t.searchString)})}):this.callback()},o.prototype.fetchJSON=function(t,e){var o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open("GET",t,!0),o.onreadystatechange=function(){4==o.readyState&&"200"==o.status&&e(o.responseText)},o.send(null)},o.prototype.setClearButton=function(){var t=this;this.$clearButton.addEventListener("click",function(){t.$formInput.value="",t.$formInput.focus(),t.toggleClearButton()})},o.prototype.monitorFormInput=function(){var t=this;this.$formInput.addEventListener("input",function(e){t.delay(function(){console.log("monitorin!"),t.toggleClearButton()},50)})},o.prototype.toggleClearButton=function(){this.formEmpty()?this.$clearButton.style.display="none":this.$clearButton.style.display="inline"},o.prototype.formEmpty=function(){return!this.$formInput.value},o.prototype.doSearch=function(){this.storySearchResults=this.storyIdx.search(this.searchString,this.searchConfig),this.blogSearchResults=this.blogIdx.search(this.searchString,this.searchConfig),this.toggleClearButton(),this.monitorFormInput(),0===this.storySearchResults.length&&0===this.blogSearchResults.length?(this.setNoResults(),this.clearBlogResults(),this.clearStoryResults(),this.callback()):(this.clearNoResults(),this.buildStoryResults(),this.buildBlogResults(),this.callback())},o.prototype.searchStringLongEnough=function(){return this.newSearchString.length>3},o.prototype.setNoResults=function(){this.$noResults.innerHTML="Your search returned no results..."},o.prototype.clearNoResults=function(){this.$noResults.innerHTML=""},o.prototype.clearStoryResults=function(){this.previousStorySearchResults=null,this.$storyResults.innerHTML=""},o.prototype.clearBlogResults=function(){this.previousBlogSearchResults=null,this.$blogResults.innerHTML=""},o.prototype.delay=function(){var t=0;return function(e,o){clearTimeout(t),t=setTimeout(e,o)}}(),o.prototype.buildStoryResults=function(){var t,e,o,i,n,s,l;if(this.clearStoryResults(),this.storySearchResults.length>0){s=this.buildCompleteElement("h1",["search-header"],"story results"),this.$storyResults.appendChild(s),l=this.buildCompleteElement("ol",["search-results"]),this.$storyResults.appendChild(l);for(var r=0;r<this.storySearchResults.length;r++){n=this.storyIdx.documentStore.docs[this.storySearchResults[r].ref].banner,o=this.options.imageURL+"images/thumbnail/"+n,t=this.storyIdx.documentStore.docs[this.storySearchResults[r].ref].title,e=this.storyIdx.documentStore.docs[this.storySearchResults[r].ref].url,i=this.storyIdx.documentStore.docs[this.storySearchResults[r].ref].excerpt;var a='<li class="story-quaternary"><article class="story-summary summary-small" data-slug="'+t+'"><a href="'+e+'"><div class="cover-wrapper"><div class="cover-image" style="background-image: url('+o+' )"><h3 class="story-title">'+t+'</h3></div></div><div class="info-wrapper"><p class="excerpt">'+i+"</p></div></a></article></li>";l.innerHTML=l.innerHTML+a}}},o.prototype.buildBlogResults=function(t){var e,o,i,n,s;if(this.clearBlogResults(),this.blogSearchResults.length>0){n=this.buildCompleteElement("h1","search-header","blog results"),this.$blogResults.appendChild(n),s=this.buildCompleteElement("ol",["search-results"]),this.$blogResults.appendChild(s);for(var l=0;l<this.blogSearchResults.length;l++){o=this.blogIdx.documentStore.docs[this.blogSearchResults[l].ref].url,e=this.blogIdx.documentStore.docs[this.blogSearchResults[l].ref].title,i=this.blogIdx.documentStore.docs[this.blogSearchResults[l].ref].excerpt;var r='<li class="story-quaternary"><article class="story-summary summary-small" data-slug="'+e+'"><a href="'+o+'"><div class="info-wrapper"><h3 class="title">'+e+'</h3><p class="excerpt">'+i+"</p></div></a></article></li>";s.innerHTML=s.innerHTML+r}}},o.prototype.buildCompleteElement=function(t,e,o){o||(o="");var i=document.createElement(t);return i.className=e,i.innerHTML=o,i},o.prototype.getUrlVar=function(t,e){e||(e=location.href),t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o="[\\?&]"+t+"=([^&#]*)",i=new RegExp(o),n=i.exec(e);return null===n?null:n[1]},new o(t,e)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.titleFill=function(t,e,o){function i(t,e){this.$title=t,this.options=e,this.$titleContainer=this.$title.parentElement,this.titleText=this.$title.textContent,this.isVisible(this.$titleContainer)&&this.init()}var n={paddingX:100,yNudgeDown:0,titleAlignment:"center",googleVHFix:"false"};e=this.utility.zui_parseOptions(n,e),i.prototype.init=function(){this.$title.style.position="absolute",this.$title.style.display="inline",this.$title.style.textAlign="center",this.titleInitialFontSize=parseInt(window.getComputedStyle(this.$title).getPropertyValue("font-size")),this.containerHeight=this.$titleContainer.clientHeight,this.containerWidth=this.$titleContainer.clientWidth,this.options.googleVHFix===!0&&(this.$titleContainer.style.height=window.innerHeight+"px"),this.setFontSize(),this.centerTitle(),this.resizeCheck(),this.done()},i.prototype.done=function(){this.$title.style.opacity=1},i.prototype.isVisible=function(t){return t.clientWidth>0&&t.clientHeight>0},i.prototype.setFontSize=function(){var t=this.getXMaxSize();this.setRealisticSize(t,0)},i.prototype.getXMaxSize=function(){var t,e,o;return t=this.titleText.split(" ").join("<br>"),this.$title.innerHTML="",this.$title.innerHTML=t,e=this.containerWidth-2*this.options.paddingX,o=e/this.$title.offsetWidth,this.$title.innerHTML="",this.$title.innerHTML=this.titleText,Math.floor(this.titleInitialFontSize*o)},i.prototype.setRealisticSize=function(t,e){this.$title.style.fontSize=t+"px";var o=this.$title.offsetHeight,i=(this.containerHeight-this.options.yNudgeDown)/o;if(i<1){var n=Math.floor(t*i),s=(t-n)/2+n;e<20&&(e++,this.setRealisticSize(s,e))}},i.prototype.centerTitle=function(){var t=this.$title.offsetHeight,e=this.$title.offsetWidth,o=(this.containerHeight-t)/2;(this.containerWidth-e)/2;this.$title.style.top=o+"px"},i.prototype.resizeCheck=function(){var t,e=this;window.addEventListener("resize",function(){t&&window.clearTimeout(t),t=window.setTimeout(function(){e.$titleContainer.offsetWidth!==e.containerWidth&&e.init()},200)})};for(var s=window.document.getElementsByClassName(t),l=0;l<s.length;l++)new i(s[l],e);this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){"use strict";return t.TOC=function(t,e){function o(t){this.options=t,this.$document=window.document,this.location=window.location.href,this.history=window.history,this.init()}var i={navHeight:40,TOCClass:"toc-link"};t=this.utility.zui_parseOptions(i,t),o.prototype.init=function(){this.HISTORY_SUPPORT=!(!history||!history.pushState),this.previousHash=window.location.href,this.watchForClicks(),this.watchForHashChange()},o.prototype.isTOCCLass=function(t){return t.classList.contains(this.options.TOCClass)},o.prototype.watchForHashChange=function(){window.addEventListener("hashchange",this.hashChangeMonitor.bind(this))},o.prototype.watchForClicks=function(){this.$document.body.addEventListener("click",this.clickMonitor.bind(this))},o.prototype.hashChangeMonitor=function(){var t=this.getAnchor(window.location),e=this.getAnchorTarget(t);e?this.doScrollTo(e):this.scrollToTop()},o.prototype.clickMonitor=function(t){var e,o,i=t.target;this.isTOCCLass(i)&&this.isLink(i)&&(o=this.getAnchor(i),e=this.getAnchorTarget(o),e&&(t.preventDefault(),this.doScrollTo(e),this.pushToHistory(o)))},o.prototype.scrollToTop=function(){window.scrollTo(0,0)},o.prototype.doScrollTo=function(t){var e=t.getBoundingClientRect(),o=window.pageYOffset+e.top-this.options.navHeight;window.scrollTo(window.pageXOffset,o)},o.prototype.isLink=function(t){return"A"===t.tagName},o.prototype.getAnchor=function(t){return t.href.split("#")[1]},o.prototype.getAnchorTarget=function(t){return this.$document.getElementById(t)},o.prototype.pushToHistory=function(t){var e=window.location.href.split("#")[0]+"#"+t;this.HISTORY_SUPPORT&&e!=this.previousHash&&(this.previousHash=e,history.pushState({},this.$document.title,e))},new o(t),this.utility.zui_handleCallback(e)},t}(ZnetUI);