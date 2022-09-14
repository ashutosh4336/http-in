import logger from '@/lib/logger';
global.logger = logger;

import nc from 'next-connect';
import mDB from '@/middlewares/mDB';

export default function commonHandler() {
  return nc({
    attachParams: true,
    onNoMatch: (req, res) => {
      res.status(404).json({ success: false, message: 'Page is not found' });
    },
  }).use(mDB);
}

// var accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), { flags: 'a' })
// console.log(__dirname)

// middleware.use(database);
// .use(upload)
// .use(morgan('combined', {
//   skip: function (req, res) { return res.statusCode < 400 },
//   stream: accessLogStream
// }));

// export default middleware;
