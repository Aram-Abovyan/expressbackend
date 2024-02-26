const { PrismaClient } = require('@prisma/client')

let prisma = null

class Prisma {
  static client() {
    if (!prisma) {
      prisma = new PrismaClient()
    }

    return prisma
  }
}

module.exports = Prisma