const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const menu = {
  'Clasic Burguer': 8.50,
  'Veggie Burguer': 9.00,
  'Special Burguer': 10.50,
  'Ración tequeños': 6.00,
  '4 mini arepas': 8.50,
  'Ración de papas fritas': 9.00,
  'Clasic Sandwiches': 10.50,
  'Sandwiches Carne': 6.00,
  'Sandwiches Pollo': 8.50,
  'Americana': 9.00,
  'Napolitana': 10.50,
  '4 Estaciones': 6.00,
  'Sprite': 8.50,
  'Coca-Cola': 9.00,
  'Fanta': 10.50,
  'Maracuya': 6.00,
  'Piña': 8.50,
  'Fresa': 9.00,
  'Torobayo': 10.50,
  'Heineken': 6.00,
  'Austral': 8.50,
  'Clavo oxidado': 9.00,
  'Piña Colada': 10.50,
  'Margarita': 6.00,
  
};

app.get('/price/:item', (req, res) => {
  const item = req.params.item;
  const price = menu[item];
  if (price) {
    res.json({ item, price });
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

app.listen(4000, () => console.log('API running on port 4000'));