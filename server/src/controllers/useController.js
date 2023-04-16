const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.get_user = async (req, res) => {
  const test = await prisma.user.findMany();
  res.send(test);
};

exports.post_user = (req, res) => {
  res.send("msg from  POST useController");
};
