export async function indexController(req, res, next) {
  const response = { msg: 'OK', status: 200 }
  res.render('index', response)
  next()
}