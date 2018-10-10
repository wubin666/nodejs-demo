#!usr/bin/node

const EventEmitter=require('events').EventEmitter;
      util        =require('util');

function Dog(name,energy){
   var _name=name;
   var _energy=energy;

   var self=this;
   EventEmitter.call(this);
   var timer=global.serInterval(()=>{
     if(_energy>0){
       self.emit('bark');
       _energy--;
     }
     else{
       global.clearInterval(timer);
     }
   },500);
   this.name=()=>_name;
   this.energy=()=>_energy;
}

util.inherits(Dog,EventEmitter);

module.exports=Dog;
