$(document).ready(function(){
    var c_time=ct(new Date());
    var hr=parseInt(c_time.split(':')[0]);
    var min=parseInt(c_time.split(':')[1]);
    var meridiem=c_time.split(':')[2];
    $('.tp-min>span').html(min<10?'0'+min:min);
    $('.tp-hr>span').html(hr);
    $('.tp-am-pm').html(meridiem);
    $('.tp-hr>.tp-up-arrow').click(function(){
      hr=parseInt($('.tp-hr>span').html());
      hr=(hr==1?12:hr-=1);
      $('.tp-hr>span').html(hr);
    });
    $('.tp-min>.tp-up-arrow').click(function(){
      min=parseInt($('.tp-min>span').html());
      min=(min==00?59:min-=1);
      $('.tp-min>span').html(min<10?'0'+min:min);
    });
    $('.tp-hr>.tp-down-arrow').click(function(){
      hr=parseInt($('.tp-hr>span').html());
      hr=(hr==12?1:hr+=1);
      $('.tp-hr>span').html(hr);
    });
    $('.tp-min>.tp-down-arrow').click(function(){
      min=parseInt($('.tp-min>span').html());
      min=(min==59?00:min+=1);
      $('.tp-min>span').html(min<10?'0'+min:min);
    });
    $('.tp-am-pm').click(function(){
      meridiem=meridiem=='AM'?'PM':'AM';
      $('.tp-am-pm').html(meridiem);
    });
    $('.tp-hr').on('wheel', function(event){
      var oEvent = event.originalEvent,
          delta  = oEvent.deltaY || oEvent.wheelDelta;
      if (delta > 0) {
        hr=(hr==12?1:hr+=1);
      } else {
        hr=(hr==1?12:hr-=1);
      }
      $('.tp-hr>span').html(hr);
    });
    $('.tp-min').on('wheel', function(event){
      var oEvent = event.originalEvent,
          delta  = oEvent.deltaY || oEvent.wheelDelta;
      if (delta > 0) {
        min=(min==59?00:min+=1);
      } else {
        min=(min==00?59:min-=1);
      }
      $('.tp-min>span').html(min<10?'0'+min:min);
    });
    $(".tp-hr>span").click(function() {
      this.focus();
      $('.tp-hr>span').html('&nbsp;');
      $(this).keyup(function(e) {
        console.log(e.keyCode);
        $('.tp-hr>span').html();
        if(/[0-9]/.test(e.key)) {
          var cVal=$('.tp-hr>span').html();
          if(cVal=='&nbsp;') {
            $('.tp-hr>span').html(e.key);
          } else {
            if(cVal==0) {
              $('.tp-hr>span').append(e.key);
              exitHr(this,$(this));
            } else if(cVal==1) {
              if(/[0-2/]/.test(e.key)) {
                $('.tp-hr>span').append(e.key); 
                exitHr(this,$(this));
              } else {
                $('.tp-hr>span').html(e.key);
              }
            } else {
              $('.tp-hr>span').html(e.key);
            }
          }
        } else if((/13|9/.test(e.keyCode))||(/:/.test(e.key))) {
          exitHr(this,$(this));
        }   
      });
    });
  
    $(".tp-min>span").click(function() {
      this.focus();
      $('.tp-min>span').html('&nbsp;');
      $(this).keyup(function(e) {
        $('.tp-min>span').html();
        if(/[0-9]/.test(e.key)) {
          var cVal=$('.tp-min>span').html();
          if((cVal=='&nbsp;')&&(/[0-5]/.test(e.key))) {
            $('.tp-min>span').html(e.key);
          } else {
            $('.tp-min>span').append(e.key);
            exitMin(this,$(this));
          }
        } else if((/13|9/.test(e.keyCode))||(/:/.test(e.key))) {
          exitMin(this,$(this));
        }     
      });
    });
    $('.tp-hr>span').blur(function(){
      var a=$('.tp-hr>span').html();
      if((a=='')||(a=='&nbsp;')) {
        var hr=parseInt(ct(new Date()).split(':')[0]);
        $('.tp-hr>span').html(hr);
      }
    });
    $('.tp-min>span').blur(function(){
      var a=$('.tp-min>span').html();
      if((a=='')||(a=='&nbsp;')) {
        var min=parseInt(ct(new Date()).split(':')[1]);
        $('.tp-min>span').html(min);
      }
    });
  });
  function exitHr(a,b) {
    a.blur();
    b.off('keyup');
    $(".tp-min>span").trigger( "click" );
  }
  function exitMin(a,b) {
    a.blur();
    b.off('keyup');
  }
  function ct(date) {
    var hrs = date.getHours();
    var mns = date.getMinutes();
    var mer = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mns = mns < 10 ? '0'+mns : mns;
    return (hrs + ':' + mns + ':' + mer);
  }