//logger

const logger = (req, res, next) => {
  const route = req.method;
  const url = req.url;
  const time = new Date().getTime();
  console.log(route, url, time);
  next();
};


module.exports= logger;