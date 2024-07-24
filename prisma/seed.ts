import { prisma } from "../src/lib/server/db";
import { generateHash } from "../src/lib/Hash";

await prisma.user.create({
	data: {
		email: "moritz.utcke@gmx.de",
		password: generateHash("password"),
		name: "moritz"
	}
})