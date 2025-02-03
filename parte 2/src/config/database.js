module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'testeteste',
  define: {
    timestamp: true, //cria duas colunas: createdAt(hora e data da criação) updatedAt(hora e data da modificação)
    underscored: true,
    underscoredAll: true,
  },
}