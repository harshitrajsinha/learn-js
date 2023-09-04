const createCounter = function(n) {

  function counter(){
      return n++;
  }

};

const counter = createCounter(10);
counter(10);
counter(11);