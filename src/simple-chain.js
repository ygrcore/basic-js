const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  val: '',

  getLength: function() {
    let v = this.val
    let a = v.split('')
    let openBrackets = Array.from(a.entries()).filter(i => i[1] == "(");
    return openBrackets.length
  },
  addLink: function(value) {
    if (value === undefined) {
      value = '';
    }
    if (this.val === '') {
      this.val += '( ' + value + ' )';
    } else if (this.val) {
      this.val += '~~( ' + value + ' )';
    }
    return this
  },
  removeLink: function(position) {
    // try {
      // if (position <= 0) {
      //   const error = new Error('You can\'t remove incorrect link!')
      //   throw error
      //   // return this
      // }
      let v = this.val
      let a = v.split('')
      let openBrackets = [];    //Array.from(a.entries()).filter(i => i[1] == "(");
      let closeBrackets = [];  // Array.from(a.entries()).filter(i => i[1] == ")");
      for (let i=0;i<a.length;i++) {
        if ( a[i] == '(' && a[i+1] == ' '){
            openBrackets.push( i );
        }
      }
      for (let i=0;i<a.length;i++) {
        if ( a[i] == ')' && a[i-1] == ' '){
            closeBrackets.push( i );
        }
      }
      if (position <= 0 || position > openBrackets.length || !Number.isInteger(position)) {
        const error = new Error('You can\'t remove incorrect link!')
        throw error
        // return this
      }
      let start = openBrackets[position-1];
      let end = closeBrackets[position-1];
  //     console.log([a.length, end])
  //     console.log(closeBrackets)
      if (a.length > end) {
        a.splice(start, (end + 1 - start))
        if (start > 0) {
          a.splice(start-2, 2)
        } else if (start < 1) {
          a.splice(start, 2)
        }
        this.val = a.join('')
      } else {
        a.splice(start, (end - start))
        this.val = a.join('')
      }
      return this
    // } catch(e) {
    //   e = new Error('You can\'t remove incorrect link!');
    //   throw e
    // }

  },
  reverseChain: function() {
    if (!this.val) {
      return this
    }
    let v = this.val
    let a = v.split('')

    let results = [];
    for (let i=0;i<a.length;i++) {
        if ( a[i] == '(' && a[i+1] == ' '){
            results.push( i );
        }
    }
    let bresults = [];
    for (let i=0;i<a.length;i++) {
        if ( a[i] == ')' && a[i-1] == ' '){
            bresults.push( i );
        }
    }

    let ur = []
    for (let i=0;i<results.length;i++) {
      let part = a.slice(results[i], bresults[i]+1)
      ur.push(part.join(''));
    }

    this.val = ur.reverse().join('~~')
    return this
  },
  finishChain: function() {
    let res = this.val;
    this.val = ''
    return res
  }
  // getLength() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // },
  // addLink(/* value */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // },
  // removeLink(/* position */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // },
  // reverseChain() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // },
  // finishChain() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
};
module.exports = {
  chainMaker
};
