/*! For license information please see apps.js.LICENSE.txt */
jQuery(document).ready((function(e){var t={speed:500,timeout:e(".homeslider-container").data("interval"),nav:!0,random:!1,pause:e(".homeslider-container").data("pause"),maxwidth:"",namespace:"homeslider",before:function(){},after:function(){}};e(".rslides").responsiveSlides(t)})),$(document).ready((function(){var e=$("#search_widget"),t=e.find("input[type=text]"),a=e.attr("data-search-controller-url");$.widget("prestashop.psBlockSearchAutocomplete",$.ui.autocomplete,{_renderItem:function(e,t){return $("<li>").append($("<a>").append($("<span>").html(t.category_name).addClass("category")).append($("<span>").html(" > ").addClass("separator")).append($("<span>").html(t.name).addClass("product"))).appendTo(e)}}),t.psBlockSearchAutocomplete({source:function(e,t){$.post(a,{s:e.term,resultsPerPage:10},null,"json").then((function(e){t(e.products)})).fail(t)},select:function(e,t){var a=t.item.url;window.location.href=a}})})),$(document).ready((function(){prestashop.blockcart=prestashop.blockcart||{};var e=prestashop.blockcart.showModal||function(e){var t=$("body");t.append(e),t.one("click","#blockcart-modal",(function(e){"blockcart-modal"===e.target.id&&$(e.target).remove()}))};$(document).ready((function(){prestashop.on("updateCart",(function(t){var a=$(".blockcart").data("refresh-url"),n={};t&&t.reason&&(n={id_product_attribute:t.reason.idProductAttribute,id_product:t.reason.idProduct,action:t.reason.linkAction}),$.post(a,n).then((function(t){$(".blockcart").replaceWith($(t.preview).find(".blockcart")),t.modal&&e(t.modal)})).fail((function(e){prestashop.emit("handleError",{eventType:"updateShoppingCart",resp:e})}))}))}))})),$("#submitComment").bind("click",(function(e){e.preventDefault();var t={action:"postcomment",id_post:$("input[name='id_post']").val(),comment_parent:$("input[name='comment_parent']").val(),name:$("input[name='name']").val(),website:$("input[name='website']").val(),smartblogcaptcha:$("input[name='smartblogcaptcha']").val(),comment:$("textarea[name='comment']").val(),mail:$("input[name='mail']").val()};$.ajax({url:baseDir+"modules/smartblog/ajax.php",data:t,dataType:"json",beforeSend:function(){$(".success, .warning, .error").remove(),$("#submitComment").attr("disabled",!0),$("#commentInput").before('<div class="attention"><img src="http://321cart.com/sellya/catalog/view/theme/default/image/loading.gif" alt="" />Please wait!</div>')},complete:function(){$("#submitComment").attr("disabled",!1),$(".attention").remove()},success:function(e){e.error&&($("#commentInput").before('<div class="warning">'+e.error.common+"</div>"),e.error.name&&$(".inputName").after('<span class="error">'+e.error.name+"</span>"),e.error.mail&&$(".inputMail").after('<span class="error">'+e.error.mail+"</span>"),e.error.comment&&$(".inputContent").after('<span class="error">'+e.error.comment+"</span>"),e.error.captcha&&$(".smartblogcaptcha").after('<span class="error">'+e.error.captcha+"</span>")),e.success&&($("input[name='name']").val(""),$("input[name='mail']").val(""),$("input[name='website']").val(""),$("textarea[name='comment']").val(""),$("input[name='smartblogcaptcha']").val(""),$("#commentInput").before('<div class="success">'+e.success+"</div>"),setTimeout((function(){$(".success").fadeOut(300).delay(450).remove()}),5e3))}})})),(()=>{var e=prestashop.static_token;function t(){$(".addToWishlist").each((function(){-1!=$.inArray(parseInt($(this).prop("rel")),wishlistProductsIds)?$(this).addClass("checked"):$(this).removeClass("checked")}))}prestashop.customer.is_logged,$(document).ready((function(){function a(){$("#wishlist_button").popover({html:!0,content:function(){return $("#popover-content").html()}})}t(),$(document).on("change","select[name=wishlists]",(function(){var t,a;t="wishlist_block_list",a=$(this).val(),$.ajax({type:"GET",url:baseDir+"modules/blockwishlist/cart.php?rand="+(new Date).getTime(),headers:{"cache-control":"no-cache"},async:!0,data:"id_wishlist="+a+"&token="+e,cache:!1,success:function(e){$("#"+t).slideUp("normal"),document.getElementById(t).innerHTML=e,$("#"+t).slideDown("normal")}})})),prestashop.on("updatedProduct",(function(e){a()})),a(),$(".wishlist").each((function(){var e=$(this);$(this).children(".wishlist_button_list").popover({html:!0,content:function(){return e.children(".popover-content").html()}})}))}))})(),function(e){e.fn.textareaCount=function(t,a){t=e.extend({maxCharacterSize:-1,originalStyle:"originalTextareaInfo",warningStyle:"warningTextareaInfo",warningNumber:20,displayFormat:"#input characters | #words words"},t);var n=e(this);e("<div class='charleft'>&nbsp;</div>").insertAfter(n);var r={width:n.width()},o=function(e){return e.next(".charleft")}(n);o.addClass(t.originalStyle),o.css(r);var i=0,s=t.maxCharacterSize,c=0,l=0;function u(){return o.html(function(){var e,a=n.val(),r=a.length;if(t.maxCharacterSize>0){r>=t.maxCharacterSize&&(a=a.substring(0,t.maxCharacterSize));var u=m(a),f=t.maxCharacterSize-u;if(p()||(f=t.maxCharacterSize),r>f){var v=this.scrollTop;n.val(a.substring(0,f)),this.scrollTop=v}o.removeClass(t.warningStyle),f-r<=t.warningNumber&&o.addClass(t.warningStyle),i=n.val().length+u,p()||(i=n.val().length),l=h(d(n.val())),c=s-i}else u=m(a),i=n.val().length+u,p()||(i=n.val().length),l=h(d(n.val()));return e=(e=(e=t.displayFormat).replace("#input",i)).replace("#words",l),s>0&&(e=(e=e.replace("#max",s)).replace("#left",c)),e}()),void 0!==a&&a.call(this,{input:i,max:s,left:c,words:l}),!0}function p(){return-1!=navigator.appVersion.toLowerCase().indexOf("win")}function m(e){for(var t=0,a=0;a<e.length;a++)"\n"==e.charAt(a)&&t++;return t}function d(e){var t=(e+" ").replace(/^[^A-Za-z0-9]+/gi,""),a=rExp=/[^A-Za-z0-9]+/gi;return t.replace(a," ").split(" ")}function h(e){return e.length-1}n.bind("keyup",(function(e){u()})).bind("mouseover",(function(e){setTimeout((function(){u()}),10)})).bind("paste",(function(e){setTimeout((function(){u()}),10)}))}}(jQuery);