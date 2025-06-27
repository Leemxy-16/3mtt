function stopwatch(){
  let startTime,running,endtime,duration = 0 ;
  this.start = function(){
    if (running)
    throw new Error("this already running");
    running= true;
    startTime = new Date();
  };
  this.stop = function (){
    if (!running)
    throw new Error('does not start');
    running = false;
    endtime = new Date()
    const seconds = (startTime.getTime() - endtime.getTime())/1000;
    duration += seconds;
  };
  this.reset = function(){
    startTime = null;
    endtime= null;
    running= false;
    duration = 0;
  };
  Object.defineProperties(this,'duration',{get:function(){
    return duration 
  }});
  
 let timer = new stopwatch() ;

  
}
