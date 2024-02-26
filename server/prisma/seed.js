const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 20; i++) {
    const location = await prisma.location.create({
      data: {
        name: `test${i}`,
        description: `description${i}`,
        category: `${i % 2 === 0 ? 'A' : 'B'}`,
        rating: Math.floor(Math.random() * 10),
        reviewCount: Math.floor(Math.random() * 10),
        latitude: `${Math.floor(Math.random() * 100)}`,
        longitude: `${Math.floor(Math.random() * 100)}`
      }
    })

    console.log(`location ${i} created`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })