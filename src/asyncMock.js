const products = [ 
    { id: '1', 
    name: 'Camiseta Real Madrid', 
    price: 55000, 
    category: 'camisetas', 
    img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HF0292-RMCFMZ0075-02_500x480.jpg?v=1655974535', 
    stock: 25, 
    description:'Camiseta Oficial Local Real Madrid '}, 
    
    { id: '2', name: 'Short Real Madrid', price: 22000, category: 'shorts', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMP0092-02_500x480.jpg?v=1654202686', stock: 16, description:'Short Local Real Madrid'}, 
    { id: '3', name: 'Camiseta Real Madrid', price: 50000, category: 'camisetas', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMZ0076_UCL_3fc6fe82-f8b4-44c0-9867-1e0cf3a4bbc0_500x480.jpg?v=1676407522', stock: 10, description:'Camiseta Oficial Visitante Real Madrid '},
    { id: '4', name: 'Camiseta Real Madrid', price: 50000, category: 'camisetas', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HI1657_RMCFMZ0082-01_500x480.jpg?v=1662378043', stock: 16, description:'Camiseta Oficial Tercera Equipación'}, 
    { id: '5', name: 'Short Real Madrid', price: 22000, category: 'shorts', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMP0094-06_500x480.jpg?v=1662378063', stock: 10, description:'Short Tercera Equipación'},
    { id: '6', name: 'Camiseta Real Madrid', price: 55000, category: 'camisetas', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMZ0112_Laliga_500x480.jpg?v=1676404077', stock: 16, description:'Equipación Portero'}, 
    { id: '7', name: 'Buzo Real Madrid', price: 42000, category: 'buzos', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0200-03_500x480.jpg?v=1680624997', stock: 10, description:'Buzo Sakura Unisex Capucha Blanco Cruco'},
    { id: '8', name: 'Buzo Real Madrid', price: 42000, category: 'buzos', img:'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0199-03_500x480.jpg?v=1680624990', stock: 10, description:'Buzo Sakura Unisex Bordado Morado'},
  ]



export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}  

export const getProductById = (productId) => {
    return new Promise((resolve) => {
       setTimeout(() => { 
       resolve(products.find(prod => prod.id === productId))
        }, 100) 
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))    
        }, 200);
    })
}
