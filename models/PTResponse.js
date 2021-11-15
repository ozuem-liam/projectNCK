class PTResponse {
    /**
       * @param {Object} data
       * @param {Object} errors
       * @param {String} message
    
       */
    constructor({ data, errors = {}, message = '' }) {
      this.data = data;
      this.errors = errors;
      this.message = message;
    }
  }
  
  module.exports = PTResponse;