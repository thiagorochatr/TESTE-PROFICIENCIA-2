function testando(req, res) {
  const dynamicDate = new Date();

  res.json({
    date: dynamicDate.toGMTString()
  });
}

export default testando;