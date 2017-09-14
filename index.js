const markdownTOC = require('markdown-toc')
const fs = require('fs')
const path = require('path')


const markdownFile = /\.MD$/i
const startOfAnchor = /\]\(\#/g

function generateSummary(bookPath, outputPath) {
  return fs.writeFileSync(path.resolve(outputPath), branchSummary(bookPath), { encoding: 'utf8' })
}

function branchSummary(branchPath) {
  const absolutePath = path.resolve(branchPath)
  const paths = fs.readdirSync(absolutePath).map(p => path.join(branchPath, p))
  return paths.reduce((summary, nextPath) => {
    const absoluteNextPath = path.resolve(nextPath)
    const stats = fs.statSync(absoluteNextPath)
    const isMDFile = stats.isFile() && nextPath.match(markdownFile)
    const isDirectory = stats.isDirectory()
    if (!(isMDFile || isDirectory)) {
      return summary
    }
    const summaryDelegate = isDirectory ? branchSummary : fileSummary
    return `${summary}\n${summaryDelegate(nextPath)}`
  }, '')
}

function fileSummary(filePath) {
  const absolutePath = path.resolve(filePath)
  const contents = fs.readFileSync(absolutePath, 'utf-8')
  const withPath = `](${filePath}#`
  const fileTOC = markdownTOC(contents, { maxdepth: 2 }).content
  return fileTOC.replace(startOfAnchor, withPath)
}

module.exports = {
  hooks: {
    init: function() {
      const bookPath = this.config.get('pluginsConfig.auto-summary.summarize')
      const summaryFilename = this.config.get('structure.summary')
      return generateSummary(bookPath, summaryFilename)
    }
  }
}
