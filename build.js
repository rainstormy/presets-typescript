import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"

const sourceDirectory = "src"
const destinationDirectory = "dist"
const reservedFilenames = ["biome.json", "package.json"]

await mkdir(destinationDirectory, { recursive: true })

const filenames = await readdir("src")
await Promise.all(filenames.filter(isJsonWithComments).map(buildFile))

function isJsonWithComments(filename) {
	return filename.endsWith(".jsonc")
}

async function buildFile(filename) {
	if (reservedFilenames.includes(filename)) {
		throw new Error(`${filename}: Reserved filename.`)
	}

	const sourcePath = `${sourceDirectory}/${filename}`
	const destinationPath = `${destinationDirectory}/${filename.slice(0, -1)}`

	try {
		const content = await readFile(sourcePath, "utf8")
		const output = minifyJson(removeJsonLineComments(content))
		await writeFile(destinationPath, output, "utf8")
	} catch (error) {
		throw new Error(`${filename}: ${error.message}.`)
	}
}

function removeJsonLineComments(jsonContent) {
	return jsonContent.replace(/(?<=["}\]0-9e],?\s|\t)\/\/.*$/gm, "")
}

function minifyJson(jsonContent) {
	return JSON.stringify(JSON.parse(jsonContent))
}
