exports.hellohttp = function (context, data) {
  // Use the success argument to send data back to the caller
  context.success('My GCF Function: ' + data.message);
};
