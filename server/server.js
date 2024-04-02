require('dotenv').config();
const { default: mongoose } = require('mongoose');

const express = require('express');

const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 7001;
const connectDB = require('./config/connectDB');
const corsOption = require('./config/corsOption');
const verifyJWT = require('./middleware/verifyJWT');

connectDB();

app.use(cors(corsOption));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('home page');
});

app.use('/api/admin/users', verifyJWT, require('./routes/users/usersAdminRoutes'));
app.use('/api/admin/forums', verifyJWT, require('./routes/forums/forumsAdminRoutes'));
app.use('/api/admin/threads', verifyJWT, require('./routes/threads/threadsAdminRoutes'));
app.use('/api/admin/posts', verifyJWT, require('./routes/posts/postsAdminRoutes'));
app.use('/api/auth', require('./routes/auth/authRoutes'));
app.use('/api/forums', verifyJWT, require('./routes/forums/forumsAdvensedRoutes'));
app.use('/api/uploads', verifyJWT, require('./routes/uploadsFiles/uploadsRoutes'));

mongoose.connection.once('open', () => {
  console.log('connected to DB successfully');
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log('error conection to DB ', err);
});
