const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const whatsappRoutes = require('./routes/whatsappRoutes');
const premiumTaskRoutes = require('./routes/premiumTaskRoutes');
const productRoutes = require('./routes/productRoutes');
const dailyTaskRoutes = require('./routes/dailyTaskRoutes');
const taskRoutes = require('./routes/taskRoutes');
const withdrawRoutes = require('./routes/withdrawRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/whatsapp', whatsappRoutes);
app.use('/api/premiumTask', premiumTaskRoutes);
app.use('/api/product', productRoutes);
app.use('/api/dailyTask', dailyTaskRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/withdraw', withdrawRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));