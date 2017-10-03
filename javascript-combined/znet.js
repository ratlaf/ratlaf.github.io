var ZnetUI=function(){"use strict";var t={utility:{zui_parseOptions:function(t,e){if(e&&"object"==typeof e){var o;for(o in e)t[o]=e[o]}return t},zui_handleCallback:function(t){t&&"function"==typeof t&&t()},zui_handleScroll:function(t){window.addEventListener("scroll",function(){t()},{passive:!0})}}};return t}();ZnetUI=function(t){return t.curtain=function(t,e,o){var i={};e=this.utility.zui_parseOptions(i,e);for(var n=document.getElementsByClassName(t),s=0;s<n.length;s++)n[s].style.opacity=1;this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){return t.fontWatch=function(t,e,o){function i(t,e,o){this.fontName='"'+t+'"',this.options=e,this.callback=o,this.$dummyElement=document.createElement("span"),this.initialSize,this.init(),this.waitForDummyElementToExist(0)}var n={dummyFont:'"Comic Sans MS", cursive, sans-serif',dummyString:"Here Is A SubStantial $string!",dummyFontSize:"300px",maxChecks:1e3};e=this.utility.zui_parseOptions(n,e),i.prototype.init=function(){this.$dummyElement.id="font-watch-dummy",this.$dummyElement.style.position="fixed",this.$dummyElement.style.top="-99999px",this.$dummyElement.style.left="-99999px",this.$dummyElement.style.whiteSpace="nowrap",this.$dummyElement.style.fontSize=this.options.dummyFontSize,this.$dummyElement.style.fontFamily=this.options.dummyFont,this.$dummyElement.innerHTML=this.options.dummyString,document.body.appendChild(this.$dummyElement)},i.prototype.waitForDummyElementToExist=function(t){window.setTimeout(this.dummyElementWatcher.bind(this,t),1)},i.prototype.dummyElementWatcher=function(t){this.initialSize=this.getDummyElementWidth(),console.log(t),this.initialSize?(this.swapInWatchedFont(),this.waitForFontToApply(0)):t<this.options.maxChecks?this.waitForDummyElementToExist(++t):this.callback()},i.prototype.getDummyElementWidth=function(){return this.$dummyElement.clientWidth},i.prototype.swapInWatchedFont=function(){this.$dummyElement.style.fontFamily=this.fontName+", "+this.options.dummyFont},i.prototype.waitForFontToApply=function(t){window.setTimeout(this.fontSwapped.bind(this,t),1)},i.prototype.fontSwapped=function(t){currentSize=this.getDummyElementWidth(),this.fontSizeChanged()?this.callback():t<this.options.maxChecks?this.waitForFontToApply(++t):(console.log("font watcher timed out"),this.callback())},i.prototype.fontSizeChanged=function(){return this.currentSize=this.getDummyElementWidth(),this.currentSize!==this.initialSize},new i(t,e,o)},t}(ZnetUI),ZnetUI=function(t){return t.footnotes=function(t,e,o){function i(t,e,o){this.options=e,this.utility=o,this.init()}function n(t){this.utility=t,this.$document=window.document,this.$body=window.document.body,this.$footnotes=this.$document.getElementsByClassName("footnote")}function s(t){this.utility=t,this.Init()}var r={resizeDebounce:250};e=this.utility.zui_parseOptions(r,e),i.prototype.init=function(){this.hasFootnotes()&&(this.desktopFootnotes=new n(this.utility),this.mobileFootnote=new s(this.utility),this.setScreenMode(),this.handleResize())},i.prototype.hasFootnotes=function(){return window.document.getElementsByClassName("footnote").length>0},i.prototype.setScreenMode=function(){this.screenWiderThanBreakpoint("md")?(this.mobileFootnote.breakdown(),this.desktopFootnotes.setup(this.options.nudge)):(this.desktopFootnotes.breakdown(),this.mobileFootnote.setup())},i.prototype.handleResize=function(){var t,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){e.setScreenMode()},e.options.resizeDebounce)})},i.prototype.screenWiderThanBreakpoint=function(t){var e=320,o=480,i=768,n=992,s=this.getMagicCSSWidth();return"lg"===t&&s>=n||("md"===t&&s>=i||("sm"===t&&s>=o||"xs"===t&&s>=e))},i.prototype.getMagicCSSWidth=function(){var t=document.getElementsByTagName("style")[0],e=window.getComputedStyle(t,null).getPropertyValue("width");return parseInt(e)},n.prototype.setup=function(t){this.setContainerCssDesktop(),this.setFootnoteCssDesktop(),this.position(t),this.sympatheticHighlight()},n.prototype.sympatheticHighlight=function(){for(var t,e,o,i=document.getElementsByClassName("footnote"),n=0;n<i.length;n++)t=i[n].dataset.footnoteNumber,e=document.getElementById("footLink--upper_"+t),o=document.getElementById("footLink--lower_"+t),function(t,e,o){t.addEventListener("mouseenter",function(){o.classList.add("sympatheticHover--lower")}),e.addEventListener("mouseenter",function(){t.classList.add("sympatheticHover--upper")}),t.addEventListener("mouseleave",function(){o.classList.remove("sympatheticHover--lower")}),e.addEventListener("mouseleave",function(){t.classList.remove("sympatheticHover--upper")})}(e,o,i[n])},n.prototype.setContainerCssDesktop=function(){for(var t=window.document.getElementsByClassName("story-container"),e=0;e<t.length;e++)t[e].classList.remove("container-small"),t[e].classList.add("container-medium"),t[e].classList.add("flex")},n.prototype.setFootnoteCssDesktop=function(){for(var t=window.document.getElementsByClassName("footnote"),e=0;e<t.length;e++)t[e].classList.add("desktop-footnote")},n.prototype.position=function(t){for(var e,o,i=0,n=window.document.getElementById("story"),s=0;s<this.$footnotes.length;s++)$footnote=this.$footnotes[s],this.getFootnoteTop(n,$footnote),e=this.getFootnoteHeight($footnote),o=this.getFootnoteTop(n,$footnote),o>i?($footnote.style.top=o+"px",i=o+e):($footnote.style.top=i+"px",i+=e)},n.prototype.getFootnoteTop=function(t,e){var o=this.getUpperFootnoteOffset(e),i=this.getStoryOffset(t),n=this.getStoryMargin(t);return Math.abs(o-i)+n-7},n.prototype.getStoryMargin=function(t){return parseInt(window.getComputedStyle(t).marginTop)},n.prototype.getFootnoteHeight=function(t){return t.getBoundingClientRect().height},n.prototype.getUpperFootnoteOffset=function(t){var e=this.getUpperFootnote(t);return e.getBoundingClientRect().top},n.prototype.getStoryOffset=function(t){return t.getBoundingClientRect().top},n.prototype.getUpperFootnote=function(t){var e=t.dataset.footnoteNumber;return window.document.getElementById("footLink--upper_"+e)},n.prototype.breakdown=function(){for(var t=window.document.getElementsByClassName("story-container"),e=0;e<t.length;e++)t[e].classList.add("container-small"),t[e].classList.remove("container-medium"),t[e].classList.remove("flex");var o=window.document.getElementsByClassName("footnote");for(e=0;e<o.lenth;e++)o[e].classList.remove("desktop-footnote")},s.prototype.Init=function(){this.$body=window.document.body,this.$window=window,this.$footLinkUpper=window.document.getElementsByClassName("footLink--upper"),this.$footnotes=window.document.getElementsByClassName("footnotes"),this.$mainContainer=window.document.getElementsByClassName("main-container"),this.bindMobileFootnoteClickHandler=this.mobileFootnoteClickHandler.bind(this),this.currentFootnote=null,this.build()},s.prototype.setup=function(){this.setContainerCssMobile(),this.hideFootnotes(),this.handleFootlinkClicks()},s.prototype.setContainerCssMobile=function(){for(var t=window.document.getElementsByClassName("story-container"),e=0;e<t.length;e++)t[e].classList.remove("container-medium"),t[e].classList.remove("flex"),t[e].classList.add("container-small")},s.prototype.build=function(){this.$mobileFootnote=window.document.createElement("div"),this.$mobileFootnote.id="mobile-footnote",this.$mobileFootnote.className="mobile-footnote-slidedown",this.$mobileFootnoteCloseButton=window.document.createElement("span"),this.$mobileFootnoteCloseButton.id="close",this.$mobileFootnoteCloseButton.className="icon-cancel-1",this.$mobileFootnoteContent=window.document.createElement("p"),this.$mobileFootnoteContent.id="content",this.$scrollDownIndicator=window.document.createElement("div"),this.$scrollDownIndicator.id="scroll-down-indicator",this.$scrollDownIndicator.className="icon-down-open",this.$mobileFootnote.appendChild(this.$mobileFootnoteContent),this.$mobileFootnote.appendChild(this.$mobileFootnoteCloseButton),this.$body.appendChild(this.$mobileFootnote),this.$body.appendChild(this.$scrollDownIndicator)},s.prototype.breakdown=function(){this.closeFootnote(),this.disableClicks(),this.showFootnotes()},s.prototype.disableClicks=function(){this.$body.removeEventListener("click",this.bindMobileFootnoteClickHandler)},s.prototype.hideFootnotes=function(){for(var t=0;t<this.$footnotes.length;t++)this.$footnotes[t].style.display="none"},s.prototype.showFootnotes=function(){for(var t=0;t<this.$footnotes.length;t++)this.$footnotes[t].style.display="inherit"},s.prototype.open=function(t){this.insertContent(t),this.$mobileFootnote.classList.add("open")},s.prototype.insertContent=function(t){this.$mobileFootnoteContent.innerHTML="",this.$mobileFootnote.setAttribute("data-footnote-number",t);var e=window.document.getElementById("footnote_"+t),o=e.querySelectorAll(".footnoteContent")[0].innerHTML;this.$mobileFootnoteContent.innerHTML="[ "+t+" ] "+o},s.prototype.lockWindow=function(){var t=this;this.$mobileFootnote.scrollHeight;this.killScroll(),"touchstart mousewheel".split(" ").forEach(function(e){t.$mobileFootnote.addEventListener(e,t.lockedScrollHandler.bind(t),!1)})},s.prototype.lockedScrollHandler=function(){this.footnoteScrolls()&&(this.enableScroll(),this.preventOverscroll(this.$mobileFootnote))},s.prototype.footnoteScrolls=function(){var t=this.$mobileFootnote.scrollHeight,e=this.$mobileFootnote.clientHeight;return t>e},s.prototype.handleScrollIndicator=function(){var t=this;this.footnoteScrolls()?(this.$mobileFootnote.classList.add("scrolls"),"scroll touchmove".split(" ").forEach(function(e){t.$mobileFootnote.addEventListener(e,t.handleFootnoteScroll.bind(t),!1)})):(this.$mobileFootnote.classList.remove("scrolls"),t.$scrollDownIndicator.style.display="none")},s.prototype.handleFootnoteScroll=function(){var t=this.$mobileFootnote.scrollTop;t<=20&&this.$mobileFootnote.classList.contains("open")?this.$scrollDownIndicator.style.display="inherit":this.$scrollDownIndicator.style.display="none"},s.prototype.preventOverscroll=function(t){var e=t.scrollTop;t.scrollHeight,t.getBoundingClientRect().bottom;if(0===e&&(t.scrollTop=1),t.scrollTop===t.scrollHeight-t.offsetHeight){var o=e-1;t.scrollTop=o}},s.prototype.killScroll=function(){event.preventDefault(),window.document.body.classList.add("disable-touch")},s.prototype.enableScroll=function(t,e){window.document.body.classList.remove("disable-touch")},s.prototype.closeFootnote=function(){this.currentFootnote=null,this.$mobileFootnote.classList.remove("open"),this.$scrollDownIndicator.style.display="none",this.enableScroll()},s.prototype.alreadyOpen=function(){return this.$mobileFootnote.classList.contains("open")},s.prototype.handleFootlinkClicks=function(){this.$body.addEventListener("click",this.bindMobileFootnoteClickHandler),this.$body.addEventListener("touchend",this.bindMobileFootnoteClickHandler)},s.prototype.mobileFootnoteClickHandler=function(t){t.stopImmediatePropagation();var e=t.target.dataset.footnoteNumber;e&&e!==this.currentFootnote&&(this.currentFootnote=e,this.alreadyOpen()?(this.insertContent(e),this.handleScrollIndicator(),this.$mobileFootnote.scrollTop=0):(this.open(e),this.lockWindow(),this.handleScrollIndicator())),this.alreadyOpen()&&(t.preventDefault(),this.isOrHasParentOfId(t.target,"close")?this.closeFootnote():this.isOrHasParentOfId(t.target,"mobile-footnote")||this.isOrHasParentOfClass(t.target,"footLink--upper")||this.closeFootnote())},s.prototype.isOrHasParentOfId=function(t,e){return t.id===e||t.parentNode&&this.isOrHasParentOfId(t.parentNode,e)},s.prototype.isOrHasParentOfClass=function(t,e){return void 0!==t.className&&t.className.split(" ").indexOf(e)>=0||t.parentNode&&this.isOrHasParentOfClass(t.parentNode,e)},new i(t,e,this.utility),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){return t.lazyLoadCSS=function(t,e,o){function i(t){t<e.maxChecks&&window.setTimeout(function(){var n=window.getComputedStyle(s,null).getPropertyValue(e.canaryCSSProperty);n!==r?o():i(++t)},1)}var n={canaryCSSElement:"body",canaryCSSProperty:"max-width",maxChecks:1e4};this.callback=o,e=this.utility.zui_parseOptions(n,e);var s=document.getElementById(e.canaryCSSElement);s||(s=document.getElementsByTagName(e.canaryCSSElement)[0]);var r,l=document.createElement("link");l.href=t,l.rel="stylesheet",l.type="text/css",l.media="only x",l.onload=function(){"function"==typeof o&&s&&(r=window.getComputedStyle(s,null).getPropertyValue(e.canaryCSSProperty),i(0)),l.media="all"},document.getElementsByTagName("head")[0].appendChild(l)},t}(ZnetUI),ZnetUI=function(t){return t.lazyLoadImages=function(t,e,o){function i(t,e){this.lazyClass=t,this.options=e,this.init()}function n(t){this.$image=t,this.init()}var s={buffer:1e3};e=this.utility.zui_parseOptions(s,e),i.prototype.init=function(){this.lazyImages=this.gatherImages(),this.loadedImages=[],this.watchFunctionRef=this.checkImagePositions.bind(this),this.checkImagePositions(),this.watchScroll()},i.prototype.gatherImages=function(){for(var t=window.document.getElementsByClassName(this.lazyClass),e=[],o=0;o<t.length;o++)e.push(new n(t[o]));return e},i.prototype.watchScroll=function(){window.addEventListener("scroll",this.watchFunctionRef)},i.prototype.ignoreScroll=function(){window.removeEventListener("scroll",this.watchFunctionRef)},i.prototype.checkImagePositions=function(){for(var t=0;t<this.lazyImages.length;t++)this.isVisible(this.lazyImages[t])&&this.notAlreadyLoaded(this.lazyImages[t])&&(this.loadImage(this.lazyImages[t]),this.setImageLoaded(this.lazyImages[t]));this.outOfImages()&&this.ignoreScroll()},i.prototype.notAlreadyLoaded=function(t){for(var e=0;e<this.lazyImages.length;e++)if(this.loadedImages[e]===t)return!1;return!0},i.prototype.outOfImages=function(){return this.lazyImages.length===this.loadedImages.length},i.prototype.setImageLoaded=function(t){this.loadedImages.push(t)},i.prototype.isVisible=function(t){var e=window.pageYOffset+window.innerHeight+this.options.buffer;return t.yPositionInDocument<e},i.prototype.loadImage=function(t){img=new Image,img.src=t.path,img.onload=function(){t.$image.style.backgroundImage="url("+t.path+")",t.$image.style.visibility="visible"}},n.prototype.init=function(){this.yPositionInDocument=this.setYPositionInDocument(),this.path=this.setPath()},n.prototype.setYPositionInDocument=function(){return this.$image.getBoundingClientRect().top},n.prototype.setPath=function(){return this.$image.dataset.background},new i(t,e),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){return t.nav=function(t,e,o){function i(t,e,o){this.utility=o,this.options=e,this.$navBarElement=window.document.getElementById(t),this.setCoverPageHome(),this.setTabNav(),this.toggleNavbar(),this.handleScroll()}var n={minScrollDown:window.innerHeight};e=this.utility.zui_parseOptions(n,e),i.prototype.setTabNav=function(){this.options.tabNav&&(this.$tabNav=window.document.getElementById(this.options.tabNav),this.handleTabNavFocus())},i.prototype.setCoverPageHome=function(){this.options.coverPageHome&&(this.$coverPageHome=window.document.getElementById(this.options.coverPageHome))},i.prototype.toggleNavbar=function(){pageYOffset>this.options.minScrollDown?(this.$coverPageHome&&this.hideCoverPageHome(),this.showNav()):(this.hideNav(),this.$coverPageHome&&this.showCoverPageHome())},i.prototype.hideCoverPageHome=function(){this.$coverPageHome.classList.remove("nav-show"),this.$coverPageHome.classList.add("nav-hide")},i.prototype.showCoverPageHome=function(){this.$coverPageHome.classList.remove("nav-hide"),this.$coverPageHome.classList.add("nav-show")},i.prototype.showNav=function(){this.$navBarElement.classList.remove("nav-hide"),this.$navBarElement.classList.add("nav-show")},i.prototype.hideNav=function(){this.$navBarElement.classList.remove("nav-show"),this.$navBarElement.classList.add("nav-hide")},i.prototype.handleScroll=function(){var t=this;window.addEventListener("scroll",function(){t.toggleNavbar()},{passive:!0})},i.prototype.handleTabNavFocus=function(){var t=this;this.$tabNav.style.display="inline",this.$tabNav.addEventListener("focus",function(){t.$tabNav.style.clip="initial"}),this.$tabNav.addEventListener("blur",function(){t.$tabNav.style.clip="rect(0 0 0 0)"})},new i(t,e,this.utility),this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){return t.search=function(t,e){function o(t,e){this.options=t,this.callback=e,this.init(),this.setup()}var i={imageURL:""};t=this.utility.zui_parseOptions(i,t),o.prototype.init=function(){this.searchConfig={fields:{title:{boost:1},content:{boost:1},excerpt:{boost:1}},bool:"OR"},this.storyIdx=new elasticlunr.Index,this.blogIdx=new elasticlunr.Index,this.storySearchResults=[],this.blogSearchResults=[],this.previousSearchString="",this.$storyResults=document.getElementById("story-results"),this.$blogResults=document.getElementById("blog-results"),this.$formInput=document.getElementById("search-input"),this.$noResults=document.getElementById("no-results"),this.$clearButton=document.getElementById("clear-button"),this.oldSearchString="",this.newSearchString=""},o.prototype.setup=function(){var t=this;this.fetchJSON("../lunr-elastic-search-stories.json",function(e){t.storyIdx=elasticlunr.Index.load(JSON.parse(e)),t.fetchJSON("../lunr-elastic-search-blog.json",function(e){t.blogIdx=elasticlunr.Index.load(JSON.parse(e)),t.backButtonCheck(),t.monitorFormInput();var o=t.getUrlVar("s",window.location.href);null!==o&&(t.doSearch(o),t.$formInput.val(o))})}),this.clearSearch()},o.prototype.fetchJSON=function(t,e){var o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open("GET",t,!0),o.onreadystatechange=function(){4==o.readyState&&"200"==o.status&&e(o.responseText)},o.send(null)},o.prototype.clearSearch=function(){var t=this;this.$clearButton.addEventListener("click",function(){t.$formInput.value="",t.newSearchString="",t.tidyUp(),t.toggleClearButton()})},o.prototype.monitorFormInput=function(){var t=this;this.$formInput.addEventListener("input",function(e){t.oldSearchString=t.newSearchString,t.newSearchString=t.$formInput.value;var o=t.setDelay();t.delay(function(){t.toggleClearButton(),t.tidyUp()},o)})},o.prototype.toggleClearButton=function(){this.newSearchString?this.$clearButton.style.display="inline":this.$clearButton.style.display="none"},o.prototype.tidyUp=function(){this.searchStringLongEnough()?(this.doSearch(),0===this.storySearchResults.length&&0===this.blogSearchResults.length?(this.setNoResults(),this.clearBlogResults(),this.clearStoryResults()):(this.clearNoResults(),this.buildStoryResults(),this.buildBlogResults())):(this.clearNoResults(),this.clearBlogResults(),this.clearStoryResults())},o.prototype.setDelay=function(){return this.newSearchString===this.oldSearchString.slice(0,-1)?750:250},o.prototype.doSearch=function(){this.storySearchResults=this.storyIdx.search(this.newSearchString,this.searchConfig),this.blogSearchResults=this.blogIdx.search(this.newSearchString,this.searchConfig)},o.prototype.searchStringLongEnough=function(){return this.newSearchString.length>3},o.prototype.setNoResults=function(){this.$noResults.innerHTML="Your search returned no results..."},o.prototype.clearNoResults=function(){this.$noResults.innerHTML=""},o.prototype.clearStoryResults=function(){this.previousStorySearchResults=null,this.$storyResults.innerHTML=""},o.prototype.clearBlogResults=function(){this.previousBlogSearchResults=null,this.$blogResults.innerHTML=""},o.prototype.delay=function(){var t=0;return function(e,o){clearTimeout(t),t=setTimeout(e,o)}}(),o.prototype.backButtonCheck=function(){var t=this.$formInput.value;this.doSearch(t)},o.prototype.buildStoryResults=function(){var t,e,o,i,n,s,r;if(this.clearStoryResults(),this.storySearchResults.length>0){s=this.createElement("h1","search-header","story results"),this.$storyResults.appendChild(s),r=this.createElement("ol",["search-results"]),this.$storyResults.appendChild(r);for(var l=0;l<this.storySearchResults.length;l++){n=this.storyIdx.documentStore.docs[this.storySearchResults[l].ref].banner,o=this.options.imageURL+"images/thumbnail/"+n,t=this.storyIdx.documentStore.docs[this.storySearchResults[l].ref].title,e=this.storyIdx.documentStore.docs[this.storySearchResults[l].ref].url,i=this.storyIdx.documentStore.docs[this.storySearchResults[l].ref].excerpt;var a='<li class="story-quaternary"><article class="story-summary summary-small" data-slug="'+t+'"><a href="'+e+'"><div class="cover-wrapper"><div class="cover-image" style="background-image: url('+o+' )"><h3 class="story-title">'+t+'</h3></div></div><div class="info-wrapper"><p class="excerpt">'+i+"</p></div></a></article></li>";r.innerHTML=r.innerHTML+a}}"function"==typeof this.callback&&this.callback()},o.prototype.createElement=function(t,e,o){o||(o="");var i=document.createElement(t);return i.className=e,i.innerHTML=o,i},o.prototype.buildBlogResults=function(t){var e,o,i,n;if(this.clearBlogResults(),this.blogSearchResults.length>0){blogResultsHeader=this.createElement("h1","search-header","blog results"),this.$blogResults.appendChild(blogResultsHeader),n=this.createElement("ol",["search-results"]),this.$blogResults.appendChild(n);for(var s=0;s<this.blogSearchResults.length;s++){o=this.blogIdx.documentStore.docs[this.blogSearchResults[s].ref].url,e=this.blogIdx.documentStore.docs[this.blogSearchResults[s].ref].title,i=this.blogIdx.documentStore.docs[this.blogSearchResults[s].ref].excerpt;var r='<li class="story-quaternary"><article class="story-summary summary-small" data-slug="'+e+'"><a href="'+o+'"><div class="info-wrapper"><h3 class="title">'+e+'</h3><p class="excerpt">'+i+"</p></div></a></article></li>";n.innerHTML=n.innerHTML+r}}},o.prototype.getUrlVar=function(t,e){e||(e=location.href),t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o="[\\?&]"+t+"=([^&#]*)",i=new RegExp(o),n=i.exec(e);return null===n?null:n[1]},new o(t,e)},t}(ZnetUI),ZnetUI=function(t){return t.titleFill=function(t,e,o){function i(t,e){this.$title=t,this.options=e,this.$titleContainer=this.$title.parentElement,this.titleText=this.$title.textContent,this.isVisible(this.$titleContainer)&&this.init()}var n={paddingX:100,yNudgeDown:0,titleAlignment:"center",googleVHFix:"false"};e=this.utility.zui_parseOptions(n,e),i.prototype.init=function(){this.options.googleVHFix===!0&&(this.$titleContainer.style.height=window.innerHeight+"px"),this.$title.style.position="absolute",this.$title.style.display="inline",this.$title.style.textAlign="center",this.titleInitialFontSize=parseInt(window.getComputedStyle(this.$title).getPropertyValue("font-size")),this.containerHeight=this.$titleContainer.clientHeight,this.containerWidth=this.$titleContainer.clientWidth,this.setFontSize(),this.centerTitle(),this.resizeCheck(),this.done()},i.prototype.done=function(){this.$title.style.opacity=1},i.prototype.isVisible=function(t){return t.clientWidth>0&&t.clientHeight>0},i.prototype.setFontSize=function(){var t=this.getXMaxSize();this.setRealisticSize(t,0)},i.prototype.getXMaxSize=function(){var t,e,o;return t=this.titleText.split(" ").join("<br>"),this.$title.innerHTML="",this.$title.innerHTML=t,e=this.containerWidth-2*this.options.paddingX,o=e/this.$title.offsetWidth,this.$title.innerHTML="",this.$title.innerHTML=this.titleText,Math.floor(this.titleInitialFontSize*o)},i.prototype.setRealisticSize=function(t,e){this.$title.style.fontSize=t+"px";var o=this.$title.offsetHeight,i=(this.containerHeight-this.options.yNudgeDown)/o;if(i<1){var n=Math.floor(t*i),s=(t-n)/2+n;e<20&&(e++,this.setRealisticSize(s,e))}},i.prototype.centerTitle=function(){var t=this.$title.offsetHeight,e=this.$title.offsetWidth,o=(this.containerHeight-t)/2;(this.containerWidth-e)/2;this.$title.style.top=o+"px"},i.prototype.resizeCheck=function(){var t,e=this;window.addEventListener("resize",function(){t&&window.clearTimeout(t),t=window.setTimeout(function(){e.$titleContainer.offsetWidth!==e.containerWidth&&e.init()},200)})},$titles=window.document.getElementsByClassName(t);for(var s=0;s<$titles.length;s++)new i($titles[s],e);this.utility.zui_handleCallback(o)},t}(ZnetUI),ZnetUI=function(t){return t.TOC=function(t,e){function o(t){this.options=t,this.$document=window.document,this.location=window.location.href,this.history=window.history,this.init()}var i={navHeight:40,TOCClass:"toc-link"};t=this.utility.zui_parseOptions(i,t),o.prototype.init=function(){this.HISTORY_SUPPORT=!(!history||!history.pushState),this.previousHash=window.location.href,this.watchForClicks(),this.watchForHashChange()},o.prototype.isTOCCLass=function(t){return t.classList.contains(this.options.TOCClass)},o.prototype.watchForHashChange=function(){window.addEventListener("hashchange",this.hashChangeMonitor.bind(this))},o.prototype.watchForClicks=function(){this.$document.body.addEventListener("click",this.clickMonitor.bind(this))},o.prototype.hashChangeMonitor=function(){var t=this.getAnchor(window.location),e=this.getAnchorTarget(t);e?this.doScrollTo(e):this.scrollToTop()},o.prototype.clickMonitor=function(t){var e,o,i=t.target;this.isTOCCLass(i)&&this.isLink(i)&&(o=this.getAnchor(i),e=this.getAnchorTarget(o),e&&(t.preventDefault(),this.doScrollTo(e),this.pushToHistory(o)))},o.prototype.scrollToTop=function(){window.scrollTo(0,0)},o.prototype.doScrollTo=function(t){var e=t.getBoundingClientRect(),o=window.pageYOffset+e.top-this.options.navHeight;window.scrollTo(window.pageXOffset,o)},o.prototype.isLink=function(t){return"A"===t.tagName},o.prototype.getAnchor=function(t){return t.href.split("#")[1]},o.prototype.getAnchorTarget=function(t){return this.$document.getElementById(t)},o.prototype.pushToHistory=function(t){var e=window.location.href.split("#")[0]+"#"+t;this.HISTORY_SUPPORT&&e!=this.previousHash&&(this.previousHash=e,history.pushState({},this.$document.title,e))},new o(t),this.utility.zui_handleCallback(e)},t}(ZnetUI);